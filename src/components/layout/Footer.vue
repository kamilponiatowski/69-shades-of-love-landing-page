<template>
  <footer class="modern-footer">
    <div class="footer-background"></div>
    
    <div class="footer-content">
      <div class="footer-message">
        {{ t('footerStart') }} 
        <router-link to="/quotes" class="heart-link" aria-label="Easter egg: go to quotes page">
          <span class="heart">💜</span>
        </router-link> 
        {{ t('footerMid') }}
        <a href="mailto:poniatowski.dev@gmail.com">poniatowski.dev@gmail.com</a> 
      </div>
      
      <div class="footer-credits">
        Created with Kamil Poniatowski & 🥷🏻先生 Tim Polka-Nawioski 🙇
      </div>
      
      <div class="footer-actions">
        <button @click="resetAppData" class="reset-button" :title="t('resetConfirmMessage')">
          <i class="fas fa-trash-alt"></i> {{ t('resetButtonText') }}
        </button>
      </div>
    </div>
    
    <!-- Use the ScrollTopButton component -->
    <ScrollTopButton />
  </footer>
</template>
  
<script setup lang="ts">
import { useI18n } from '../../composables/useI18n';
import { useRouter } from 'vue-router';
import ScrollTopButton from '../widgets/ScrollTopButton.vue';

// Composables
const { t } = useI18n();
const router = useRouter();

// Function to reset application data
const resetAppData = () => {
  if (confirm(t('resetConfirmMessage'))) {
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
    
    alert(t('resetSuccessMessage'));
    
    window.location.reload();
  }
};
</script>
  
<style scoped>
/* Modern footer design with pattern and gradient, matching the Header style */
.modern-footer {
  position: relative;
  margin-top: 40px;
  padding: 30px;
  background: linear-gradient(120deg, rgba(196, 30, 58, 0.1), rgba(138, 43, 226, 0.1));
  border-radius: 15px;
  box-shadow: 0 -5px 20px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  min-height: 150px; /* Ensure minimum height for the layout */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

/* Background pattern matching the header */
.footer-background {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23c41e3a' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E");
  opacity: 0.5;
  z-index: 0;
}

/* Footer content layout */
.footer-content {
  position: relative;
  z-index: 1;
  text-align: center;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
}

/* Footer message style */
.footer-message {
  color: #666;
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 5px;
}

.footer-credits {
  color: #888;
  font-size: 0.85rem;
  font-style: italic;
}

/* Easter egg heart link styling */
.heart-link {
  text-decoration: none;
  cursor: pointer;
  position: relative;
  display: inline-block;
}

.heart-link .heart {
  color: var(--main-color);
  animation: heartbeat 1.5s infinite;
  display: inline-block;
  transition: transform 0.3s ease;
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

/* Email link styling */
.footer-message a {
  color: var(--accent-color);
  text-decoration: none;
  transition: color 0.2s ease, transform 0.2s ease;
  display: inline-block;
  font-weight: 500;
}

.footer-message a:hover,
.footer-message a:focus {
  color: var(--main-color);
  transform: translateY(-2px);
  text-decoration: underline;
}

/* Reset button styling */
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
  padding: 6px 15px;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 5px;
}

.reset-button:hover {
  background-color: rgba(196, 30, 58, 0.1);
  color: var(--main-color);
  border-color: var(--main-color);
  transform: translateY(-2px);
  box-shadow: 0 3px 8px rgba(196, 30, 58, 0.1);
}

.reset-button i {
  font-size: 0.9rem;
}

/* Heartbeat animation */
@keyframes heartbeat {
  0% { transform: scale(1); }
  5% { transform: scale(1.2); }
  10% { transform: scale(1); }
  15% { transform: scale(1.1); }
  20% { transform: scale(1); }
  100% { transform: scale(1); }
}

/* Responsive styles */
@media (max-width: 768px) {
  .modern-footer {
    padding: 20px 15px;
    margin-top: 20px;
  }
  
  .footer-message {
    font-size: 0.9rem;
  }
  
  .footer-credits {
    font-size: 0.8rem;
  }
}

/* For smaller screens */
@media (max-width: 480px) {
  .modern-footer {
    padding: 15px 10px;
  }
  
  .footer-message {
    font-size: 0.85rem;
  }
  
  .footer-content {
    gap: 10px;
  }
}
</style>