<template>
  <div class="newsletter-popup" :class="{ show }" aria-modal="true" role="dialog">
    <div class="newsletter-container">
      <div class="newsletter-background"></div>
      <button class="newsletter-close" @click="$emit('close')" aria-label="Close newsletter popup">
        <i class="fas fa-times"></i>
      </button>
      <div class="newsletter-title">
        <i class="fas fa-envelope"></i> <span>{{ t('newsletterTitle') }}</span>
      </div>
      <div class="newsletter-subtitle">{{ t('newsletterSubtitle') }}</div>
      
      <div class="newsletter-benefits">
        <div class="newsletter-benefits-title">
          <i class="fas fa-check-circle"></i> {{ t('newsletterBenefitsTitle') }}
        </div>
        <ul class="newsletter-benefits-list">
          <li v-for="(benefit, index) in benefitsList" :key="index" 
              :class="{ 
                'highlight-benefit': index === 0,
                'highlight-benefit pop-culture': index === 1 
              }">
            {{ benefit }}
          </li>
        </ul>
      </div>
      
      <!-- Pop Culture Wisdom Access Highlight -->
      <div class="pop-culture-section animate-glow">
        <i class="fas fa-theater-masks"></i>
        <div class="pop-culture-text">
          <h3>Pop Culture Wisdom Collection</h3>
          <p>Subscribe to unlock our exclusive collection of inspiring quotes from your favorite movies, TV shows, comics, and books!</p>
        </div>
      </div>
      
      <form class="newsletter-form" @submit.prevent="$emit('submit')">
        <!-- Name -->
        <input 
          type="text" 
          class="newsletter-input" 
          placeholder="Your Name (optional, but nice to meet you 💜)" 
          v-model="nameValue"
          @input="updateName"
        >
        
        <!-- Email -->
        <input 
          type="email" 
          class="newsletter-input" 
          :placeholder="t('newsletterEmailPlaceholder')" 
          required
          v-model="emailValue"
          @input="updateEmail"
        >
        
        <button type="submit" class="newsletter-submit animate-float" :disabled="isSubmitting">
          <span class="button-shine"></span>
          <i class="fas" :class="isSubmitting ? 'fa-spinner fa-spin' : 'fa-paper-plane'"></i> 
          <span>{{ isSubmitting ? t('newsletterSubmitting') : t('newsletterSubmitText') }}</span>
        </button>
      </form>
      
      <div class="newsletter-success animate-fade-in" :class="{ show: showSuccess }">
        <strong>{{ t('newsletterSuccessTitle') }}</strong> 
        {{ t('newsletterSuccessText') }}
        <p class="newsletter-redirect-notice" v-if="showSuccess">
          <i class="fas fa-info-circle"></i> 
          Formularz zostanie otwarty w nowej karcie. Po zapisaniu prosimy o powrót do tej strony.
        </p>
      </div>
      
      <div class="newsletter-error animate-fade-in" :class="{ show: showError }">
        <strong>{{ t('newsletterErrorTitle') }}</strong> 
        {{ t('newsletterErrorText') }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, computed } from 'vue';
import { useI18n } from '@/composables/useI18n';

// Props
const props = defineProps<{
  show: boolean;
  email: string;
  name?: string;
  showSuccess: boolean;
  showError: boolean;
  isSubmitting?: boolean;
}>();

// Emits
const emit = defineEmits(['close', 'submit', 'update:email', 'update:name']);

// State
const emailValue = ref(props.email);
const nameValue = ref(props.name || '');

// Composables
const { t, currentLanguage } = useI18n();

// Pobierz tłumaczenia bezpośrednio za pomocą funkcji t()
const benefitsList = computed(() => {
  // Pobieramy string z pełną listą benefitów, a następnie dzielimy go na tablicę
  // W ten sposób obchodzimy problem typowania
  const rawValue = t('newsletterBenefitsList');
  
  if (typeof rawValue === 'string') {
    try {
      // Próbujemy najpierw sparsować jako JSON
      return JSON.parse(rawValue);
    } catch (e) {
      // Jeśli nie jest to poprawny JSON, zwracamy tablicę z pojedynczym stringiem
      return [rawValue];
    }
  }
  
  // Jeśli wartość już jest tablicą, zwracamy ją
  if (Array.isArray(rawValue)) {
    return rawValue;
  }
  
  // Domyślnie zwracamy pustą tablicę
  return [];
});

// Watch for prop changes
watch(() => props.email, (newValue) => {
  emailValue.value = newValue;
});

watch(() => props.name, (newValue) => {
  if (newValue !== undefined) {
    nameValue.value = newValue;
  }
});

// Methods
const updateEmail = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit('update:email', target.value);
};

const updateName = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit('update:name', target.value);
};
</script>

<style scoped>
.newsletter-popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
}

.newsletter-popup.show {
  opacity: 1;
  visibility: visible;
}

.newsletter-container {
  position: relative;
  background: linear-gradient(135deg, #8A2BE2 0%, #4B0082 100%);
  border-radius: 20px;
  padding: 35px;
  max-width: 90%;
  width: 500px;
  color: white;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.35);
  transform: scale(0.9);
  transition: transform 0.3s ease;
  overflow: hidden;
}

.newsletter-background {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E");
  opacity: 0.1;
  z-index: 0;
}

.newsletter-popup.show .newsletter-container {
  transform: scale(1);
}

.newsletter-close {
  position: absolute;
  top: 15px;
  right: 15px;
  background: rgba(255, 255, 255, 0.2);
  border: none;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  color: white;
  font-size: 1.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 1;
}

