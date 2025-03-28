<template>
  <div 
    :class="['modern-todo-item', {completed: task.completed}]" 
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
  // Check if the task has a titleKey property
  if (props.task.titleKey) {
    return t(props.task.titleKey);
  }
  
  // Generate a key based on category and task index if not provided
  const generatedKey = `task_${props.categoryType}_${props.taskIndex + 1}_title`;
  return t(generatedKey);
});

const translatedDescription = computed(() => {
  // Check if the task has a descriptionKey property
  if (props.task.descriptionKey) {
    return t(props.task.descriptionKey);
  }
  
  // Generate a key based on category and task index if not provided
  const generatedKey = `task_${props.categoryType}_${props.taskIndex + 1}_desc`;
  return t(generatedKey);
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
/* Modern todo item with enhanced design */
.modern-todo-item {
  padding: 14px 16px;
  margin-bottom: 12px;
  background: linear-gradient(to right, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.95));
  border-radius: 12px;
  display: flex;
  align-items: center;
  transition: all 0.3s ease;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.05);
  position: relative;
  overflow: hidden;
  cursor: pointer;
  border-left: 4px solid rgba(0, 0, 0, 0.1);
}

.modern-todo-item:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
}

.modern-todo-item:last-child {
  margin-bottom: 0;
}

/* Completed item styling */
.modern-todo-item.completed {
  background-color: rgba(240, 240, 240, 0.6);
  border-left-color: rgba(0, 0, 0, 0.05);
}

.modern-todo-item.completed .todo-title {
  text-decoration: line-through;
  color: #888;
}

.modern-todo-item.completed .todo-description {
  color: #aaa;
}

/* Enhanced checkbox */
.todo-checkbox {
  appearance: none;
  -webkit-appearance: none;
  height: 22px;
  width: 22px;
  border-radius: 6px;
  border: 2px solid #ddd;
  margin-right: 15px;
  position: relative;
  cursor: pointer;
  transition: all 0.2s ease;
  background-color: rgba(255, 255, 255, 0.5);
  flex-shrink: 0;
}

/* Category specific checkbox colors */
.modern-todo-item:has(.physical) .todo-checkbox {
  border-color: var(--physical-color);
}

.modern-todo-item:has(.mental) .todo-checkbox {
  border-color: var(--mental-color);
}

.modern-todo-item:has(.personal) .todo-checkbox {
  border-color: var(--personal-color);
}

.modern-todo-item:has(.relationship) .todo-checkbox {
  border-color: var(--relationship-color);
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
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

/* Category specific checkbox colors when checked */
[class*="physical"] .todo-checkbox:checked {
  background-color: var(--physical-color);
  border-color: var(--physical-color);
}

[class*="mental"] .todo-checkbox:checked {
  background-color: var(--mental-color);
  border-color: var(--mental-color);
}

[class*="personal"] .todo-checkbox:checked {
  background-color: var(--personal-color);
  border-color: var(--personal-color);
}

[class*="relationship"] .todo-checkbox:checked {
  background-color: var(--relationship-color);
  border-color: var(--relationship-color);
}

/* Text content styling */
.todo-text {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.todo-title {
  font-size: 1rem;
  color: #333;
  font-weight: 600;
  margin-bottom: 4px;
  cursor: pointer;
  transition: color 0.2s ease;
}

.todo-description {
  font-size: 0.85rem;
  color: #777;
  line-height: 1.4;
}

/* Shine effect on hover */
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

.modern-todo-item:hover .todo-shine {
  transform: translateX(100%);
}

/* Category border color indicators */
[class*="physical"].modern-todo-item {
  border-left-color: var(--physical-color);
}

[class*="mental"].modern-todo-item {
  border-left-color: var(--mental-color);
}

[class*="personal"].modern-todo-item {
  border-left-color: var(--personal-color);
}

[class*="relationship"].modern-todo-item {
  border-left-color: var(--relationship-color);
}

/* Responsive styles */
@media (max-width: 768px) {
  .modern-todo-item {
    padding: 12px 14px;
  }
  
  .todo-title {
    font-size: 0.95rem;
  }
  
  .todo-description {
    font-size: 0.8rem;
  }
}

@media (max-width: 480px) {
  .modern-todo-item {
    padding: 10px 12px;
  }
  
  .todo-checkbox {
    width: 20px;
    height: 20px;
    margin-right: 12px;
  }
  
  .todo-title {
    font-size: 0.9rem;
  }
  
  .todo-description {
    font-size: 0.75rem;
  }
}

@media (max-width: 480px) {
    .modern-todo-item {
        padding: 10px 12px;
    }
}
</style>