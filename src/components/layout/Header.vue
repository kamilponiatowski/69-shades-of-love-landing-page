<template>
  <header>
    <div class="logo-container">
      <DuckLogo :isHomePage="isHomePage" @tell-duck-joke="$emit('tell-duck-joke')" />
      <router-link 
        to="/about" 
        class="main-title-link"
        :aria-label="t('navigateAbout')"
      >
        <h1 class="main-title">{{ customTitle || t('mainTitle') }}</h1>
      </router-link>
    </div>
    <p class="subtitle">{{ customSubtitle || t('subtitle') }}</p>
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
import DuckLogo from '@/components/widgets/DuckLogo.vue';

// Props
defineProps({
  streakDays: {
    type: Number,
    default: 0
  },
  isHomePage: {
    type: Boolean,
    default: false
  },
  customTitle: {
    type: String,
    default: ''
  },
  customSubtitle: {
    type: String,
    default: ''
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