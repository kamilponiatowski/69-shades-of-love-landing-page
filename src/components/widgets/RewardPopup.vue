<template>
  <div 
    class="reward-animation" 
    :class="{ show: showReward, 'pdf-unlocked': isPdfUnlock }" 
    @click="handleBackdropClick" 
    role="dialog" 
    aria-modal="true" 
    aria-labelledby="reward-title"
  >
    <div class="reward-content">
      <div class="reward-background"></div>
      <div class="reward-icon animate-pulse">
        <i class="fas" :class="iconClass" aria-hidden="true"></i>
      </div>
      <h3 class="reward-title" id="reward-title">{{ rewardTitle }}</h3>
      <p class="reward-description">{{ rewardDescription }}</p>
      <button class="reward-button animate-float" @click="$emit('close')">
        <span class="button-shine"></span>
        {{ isPdfUnlock ? pdfUnlockButtonText : continueButtonText }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from '@/composables/useI18n';
import { computed } from 'vue';

// Props with proper TypeScript definitions and defaults
const props = defineProps({
  showReward: {
    type: Boolean,
    required: true
  },
  rewardTitle: {
    type: String,
    default: ''
  },
  rewardDescription: {
    type: String,
    default: ''
  },
  category: { 
    type: String,
    default: ''
  }
});

// Emits
const emit = defineEmits<{
  (e: 'close'): void;
}>();

// Composables
const { t } = useI18n();

// Computed
const isPdfUnlock = computed(() => {
  const title = props.rewardTitle || '';
  return title.includes('Mind Map') || title.includes('Mapa Myśli');
});

const isSpecialReward = computed(() => {
  const title = props.rewardTitle || '';
  return title.includes('Champion') || 
         title.includes('Mistrz') ||
         isPdfUnlock.value;
});

const iconClass = computed(() => {
  // Category-specific icons - check if category is provided
  if (props.category) {
    switch (props.category) {
      case 'physical':
        return 'fa-running';
      case 'mental':
        return 'fa-brain';
      case 'personal':
        return 'fa-smile-beam';
      case 'relationship':
        return 'fa-users';
      default:
        // No match, continue with other checks
        break;
    }
  }
  
  // PDF unlocked icon
  if (isPdfUnlock.value) {
    return 'fa-file-pdf';
  }
  
  // Special achievement icon
  const title = props.rewardTitle || '';
  if (title.includes('Champion') || title.includes('Mistrz')) {
    return 'fa-trophy';
  }
  
  // Regular tip/insight icon
  if (title.includes('Insight') || title.includes('Wskazówka')) {
    return 'fa-lightbulb';
  }
  
  // Default icon for other rewards
  return 'fa-crown';
});

// Constants
const continueButtonText = t('continue');
const pdfUnlockButtonText = t('downloadPdfNow') || 'Download PDF Now';

// Methods
const handleBackdropClick = (event: MouseEvent) => {
  // User can close all popups by clicking outside, as all now require explicit interaction
  emit('close');
};
</script>

<style scoped>
.reward-animation {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 999;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
}

.reward-animation.show {
  opacity: 1;
  pointer-events: auto;
}

.reward-content {
  position: relative;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(250, 250, 250, 0.9));
  padding: 35px;
  border-radius: 20px;
  text-align: center;
  max-width: 90%;
  width: 450px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.25);
  transform: scale(0.8);
  transition: transform 0.3s ease;
  overflow: hidden;
}

.reward-background {
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

.reward-animation.show .reward-content {
  transform: scale(1);
  animation: rewardPulse 0.5s ease-in-out;
}

.reward-icon {
  position: relative;
  z-index: 1;
  width: 80px;
  height: 80px;
  margin: 0 auto 20px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.5rem;
  color: white;
  background: linear-gradient(135deg, var(--main-color), #a01a30);
  box-shadow: 0 10px 20px rgba(196, 30, 58, 0.3);
  animation: pulse 1s infinite alternate;
}

/* Enhanced animation for PDF unlock */
.pdf-unlocked .reward-icon {
  background: linear-gradient(135deg, var(--accent-color), #6a11cb);
  animation: spin 1.5s ease-out, pulse 1s infinite alternate;
  box-shadow: 0 10px 20px rgba(138, 43, 226, 0.3);
}

.reward-title {
  position: relative;
  z-index: 1;
  font-size: 1.8rem;
  color: var(--main-color);
  margin-bottom: 15px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.pdf-unlocked .reward-title {
  color: var(--accent-color);
}

.reward-description {
  position: relative;
  z-index: 1;
  color: #444;
  margin-bottom: 25px;
  line-height: 1.6;
}

.reward-button {
  position: relative;
  z-index: 1;
  background: linear-gradient(135deg, var(--main-color), #a01a30);
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 30px;
  cursor: pointer;
  font-weight: bold;
  font-size: 1rem;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(196, 30, 58, 0.2);
  overflow: hidden;
}

.pdf-unlocked .reward-button {
  background: linear-gradient(135deg, var(--accent-color), #6a11cb); 
  box-shadow: 0 5px 15px rgba(138, 43, 226, 0.2);
}

.reward-button:hover, 
.reward-button:focus {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(196, 30, 58, 0.3);
}

.pdf-unlocked .reward-button:hover, 
.pdf-unlocked .reward-button:focus {
  box-shadow: 0 8px 20px rgba(138, 43, 226, 0.3);
}

/* Responsive styles */
@media (max-width: 768px) {
  .reward-content {
    padding: 25px;
    width: 90%;
  }
  
  .reward-icon {
    width: 70px;
    height: 70px;
    font-size: 2rem;
  }
  
  .reward-title {
    font-size: 1.6rem;
  }
}

@media (max-width: 480px) {
  .reward-content {
    padding: 20px;
  }
  
  .reward-icon {
    width: 60px;
    height: 60px;
    font-size: 1.8rem;
    margin-bottom: 15px;
  }
  
  .reward-title {
    font-size: 1.4rem;
  }
  
  .reward-button {
    width: 100%;
    padding: 10px 20px;
  }
}
</style>