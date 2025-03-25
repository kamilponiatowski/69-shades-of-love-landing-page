<template>
  <button class="newsletter-button" @click="$emit('click')">
    <i class="fas fa-gift"></i> <span>{{ t('newsletterBtnText') }}</span>
  </button>
</template>
  
  <script setup lang="ts">
  import { useI18n } from '@/composables/useI18n';
  
  // Emits
  defineEmits(['click']);
  
  // Composables
  const { t } = useI18n();
  </script>