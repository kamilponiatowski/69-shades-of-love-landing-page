<template>
  <div class="modern-pdf-section">
    <div class="pdf-background"></div>
    
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
      
      <a :href="isUnlocked ? pdfLinkDirect : '#'" 
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
          
          <!-- Progress bar - now outside of p tag -->
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

// Props
const props = defineProps<{
  progressPercentage: number;
  tasksToUnlock: number;
  isUnlocked: boolean;
  pdfSectionCollapsed: boolean;
}>();

// Emits
const emit = defineEmits(['update:pdfSectionCollapsed', 'pdf-unlocked']);

// Constants
const pdfLink = "https://drive.google.com/file/d/1S3CJpPErS32TricQWptR04D7eRDSHyyS/view?usp=sharing";
// Direct link to download PDF instead of link to Google Drive
const pdfLinkDirect = "https://drive.google.com/uc?export=download&id=1S3CJpPErS32TricQWptR04D7eRDSHyyS";

// State
const wasLocked = ref(true);

// Computed value for progress bar width, specifically for unlocking progress
const unlockPercentage = computed(() => {
  // PDF is unlocked at 20%, so we scale the progress to 0-100% based on 0-20%
  return Math.min(100, (props.progressPercentage / 20) * 100);
});

// Composables
const { t } = useI18n();

// Methods
const toggleSection = (collapsed: boolean) => {
  emit('update:pdfSectionCollapsed', collapsed);
};

const handleDownloadClick = (event: Event) => {
  if (!props.isUnlocked) {
    event.preventDefault();
    // Optionally: display a message about the tasks to be unblocked
    return;
  }
  
  // If PDF is unlocked, allow default browser action (download)
  // Do not stop the event
};

// Watch for PDF unlock moment
watch(() => props.isUnlocked, (newValue, oldValue) => {
  // Only emit when changed from locked to unlocked
  if (newValue && !oldValue && wasLocked.value) {
    emit('pdf-unlocked');
    wasLocked.value = false;
  }
}, { immediate: true });
</script>

<style scoped>
/* Modern PDF section with pattern and gradient, matching Header/Footer style */
.modern-pdf-section {
  position: relative;
  margin-bottom: 30px;
  padding: 30px;
  background: linear-gradient(120deg, rgba(196, 30, 58, 0.1), rgba(138, 43, 226, 0.1));
  border-radius: 15px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  transition: transform 0.3s ease;
}

.modern-pdf-section:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
}

/* Background pattern matching header and footer */
.pdf-background {
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

/* Content positioning */
.pdf-content {
  position: relative;
  z-index: 1;
}

/* Header styling with flexbox instead of float */
.pdf-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.pdf-title {
  color: var(--main-color);
  font-size: 1.5rem;
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

/* Toggle button styling */
.pdf-section-toggle {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.05);
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
  cursor: pointer;
  transition: all 0.3s ease;
}

.pdf-section-toggle:hover, 
.pdf-section-toggle:focus {
  background-color: rgba(0, 0, 0, 0.1);
  color: var(--main-color);
  transform: rotate(90deg);
}

/* Download button styling */
.download-button {
  background: linear-gradient(135deg, var(--main-color), #a01a30);
  color: white;
  border: none;
  padding: 14px 25px;
  border-radius: 30px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  box-shadow: 0 4px 15px rgba(196, 30, 58, 0.2);
  margin-bottom: 20px;
  position: relative;
  overflow: hidden;
}

/* Button shine effect */
.download-button::after {
  content: '';
  position: absolute;
  top: 0;
  left: -50%;
  width: 150%;
  height: 100%;
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.3) 50%,
    rgba(255, 255, 255, 0) 100%
  );
  transform: translateX(-100%) skewX(-15deg);
  transition: transform 0.6s ease;
}

.download-button:hover::after {
  transform: translateX(100%) skewX(-15deg);
}

.download-button:hover, 
.download-button:focus {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(196, 30, 58, 0.3);
}

.download-button.locked {
  background: linear-gradient(135deg, #888, #666);
  cursor: not-allowed;
}

.download-button.locked:hover {
  transform: none;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.download-button.locked::after {
  display: none;
}

.download-button i {
  margin-right: 10px;
  font-size: 1.1rem;
}

/* PDF details section */
.pdf-details {
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 12px;
  padding: 20px;
  transition: all 0.4s ease;
  max-height: 500px;
  overflow: hidden;
}

/* Collapsed state */
.pdf-details-collapsed {
  height: 0;
  padding: 0;
  margin: 0;
  opacity: 0;
  overflow: hidden;
  transition: all 0.4s ease;
}

/* Download info styling */
.download-info {
  color: #555;
  line-height: 1.6;
  margin-bottom: 15px;
}

/* Unlock progress bar container - similar to main progress bar */
.unlock-progress-container {
  margin-top: 15px;
}

.progress-stats {
  text-align: right;
  color: #555;
  font-weight: bold;
  margin-bottom: 5px;
  font-size: 0.9rem;
  background-color: rgba(255, 255, 255, 0.5);
  padding: 3px 10px;
  border-radius: 15px;
  display: inline-block;
  /* Removed float: right and added flexbox in container */
}

/* Progress bar styling - modeled after main progress bar */
.unlock-progress-bar {
  height: 14px;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 7px;
  overflow: hidden;
  margin: 5px 0 10px;
  box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.05);
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

/* Animation like in the main progress bar */
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

@keyframes move {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 20px 0;
  }
}

/* QR code styling */
.qr-code {
  display: block;
  width: 150px;
  height: 150px;
  margin: 20px auto 10px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  border: 5px solid white;
  transition: transform 0.3s ease;
}

.qr-code:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .modern-pdf-section {
    padding: 20px;
  }
  
  .pdf-title {
    font-size: 1.3rem;
  }
  
  .download-button {
    padding: 12px 20px;
  }
  
  .pdf-details {
    padding: 15px;
  }
  
  .unlock-progress-bar {
    height: 12px;
  }
}

/* For smaller screens */
@media (max-width: 480px) {
  .modern-pdf-section {
    padding: 15px;
  }
  
  .pdf-title {
    font-size: 1.2rem;
  }
  
  .pdf-section-toggle {
    width: 32px;
    height: 32px;
  }
  
  .download-button {
    padding: 10px 15px;
  }
  
  .download-button i {
    margin-right: 8px;
  }
  
  .pdf-details {
    padding: 12px;
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