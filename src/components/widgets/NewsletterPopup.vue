<template>
  <div class="newsletter-popup" :class="{ show }" aria-modal="true" role="dialog">
    <div class="newsletter-container">
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
        
        <button type="submit" class="newsletter-submit" :disabled="isSubmitting">
          <i class="fas" :class="isSubmitting ? 'fa-spinner fa-spin' : 'fa-paper-plane'"></i> 
          <span>{{ isSubmitting ? t('newsletterSubmitting') : t('newsletterSubmitText') }}</span>
        </button>
      </form>
      
      <div class="newsletter-success" :class="{ show: showSuccess }">
        <strong>{{ t('newsletterSuccessTitle') }}</strong> 
        {{ t('newsletterSuccessText') }}
        <p class="newsletter-redirect-notice" v-if="showSuccess">
          <i class="fas fa-info-circle"></i> 
          Formularz zostanie otwarty w nowej karcie. Po zapisaniu prosimy o powrót do tej strony.
        </p>
      </div>
      
      <div class="newsletter-error" :class="{ show: showError }">
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
</style>