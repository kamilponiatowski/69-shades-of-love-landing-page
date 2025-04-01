<template>
  <div class="about-me-container">
    <!-- Background pattern with enhanced styling -->
    <div class="about-me-background"></div>
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
    
    <!-- Actions container with enhanced buttons -->
    <div class="about-me-buttons">
      <a href="https://tiptopjar.com/proDucktive" target="_blank" 
         class="support-button animate-float" 
         :class="{'shake-animation': isShaking}"
         rel="noopener">
        <span class="button-shine"></span>
        <i class="fas fa-heart" aria-hidden="true"></i> <span class="support-text">{{ t('supportButton') }}</span>
      </a>
      <NewsletterButton @click="handleNewsletterClick" :isSubscribed="isSubscribed" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted, onBeforeUnmount } from 'vue';
import { useRouter } from 'vue-router';
import { useI18n } from '@/composables/useI18n';
import NewsletterButton from '../ui/newsletter/NewsletterButton.vue';

// Props
const props = defineProps({
  isSubscribed: {
    type: Boolean,
    default: false
  }
});

// Router
const router = useRouter();

// Composables
const { t } = useI18n();

// Emits
const emit = defineEmits(['open-newsletter']);

// State
const isMobile = ref(false);

// Animation state
const isShaking = ref<boolean>(false);
let shakeTimer: ReturnType<typeof setTimeout> | null = null;
let shakeInterval: ReturnType<typeof setInterval> | null = null;

// Computed
const formattedAboutContent = computed(() => {
  return t('aboutContent').replace('\\n\\n', '<br><br>');
});

/**
 * Checks if device is mobile
 */
const checkMobile = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || 
         window.innerWidth < 768;
};

/**
 * Handles newsletter button click based on device type
 */
const handleNewsletterClick = () => {
  if (props.isSubscribed) {
    // If already subscribed, go to gift page
    router.push('/gift');
  } else if (isMobile.value) {
    // On mobile, redirect to newsletter page
    router.push('/newsletter');
  } else {
    // On desktop, emit event to show popup
    emit('open-newsletter');
  }
};

/**
 * Updates mobile status on resize
 */
const updateMobileStatus = () => {
  isMobile.value = checkMobile();
};

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
  // Check if device is mobile
  isMobile.value = checkMobile();
  
  // Add resize listener
  window.addEventListener('resize', updateMobileStatus);
  
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
  window.removeEventListener('resize', updateMobileStatus);
});
</script>

<style scoped>
/* Enhanced modern look for About Me container with pattern background */

.about-title-text {
  color: white;
}

.about-me-container {
  position: relative;
  background: linear-gradient(135deg, #8A2BE2 0%, #4B0082 100%);
  border-radius: 20px;
  padding: 35px;
  margin-bottom: 30px;
  color: white;
  box-shadow: 0 15px 35px rgba(74, 20, 140, 0.35);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.about-me-background {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E");
  opacity: 0.1;
  z-index: 0;
}

.about-me-container:hover {
  transform: translateY(-7px);
  box-shadow: 0 20px 40px rgba(74, 20, 140, 0.45);
}

.about-me-title {
  position: relative;
  font-size: 1.7rem;
  font-weight: bold;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  z-index: 1;
}

.about-me-title::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -10px;
  width: 60px;
  height: 4px;
  background: linear-gradient(90deg, #FFD304, rgba(255, 255, 255, 0.7));
  border-radius: 3px;
}

.about-me-title img {
  width: 32px;
  height: 32px;
  margin-right: 12px;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
}

.about-me-content {
  position: relative;
  line-height: 1.7;
  margin-bottom: 25px;
  font-size: 1.05rem;
  z-index: 1;
}

.contact-info {
  position: relative;
  margin-bottom: 20px;
  z-index: 1;
}

/* Contact link styling */
.contact-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.15);
  color: rgba(255, 255, 255, 0.95);
  text-decoration: none;
  font-weight: 500;
  padding: 10px 16px;
  border-radius: 30px;
  transition: all 0.3s ease;
  text-align: center;
  width: 100%;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.contact-link:hover, 
.contact-link:focus {
  background-color: rgba(255, 255, 255, 0.25);
  color: white;
  transform: translateY(-3px);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
}

.contact-link i {
  margin-right: 8px;
}

/* Button container */
.about-me-buttons {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 15px;
  width: 100%;
  z-index: 1;
}

/* Support button styling */
.support-button {
  position: relative;
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
  min-height: 44px;
  overflow: hidden;
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
  font-size: 9rem;
  transform: rotate(15deg);
  text-shadow: 0 0 30px rgba(255, 255, 255, 0.5);
  z-index: 0;
}

.shake-animation {
  animation: gentle-shake 1.5s cubic-bezier(.36,.07,.19,.97) both;
  transform-origin: center bottom;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .about-me-container {
    padding: 25px;
  }
  
  .about-me-title {
    font-size: 1.5rem;
  }
  
  .about-me-content {
    font-size: 1rem;
  }
  
  .duck-pattern {
    font-size: 7rem;
  }
}

@media (max-width: 480px) {
  .about-me-container {
    padding: 20px;
  }
  
  .about-me-title {
    font-size: 1.4rem;
  }
  
  .duck-pattern {
    font-size: 6rem;
  }
  
  .support-button,
  .newsletter-button {
    padding: 10px 15px;
  }
}
</style>