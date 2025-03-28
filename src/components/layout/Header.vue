<template>
  <header class="modern-header">
    <div class="header-background"></div>
    
    <div class="corner-element top-corner">
      <!-- Logo in upper left corner -->
      <DuckLogo class="top-left-element" :isHomePage="isHomePage" @tell-duck-joke="$emit('tell-duck-joke')" />
      
      <!-- Controls in the top right corner: language switch, with dark mode underneath -->
      <div class="top-right-controls">
        <!-- Language switch -->
        <div class="language-switcher" @click="toggleLanguage">
          <button 
            class="lang-btn" 
            :class="{ active: currentLanguage === 'pl' }" 
            aria-label="Zmień język na polski"
          >
            PL
          </button>
          <button 
            class="lang-btn" 
            :class="{ active: currentLanguage === 'en' }" 
            aria-label="Switch language to English"
          >
            EN
          </button>
        </div>
        
        <DarkModeToggle />
      </div>
    </div>
    
    <!-- Central content -->
    <div class="central-content">
      <router-link 
        to="/" 
        class="main-title-link"
        :aria-label="t('navigateAbout')"
      >
        <h1 class="main-title">{{ customTitle || t('mainTitle') }}</h1>
      </router-link>
      
      <p class="subtitle">{{ customSubtitle || t('subtitle') }}</p>
    </div>
    
    <div class="corner-element bottom-corner">
      <!-- Dedication at bottom centre -->
      <div class="dedication-badge bottom-center-element">
        <span class="dedication-heart">💜</span>
        {{ t('dedication') }}
        <span class="dedication-heart">💜</span>
      </div>
      
      <!-- Streak counter in bottom right corner -->
      <div v-if="isHomePage" class="streak-counter bottom-right-element" aria-live="polite">
        <span class="streak-flame" aria-hidden="true">
          <i class="fas fa-fire"></i>
        </span>
        <span class="streak-count">{{ t('streakDays', streakDays) }}</span>
      </div>
      <router-link 
        v-else 
        to="/journal" 
        class="streak-counter bottom-right-element streak-redirect" 
        aria-label="Go to Journal"
      >
        <span class="streak-flame" aria-hidden="true">
          <i class="fas fa-arrow-right"></i>
        </span>
        <span class="streak-count">{{ t('goToJournal') }}</span>
      </router-link>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useI18n, Language } from '@/composables/useI18n';
import DuckLogo from '@/components/widgets/DuckLogo.vue';
import DarkModeToggle from '@/components/widgets/DarkModeToggle.vue';

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
  },
  titleLinkTarget: {
    type: [String, Boolean],
    default: false
  }
});

// Emits
defineEmits(['tell-duck-joke']);

// Composables
const { t, currentLanguage, setLanguage } = useI18n();

/**
 * Toggle between available languages
 * Switches between Polish and English
 */
const toggleLanguage = () => {
  const newLang: Language = currentLanguage.value === 'pl' ? 'en' : 'pl';
  setLanguage(newLang);
};
</script>

<style scoped>
/* Modern header design with pattern and gradient */
.modern-header {
  position: relative;
  margin-bottom: 40px;
  padding: 30px;
  background: var(--section-background);
  border-radius: 15px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  min-height: 240px; /* Zapewnia minimalną wysokość dla layoutu */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  transition: background 0.3s ease, box-shadow 0.3s ease;
}

.header-background {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23c41e3a' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E");
  opacity: 0.5;
  z-index: 0;
}

/* Corner elements container for better alignment */
.corner-element {
  position: relative;
  width: 100%;
  z-index: 5;
}

.top-corner {
  display: flex;
  justify-content: space-between;
  height: 40px;
}

.bottom-corner {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  height: 40px;
}

/* Positioning classes for the corner elements */
.top-left-element {
  position: relative;
  z-index: 5;
}

/* New top right controls container for dark mode toggle and language switcher */
.top-right-controls {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  min-height: 88px;
  gap: 10px;
  z-index: 5;
}

.bottom-center-element {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 0;
  z-index: 5;
}

.bottom-right-element {
  position: relative;
  z-index: 5;
}

/* Central content styling */
.central-content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 20px 0;
  flex-grow: 1;
}

.main-title-link {
  text-decoration: none;
  color: inherit;
  margin-bottom: 15px;
}

