/**
 * Storage composable
 * Handles data persistence and provides task-related statistics
 * 
 * @param {Array} initialCategories - Initial categories data
 * @returns {Object} Storage related methods and state
 */
import { ref, computed, onMounted } from 'vue';

export function useStorage(initialCategories) {
    // Deep clone initial categories to avoid mutations
    const categoriesData = ref(JSON.parse(JSON.stringify(initialCategories)));
    const lastCompletedTask = ref(null);
    
    // ========== COMPUTED PROPERTIES ==========
    /**
     * Total number of tasks across all categories
     */
    const totalTasks = computed(() => {
        return categoriesData.value.reduce((total, category) => total + category.tasks.length, 0);
    });

    /**
     * Count of completed tasks across all categories
     */
    const completedCount = computed(() => {
        return categoriesData.value.reduce((total, category) => {
            return total + category.tasks.filter(task => task.completed).length;
        }, 0);
    });

    /**
     * Progress percentage (0-100)
     */
    const progressPercentage = computed(() => {
        return Math.round((completedCount.value / totalTasks.value) * 100) || 0;
    });
    
    /**
     * Gets the number of completed tasks for a specific category
     * 
     * @param {string} type - Category type identifier
     * @returns {number} Count of completed tasks in the category
     */
    const getCategoryCompletedCount = (type) => {
        const category = categoriesData.value.find(cat => cat.type === type);
        return category ? category.tasks.filter(task => task.completed).length : 0;
    };

    /**
     * Gets the progress percentage for a specific category
     * 
     * @param {string} type - Category type identifier
     * @returns {number} Percentage of completed tasks in the category (0-100)
     */
    const getCategoryProgress = (type) => {
        const category = categoriesData.value.find(cat => cat.type === type);
        if (!category) return 0;
        
        const completed = category.tasks.filter(task => task.completed).length;
        const total = category.tasks.length;
        return Math.round((completed / total) * 100) || 0;
    };
    
    /**
     * Saves current data to localStorage
     * Also tracks the last completed task for animations
     */
    const saveData = () => {
        localStorage.setItem('selfCareData', JSON.stringify({
            categories: categoriesData.value,
            lastCompletedTask: lastCompletedTask.value
        }));
        
        // Get current completed count to compare
        const newCompletedCount = categoriesData.value.reduce((total, category) => {
            return total + category.tasks.filter(task => task.completed).length;
        }, 0);
        
        // If a new task was completed, update lastCompletedTask
        if (newCompletedCount > completedCount.value - 1) {
            // Find the most recently completed task
            for (const category of categoriesData.value) {
                for (const task of category.tasks) {
                    if (task.completed && JSON.stringify(task) !== JSON.stringify(lastCompletedTask.value)) {
                        lastCompletedTask.value = {...task};
                        break;
                    }
                }
            }
        }
    };

    /**
     * Loads saved data from localStorage
     */
    const loadData = () => {
        const savedData = localStorage.getItem('selfCareData');
        if (savedData) {
            const parsedData = JSON.parse(savedData);
            categoriesData.value = parsedData.categories;
            lastCompletedTask.value = parsedData.lastCompletedTask;
        }
    };
    
    // Load data when the component is mounted
    onMounted(() => {
        loadData();
    });
    
    return {
        categoriesData,
        lastCompletedTask,
        totalTasks,
        completedCount,
        progressPercentage,
        getCategoryCompletedCount,
        getCategoryProgress,
        saveData,
        loadData
    };
}