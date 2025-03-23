<template>
  <div :class="['category', category.type]">
    <div class="category-header">
      <h2>{{ t(`${category.type}Hearts`) }}</h2>
      <span>{{ completedCount }}/{{ category.tasks.length }}</span>
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
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from '../../composables/useI18n';
import { useTaskStore, type Category } from '../../stores/taskStore';
import TodoItem from '@/components/widgets/TodoItem.vue';

// Props
const props = defineProps<{
  category: Category;
}>();

// Emits
const emit = defineEmits(['task-updated']);

// Composables
const { t } = useI18n();
const taskStore = useTaskStore();

// Computed
const completedCount = computed(() => {
  return taskStore.getCategoryCompletedCount(props.category.type);
});

// Methods
const onTaskUpdated = () => {
  emit('task-updated');
};
</script>

<style scoped>
/* Styl komponentu jest obsługiwany przez globalne CSS */
</style>