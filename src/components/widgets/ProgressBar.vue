<template>
    <div class="progress-container">
      <div class="progress-title">
        <h2>{{ t('yourProgress') }}</h2>
        <span class="progress-stats">{{ completedCount }}/{{ totalTasks }} ({{ progressPercentage }}%)</span>
      </div>
      <div 
        class="progress-bar" 
        role="progressbar" 
        :aria-valuenow="progressPercentage" 
        aria-valuemin="0" 
        aria-valuemax="100"
      >
        <div class="progress-fill" :style="{ width: `${progressPercentage}%` }"></div>
      </div>
      <div class="category-progress" aria-label="Category progress breakdown">
        <div v-for="category in categories" :key="category.type" class="category-progress-item">
          <div class="category-label">{{ t(category.type) }}</div>
          <div :class="[`category-percentage`, `${category.type}-text`]">
            {{ getCategoryProgress(category.type) }}%
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { useI18n } from '../../../composables/useI18n';
  import { useTaskStore, type Category } from '../../../stores/taskStore';
  import { computed } from 'vue';
  import { storeToRefs } from 'pinia';
  
  // Composables
  const { t } = useI18n();
  const taskStore = useTaskStore();
  const { categories, completedCount, totalTasks, progressPercentage } = storeToRefs(taskStore);
  
  // Methods
  const getCategoryProgress = (type: Category['type']) => {
    return taskStore.getCategoryProgress(type);
  };
  </script>
  
  <style scoped>
  /* Styl komponentu jest obsługiwany przez globalne CSS */
  </style>