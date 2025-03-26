<template>
  <div class="about-me-container">
    <div class="duck-pattern" aria-hidden="true">🦆</div>
    <h2 class="about-me-title">
      <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCIgdmlld0JveD0iMCAwIDg3OSA4NzkiPjxwYXRoIGQ9Ik0gMzA3IDExNS4xMzQgQyAyNTAuNjMyIDEyMC44OTUsIDE5NS45ODcgMTQ5LjQ5NSwgMTU5LjIwNSAxOTIuNDg4IEMgMTEzLjQ5NCAyNDUuOTE4LCA5NS4xNzggMzE0LjMyOCwgMTA4LjA2MiAzODMuNTAwIEMgMTE3LjUyMSA0MzQuMjgyLCAxNDYuMTI3IDQ4Mi40MTIsIDE4Ni41MDAgNTE1LjQ3MyBDIDE5OS4wNDUgNTI1Ljc0NiwgMjA0Ljk1NiA1MjkuNzIxLCAyMjYuMDc4IDU0Mi4wOTAgQyAyNDQuMjA1IDU1Mi43MDYsIDI2MS4wMTEgNTYyLjU1OCwgMzAzIDU4Ny4xODcgQyAzMTcuNTc1IDU5NS43MzYsIDM4Ni44NzUgNjM2LjM4MSwgNDU3IDY3Ny41MTAgQyA1MjcuMTI1IDcxOC42MzksIDU4Ni45MDUgNzUzLjM2MiwgNTg5Ljg0MyA3NTQuNjczIEMgNjA5Ljg4MCA3NjMuNjEzLCA2NDEuMjA5IDc2Ni42NTMsIDY2NS4zMDAgNzYxLjk5NiBDIDcwNy4zOTAgNzUzLjg2MCwgNzQyLjU0OSA3MjcuMDc0LCA3NjEuNzcxIDY4OC41MDAgQyA3NzcuMDkwIDY1Ny43NTksIDc3OS42OTIgNjE5LjkxMywgNzY4Ljc4NSA1ODYuNTAwIEMgNzYzLjgyOSA1NzEuMzE3LCA3NTYuMzM3IDU1OC43MDgsIDcyNi43NzggNTE1LjgwMiBDIDcwMC4xNzQgNDc3LjE4NSwgNjYwLjUxNiA0MTkuNTc5LCA1OTguNTIyIDMyOS41MDAgQyA1ODQuMTM4IDMwOC42MDAsIDU1OS4zODAgMjcyLjYwMCwgNTQzLjUwNCAyNDkuNTAwIEMgNTEyLjQwMCAyMDQuMjQzLCA1MDguMTY0IDE5OC40NzgsIDQ5Ny41NzUgMTg3LjAwNCBDIDQ0OS4wMTAgMTM0LjM3NCwgMzc4LjU5MiAxMDcuODE4LCAzMDcgMTE1LjEzNCBNIDI5Ny41MDAgMjQ2LjA3MiBDIDI3OC40MTAgMjQ3LjQ0MiwgMjU5LjYyMCAyNDkuMDc3LCAyNTYuMjQ0IDI0OS42NjEgTCAyNTIuOTg5IDI1MC4yMjUgMjUzLjI0NCAzMzMuMzYyIEwgMjUzLjUwMCA0MTYuNTAwIDI4Ny43NTAgNDE2Ljc2MyBMIDMyMiA0MTcuMDI2IDMyMiA0MDEuNzYzIEwgMzIyLjAwMSAzODYuNTAwIDMzOC4yNTAgMzg2LjQxMyBDIDM1Ni4yNjIgMzg2LjMxNywgMzY0LjYyMSAzODQuNzA1LCAzNzYuODkzIDM3OC45NjMgQyAzOTcuNDE5IDM2OS4zNTgsIDQxMi44NDQgMzUwLjU3MywgNDE3LjU0MSAzMjkuNDYxIEMgNDE5LjY3NyAzMTkuODU5LCA0MTkuMTAyIDI5Ni44MDYsIDQxNi40OTMgMjg3LjUwMCBDIDQwOS43NTEgMjYzLjQ0NCwgMzkzLjE0MiAyNTAuODE2LCAzNjIuNTE3IDI0Ni40NjEgQyAzNTEuNjAzIDI0NC45MDksIDMxNi42MTQgMjQ0LjY5OSwgMjk3LjUwMCAyNDYuMDcyIE0gMzQwLjUwMCAyODkuODQ1IEMgMzM1LjAyMSAyOTEuODk5LCAzMjkuMjgwIDI5NS4wNjksIDMyNC4yNTAgMjk4LjgxNiBMIDMyMSAzMDEuMjM3IDMyMSAzMTkuOTUyIEMgMzIxIDMzMC4yNDUsIDMyMS4yNzggMzM4Ljk0NSwgMzIxLjYxOCAzMzkuMjg0IEMgMzIyLjU4NSAzNDAuMjUyLCAzMzguODIyIDMzMS43MjAsIDM0NS43ODkgMzI2LjU4MyBDIDM1My4wNTEgMzIxLjIyOSwgMzU3LjQxOCAzMTQuOTYwLCAzNTkuMDkwIDMwNy40ODggQyAzNjIuMjk1IDI5My4xNjcsIDM1My42MTQgMjg0LjkyOCwgMzQwLjUwMCAyODkuODQ1IiBzdHJva2U9Im5vbmUiIGZpbGw9IiNmZmZmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==" alt="Duck Icon" aria-hidden="true">
      <span class="about-title-text">{{ t('aboutTitle') }}</span>
    </h2>
    <p class="about-me-content">
      <span class="about-content-text" v-html="formattedAboutContent"></span>
    </p>
    <div class="contact-info">
      <a href="mailto:producktive@proton.me" class="contact-link" aria-label="Email the creator">
        <i class="fas fa-envelope" aria-hidden="true"></i> producktive@proton.me
      </a>
    </div>
    <!-- Actions container -->
    <div class="about-me-buttons">
      <a href="https://tiptopjar.com/proDucktive" target="_blank" 
         class="support-button" 
         :class="{'shake-animation': isShaking}"
         rel="noopener">
        <i class="fas fa-heart" aria-hidden="true"></i> <span class="support-text">{{ t('supportButton') }}</span>
      </a>
      <NewsletterButton @click="$emit('open-newsletter')" :isSubscribed="isSubscribed" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted, onBeforeUnmount } from 'vue';
