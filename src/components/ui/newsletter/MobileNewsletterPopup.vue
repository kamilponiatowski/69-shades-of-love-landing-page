<template>
    <div 
      class="mobile-newsletter-popup" 
      :class="{ show: show }"
      aria-live="polite"
      role="dialog"
      aria-modal="true"
    >
      <div class="mobile-popup-content">
        <button @click="$emit('close')" class="mobile-popup-close" aria-label="Close popup">
          <i class="fas fa-times"></i>
        </button>
        
        <div class="mobile-popup-message">
          <i class="fas fa-envelope-open-text"></i>
          <p>{{ t('newsletterBtnText') }} 🎁</p>
        </div>
        
        <button @click="$emit('navigate')" class="mobile-popup-button">
          <i class="fas fa-arrow-right"></i> {{ t('subscribe') }}
        </button>
      </div>
    </div>
  </template>
    
  <script setup lang="ts">
  import { useI18n } from '@/composables/useI18n';
    
  defineProps<{
    show: boolean;
  }>();
    
  defineEmits(['close', 'navigate']);
    
  const { t } = useI18n();
  </script>
    
  <style scoped>
  .mobile-newsletter-popup {
    position: fixed;
    bottom: -100px;
    left: 10px;
    right: 10px;
    border-radius: 15px;
    background: linear-gradient(135deg, var(--accent-color), #6a11cb);
    padding: 15px;
    box-shadow: 0 5px 25px rgba(0, 0, 0, 0.2);
    z-index: 1000;
    transition: transform 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55);
    transform: translateY(0);
    opacity: 0;
    pointer-events: none;
    max-width: 500px;
    margin: 0 auto;
  }
    
  .mobile-newsletter-popup.show {
    transform: translateY(-120px);
    opacity: 1;
    pointer-events: auto;
  }
    
  .mobile-popup-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    color: white;
  }
    
  .mobile-popup-close {
    position: absolute;
    top: -10px;
    right: -10px;
    width: 28px;
    height: 28px;
    background-color: rgba(255, 255, 255, 0.2);
    border: none;
    border-radius: 50%;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 0.9rem;
    transition: all 0.2s ease;
  }
    
  .mobile-popup-close:hover,
  .mobile-popup-close:focus {
    background-color: rgba(255, 255, 255, 0.3);
    transform: rotate(90deg);
  }
    
  .mobile-popup-message {
    display: flex;
    align-items: center;
    gap: 12px;
    flex: 1;
  }
    
  .mobile-popup-message i {
    font-size: 1.5rem;
    color: white;
  }
    
  .mobile-popup-message p {
    margin: 0;
    font-weight: 600;
    font-size: 0.95rem;
  }
    
  .mobile-popup-button {
    background-color: rgba(255, 255, 255, 0.2);
    color: white;
    border: none;
    border-radius: 20px;
    padding: 8px 15px;
    font-size: 0.9rem;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    white-space: nowrap;
  }
    
  .mobile-popup-button:hover,
  .mobile-popup-button:focus {
    background-color: rgba(255, 255, 255, 0.3);
    transform: translateY(-2px);
  }
    
  .mobile-popup-button i {
    margin-right: 6px;
  }
    
  @media (max-width: 480px) {
    .mobile-newsletter-popup {
      left: 5px;
      right: 5px;
      padding: 12px;
    }
    
    .mobile-popup-message i {
      font-size: 1.3rem;
    }
    
    .mobile-popup-message p {
      font-size: 0.85rem;
    }
    
    .mobile-popup-button {
      padding: 6px 12px;
      font-size: 0.85rem;
    }
  }
  </style>