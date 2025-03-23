<template>
    <div class="download-pdf-section">
      <h2 class="pdf-title">{{ t('pdfTitle') }}</h2>
      
      <button 
        v-if="isUnlocked && !pdfSectionCollapsed" 
        class="pdf-section-toggle" 
        @click="toggleSection(true)"
        :aria-label="t('collapsePdfSection')"
      >
        <i class="fas fa-times" aria-hidden="true"></i>
      </button>
      
      <button 
        v-if="isUnlocked && pdfSectionCollapsed" 
        class="pdf-section-toggle" 
        @click="toggleSection(false)"
        :aria-label="t('expandPdfSection')"
      >
        <i class="fas fa-chevron-down" aria-hidden="true"></i>
      </button>
      
      <a :href="isUnlocked ? pdfLink : '#'" 
        :class="['download-button', !isUnlocked ? 'locked' : '']"
        :download="isUnlocked"
        target="_blank"
        rel="noopener noreferrer"
        :aria-disabled="!isUnlocked"
        @click.prevent="handleDownloadClick"
      >
        <i class="fas" :class="isUnlocked ? 'fa-download' : 'fa-lock'" aria-hidden="true"></i>
        <span class="download-text">{{ isUnlocked ? t('downloadButton') : t('lockButton') }}</span>
      </a>
      
      <div :class="pdfSectionCollapsed && isUnlocked ? 'pdf-content-collapsed' : 'pdf-content'">
        <p class="download-info" v-if="!isUnlocked">
          <span class="download-info-text">{{ t('downloadInfoLocked', tasksToUnlock) }}</span>
        </p>
        <p class="download-info" v-else>
          <span class="download-info-text">{{ t('downloadInfoUnlocked') }}</span>
        </p>
        <img 
          v-if="isUnlocked" 
          class="qr-code" 
          src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://drive.google.com/file/d/1fPwsiyJxmMKKHA5ImRSDfjWk14NCnl-V/view?usp=drive_link" 
          alt="QR Code for PDF download"
          loading="lazy"
        >
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { useI18n } from '../../composables/useI18n';
  
  // Props
  const props = defineProps<{
    progressPercentage: number;
    tasksToUnlock: number;
    isUnlocked: boolean;
    pdfSectionCollapsed: boolean;
  }>();
  
  // Emits
  const emit = defineEmits(['update:pdfSectionCollapsed']);
  
  // Constants
  const pdfLink = "https://drive.google.com/file/d/1fPwsiyJxmMKKHA5ImRSDfjWk14NCnl-V/view?usp=drive_link";
  
  // Composables
  const { t } = useI18n();
  
  // Methods
  const toggleSection = (collapsed: boolean) => {
    emit('update:pdfSectionCollapsed', collapsed);
  };
  
  const handleDownloadClick = (event: Event) => {
    if (!props.isUnlocked) {
      event.preventDefault();
      // Opcjonalnie: wyświetl komunikat o konieczności wykonania zadań do odblokowania
    }
  };
  </script>
  
  <style scoped>
  /* Styl komponentu jest obsługiwany przez globalne CSS */
  </style>