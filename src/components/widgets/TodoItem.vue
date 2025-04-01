<template>
  <div 
    :class="['todo-item', {completed: task.completed}, `${categoryType}-item`]" 
    @click="handleItemClick"
  >
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
      <label :for="checkboxId" class="todo-title">{{ translatedTitle }}</label>
      <div class="todo-description">{{ translatedDescription }}</div>
    </div>
    
    <div class="todo-shine"></div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useTaskStore, type Task, type Category } from '@/stores/taskStore';
import { useAnimation } from '@/composables/useAnimation';
import { useI18n } from '@/composables/useI18n';
import type { TaskChangeInfo } from '@/types';

const props = defineProps<{
  task: Task;
  categoryType: Category['type'];
  taskIndex: number;
}>();

const emit = defineEmits<{
  (e: 'change', changeInfo: TaskChangeInfo): void
}>();

const taskStore = useTaskStore();
const { showCompletionAnimation } = useAnimation(null);
const { t } = useI18n();

const checkboxId = computed(() => {
  return `${props.categoryType}-task-${props.taskIndex}`;
});

const translatedTitle = computed(() => {
  if (props.task.titleKey) {
    return t(props.task.titleKey);
  }
  
  const generatedKey = `task_${props.categoryType}_${props.taskIndex + 1}_title`;
  return t(generatedKey);
});

const translatedDescription = computed(() => {
  if (props.task.descriptionKey) {
    return t(props.task.descriptionKey);
  }
  
  const generatedKey = `task_${props.categoryType}_${props.taskIndex + 1}_desc`;
  return t(generatedKey);
});

const toggleComplete = () => {
  const wasCompleted = props.task.completed;
  
  taskStore.toggleTaskCompletion(props.categoryType, props.taskIndex);
  
  if (!wasCompleted) {
    showCompletionAnimation(props.categoryType);
  }
  
  emit('change', { 
    wasCompleted, 
    isNowCompleted: !wasCompleted 
  });
};

const handleItemClick = () => {
  toggleComplete();
};
</script>