// @/stores/taskStore.ts
import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { categories as initialCategories } from '@/constants/categories';

// Definicje typów
export interface Task {
  title: string;
  description: string;
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

export const useTaskStore = defineStore('tasks', () => {
  // Stan
  const categories = ref<Category[]>(JSON.parse(JSON.stringify(initialCategories)));
  const lastCompletedTask = ref<LastCompletedTask | null>(null);

  // Gettery
  const totalTasks = computed(() => {
    return categories.value.reduce((total, category) => total + category.tasks.length, 0);
  });
  
  const completedCount = computed(() => {
    return categories.value.reduce((total, category) => {
      return total + category.tasks.filter(task => task.completed).length;
    }, 0);
  });
  
  const progressPercentage = computed(() => {
    return Math.round((completedCount.value / totalTasks.value) * 100) || 0;
  });

  // Funkcje
  function getCategoryCompletedCount(type: Category['type']): number {
    const category = categories.value.find(cat => cat.type === type);
    return category ? category.tasks.filter(task => task.completed).length : 0;
  }
  
  function getCategoryProgress(type: Category['type']): number {
    const category = categories.value.find(cat => cat.type === type);
    if (!category) return 0;
    
    const completed = category.tasks.filter(task => task.completed).length;
    const total = category.tasks.length;
    return Math.round((completed / total) * 100) || 0;
  }
  
  function toggleTaskCompletion(categoryType: Category['type'], taskIndex: number): void {
    const category = categories.value.find(cat => cat.type === categoryType);
    if (category && taskIndex >= 0 && taskIndex < category.tasks.length) {
      category.tasks[taskIndex].completed = !category.tasks[taskIndex].completed;
      lastCompletedTask.value = {
        categoryType,
        taskIndex,
        completed: category.tasks[taskIndex].completed
      };
      saveData();
    }
  }
  
  function saveData(): void {
    try {
      localStorage.setItem('selfCareData', JSON.stringify({
        categories: categories.value,
        lastCompletedTask: lastCompletedTask.value
      }));
    } catch (error) {
      console.error('Błąd podczas zapisywania danych:', error);
    }
  }
  
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
        console.error('Błąd podczas ładowania danych:', error);
      }
      resolve();
    });
  }

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