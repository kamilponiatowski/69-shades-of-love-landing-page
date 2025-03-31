<template>
  <div 
    class="newsletter-float-button animate-float"
    v-if="!isSubscribed"
    @click="handleClick" 
    aria-label="Open newsletter subscription"
  >
    <span class="diagonal-shine"></span>
    <i class="fas fa-envelope"></i>
  </div>
</template>
  
<script setup lang="ts">
import { useRouter } from 'vue-router';
import { ref, onMounted } from 'vue';

// Props
const props = defineProps<{
  isSubscribed: boolean;
}>();

// Emits
const emit = defineEmits(['click']);

// Router
const router = useRouter();

// State
const isMobile = ref(false);

/**
 * Checks if device is mobile
 */
const checkMobile = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || 
         window.innerWidth < 768;
};

/**
 * Handles button click based on device type
 */
const handleClick = () => {
  if (isMobile.value) {
    // On mobile, navigate to newsletter page
    router.push('/newsletter');
  } else {
    // On desktop, emit click event to show popup
    emit('click');
  }
};

/**
 * Updates mobile status on resize
 */
const updateMobileStatus = () => {
  isMobile.value = checkMobile();
};

// Initialize on mount
onMounted(() => {
  isMobile.value = checkMobile();
  window.addEventListener('resize', updateMobileStatus);
  // Cleanup on unmount
  return () => {
    window.removeEventListener('resize', updateMobileStatus);
  };
});
</script>

<style scoped>
.newsletter-float-button {
  position: fixed;
  bottom: 80px;
  right: 20px;
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, var(--accent-color), #6a11cb);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  cursor: pointer;
  box-shadow: 0 5px 15px rgba(138, 43, 226, 0.3);
  z-index: 99;
  transition: all 0.3s ease;
  overflow: hidden;
}

.newsletter-float-button:hover,
.newsletter-float-button:focus {
  transform: scale(1.1) rotate(5deg);
  box-shadow: 0 8px 25px rgba(138, 43, 226, 0.4);
}

.newsletter-float-button i {
  font-size: 1.5rem;
  z-index: 1;
}

/* Responsive styles */
@media (max-width: 768px) {
  .newsletter-float-button {
    bottom: 20px;
    right: 85px;
    width: 50px;
    height: 50px;
  }

  .newsletter-float-button.hidden {
    display: none;
  }
}
</style>