.main-title {
  color: var(--main-color);
  font-size: 2.8rem;
  margin-bottom: 10px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;
  display: inline-block;
}

.main-title::after {
  content: "";
  position: absolute;
  width: 70px;
  height: 4px;
  background: linear-gradient(90deg, var(--main-color), var(--accent-color));
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 2px;
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

.subtitle {
  color: var(--secondary-text-color);
  font-size: 1.3rem;
  font-weight: 400;
}

/* Dedication badge styling with animation */
.dedication-badge {
  display: inline-block;
  background-color: rgba(138, 43, 226, 0.1);
  color: var(--accent-color);
  padding: 8px 15px;
  border-radius: 20px;
  font-style: italic;
  font-size: 0.95rem;
  position: relative;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.05);
  border: 1px dashed rgba(138, 43, 226, 0.3);
}

.dedication-heart {
  display: inline-block;
  margin: 0 5px;
  color: #C41E3A;
  animation: heartbeat 1.5s infinite;
}

@keyframes heartbeat {
  0% { transform: scale(1); }
  5% { transform: scale(1.2); }
  10% { transform: scale(1); }
  15% { transform: scale(1.1); }
  20% { transform: scale(1); }
  100% { transform: scale(1); }
}

/* Streak counter enhanced styling */
.streak-counter {
  background: linear-gradient(135deg, #FF5722, #FF9800);
  padding: 8px 15px;
  border-radius: 30px;
  display: inline-flex;
  align-items: center;
  box-shadow: 0 5px 15px rgba(255, 87, 34, 0.3);
  color: white;
  font-weight: bold;
  height: 40px;
}

.streak-flame {
  color: white;
  margin-right: 10px;
  font-size: 1.2rem;
}

.streak-count {
  font-weight: bold;
  color: white;
}

/* Language Switcher Styles */
.language-switcher {
  display: flex;
  gap: 2px;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.7);
  padding: 2px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  height: 40px;
  align-items: center;
}

.lang-btn {
  background: none;
  border: none;
  color: #666;
  font-weight: bold;
  font-size: 0.9rem;
  padding: 4px 10px;
  border-radius: 15px;
  cursor: pointer;
  transition: all 0.3s ease;
  pointer-events: none; /* Make button non-interactive as we handle clicks on parent */
  height: 36px;
}

.lang-btn.active {
  background-color: var(--main-color);
  color: white;
}

/* Dark mode styles for language switcher */
:global(.dark-mode) .language-switcher {
  background-color: rgba(255, 255, 255, 0.15);
}

:global(.dark-mode) .lang-btn {
  color: #ddd;
}

/* Responsive styles */
@media (max-width: 768px) {
  .modern-header {
    padding: 20px 15px;
  }
  
  .main-title {
    font-size: 2rem;
    margin-top: 15px;
  }
  
  .subtitle {
    font-size: 1.1rem;
  }
  
  .dedication-badge {
    font-size: 0.85rem;
    padding: 6px 12px;
  }
  
  .bottom-corner {
    flex-direction: column;
    align-items: center;
    height: auto;
    margin-top: 15px;
  }
  
  .bottom-center-element {
    position: relative;
    left: 0;
    transform: none;
    margin-bottom: 15px;
  }
  
  .bottom-right-element {
    margin-top: 10px;
  }
}

/* For smaller screens */
@media (max-width: 480px) {
  .modern-header {
    padding: 15px 10px;
    min-height: 200px;
  }
  
  .main-title {
    font-size: 1.7rem;
  }
  
  .subtitle {
    font-size: 1rem;
  }

  .dedication-badge {
    font-size: 0.8rem;
    padding: 5px 10px;
  }
  
  .streak-counter {
    padding: 6px 12px;
    font-size: 0.9rem;
    height: 34px;
  }
  
  .streak-flame {
    font-size: 1rem;
  }
  
  .language-switcher {
    height: 34px;
  }
  
  .lang-btn {
    font-size: 0.8rem;
    padding: 3px 8px;
    height: 30px;
  }

  /* Adjust layout for mobile */
  .top-right-controls {
    gap: 8px;
    align-items: flex-end;
  }
}

.streak-redirect {
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.streak-redirect:hover {
  transform: translateX(5px);
}

.streak-redirect .streak-flame i {
  transition: transform 0.3s ease;
}

.streak-redirect:hover .streak-flame i {
  transform: translateX(3px);
}
</style>