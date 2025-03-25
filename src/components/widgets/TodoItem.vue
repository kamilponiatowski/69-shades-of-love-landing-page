<template>
  <div :class="['todo-item', {completed: task.completed}]">
    <input 
      type="checkbox" 
      class="todo-checkbox" 
      :checked="task.completed"
      @change="toggleComplete" 
      :id="checkboxId"
      :aria-label="`${task.title}: ${task.description}`"
    >
    <div class="todo-text">
      <label :for="checkboxId">{{ task.title }}</label>
      <div class="description">{{ task.description }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useTaskStore, type Task, type Category } from '@/stores/taskStore';
import { useAnimation } from '@/composables/useAnimation';
import type { TaskChangeInfo } from '@/types';

// Props
const props = defineProps<{
  task: Task;
  categoryType: Category['type'];
  taskIndex: number;
}>();

// Emits
const emit = defineEmits<{
  (e: 'change', changeInfo: TaskChangeInfo): void
}>();

// Store
const taskStore = useTaskStore();

// Animation
const { showCompletionAnimation } = useAnimation(null);

// Computed
const checkboxId = computed(() => {
  return `${props.categoryType}-task-${props.taskIndex}`;
});

// Methods
const toggleComplete = () => {
  const wasCompleted = props.task.completed;
  
  // Update of task status in store
  taskStore.toggleTaskCompletion(props.categoryType, props.taskIndex);
  
  // Show animation ONLY when task is selected (not when unselected)
  if (!wasCompleted) {
    showCompletionAnimation(props.categoryType);
  }
  
  // Communicate the change with the previous and current state
  emit('change', { 
    wasCompleted, 
    isNowCompleted: !wasCompleted 
  });
};
</script>

<style scoped>
/* Component styles are handled by global CSS */
</style>