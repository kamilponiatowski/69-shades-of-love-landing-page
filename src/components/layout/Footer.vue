<template>
  <footer class="footer">
    {{ t('footerStart') }} <span class="heart">💜</span> {{ t('footerMid') }} 
    <a href="mailto:poniatowski.dev@gmail.com">poniatowski.dev@gmail.com</a>
  </footer>
</template>
  
<script setup lang="ts">
import { useI18n } from '../../composables/useI18n';

// Composables
const { t } = useI18n();
</script>
  
<style scoped>
/* Component styles are handled by global CSS */
</style>