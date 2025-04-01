<template>
  <div :class="['category-card', category.type]">
    <div class="category-background"></div>
    
    <div class="category-content">
      <div class="category-header">
        <h2>{{ t(`${category.type}Hearts`) }}</h2>
        <span class="category-counter">{{ completedCount }}/{{ category.tasks.length }}</span>
      </div>
      
      <div class="category-body">
        <TodoItem 
          v-for="(task, taskIndex) in category.tasks" 
          :key="taskIndex"
          :task="task"
          :category-type="category.type"
          :task-index="taskIndex"
          @change="onTaskUpdated"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from '@/composables/useI18n';
import { useTaskStore, type Category } from '@/stores/taskStore';
import TodoItem from './TodoItem.vue';
import type { TaskChangeInfo } from '@/types';

// Props
const props = defineProps<{
  category: Category;
}>();

// Emits
const emit = defineEmits<{
  (e: 'task-updated', changeInfo: TaskChangeInfo): void
}>();

// Composables
const { t } = useI18n();
const taskStore = useTaskStore();

// Computed
const completedCount = computed(() => {
  return taskStore.getCategoryCompletedCount(props.category.type);
});

// Methods
const onTaskUpdated = (changeInfo: TaskChangeInfo) => {
  emit('task-updated', changeInfo);
};
</script>

<style scoped>
/* Używamy klasy category-card zamiast modern-category */
.category-card {
  position: relative;
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  transition: transform var(--transition-normal) var(--transition-ease), 
              box-shadow var(--transition-normal) var(--transition-ease);
  background: linear-gradient(120deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.8));
  backdrop-filter: blur(5px);
  margin-bottom: var(--space-6);
}

.category-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-lg);
}

/* Background pattern matching header and footer */
.category-background {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23c41e3a' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E");
  opacity: 0.5;
  z-index: 0;
}

/* Category content positioning on top of background */
.category-content {
  position: relative;
  z-index: 1;
}

/* Enhanced header styling with gradient based on category type */
.category-header {
  padding: var(--space-5);
  color: white;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  background-size: 200% 200%;
  animation: gradientShift 15s ease infinite;
  position: relative;
}

.category-header h2 {
  font-size: var(--font-size-lg);
  margin: 0;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  position: relative;
  color: white;
}

.category-header h2::after {
  content: "";
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 40px;
  height: 3px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 2px;
}

.category-counter {
  background-color: rgba(255, 255, 255, 0.2);
  padding: var(--space-1) var(--space-3);
  border-radius: var(--radius-full);
  font-size: var(--font-size-sm);
  box-shadow: var(--shadow-sm);
  transition: all var(--transition-normal) var(--transition-ease);
}

.category-counter:hover {
  background-color: rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
}

/* Category body with improved spacing */
.category-body {
  padding: var(--space-5);
  background-color: rgba(255, 255, 255, 0.95);
}

/* Category-specific styling */
.physical .category-header {
  background: linear-gradient(135deg, var(--color-physical), var(--color-physical-dark));
}

.mental .category-header {
  background: linear-gradient(135deg, var(--color-mental), var(--color-mental-dark));
}

.personal .category-header {
  background: linear-gradient(135deg, var(--color-personal), var(--color-personal-dark));
}

.relationship .category-header {
  background: linear-gradient(135deg, var(--color-relationship), var(--color-relationship-dark));
}

/* Enhanced hover states */
.physical:hover .category-header {
  background: linear-gradient(135deg, var(--color-physical-dark), var(--color-physical));
}

.mental:hover .category-header {
  background: linear-gradient(135deg, var(--color-mental-dark), var(--color-mental));
}

.personal:hover .category-header {
  background: linear-gradient(135deg, var(--color-personal-dark), var(--color-personal));
}

.relationship:hover .category-header {
  background: linear-gradient(135deg, var(--color-relationship-dark), var(--color-relationship));
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .category-card {
    margin-bottom: var(--space-5);
  }
  
  .category-header {
    padding: var(--space-4);
  }
  
  .category-header h2 {
    font-size: var(--font-size-base);
  }
  
  .category-body {
    padding: var(--space-4);
  }
}

@media (max-width: 480px) {
  .category-header {
    padding: var(--space-3);
  }
  
  .category-header h2 {
    font-size: var(--font-size-base);
  }
  
  .category-counter {
    padding: var(--space-1) var(--space-2);
    font-size: var(--font-size-xs);
  }
  
  .category-body {
    padding: var(--space-3);
  }
}
</style>