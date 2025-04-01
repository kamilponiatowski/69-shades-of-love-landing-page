<template>
  <div 
    :class="['todo-item', {completed: task.completed}]" 
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

<style scoped>
.todo-item {
  padding: var(--space-3) var(--space-4);
  margin-bottom: var(--space-3);
  background: linear-gradient(to right, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.95));
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  transition: all var(--transition-normal) var(--transition-ease);
  box-shadow: var(--shadow-sm);
  position: relative;
  overflow: hidden;
  cursor: pointer;
  border-left: 4px solid rgba(0, 0, 0, 0.1);
}

.todo-item:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-md);
}

.todo-item:last-child {
  margin-bottom: 0;
}

.todo-item.completed {
  background-color: rgba(240, 240, 240, 0.6);
  border-left-color: rgba(0, 0, 0, 0.05);
}

.todo-item.completed .todo-title {
  text-decoration: line-through;
  color: var(--color-gray-600);
}

.todo-item.completed .todo-description {
  color: var(--color-gray-500);
}

.todo-checkbox {
  appearance: none;
  -webkit-appearance: none;
  height: 22px;
  width: 22px;
  border-radius: 6px;
  border: 2px solid var(--color-gray-300);
  margin-right: var(--space-3);
  position: relative;
  cursor: pointer;
  transition: all var(--transition-fast) var(--transition-ease);
  background-color: rgba(255, 255, 255, 0.5);
  flex-shrink: 0;
}

[class*="physical"] .todo-checkbox {
  border-color: var(--color-physical);
}

[class*="mental"] .todo-checkbox {
  border-color: var(--color-mental);
}

[class*="personal"] .todo-checkbox {
  border-color: var(--color-personal);
}

[class*="relationship"] .todo-checkbox {
  border-color: var(--color-relationship);
}

.todo-checkbox:checked::before {
  content: '✓';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 14px;
  color: white;
  font-weight: bold;
}

.todo-checkbox:hover {
  transform: scale(1.1);
  box-shadow: var(--shadow-sm);
}

[class*="physical"] .todo-checkbox:checked {
  background-color: var(--color-physical);
  border-color: var(--color-physical);
}

[class*="mental"] .todo-checkbox:checked {
  background-color: var(--color-mental);
  border-color: var(--color-mental);
}

[class*="personal"] .todo-checkbox:checked {
  background-color: var(--color-personal);
  border-color: var(--color-personal);
}

[class*="relationship"] .todo-checkbox:checked {
  background-color: var(--color-relationship);
  border-color: var(--color-relationship);
}

.todo-text {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.todo-title {
  font-size: var(--font-size-base);
  color: var(--color-text-dark);
  font-weight: var(--font-weight-medium);
  margin-bottom: var(--space-1);
  cursor: pointer;
  transition: color var(--transition-fast) var(--transition-ease);
}

.todo-description {
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
  line-height: var(--line-height-snug);
}

.todo-shine {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.3) 50%,
    rgba(255, 255, 255, 0) 100%
  );
  transform: translateX(-100%);
  transition: transform 0.6s ease;
  pointer-events: none;
}

.todo-item:hover .todo-shine {
  transform: translateX(100%);
}

[class*="physical"].todo-item {
  border-left-color: var(--color-physical);
}

[class*="mental"].todo-item {
  border-left-color: var(--color-mental);
}

[class*="personal"].todo-item {
  border-left-color: var(--color-personal);
}

[class*="relationship"].todo-item {
  border-left-color: var(--color-relationship);
}

@media (max-width: 768px) {
  .todo-item {
    padding: var(--space-2) var(--space-3);
  }
  
  .todo-title {
    font-size: var(--font-size-sm);
  }
  
  .todo-description {
    font-size: var(--font-size-xs);
  }
}

@media (max-width: 480px) {
  .todo-item {
    padding: var(--space-2);
  }
  
  .todo-checkbox {
    width: 20px;
    height: 20px;
    margin-right: var(--space-2);
  }
}
</style>