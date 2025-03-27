<template>
    <div 
      class="dark-mode-toggle" 
      @click="toggleDarkMode" 
      :title="isDarkMode ? t('lightModeTooltip') : t('darkModeTooltip')"
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
  }
  
  .toggle-track {
    position: relative;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 30px;
    transition: background-color 0.3s ease;
    overflow: hidden;
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
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
    transition: transform 0.3s ease, opacity 0.3s ease;
  }
  
  .toggle-sun {
    left: 4px;
    color: #FFD700;
    opacity: 1;
    transform: translateX(0);
  }
  
  .toggle-moon {
    right: 4px;
    color: #8A2BE2;
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
    transition: transform 0.3s ease;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  }
  
  /* Dark mode active states */
  :global(.dark-mode) .toggle-track {
    background-color: rgba(138, 43, 226, 0.3);
  }
  
  :global(.dark-mode) .toggle-thumb {
    transform: translateX(24px);
    background-color: #8A2BE2;
  }
  
  :global(.dark-mode) .toggle-sun {
    opacity: 0.3;
  }
  
  :global(.dark-mode) .toggle-moon {
    opacity: 1;
  }
  
  /* Screen reader only text - accessibility */
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
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