<!-- src/components/widgets/DuckLogo.vue -->
<template>
    <router-link 
      v-if="!isHomePage" 
      to="/" 
      class="duck-logo"
      tabindex="0" 
      role="link" 
      :aria-label="t('duckLogoHomeAria')"
    >
      <img 
        src="@/assets/images/duck-logo.svg" 
        width="90" 
        height="90" 
        alt="logo - Quack!!" 
        aria-hidden="true"
      >
      <span class="duck-tooltip">What The Quack?</span>
    </router-link>
    <div 
      v-else 
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
  </template>
  
  <script setup lang="ts">
  import { useI18n } from '@/composables/useI18n';
  
  // Props
  defineProps({
    isHomePage: {
      type: Boolean,
      default: false
    }
  });
  
  // Emits
  defineEmits(['tell-duck-joke']);
  
  // Composables
  const { t } = useI18n();
  </script>
  