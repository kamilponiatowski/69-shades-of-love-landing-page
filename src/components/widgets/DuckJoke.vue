<template>
  <div class="duck-joke-container" :class="{ show: showDuckJoke }" aria-live="polite" aria-atomic="true">
    <p class="duck-joke-text">{{ joke }}</p>
  </div>
</template>

<script setup lang="ts">
// Props
defineProps<{
  joke: string;
  showDuckJoke: boolean;
}>();
</script>

<style scoped>
/* Styl komponentu jest obsługiwany przez globalne CSS */
</style>