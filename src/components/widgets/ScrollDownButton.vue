<template>
  <button 
    @click="scrollToBottom" 
    class="scroll-down-button" 
    aria-label="Przewiń do dołu strony"
    v-show="showButton"
    ref="scrollBtn"
  >
    <i class="fas fa-arrow-down"></i>
  </button>
</template>
  
<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';

// Refs
const scrollBtn = ref<HTMLButtonElement | null>(null);
const showButton = ref<boolean>(false);
const lastScrollPosition = ref<number>(0);
const isScrollingUp = ref<boolean>(false);

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
 * Checks scroll position and direction to determine if the button should be visible
 * Hides the button when scrolling up or when less than threshold pixels from top
 */
const handleScroll = () => {
  // Get header element
  const header = document.querySelector('header');
  
  if (header) {
    // Get header height and calculate threshold (half of header height)
    const headerHeight = header.offsetHeight;
    const threshold = headerHeight / 2;
    
    // Get current scroll position
    const currentScrollPosition = window.scrollY || document.documentElement.scrollTop;
    
    // Determine scroll direction
    isScrollingUp.value = currentScrollPosition < lastScrollPosition.value;
    
    // Update last scroll position
    lastScrollPosition.value = currentScrollPosition;
    
    // Hide button when:
    // 1. User is scrolling up, OR
    // 2. User is near the bottom of the page
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
    const nearBottom = currentScrollPosition + clientHeight > scrollHeight * 0.8;
    
    // Show button only when:
    // 1. Scrolled past threshold AND
    // 2. Not scrolling up AND
    // 3. Not near bottom
    showButton.value = currentScrollPosition >= threshold && !isScrollingUp.value && !nearBottom;
  }
};

// Lifecycle hooks
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
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