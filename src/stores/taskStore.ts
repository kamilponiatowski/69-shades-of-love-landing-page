// @/stores/taskStore.ts
import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { categories as initialCategories } from '@/constants/categories';

// Type definitions
export interface Task {
  title?: string;  // Optional - for backward compatibility
  description?: string;  // Optional - for backward compatibility
  titleKey?: string;  // Key for i18n translations
  descriptionKey?: string;  // Key for i18n translations
  completed: boolean;
}

export interface Category {
  name: string;
  type: 'physical' | 'mental' | 'personal' | 'relationship';
  tasks: Task[];
}

export interface LastCompletedTask {
  categoryType: Category['type'];
  taskIndex: number;
  completed: boolean;
}

/**
 * Task management store
 * Handles all operations related to tasks including completion status,
 * progress tracking, and persistence
 */
export const useTaskStore = defineStore('tasks', () => {
  // State
  const categories = ref<Category[]>(JSON.parse(JSON.stringify(initialCategories)));
  const lastCompletedTask = ref<LastCompletedTask | null>(null);

  // Getters
  const totalTasks = computed((): number => {
    return categories.value.reduce((total, category) => total + category.tasks.length, 0);
  });

  const completedCount = computed((): number => {
    return categories.value.reduce((total, category) => {
      return total + category.tasks.filter(task => task.completed).length;
    }, 0);
  });

  const progressPercentage = computed((): number => {
    return Math.round((completedCount.value / totalTasks.value) * 100) || 0;
  });

  // Methods
  /**
   * Gets the number of completed tasks for a specific category
   * @param type - Category type identifier
   * @returns Count of completed tasks in the category
   */
  function getCategoryCompletedCount(type: Category['type']): number {
    const category = categories.value.find(cat => cat.type === type);
    return category ? category.tasks.filter(task => task.completed).length : 0;
  }

  /**
   * Gets the progress percentage for a specific category
   * @param type - Category type identifier
   * @returns Percentage of completed tasks in the category (0-100)
   */
  function getCategoryProgress(type: Category['type']): number {
    const category = categories.value.find(cat => cat.type === type);
    if (!category) return 0;

    const completed = category.tasks.filter(task => task.completed).length;
    const total = category.tasks.length;
    return Math.round((completed / total) * 100) || 0;
  }

  /**
   * Toggles the completion status of a specific task
   * @param categoryType - Category type
   * @param taskIndex - Index of the task in the category
   */
  function toggleTaskCompletion(categoryType: Category['type'], taskIndex: number): void {
    const category = categories.value.find(cat => cat.type === categoryType);
    if (category && taskIndex >= 0 && taskIndex < category.tasks.length) {
      const wasCompleted = category.tasks[taskIndex].completed;
      category.tasks[taskIndex].completed = !wasCompleted;

      // Track last completed task for animations
      if (!wasCompleted) {
        lastCompletedTask.value = {
          categoryType,
          taskIndex,
          completed: true
        };
      }

      saveData();
    }
  }

  /**
   * Persists the current state to localStorage
   */
  function saveData(): void {
    try {
      localStorage.setItem('selfCareData', JSON.stringify({
        categories: categories.value,
        lastCompletedTask: lastCompletedTask.value
      }));
    } catch (error) {
      console.error('Error saving data:', error);
    }
  }

  /**
   * Loads saved state from localStorage
   * @returns Promise that resolves when data is loaded
   */
  function loadData(): Promise<void> {
    return new Promise((resolve) => {
      try {
        const savedData = localStorage.getItem('selfCareData');
        if (savedData) {
          const parsedData = JSON.parse(savedData);
          categories.value = parsedData.categories;
          lastCompletedTask.value = parsedData.lastCompletedTask;
        }
      } catch (error) {
        console.error('Error loading data:', error);
      }
      resolve();
    });
  }

  // Expose state and methods
  return {
    categories,
    lastCompletedTask,
    totalTasks,
    completedCount,
    progressPercentage,
    getCategoryCompletedCount,
    getCategoryProgress,
    toggleTaskCompletion,
    saveData,
    loadData
  };
});