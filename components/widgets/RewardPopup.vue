<template>
    <div 
      class="reward-animation" 
      :class="{ show: showReward }" 
      @click="$emit('close')" 
      role="dialog" 
      aria-modal="true" 
      aria-labelledby="reward-title"
    >
      <div class="reward-content" @click.stop>
        <div class="reward-icon">
          <i class="fas fa-crown" aria-hidden="true"></i>
        </div>
        <h3 class="reward-title" id="reward-title">{{ rewardTitle }}</h3>
        <p class="reward-description">{{ rewardDescription }}</p>
        <button class="reward-button" @click="$emit('close')">{{ continueButtonText }}</button>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { useI18n } from '../../composables/useI18n';
  
  // Props
  defineProps<{
    showReward: boolean;
    rewardTitle: string;
    rewardDescription: string;
  }>();
  
  // Emits
  defineEmits<{
    (e: 'close'): void;
  }>();
  
  // Composables
  const { t } = useI18n();
  
  // Constants
  const continueButtonText = t('continue');
  </script>
  
  <style scoped>
  /* Styl komponentu jest obsługiwany przez globalne CSS */
  </style>