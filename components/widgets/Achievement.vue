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
/* Styl komponentu jest obsługiwany przez globalne CSS */
</style>