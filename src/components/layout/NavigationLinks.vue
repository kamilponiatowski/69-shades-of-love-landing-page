<template>
    <div class="navigation-links">
      <router-link :to="backLink" class="back-link" v-if="backLink">
        <i class="fas fa-arrow-left"></i> {{ backText || t('backToJourney') }}
      </router-link>
      
      <router-link :to="forwardLink" class="forward-link" v-if="forwardLink">
        {{ forwardText || t('continue') }} <i class="fas fa-arrow-right"></i>
      </router-link>
    </div>
  </template>
  
  <script setup lang="ts">
  import { useI18n } from '@/composables/useI18n';
  
  const { t } = useI18n();
  
  defineProps({
    backLink: {
      type: String,
      default: ''
    },
    backText: {
      type: String,
      default: ''
    },
    forwardLink: {
      type: String,
      default: ''
    },
    forwardText: {
      type: String,
      default: ''
    }
  });
  </script>