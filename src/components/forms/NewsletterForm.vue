<template>
  <div class="newsletter-embedded-form">
    <form class="newsletter-form" @submit.prevent="$emit('submit')">
      <!-- Name -->
      <input 
        type="text" 
        class="newsletter-input" 
        :placeholder="nameField"
        v-model="nameModel" 
        @input="updateName"
      >

      <!-- Email -->
      <input 
        type="email" 
        class="newsletter-input" 
        :placeholder="t('newsletterEmailPlaceholder')"
        required 
        v-model="emailModel" 
        @input="updateEmail"
      >

      <button 
        type="submit" 
        class="newsletter-submit animate-float" 
        :disabled="isSubmitting"
      >
        <span class="button-shine"></span>
        <i class="fas" :class="isSubmitting ? 'fa-spinner fa-spin' : 'fa-paper-plane'"></i>
        <span>{{ isSubmitting ? t('newsletterSubmitting') : t('newsletterSubmitText') }}</span>
      </button>
    </form>

    <div class="newsletter-success animate-fade-in" :class="{ show: showSuccess }">
      <strong>{{ t('newsletterSuccessTitle') }}</strong>
      {{ t('newsletterSuccessText') }}
    </div>

    <div class="newsletter-error animate-fade-in" :class="{ show: showError }">
      <strong>{{ t('newsletterErrorTitle') }}</strong>
      {{ t('newsletterErrorText') }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, computed } from 'vue';
import { useI18n } from '@/composables/useI18n';

const props = defineProps({
  newsletterEmail: {
    type: String,
    required: true
  },
  newsletterName: {
    type: String,
    default: ''
  },
  isSubmitting: {
    type: Boolean,
    default: false
  },
  showSuccess: {
    type: Boolean,
    default: false
  },
  showError: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['submit', 'update:email', 'update:name']);

const { t } = useI18n();

// Zdefiniowanie placeholder dla pola imienia
const nameField = computed(() => {
  return "Your Name (optional, but nice to meet you 💜)";
});

// Internal model values
const emailModel = ref(props.newsletterEmail);
const nameModel = ref(props.newsletterName);

// Sync with props
watch(() => props.newsletterEmail, (newVal) => {
  emailModel.value = newVal;
});

watch(() => props.newsletterName, (newVal) => {
  nameModel.value = newVal;
});

// Update methods
const updateEmail = () => {
  emit('update:email', emailModel.value);
};

const updateName = () => {
  emit('update:name', nameModel.value);
};
</script>

<style scoped>
.newsletter-embedded-form {
  margin-top: 40px;
  background: linear-gradient(135deg, rgba(138, 43, 226, 0.1), rgba(138, 43, 226, 0.05));
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.05);
}

.newsletter-form {
  position: relative;
  z-index: 1;
}

.newsletter-input {
  width: 100%;
  padding: 15px 20px;
  border-radius: 10px;
  border: 1px solid rgba(138, 43, 226, 0.2);
  background-color: rgba(255, 255, 255, 0.9);
  color: #333;
  font-size: 1rem;
  margin-bottom: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.newsletter-input::placeholder {
  color: #777;
}

.newsletter-input:focus {
  outline: none;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
  border-color: var(--accent-color);
}

.newsletter-submit {
  position: relative;
  background: linear-gradient(135deg, var(--accent-color), #6a11cb);
  color: white;
  border: none;
  padding: 15px 20px;
  border-radius: 10px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  margin-top: 10px;
  width: 100%;
  font-size: 1.05rem;
  overflow: hidden;
}

.newsletter-submit:hover,
.newsletter-submit:focus {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  background: linear-gradient(135deg, #7B25D1, #5a11ab);
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

.newsletter-success,
.newsletter-error {
  padding: 15px;
  border-radius: 10px;
  margin-top: 20px;
  display: none;
}

.newsletter-success {
  background-color: rgba(0, 200, 83, 0.15);
  border-left: 4px solid rgba(0, 200, 83, 0.6);
}

.newsletter-error {
  background-color: rgba(255, 0, 0, 0.15);
  border-left: 4px solid rgba(255, 0, 0, 0.6);
}

.newsletter-success.show,
.newsletter-error.show {
  display: block;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fadeIn 0.5s ease forwards;
}

@media (max-width: 768px) {
  .newsletter-embedded-form {
    padding: 20px;
  }
  
  .newsletter-input {
    padding: 12px 15px;
  }
  
  .newsletter-submit {
    padding: 12px 15px;
  }
}

@media (max-width: 480px) {
  .newsletter-embedded-form {
    padding: 15px;
    margin-top: 20px;
  }
  
  .newsletter-input {
    padding: 10px 12px;
    font-size: 0.95rem;
  }
  
  .newsletter-submit {
    padding: 10px 15px;
    font-size: 0.95rem;
  }
}
</style>