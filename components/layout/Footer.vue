<template>
    <footer class="footer" v-html="footerContent"></footer>
  </template>
  
  <script setup lang="ts">
  import { computed } from 'vue';
  import { useI18n } from '../../composables/useI18n';
  
  // Composables
  const { t } = useI18n();
  
  // Computed
  const footerContent = computed(() => {
    return t('footer');
  });
  </script>
  
  <style scoped>
  /* Styl komponentu jest obsługiwany przez globalne CSS */
  </style>