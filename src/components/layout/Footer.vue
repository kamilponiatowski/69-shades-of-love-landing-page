<template>
  <footer class="footer">
    {{ t('footerStart') }} 
    <router-link to="/quotes" class="heart-link" aria-label="Easter egg: go to quotes page">
      <span class="heart">💜</span>
    </router-link> 
    {{ t('footerMid') }}
    <a href="mailto:poniatowski.dev@gmail.com">poniatowski.dev@gmail.com</a> Created with Kamil Poniatowski & 🥷🏻先生 Tim Polka-Nawioski 🙇
    <div class="footer-actions">
      <button @click="resetAppData" class="reset-button" title="Reset całkowicie wyczyści postęp aplikacji">
        <i class="fas fa-trash-alt"></i> Reset App
      </button>
    </div>
  </footer>
</template>
  
<script setup lang="ts">
import { useI18n } from '../../composables/useI18n';
import { useRouter } from 'vue-router';

// Composables
const { t } = useI18n();
const router = useRouter();

// Function to reset application data
const resetAppData = () => {
  if (confirm('Czy na pewno chcesz zresetować wszystkie dane aplikacji? Ta operacja jest nieodwracalna.')) {
    // List of keys to be deleted from localStorage
    const keysToRemove = [
      'selfCareData',
      'lastCheckDate',
      'streakDays',
      'newsletterSubscribed',
      'hasVisitedBefore',
      'preferredLanguage',
      'pdfUnlockedBefore',
      'pdfUnlockShown'
    ];
    
    // Delete all data from localStorage
    keysToRemove.forEach(key => {
      try {
        localStorage.removeItem(key);
      } catch (error) {
        console.error(`Error removing ${key} from localStorage:`, error);
      }
    });
    
    alert('All data has been reset. The page will be refreshed.');
    
    window.location.reload();
  }
};
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

/* Style dla przycisku reset */
.footer-actions {
  margin-top: 15px;
  display: flex;
  justify-content: center;
}

.reset-button {
  background-color: transparent;
  color: #888;
  border: 1px solid #aaa;
  border-radius: 20px;
  padding: 5px 12px;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 5px;
}

.reset-button:hover {
  background-color: rgba(196, 30, 58, 0.1);
  color: var(--main-color);
  border-color: var(--main-color);
}

.reset-button i {
  font-size: 0.9rem;
}
</style>