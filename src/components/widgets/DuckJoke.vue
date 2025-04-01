<template>
  <div class="duck-joke-container" :class="{ show: showDuckJoke }" aria-live="polite" aria-atomic="true">
    <p class="duck-joke-text">{{ joke }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  joke: string;
  showDuckJoke: boolean;
}>();
</script>

<style scoped>
.duck-joke-container {
  position: fixed;
  top: var(--space-5);
  left: 50%;
  transform: translateX(-50%) translateY(-100%);
  background-color: white;
  padding: var(--space-4);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
  max-width: 400px;
  text-align: center;
  transition: transform var(--transition-normal) var(--transition-bounce);
  z-index: var(--z-index-toast);
  border-top: 4px solid #FFD304;
}

.duck-joke-container.show {
  transform: translateX(-50%) translateY(0);
}

.duck-joke-text {
  margin: 0;
  color: var(--color-text-dark);
  font-weight: var(--font-weight-medium);
  font-size: var(--font-size-base);
}

@media (max-width: 480px) {
  .duck-joke-container {
    max-width: 90%;
    padding: var(--space-3);
  }
  
  .duck-joke-text {
    font-size: var(--font-size-sm);
  }
}
</style>