<template>
  <div class="achievement-container" :class="{ show: showAchievement }" aria-live="polite" aria-atomic="true">
    <div class="achievement" role="alert">
      <div class="achievement-icon">
        <i class="fas fa-star" aria-hidden="true"></i>
      </div>
      <div class="achievement-text">
        <div class="achievement-title">{{ achievementTitle }}</div>
        <div>{{ achievementMessage }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Props
defineProps<{
  showAchievement: boolean;
  achievementTitle: string;
  achievementMessage: string;
}>();
</script>

<style scoped>
.achievement-container {
  position: fixed;
  bottom: var(--space-5);
  right: var(--space-5);
  z-index: var(--z-index-toast);
  transform: translateX(120%);
  transition: transform var(--transition-normal) var(--transition-ease);
  width: 300px;
  max-width: calc(100% - var(--space-10));
}

.achievement-container.show {
  transform: translateX(0);
  animation: slideInRight var(--transition-normal) var(--transition-ease);
}

.achievement {
  display: flex;
  background-color: var(--color-achievement-background);
  border-radius: var(--radius-lg);
  padding: var(--space-4);
  box-shadow: var(--shadow-lg);
  border-left: 4px solid var(--color-primary);
}

.achievement-icon {
  width: 40px;
  height: 40px;
  background: var(--gradient-primary);
  border-radius: var(--radius-circle);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: var(--font-size-md);
  margin-right: var(--space-3);
  flex-shrink: 0;
}

.achievement-text {
  flex: 1;
}

.achievement-title {
  font-weight: var(--font-weight-semibold);
  margin-bottom: var(--space-1);
  color: var(--color-primary);
  font-size: var(--font-size-base);
}

@media (max-width: 480px) {
  .achievement-container {
    right: var(--space-3);
    bottom: var(--space-3);
    max-width: calc(100% - var(--space-6));
  }
  
  .achievement {
    padding: var(--space-3);
  }
  
  .achievement-icon {
    width: 32px;
    height: 32px;
    font-size: var(--font-size-base);
  }
}
</style>