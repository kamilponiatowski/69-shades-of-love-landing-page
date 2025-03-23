// @/composables/useStorage.ts
import { ref, computed, onMounted } from 'vue';
import type { Category } from '@/stores/taskStore';

interface LastCompletedTask {
    categoryType: Category['type'];
    taskIndex: number;
    completed: boolean;
}

/**
 * Storage composable
 * Handles data persistence and provides task-related statistics
 * 
 * @param initialCategories - Initial categories data
 * @returns Storage related methods and state
 */
export function useStorage(initialCategories: Category[]) {
    // Deep clone initial categories to avoid mutations
    const categoriesData = ref<Category[]>(JSON.parse(JSON.stringify(initialCategories)));
    const lastCompletedTask = ref<LastCompletedTask | null>(null);

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
     * @param type - Category type identifier
     * @returns Count of completed tasks in the category
     */
    const getCategoryCompletedCount = (type: Category['type']): number => {
        const category = categoriesData.value.find(cat => cat.type === type);
        return category ? category.tasks.filter(task => task.completed).length : 0;
    };

    /**
     * Gets the progress percentage for a specific category
     * 
     * @param type - Category type identifier
     * @returns Percentage of completed tasks in the category (0-100)
     */
    const getCategoryProgress = (type: Category['type']): number => {
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
    const saveData = (): void => {
        // Zapisz do localStorage
        localStorage.setItem('selfCareData', JSON.stringify({
            categories: categoriesData.value,
            lastCompletedTask: lastCompletedTask.value
        }));

        categoriesData.value = JSON.parse(JSON.stringify(categoriesData.value));
    };

    /**
     * Loads saved data from localStorage
     */
    const loadData = (): void => {
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