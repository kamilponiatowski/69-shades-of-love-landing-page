<template>
    <div class="newsletter-popup" :class="{ show: show }" aria-modal="true" role="dialog">
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
            <li v-for="(benefit, index) in t('newsletterBenefitsList')" :key="index">
              {{ benefit }}
            </li>
          </ul>
        </div>
        
        <form class="newsletter-form" @submit.prevent="$emit('submit')">
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
        </div>
        
        <div class="newsletter-error" :class="{ show: showError }">
          <strong>{{ t('newsletterErrorTitle') }}</strong> 
          {{ t('newsletterErrorText') }}
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, watch } from 'vue';
  import { useI18n } from '@/composables/useI18n';
  
  // Props
  const props = defineProps<{
    show: boolean;
    email: string;
    showSuccess: boolean;
    showError: boolean;
    isSubmitting?: boolean;
  }>();
  
  // Emits
  const emit = defineEmits(['close', 'submit', 'update:email']);
  
  // State
  const emailValue = ref(props.email);
  
  // Watch for prop changes
  watch(() => props.email, (newValue) => {
    emailValue.value = newValue;
  });
  
  // Methods
  const updateEmail = (event: Event) => {
    const target = event.target as HTMLInputElement;
    emit('update:email', target.value);
  };
  
  // Composables
  const { t } = useI18n();
  </script>