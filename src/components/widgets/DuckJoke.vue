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
.duck-joke-text {
  margin: 0;
  color: var(--color-text-dark);
  font-weight: var(--font-weight-medium);
  font-size: var(--font-size-base);
}

@media (max-width: 480px) {
  .duck-joke-text {
    font-size: var(--font-size-sm);
  }
}
</style>