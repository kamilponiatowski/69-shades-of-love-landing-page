<template>
  <div class="habit-container">
    <div v-for="habit in habits" :key="habit.id" :class="['habit-card', `${habit.category}-habit`]">
      <div class="habit-number">{{ habit.id }}</div>
      <div class="habit-content">
        <h3 class="habit-title">
          <i :class="['fas', habit.icon]"></i> {{ habit.title }}
        </h3>
        <p class="habit-description">
          {{ habit.description }}
        </p>
        <div class="habit-tips">
          <h4>{{ t('implementationTips') }}</h4>
          <ul>
            <li v-for="(tip, index) in habit.tips" :key="index">{{ tip }}</li>
          </ul>
        </div>
        <div class="habit-tools">
          <span v-for="(tool, index) in habit.tools" :key="index" class="tool-tag">{{ tool }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from '@/composables/useI18n';
import { Habit, isHabit } from '@/types';

const { t } = useI18n();

defineProps({
  habits: {
    type: Array as () => Habit[],
    required: true,
    validator: (value: any[]) => value.every(isHabit)
  }
});
</script>

<style scoped>
.habit-container {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.habit-card {
  display: flex;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.habit-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.habit-number {
  width: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  font-weight: bold;
  color: white;
}

.physical-habit .habit-number {
  background-color: var(--physical-color);
}

.mental-habit .habit-number {
  background-color: var(--mental-color);
}

.personal-habit .habit-number {
  background-color: var(--personal-color);
}

.relationship-habit .habit-number {
  background-color: var(--relationship-color);
}

.habit-content {
  flex: 1;
  padding: 20px;
  background-color: white;
}

.habit-title {
  color: #333;
  font-size: 1.4rem;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
}

.habit-title i {
  margin-right: 10px;
  color: var(--main-color);
}

.habit-description {
  color: #555;
  margin-bottom: 15px;
  line-height: 1.5;
}

.habit-tips {
  background-color: #f8f8f8;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 15px;
}

.habit-tips h4 {
  margin-bottom: 10px;
  color: #333;
}

.habit-tips ul {
  padding-left: 25px;
}

.habit-tips li {
  margin-bottom: 5px;
  color: #555;
}

.habit-tools {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tool-tag {
  background-color: #eee;
  padding: 5px 10px;
  border-radius: 30px;
  font-size: 0.85rem;
  color: #555;
}

@media (max-width: 768px) {
  .habit-number {
    width: 50px;
    font-size: 1.6rem;
  }
  
  .habit-content {
    padding: 15px;
  }
  
  .habit-title {
    font-size: 1.2rem;
  }
  
  .habit-tips {
    padding: 12px;
  }
}

@media (max-width: 480px) {
  .habit-card {
    flex-direction: column;
  }
  
  .habit-number {
    width: 100%;
    height: 40px;
  }
  
  .habit-title {
    font-size: 1.1rem;
  }
}
</style>