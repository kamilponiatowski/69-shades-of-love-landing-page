<template>
    <div class="navigation-links">
      <router-link :to="backLink" class="back-link" v-if="backLink">
        <i class="fas fa-arrow-left"></i> {{ backText || t('backToJourney') }}
      </router-link>
      
      <router-link :to="forwardLink" class="forward-link" v-if="forwardLink">
        {{ forwardText || t('continue') }} <i class="fas fa-arrow-right"></i>
      </router-link>
    </div>
  </template>
  
  <script setup lang="ts">
  import { useI18n } from '@/composables/useI18n';
  
  const { t } = useI18n();
  
  defineProps({
    backLink: {
      type: String,
      default: ''
    },
    backText: {
      type: String,
      default: ''
    },
    forwardLink: {
      type: String,
      default: ''
    },
    forwardText: {
      type: String,
      default: ''
    }
  });
  </script>
  
  <style scoped>
  .navigation-links {
    text-align: center;
    margin-top: var(--space-8);
    margin-bottom: var(--space-10);
    display: flex;
    justify-content: center;
    gap: var(--space-4);
  }
  
  .back-link,
  .forward-link {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: white;
    background: linear-gradient(135deg, var(--color-primary), var(--color-primary-dark));
    text-decoration: none;
    padding: var(--space-3) var(--space-6);
    border-radius: var(--radius-full);
    transition: all var(--transition-normal) var(--transition-ease);
    font-weight: var(--font-weight-semibold);
    box-shadow: var(--shadow-primary);
    min-width: 180px;
    position: relative;
    overflow: hidden;
  }
  
  .back-link:hover,
  .forward-link:hover,
  .back-link:focus,
  .forward-link:focus {
    transform: translateY(-3px);
    box-shadow: var(--shadow-primary-hover);
  }
  
  .back-link i {
    margin-right: var(--space-2);
  }
  
  .forward-link i {
    margin-left: var(--space-2);
  }
  
  @media (max-width: 768px) {
    .back-link,
    .forward-link {
      min-width: 160px;
      padding: var(--space-2) var(--space-5);
    }
    
    .navigation-links {
      margin-top: var(--space-6);
      margin-bottom: var(--space-8);
    }
  }
  
  @media (max-width: 480px) {
    .navigation-links {
      flex-direction: column;
      gap: var(--space-3);
    }
    
    .back-link,
    .forward-link {
      min-width: 140px;
      padding: var(--space-2) var(--space-4);
      font-size: var(--font-size-sm);
      width: 100%;
    }
  }
  </style>