import { useI18n } from '@/composables/useI18n';
import NewsletterButton from './NewsletterButton.vue';

// Props
defineProps({
  isSubscribed: {
    type: Boolean,
    default: false
  }
});

// Composables
const { t } = useI18n();

// Emits
defineEmits(['open-newsletter']);

// Animation state
const isShaking = ref(false);
let shakeTimer: ReturnType<typeof setTimeout> | null = null;
let shakeInterval: ReturnType<typeof setInterval> | null = null;

// Computed
const formattedAboutContent = computed(() => {
  return t('aboutContent').replace('\\n\\n', '<br><br>');
});

/**
 * Triggers shake animation for support button
 * Creates attention-grabbing effect
 */
const triggerShake = () => {
  isShaking.value = true;
  
  // Stop shaking after 1.5 seconds
  if (shakeTimer) clearTimeout(shakeTimer);
  shakeTimer = setTimeout(() => {
    isShaking.value = false;
  }, 1500);
};

// Lifecycle hooks
onMounted(() => {
  // First animation after 5 seconds
  setTimeout(() => {
    triggerShake();
  }, 5000);
  
  // Set interval for periodic animations - every 45 seconds
  shakeInterval = setInterval(() => {
    triggerShake();
  }, 45000);
});

onBeforeUnmount(() => {
  // Clean up timers
  if (shakeTimer) clearTimeout(shakeTimer);
  if (shakeInterval) clearInterval(shakeInterval);
});
</script>

<style scoped>
/* Enhanced modern look for About Me container */
.about-me-container {
  background: linear-gradient(135deg, #7B25D1 0%, #4B0082 100%);
  border-radius: 15px;
  padding: 30px;
  margin-bottom: 30px;
  color: white;
  box-shadow: 0 10px 30px rgba(74, 20, 140, 0.3);
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.about-me-container:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(74, 20, 140, 0.4);
}

.about-me-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  position: relative;
}

.about-me-title::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -8px;
  width: 50px;
  height: 3px;
  background: linear-gradient(90deg, #FFD304, rgba(255, 255, 255, 0.7));
  border-radius: 3px;
}

.about-me-title img {
  width: 30px;
  height: 30px;
  margin-right: 10px;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
}

.about-me-content {
  line-height: 1.7;
  margin-bottom: 25px;
  font-size: 1.05rem;
}

.contact-info {
  margin-bottom: 15px;
}

/* Contact link styling */
.contact-link {
  display: inline-flex;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.15);
  color: rgba(255, 255, 255, 0.95);
  text-decoration: none;
  font-weight: 500;
  padding: 8px 15px;
  border-radius: 30px;
  transition: all 0.3s ease;
}

.contact-link:hover, 
.contact-link:focus {
  background-color: rgba(255, 255, 255, 0.25);
  color: white;
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.contact-link i {
  margin-right: 8px;
}

/* Button container */
.about-me-buttons {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 15px;
  width: 100%;
}

/* Support button styling */
.support-button {
  background: linear-gradient(135deg, #FFD304, #FFA500);
  color: #333;
  border: none;
  padding: 12px 20px;
  border-radius: 30px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  box-shadow: 0 5px 15px rgba(255, 211, 4, 0.3);
  width: 100%;
}

.support-button:hover, 
.support-button:focus {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(255, 211, 4, 0.4);
  background: linear-gradient(135deg, #FFE44D, #FFB700);
}

.support-button i {
  margin-right: 8px;
}

/* Duck pattern in background */
.duck-pattern {
  position: absolute;
  top: 10px;
  right: 10px;
  opacity: 0.1;
  font-size: 8rem;
  transform: rotate(15deg);
  text-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
}

/* Shake animation for support button */
@keyframes gentle-shake {
  0%, 100% { transform: rotate(0deg); }
  10% { transform: rotate(-2deg); }
  20% { transform: rotate(2deg); }
  30% { transform: rotate(-2deg); }
  40% { transform: rotate(2deg); }
  50% { transform: rotate(-1deg); }
  60% { transform: rotate(1deg); }
  70% { transform: rotate(-0.5deg); }
  80% { transform: rotate(0.5deg); }
  90% { transform: rotate(-0.25deg); }
}

.shake-animation {
  animation: gentle-shake 1.5s cubic-bezier(.36,.07,.19,.97) both;
  transform-origin: center bottom;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .about-me-container {
    padding: 20px;
  }
  
  .about-me-title {
    font-size: 1.3rem;
  }
  
  .about-me-content {
    font-size: 1rem;
  }
  
  .duck-pattern {
    font-size: 6rem;
  }
}
</style>