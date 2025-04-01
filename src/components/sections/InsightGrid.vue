<template>
  <div class="insights-points">
    <div v-for="(insight, index) in insights" :key="index" class="insight-item">
      <div :class="['insight-icon', `${insight.category}-icon`]">
        <i :class="['fas', insight.icon]"></i>
      </div>
      <div class="insight-text">
        {{ insight.text }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Insight, isInsight } from '@/types';

// Define props
defineProps({
  insights: {
    type: Array as () => Insight[],
    required: true,
    validator: (value: any[]) => value.every(isInsight)
  }
});
</script>

<style scoped>
.insights-points {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-top: 25px;
}

.insight-item {
  display: flex;
  align-items: center;
  padding: 15px;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.02);
  transition: all 0.3s ease;
}

.insight-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
}

.insight-icon {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
  font-size: 1.4rem;
  color: white;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.physical-icon {
  background: linear-gradient(135deg, var(--physical-color), #FF7F00);
}

.mental-icon {
  background: linear-gradient(135deg, var(--mental-color), #5CB85C);
}

.personal-icon {
  background: linear-gradient(135deg, var(--personal-color), #FFB833);
}

.relationship-icon {
  background: linear-gradient(135deg, var(--relationship-color), #FF6B98);
}

.insight-text {
  flex: 1;
  font-size: 1.05rem;
  color: #444;
  line-height: 1.5;
}

@media (max-width: 768px) {
  .insights-points {
    grid-template-columns: 1fr;
  }
}
</style>