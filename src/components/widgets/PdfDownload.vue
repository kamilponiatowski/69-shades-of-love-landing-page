<template>
  <div class="pdf-section">
    <div class="pattern-background"></div>
    
    <div class="pdf-content">
      <div class="pdf-header">
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
      </div>
      
      <a :href="isUnlocked ? pdfLink : '#'" 
        :class="['download-button', !isUnlocked ? 'locked' : '']"
        :download="isUnlocked"
        target="_blank"
        rel="noopener noreferrer"
        :aria-disabled="!isUnlocked"
        @click="handleDownloadClick"
      >
        <i class="fas" :class="isUnlocked ? 'fa-download' : 'fa-lock'" aria-hidden="true"></i>
        <span class="download-text">{{ isUnlocked ? t('downloadButton') : t('lockButton') }}</span>
      </a>
      
      <div :class="pdfSectionCollapsed && isUnlocked ? 'pdf-details-collapsed' : 'pdf-details'">
        <div class="download-info" v-if="!isUnlocked">
          <span class="download-info-text">{{ t('downloadInfoLocked', tasksToUnlock) }}</span>
          
          <div class="unlock-progress-container">
            <div class="progress-stats">{{ progressPercentage }}%</div>
            <div class="unlock-progress-bar" 
                role="progressbar" 
                :aria-valuenow="progressPercentage" 
                aria-valuemin="0" 
                aria-valuemax="100">
              <div class="unlock-progress-fill" :style="{ width: `${unlockPercentage}%` }"></div>
            </div>
          </div>
        </div>
        <div class="download-info" v-else>
          <span class="download-info-text">{{ t('downloadInfoUnlocked') }}</span>
        </div>
        <img 
          v-if="isUnlocked" 
          class="qr-code" 
          src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://drive.google.com/file/d/1fPwsiyJxmMKKHA5ImRSDfjWk14NCnl-V/view?usp=drive_link" 
          alt="QR Code for PDF download"
          loading="lazy"
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from '@/composables/useI18n';
import { watch, ref, computed } from 'vue';

const props = defineProps<{
  progressPercentage: number;
  tasksToUnlock: number;
  isUnlocked: boolean;
  pdfSectionCollapsed: boolean;
}>();

const emit = defineEmits(['update:pdfSectionCollapsed', 'pdf-unlocked']);

const pdfLink = "/assets/files/poc-of_69-Shades-of-Self-Love.pdf";

const wasLocked = ref(true);

const unlockPercentage = computed(() => {
  return Math.min(100, (props.progressPercentage / 20) * 100);
});

const { t } = useI18n();

const toggleSection = (collapsed: boolean) => {
  emit('update:pdfSectionCollapsed', collapsed);
};

const handleDownloadClick = (event: Event) => {
  if (!props.isUnlocked) {
    event.preventDefault();
    return;
  }
  
};

watch(() => props.isUnlocked, (newValue, oldValue) => {
  if (newValue && !oldValue && wasLocked.value) {
    emit('pdf-unlocked');
    wasLocked.value = false;
  }
}, { immediate: true });
</script>

<style scoped>
.pdf-section {
  position: relative;
  margin-bottom: var(--space-6);
  padding: var(--space-6);
  background: linear-gradient(120deg, rgba(196, 30, 58, 0.1), rgba(138, 43, 226, 0.1));
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  overflow: hidden;
  transition: transform var(--transition-normal) var(--transition-ease);
}

.pdf-section:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
}

.pdf-content {
  position: relative;
  z-index: 1;
}

.pdf-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--space-5);
}

.pdf-title {
  color: var(--main-color);
  font-size: var(--font-size-xl);
  margin: 0;
  position: relative;
}

.pdf-title::after {
  content: "";
  position: absolute;
  width: 40px;
  height: 3px;
  background: linear-gradient(90deg, var(--main-color), var(--accent-color));
  bottom: -7px;
  left: 0;
  border-radius: 2px;
}

.pdf-section-toggle {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.05);
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text-light);
  cursor: pointer;
  transition: all var(--transition-normal) var(--transition-ease);
}

.pdf-section-toggle:hover, 
.pdf-section-toggle:focus {
  background-color: rgba(0, 0, 0, 0.1);
  color: var(--main-color);
  transform: rotate(90deg);
}

.pdf-details {
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: var(--radius-md);
  padding: var(--space-5);
  transition: all var(--transition-normal) var(--transition-ease);
  max-height: 500px;
  overflow: hidden;
}

.pdf-details-collapsed {
  height: 0;
  padding: 0;
  margin: 0;
  opacity: 0;
  overflow: hidden;
  transition: all var(--transition-normal) var(--transition-ease);
}

.download-info {
  color: var(--color-text-light);
  line-height: var(--line-height-normal);
  margin-bottom: var(--space-4);
}

.unlock-progress-container {
  margin-top: var(--space-4);
}

.progress-stats {
  text-align: right;
  color: var(--color-text-light);
  font-weight: var(--font-weight-bold);
  margin-bottom: var(--space-1);
  font-size: var(--font-size-sm);
  background-color: rgba(255, 255, 255, 0.5);
  padding: var(--space-1) var(--space-2);
  border-radius: var(--radius-full);
  display: inline-block;
}

.unlock-progress-bar {
  height: 14px;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 7px;
  overflow: hidden;
  margin: 5px 0 10px;
  box-shadow: var(--shadow-inset);
  position: relative;
  clear: both;
}

.unlock-progress-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--physical-color), var(--mental-color), var(--personal-color), var(--relationship-color));
  border-radius: 7px;
  transition: width 0.7s cubic-bezier(0.22, 1, 0.36, 1);
  position: relative;
  overflow: hidden;
}

.unlock-progress-fill::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    45deg,
    rgba(255, 255, 255, 0) 25%,
    rgba(255, 255, 255, 0.2) 25%,
    rgba(255, 255, 255, 0.2) 50%,
    rgba(255, 255, 255, 0) 50%,
    rgba(255, 255, 255, 0) 75%,
    rgba(255, 255, 255, 0.2) 75%
  );
  background-size: 20px 20px;
  animation: move 1s linear infinite;
}

.qr-code {
  display: block;
  width: 150px;
  height: 150px;
  margin: var(--space-5) auto var(--space-2);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-md);
  border: 5px solid white;
  transition: transform var(--transition-normal) var(--transition-ease);
}

.qr-code:hover {
  transform: scale(1.05);
  box-shadow: var(--shadow-lg);
}

@media (max-width: 768px) {
  .pdf-section {
    padding: var(--space-5);
  }
  
  .pdf-title {
    font-size: var(--font-size-lg);
  }
  
  .pdf-details {
    padding: var(--space-4);
  }
}

@media (max-width: 480px) {
  .pdf-section {
    padding: var(--space-4);
  }
  
  .pdf-title {
    font-size: var(--font-size-base);
  }
  
  .pdf-section-toggle {
    width: 32px;
    height: 32px;
  }
  
  .pdf-details {
    padding: var(--space-3);
  }
  
  .unlock-progress-bar {
    height: 10px;
  }
  
  .progress-stats {
    font-size: 0.85rem;
    padding: 2px 8px;
  }
}
</style>