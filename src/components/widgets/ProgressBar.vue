<template>
  <div class="modern-progress-container">
    <div class="progress-background"></div>
    
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
/* Modern progress container with enhanced responsiveness */
.modern-progress-container {
  position: relative;
  background: linear-gradient(120deg, rgba(196, 30, 58, 0.1), rgba(138, 43, 226, 0.1));
  border-radius: 15px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  margin-bottom: 30px;
  width: 100%; /* Ensure full width */
}

.progress-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23c41e3a' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E");
  opacity: 0.5;
  z-index: 0;
}

.progress-content {
  position: relative;
  z-index: 1;
  padding: 25px;
}

.progress-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.progress-title h2 {
  color: var(--main-color);
  font-size: 1.5rem;
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
  color: #555;
  font-weight: bold;
  font-size: 1.1rem;
  background-color: rgba(255, 255, 255, 0.5);
  padding: 5px 12px;
  border-radius: 20px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
}

.progress-bar {
  height: 14px;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 7px;
  overflow: hidden;
  margin-bottom: 20px;
  box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.05);
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
  background: linear-gradient(
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

@keyframes move {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 20px 0;
  }
}

.category-progress {
  display: flex;
  justify-content: space-between;
  padding: 15px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.05);
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
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 5px;
}

.category-percentage {
  font-weight: bold;
  font-size: 1.2rem;
  transition: transform 0.3s ease;
}

.category-percentage:hover {
  transform: scale(1.1);
}

/* Category-specific text colors */
.physical-text { color: var(--physical-color); }
.mental-text { color: var(--mental-color); }
.personal-text { color: var(--personal-color); }
.relationship-text { color: var(--relationship-color); }

/* Responsive adjustments */
@media (max-width: 768px) {
  .progress-content {
    padding: 20px 15px;
  }
  
  .progress-title {
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 15px;
  }
  
  .progress-title h2 {
    margin-bottom: 10px;
  }
  
  .progress-stats {
    align-self: flex-start;
    margin-top: 5px;
  }
  
  .category-progress {
    flex-wrap: wrap;
    padding: 10px;
  }
  
  .category-progress-item {
    width: 50%;
    margin-bottom: 10px;
  }
  
  .category-progress-item:nth-child(odd)::after {
    display: none;
  }
}

@media (max-width: 480px) {
  .progress-content {
    padding: 15px 10px;
  }
  
  .progress-title h2 {
    font-size: 1.3rem;
  }
  
  .progress-stats {
    font-size: 0.95rem;
  }
  
  .category-progress-item {
    width: 100%;
  }
  
  .category-progress-item::after {
    display: none;
  }
}
</style>