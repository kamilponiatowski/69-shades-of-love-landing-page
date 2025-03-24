<template>
  <header>
    <div class="logo-container">
      <div 
        class="duck-logo" 
        @click="$emit('tell-duck-joke')" 
        tabindex="0" 
        role="button" 
        :aria-label="t('duckLogoAria')"
      >
        <img 
          src="@/assets/images/duck-logo.svg" 
          width="90" 
          height="90" 
          alt="logo - Quack!!" 
          aria-hidden="true"
        >
        <span class="duck-tooltip">What The Quack?</span>
      </div>
      <router-link 
        to="/about" 
        class="main-title-link"
        :aria-label="t('navigateAbout')"
      >
        <h1 class="main-title">{{ t('mainTitle') }}</h1>
      </router-link>
    </div>
    <p class="subtitle">{{ t('subtitle') }}</p>
    <!-- Dedication for Muszka -->
    <span class="dedication">{{ t('dedication') }}</span>
    <div v-if="streakDays > 0" class="streak-counter" aria-live="polite">
      <span class="streak-flame" aria-hidden="true">
        <i class="fas fa-fire"></i>
      </span>
      <span class="streak-count">{{ t('streakDays', streakDays) }}</span>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useI18n } from '@/composables/useI18n';

// Props
defineProps({
  streakDays: {
    type: Number,
    default: 0
  }
});

// Emits
defineEmits(['tell-duck-joke']);

// Composables
const { t } = useI18n();
</script>

<style scoped>
.main-title-link {
  text-decoration: none;
  color: inherit;
}

.main-title-link:hover .main-title,
.main-title-link:focus .main-title {
  opacity: 0.8;
}

.main-title-link:focus {
  outline: 3px solid var(--main-color);
  outline-offset: 4px;
  border-radius: 5px;
}
</style>