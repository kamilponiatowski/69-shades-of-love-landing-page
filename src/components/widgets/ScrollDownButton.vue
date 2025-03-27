<template>
  <button 
    @click="scrollToBottom" 
    class="scroll-down-button" 
    :class="{ visible: showButton }"
    aria-label="Przewiń do dołu strony"
  >
    <i class="fas fa-arrow-down"></i>
  </button>
</template>
  
<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';

// State
const showButton = ref(false);
let lastScrollPosition = 0;
let ticking = false;

/**
 * Scrolls the window to the bottom with a smooth animation
 */
const scrollToBottom = () => {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth'
  });
};

/**
 * Checks scroll position and updates button visibility
 * Shows the button when user is scrolling down and not near the bottom
 */
const handleScroll = () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      const currentScrollPosition = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      
      // Determine scroll direction
      const isScrollingDown = currentScrollPosition > lastScrollPosition;
      
      // Check if we're near the bottom of the page
      const nearBottom = currentScrollPosition + clientHeight > scrollHeight - 200;
      
      // Only show button when:
      // 1. Not near the bottom of the page AND
      // 2. Scrolling down AND
      // 3. Scrolled down at least 300px
      showButton.value = !nearBottom && isScrollingDown && currentScrollPosition > 300;
      
      // Update reference position
      lastScrollPosition = currentScrollPosition;
      ticking = false;
    });
    
    ticking = true;
  }
};

// Lifecycle hooks
onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true });
  // Initial check
  handleScroll();
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>
  
<style scoped>
.scroll-down-button {
  position: fixed;
  top: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: var(--main-color);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
  z-index: 99;
  transition: all 0.3s ease;
  
  /* Default state - hidden */
  opacity: 0;
  visibility: hidden;
  transform: scale(0);
}

/* Visible state */
.scroll-down-button.visible {
  opacity: 1;
  visibility: visible;
  transform: scale(1);
}

.scroll-down-button:hover, 
.scroll-down-button:focus {
  transform: scale(1.1);
  background-color: #a01a30;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}

.scroll-down-button i {
  font-size: 1.3rem;
}

@media (max-width: 768px) {
  .scroll-down-button {
    width: 40px;
    height: 40px;
    top: 15px;
    right: 15px;
  }
  
  .scroll-down-button i {
    font-size: 1.1rem;
  }
}
</style>