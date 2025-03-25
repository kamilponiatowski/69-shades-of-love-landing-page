<template>
  <footer class="footer">
    {{ t('footerStart') }} 
    <router-link to="/quotes" class="heart-link" aria-label="Easter egg: go to quotes page">
      <span class="heart">💜</span>
    </router-link> 
    {{ t('footerMid') }}
    <a href="mailto:poniatowski.dev@gmail.com">poniatowski.dev@gmail.com</a> Created with Kamil Poniatowski & ⛩️先生 Tim Polka-Nawioski 🙇
  </footer>
</template>
  
<script setup lang="ts">
import { useI18n } from '../../composables/useI18n';

// Composables
const { t } = useI18n();
</script>
  
<style scoped>
.heart-link {
  text-decoration: none;
  cursor: pointer;
  position: relative;
  display: inline-block;
}

.heart-link:hover .heart {
  transform: scale(1.2);
}

.heart-link:focus {
  outline: var(--focus-outline);
  outline-offset: 2px;
  border-radius: 4px;
}

.heart-link:focus .heart {
  transform: scale(1.2);
}
</style>