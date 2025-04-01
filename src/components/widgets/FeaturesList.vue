<template>
  <ul class="features-list">
    <li v-for="(feature, index) in features" :key="index" :class="{ 'animate-shift': animate }">
      <i :class="['fas', feature.icon]"></i>
      {{ feature.text }}
    </li>
  </ul>
</template>

<script setup lang="ts">
interface Feature {
  icon: string;
  text: string;
}

defineProps({
  features: {
    type: Array as () => Feature[],
    required: true,
    validator: (value: any[]) => {
      return value.every(item => typeof item.icon === 'string' && typeof item.text === 'string');
    }
  },
  animate: {
    type: Boolean,
    default: false
  }
});
</script>

<style scoped>
.features-list {
  list-style: none;
  padding: 0;
}

.features-list li {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  font-size: 1.1rem;
  color: #333;
  padding: 10px 15px;
  border-radius: 8px;
  background-color: rgba(0, 0, 0, 0.02);
  transition: all 0.3s ease;
}

.features-list li:hover {
  background-color: rgba(0, 0, 0, 0.04);
  transform: translateX(5px);
}

.features-list li i {
  margin-right: 15px;
  color: var(--main-color);
  font-size: 1.3rem;
  width: 30px;
  text-align: center;
}

.animate-shift {
  animation: slideIn 0.5s ease forwards;
  opacity: 0;
  transform: translateX(-20px);
}

@keyframes slideIn {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.features-list li:nth-child(1) { animation-delay: 0.1s; }
.features-list li:nth-child(2) { animation-delay: 0.2s; }
.features-list li:nth-child(3) { animation-delay: 0.3s; }
.features-list li:nth-child(4) { animation-delay: 0.4s; }
.features-list li:nth-child(5) { animation-delay: 0.5s; }
.features-list li:nth-child(6) { animation-delay: 0.6s; }
</style>