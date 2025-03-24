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

// Props
const props = defineProps<{
  showReward: boolean;
  rewardTitle: string;
  rewardDescription: string;
}>();

// Emits
const emit = defineEmits<{
  (e: 'close'): void;
}>();

// Composables
const { t } = useI18n();

// Computed
const isPdfUnlock = computed(() => {
  return props.rewardTitle.includes('Mind Map') || 
         props.rewardTitle.includes('Mapa Myśli');
});

const iconClass = computed(() => {
  if (isPdfUnlock.value) {
    return 'fa-file-pdf';
  }
  
  if (props.rewardTitle.includes('Champion') || props.rewardTitle.includes('Mistrz')) {
    return 'fa-trophy';
  }
  
  return 'fa-crown';
});

// Constants
const continueButtonText = t('continue');
const pdfUnlockButtonText = t('downloadPdfNow') || 'Download PDF Now';

// Methods
const handleBackdropClick = (event: MouseEvent) => {
  // Kliknięcie tła zamyka popup tylko jeśli to NIE jest osiągnięcie PDF lub specjalne osiągnięcie końcowe
  if (!isPdfUnlock.value && 
      !props.rewardTitle.includes('Champion') && 
      !props.rewardTitle.includes('Mistrz')) {
    emit('close');
  }
};
</script>

<style scoped>
/* Styl komponentu jest obsługiwany przez globalne CSS */
</style>