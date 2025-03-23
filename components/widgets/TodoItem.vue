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
import { useTaskStore, type Task, type Category } from '../../stores/taskStore';

// Props
const props = defineProps<{
  task: Task;
  categoryType: Category['type'];
  taskIndex: number;
}>();

// Emits
const emit = defineEmits(['change']);

// Store
const taskStore = useTaskStore();

// Computed
const checkboxId = computed(() => {
  return `${props.categoryType}-task-${props.taskIndex}`;
});

// Methods
const toggleComplete = () => {
  taskStore.toggleTaskCompletion(props.categoryType, props.taskIndex);
  emit('change');
};
</script>

<style scoped>
/* Styl komponentu jest obsługiwany przez globalne CSS */
</style>