.newsletter-close:hover,
.newsletter-close:focus {
  background: rgba(255, 255, 255, 0.3);
  transform: rotate(90deg);
}

.newsletter-title {
  position: relative;
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  z-index: 1;
}

.newsletter-title i {
  margin-right: 12px;
  font-size: 1.5rem;
}

.newsletter-subtitle {
  position: relative;
  font-size: 1.05rem;
  margin-bottom: 20px;
  z-index: 1;
}

.newsletter-form {
  position: relative;
  margin-top: 25px;
  z-index: 1;
}

.newsletter-input {
  width: 100%;
  padding: 14px 18px;
  border-radius: 30px;
  border: none;
  background-color: rgba(255, 255, 255, 0.9);
  color: #333;
  font-size: 1rem;
  margin-bottom: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
}

.newsletter-input::placeholder {
  color: #777;
}

.newsletter-input:focus {
  outline: none;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  transform: translateY(-2px);
}

.newsletter-submit {
  position: relative;
  background: linear-gradient(135deg, #FFD304, #FFA500);
  color: #333;
  border: none;
  padding: 14px 20px;
  border-radius: 30px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  margin-top: 10px;
  width: 100%;
  justify-content: center;
  font-size: 1.05rem;
  overflow: hidden;
}

.newsletter-submit:hover,
.newsletter-submit:focus {
  background: linear-gradient(135deg, #FFE44D, #FFB700);
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
}

.newsletter-submit:disabled {
  background: linear-gradient(135deg, #d0d0d0, #a0a0a0);
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}

.newsletter-submit i {
  margin-right: 10px;
}

.newsletter-success {
  position: relative;
  background-color: rgba(0, 200, 83, 0.15);
  padding: 15px;
  border-radius: 10px;
  margin-top: 20px;
  display: none;
  animation: fadeIn 0.5s ease forwards;
  z-index: 1;
  border-left: 4px solid rgba(0, 200, 83, 0.6);
}

.newsletter-success.show {
  display: block;
}

.newsletter-error {
  position: relative;
  background-color: rgba(255, 0, 0, 0.15);
  padding: 15px;
  border-radius: 10px;
  margin-top: 20px;
  display: none;
  animation: fadeIn 0.5s ease forwards;
  z-index: 1;
  border-left: 4px solid rgba(255, 0, 0, 0.6);
}

.newsletter-error.show {
  display: block;
}

.newsletter-benefits {
  position: relative;
  margin-top: 20px;
  background-color: rgba(255, 255, 255, 0.1);
  padding: 20px;
  border-radius: 15px;
  z-index: 1;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.newsletter-benefits-title {
  font-weight: bold;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
}

.newsletter-benefits-title i {
  margin-right: 8px;
  color: #FFD304;
}

.newsletter-benefits-list {
  list-style: none;
  padding-left: 5px;
}

.newsletter-benefits-list li {
  position: relative;
  padding-left: 25px;
  margin-bottom: 10px;
  font-size: 0.95rem;
}

.newsletter-benefits-list li::before {
  content: "🦆";
  position: absolute;
  left: 0;
  top: 0;
}

/* Pop Culture section */
.pop-culture-section {
  position: relative;
  display: flex;
  gap: 15px;
  background-color: rgba(255, 255, 255, 0.15);
  padding: 18px;
  border-radius: 15px;
  margin: 20px 0;
  border-left: 4px solid #FFD304;
  z-index: 1;
  animation: glow 3s infinite alternate;
}

@keyframes glow {
  0% {
    box-shadow: 0 0 5px rgba(255, 211, 4, 0.3);
  }
  100% {
    box-shadow: 0 0 15px rgba(255, 211, 4, 0.6);
  }
}

.pop-culture-section i {
  font-size: 2.2rem;
  color: #FFD304;
  margin-top: 3px;
}

.pop-culture-text h3 {
  font-size: 1.1rem;
  margin-bottom: 5px;
  color: #FFD304;
}

.pop-culture-text p {
  font-size: 0.95rem;
  margin: 0;
}

.newsletter-redirect-notice {
  margin-top: 10px;
  font-size: 0.9em;
  padding: 8px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 5px;
  color: white;
}

.newsletter-redirect-notice i {
  margin-right: 5px;
}

/* Styles for the name field */
.newsletter-input:first-of-type {
  margin-bottom: 10px;
}

/* Gift newsletter */
.highlight-benefit {
  font-weight: bold;
  color: #FFD304;
  margin-bottom: 10px !important;
}

.highlight-benefit::before {
  content: "🎁" !important;
}

/* Pop Culture benefit with rocket icon */
.highlight-benefit.pop-culture::before {
  content: "🚀" !important;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .newsletter-container {
    padding: 25px;
    width: 90%;
  }
  
  .newsletter-title {
    font-size: 1.6rem;
  }
  
  .newsletter-subtitle {
    font-size: 1rem;
  }
  
  .pop-culture-section {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  
  .pop-culture-section i {
    margin-bottom: 10px;
  }
}

@media (max-width: 480px) {
  .newsletter-container {
    padding: 20px;
    max-width: 95%;
  }
  
  .newsletter-title {
    font-size: 1.4rem;
  }
  
  .newsletter-submit {
    padding: 12px 15px;
  }
  
  .newsletter-benefits-list li {
    padding-left: 22px;
    font-size: 0.9rem;
  }
  
  .newsletter-benefits {
    padding: 15px;
  }
  
  .pop-culture-text h3 {
    font-size: 1rem;
  }
  
  .pop-culture-text p {
    font-size: 0.9rem;
  }
}
</style>