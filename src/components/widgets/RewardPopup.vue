<template>
  <div 
    class="reward-animation" 
    :class="{ show: showReward, 'pdf-unlocked': isPdfUnlock }" 
    @click="handleBackdropClick" 
    role="dialog" 
    aria-modal="true" 
    aria-labelledby="reward-title"
  >
    <div class="reward-content" @click.stop>
      <div class="reward-icon">
        <i class="fas" :class="iconClass" aria-hidden="true"></i>
      </div>
      <h3 class="reward-title" id="reward-title">{{ rewardTitle }}</h3>
      <p class="reward-description">{{ rewardDescription }}</p>
      <button class="reward-button" @click="$emit('close')">
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
  // Only close popup by clicking background if it's not a special achievement
  if (!isSpecialReward.value) {
    emit('close');
  }
};
</script>

<style scoped>
/* Style is handled by global CSS */
</style>