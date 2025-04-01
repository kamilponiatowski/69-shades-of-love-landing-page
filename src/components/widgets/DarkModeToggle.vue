<template>
  <div 
    class="dark-mode-toggle" 
    @click="toggleDarkMode" 
    :title="isDarkMode ? t('lightModeTooltip') : t('darkModeTooltip')"
    role="switch"
    :aria-checked="isDarkMode ? 'true' : 'false'"
    tabindex="0"
    @keydown.space.prevent="toggleDarkMode"
    @keydown.enter.prevent="toggleDarkMode"
  >
    <div class="toggle-track">
      <div class="toggle-sun" aria-hidden="true">
        <i class="fas fa-sun"></i>
      </div>
      <div class="toggle-moon" aria-hidden="true">
        <i class="fas fa-moon"></i>
      </div>
      <div class="toggle-thumb"></div>
    </div>
    <span class="sr-only">{{ isDarkMode ? t('lightModeTooltip') : t('darkModeTooltip') }}</span>
  </div>
</template>

<script setup lang="ts">
import { useDarkMode } from '@/composables/useDarkMode';
import { useI18n } from '@/composables/useI18n';

// Composables
const { isDarkMode, toggleDarkMode } = useDarkMode();
const { t } = useI18n();
</script>

<style scoped>
.dark-mode-toggle {
  position: relative;
  cursor: pointer;
  width: 50px;
  height: 26px;
  margin: 0 5px;
  display: inline-block;
}

.toggle-track {
  position: relative;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 30px;
  transition: background-color var(--transition-normal) var(--transition-ease);
  overflow: hidden;
  box-shadow: var(--shadow-inset);
}

.toggle-sun,
.toggle-moon {
  position: absolute;
  width: 20px;
  height: 20px;
  top: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform var(--transition-normal) var(--transition-ease), 
              opacity var(--transition-normal) var(--transition-ease);
}

.toggle-sun {
  left: 4px;
  color: #FFD700;
  opacity: 1;
  transform: translateX(0);
}

.toggle-moon {
  right: 4px;
  color: var(--accent-color);
  opacity: 0.3;
  transform: translateX(0);
}

.toggle-thumb {
  position: absolute;
  width: 20px;
  height: 20px;
  background-color: white;
  border-radius: 50%;
  top: 3px;
  left: 3px;
  transition: transform var(--transition-normal) var(--transition-ease);
  box-shadow: var(--shadow-sm);
}

/* Dark mode active states */
:global(.dark-mode) .toggle-track {
  background-color: rgba(138, 43, 226, 0.3);
}

:global(.dark-mode) .toggle-thumb {
  transform: translateX(24px);
  background-color: var(--accent-color);
}

:global(.dark-mode) .toggle-sun {
  opacity: 0.3;
}

:global(.dark-mode) .toggle-moon {
  opacity: 1;
}

/* Responsive styles */
@media (max-width: 768px) {
  .dark-mode-toggle {
    width: 44px;
    height: 24px;
  }
  
  .toggle-sun,
  .toggle-moon,
  .toggle-thumb {
    width: 18px;
    height: 18px;
  }
  
  :global(.dark-mode) .toggle-thumb {
    transform: translateX(20px);
  }
}

@media (max-width: 480px) {
  .dark-mode-toggle {
    width: 40px;
    height: 22px;
  }
  
  .toggle-sun,
  .toggle-moon,
  .toggle-thumb {
    width: 16px;
    height: 16px;
  }
  
  :global(.dark-mode) .toggle-thumb {
    transform: translateX(18px);
  }
}
</style>