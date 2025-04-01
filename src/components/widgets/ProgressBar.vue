<template>
  <div class="progress-container">
    <div class="pattern-background"></div>
    
    <div class="progress-content">
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
  </div>
</template>

<script setup lang="ts">
import { useI18n } from '@/composables/useI18n';
import { useTaskStore, type Category } from '@/stores/taskStore';
import { storeToRefs } from 'pinia';

const { t } = useI18n();
const taskStore = useTaskStore();

const { categories, completedCount, totalTasks, progressPercentage } = storeToRefs(taskStore);

const getCategoryProgress = (type: Category['type']) => {
  return taskStore.getCategoryProgress(type);
};
</script>

<style scoped>
.progress-container {
  position: relative;
  background: linear-gradient(120deg, rgba(196, 30, 58, 0.1), rgba(138, 43, 226, 0.1));
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  overflow: hidden;
  margin-bottom: var(--space-6);
  width: 100%;
}

.progress-content {
  position: relative;
  z-index: 1;
  padding: var(--space-6);
}

.progress-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--space-5);
}

.progress-title h2 {
  color: var(--main-color);
  font-size: var(--font-size-xl);
  margin: 0;
  position: relative;
}

.progress-title h2::after {
  content: "";
  position: absolute;
  width: 40px;
  height: 3px;
  background: linear-gradient(90deg, var(--main-color), var(--accent-color));
  bottom: -7px;
  left: 0;
  border-radius: 2px;
}

.progress-stats {
  color: var(--color-text-dark);
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-base);
  background-color: rgba(255, 255, 255, 0.5);
  padding: var(--space-1) var(--space-3);
  border-radius: var(--radius-full);
  box-shadow: var(--shadow-sm);
}

.progress-bar {
  height: 14px;
  background-color: var(--progress-background);
  border-radius: 7px;
  overflow: hidden;
  margin-bottom: var(--space-5);
  box-shadow: var(--shadow-inset);
  position: relative;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--physical-color), var(--mental-color), var(--personal-color), var(--relationship-color));
  border-radius: 7px;
  transition: width 0.7s cubic-bezier(0.22, 1, 0.36, 1);
  position: relative;
  overflow: hidden;
}

.progress-fill::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
    45deg,
    rgba(255, 255, 255, 0) 25%,
    rgba(255, 255, 255, 0.2) 25%,
    rgba(255, 255, 255, 0.2) 50%,
    rgba(255, 255, 255, 0) 50%,
    rgba(255, 255, 255, 0) 75%,
    rgba(255, 255, 255, 0.2) 75%
  );
  background-size: 20px 20px;
  animation: move 1s linear infinite;
}

.category-progress {
  display: flex;
  justify-content: space-between;
  padding: var(--space-4);
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
}

.category-progress-item {
  text-align: center;
  flex: 1;
  position: relative;
}

.category-progress-item:not(:last-child)::after {
  content: "";
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  height: 70%;
  width: 1px;
  background-color: rgba(0, 0, 0, 0.1);
}

.category-label {
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
  margin-bottom: var(--space-1);
}

.category-percentage {
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-md);
  transition: transform var(--transition-fast) var(--transition-ease);
}

.category-percentage:hover {
  transform: scale(1.1);
}

/* Category-specific text colors */
.physical-text { color: var(--physical-color); }
.mental-text { color: var(--mental-color); }
.personal-text { color: var(--personal-color); }
.relationship-text { color: var(--relationship-color); }

@media (max-width: 768px) {
  .progress-content {
    padding: var(--space-4);
  }
  
  .progress-title {
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: var(--space-4);
  }
  
  .progress-title h2 {
    margin-bottom: var(--space-2);
  }
  
  .progress-stats {
    align-self: flex-start;
    margin-top: var(--space-1);
  }
  
  .category-progress {
    flex-wrap: wrap;
    padding: var(--space-2);
  }
  
  .category-progress-item {
    width: 50%;
    margin-bottom: var(--space-2);
  }
  
  .category-progress-item:nth-child(odd)::after {
    display: none;
  }
}

@media (max-width: 480px) {
  .progress-content {
    padding: var(--space-3);
  }
  
  .progress-title h2 {
    font-size: var(--font-size-lg);
  }
  
  .progress-stats {
    font-size: var(--font-size-sm);
  }
  
  .category-progress-item {
    width: 100%;
  }
  
  .category-progress-item::after {
    display: none;
  }
}
</style>