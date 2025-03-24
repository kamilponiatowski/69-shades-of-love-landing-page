<template>
    <div class="newsletter-reward" :class="{ show }" role="dialog" aria-modal="true">
      <div class="newsletter-reward-container">
        <div class="newsletter-reward-icon">🎁</div>
        <h3 class="newsletter-reward-title">{{ t('newsletterRewardTitle') }}</h3>
        <p class="newsletter-reward-description">{{ t('newsletterRewardDescription') }}</p>
        <button class="newsletter-reward-button" @click="$emit('close')">
          <i class="fas fa-check"></i> {{ t('newsletterRewardButton') }}
        </button>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { useI18n } from '@/composables/useI18n';
  
  // Props
  defineProps<{
    show: boolean;
  }>();
  
  // Emits
  defineEmits(['close']);
  
  // Composables
  const { t } = useI18n();
  </script>