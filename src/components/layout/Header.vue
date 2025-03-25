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
      
      <!-- Language Switcher -->
      <div class="language-switcher">
        <button 
          class="lang-btn" 
          :class="{ active: currentLanguage === 'pl' }" 
          @click="changeLanguage('pl')" 
          aria-label="Zmień język na polski"
        >
          PL
        </button>
        <button 
          class="lang-btn" 
          :class="{ active: currentLanguage === 'en' }" 
          @click="changeLanguage('en')" 
          aria-label="Switch language to English"
        >
          EN
        </button>
      </div>
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
const { t, currentLanguage, setLanguage } = useI18n();

// Language switching function
const changeLanguage = (lang: 'en' | 'pl') => {
  setLanguage(lang);
};
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

/* Language Switcher Styles */
.logo-container {
  position: relative;
  width: 100%;
}

.language-switcher {
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  display: flex;
  gap: 5px;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.7);
  padding: 3px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.lang-btn {
  background: none;
  border: none;
  color: #666;
  font-weight: bold;
  font-size: 0.9rem;
  padding: 5px 10px;
  border-radius: 15px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.lang-btn:hover {
  background-color: rgba(0, 0, 0, 0.05);
}

.lang-btn.active {
  background-color: var(--main-color);
  color: white;
}

/* Responsive styles for language switcher */
@media (max-width: 768px) {
  .language-switcher {
    top: 0;
    right: 0;
    transform: none;
  }
  
  .lang-btn {
    padding: 4px 8px;
    font-size: 0.8rem;
  }
}
</style>