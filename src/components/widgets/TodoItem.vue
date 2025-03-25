<template>
  <div :class="['todo-item', {completed: task.completed}]" @click="handleItemClick">
    <input 
      type="checkbox" 
      class="todo-checkbox" 
      :checked="task.completed"
      @change="toggleComplete" 
      @click.stop
      :id="checkboxId"
      :aria-label="`${translatedTitle}: ${translatedDescription}`"
    >
    <div class="todo-text">
      <label :for="checkboxId">{{ translatedTitle }}</label>
      <div class="description">{{ translatedDescription }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useTaskStore, type Task, type Category } from '@/stores/taskStore';
import { useAnimation } from '@/composables/useAnimation';
import { useI18n } from '@/composables/useI18n';
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

// Store & Composables
const taskStore = useTaskStore();
const { showCompletionAnimation } = useAnimation(null);
const { t } = useI18n();

// Computed
const checkboxId = computed(() => {
  return `${props.categoryType}-task-${props.taskIndex}`;
});

// Get translated task title and description
const translatedTitle = computed(() => {
  // Return hardcoded title if exists (for backwards compatibility)
  if (props.task.title) return props.task.title;
  // Otherwise translate using titleKey
  return t(props.task.titleKey);
});

const translatedDescription = computed(() => {
  // Return hardcoded description if exists (for backwards compatibility)
  if (props.task.description) return props.task.description;
  // Otherwise translate using descriptionKey
  return t(props.task.descriptionKey);
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

// Handle click on the entire task item
const handleItemClick = (event: MouseEvent) => {
  // Call the same toggle function
  toggleComplete();
};
</script>

<style scoped>
/* Component styles are handled by global CSS */
.todo-item {
  cursor: pointer; /* Add pointer cursor to indicate clickability */
}
</style>