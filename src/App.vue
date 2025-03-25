<template>
  <router-view />
</template>
  
<script setup lang="ts">
import { onMounted } from 'vue';
import { provideI18n } from './composables/useI18n';

// Initialize and provide i18n to all components
const i18n = provideI18n();

// Load saved language preference on app start
onMounted(() => {
  i18n.loadSavedLanguage();
});
</script>