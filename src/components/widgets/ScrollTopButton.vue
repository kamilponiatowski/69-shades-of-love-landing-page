<template>
    <button 
      @click="scrollToTop" 
      class="scroll-top-button" 
      :class="{ 'show': showButton }"
      aria-label="Przewiń do góry strony">
      <i class="fas fa-arrow-up"></i>
    </button>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted, onBeforeUnmount } from 'vue';
  
  // State
  const showButton = ref(false);
  let lastScrollPosition = 0;
  let ticking = false;
  let scrollingUp = false;
  
  /**
   * Scrolls the window to the top with a smooth animation
   */
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  /**
   * Checks scroll position and direction to determine if the button should be visible
   * Hides the button when scrolling up or when less than threshold pixels from top
   */
  const handleScroll = () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const currentScrollPosition = window.scrollY;
        
        // Determine scroll direction
        scrollingUp = currentScrollPosition < lastScrollPosition;
        
        // Update last scroll position
        lastScrollPosition = currentScrollPosition;
        
        // Show button only when:
        // 1. Scrolled down more than 300px AND
        // 2. Not currently scrolling up
        showButton.value = currentScrollPosition > 300 && scrollingUp;
        
        ticking = false;
      });
      
      ticking = true;
    }
  };
  
  // Lifecycle hooks
  onMounted(() => {
    // Add scroll event listener with passive option for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    // Check initial scroll position
    handleScroll();
  });
  
  onBeforeUnmount(() => {
    // Remove event listener to prevent memory leaks
    window.removeEventListener('scroll', handleScroll);
  });
  </script>
  
  <style scoped>
  /* Scroll to top button - styled to match ScrollDownButton component */
  .scroll-top-button {
    position: fixed;
    bottom: 20px;
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
    opacity: 0;
    visibility: hidden;
    transform: scale(0);
  }
  
  .scroll-top-button.show {
    opacity: 1;
    visibility: visible;
    transform: scale(1);
  }
  
  .scroll-top-button:hover, 
  .scroll-top-button:focus {
    transform: scale(1.1);
    background-color: #a01a30;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }
  
  .scroll-top-button i {
    font-size: 1.3rem;
  }
  
  /* Responsive styles */
  @media (max-width: 768px) {
    .scroll-top-button {
      width: 40px;
      height: 40px;
    }
    
    .scroll-top-button i {
      font-size: 1.1rem;
    }
  }
  
  @media (max-width: 480px) {
    .scroll-top-button {
      bottom: 15px;
      right: 15px;
    }
  }
  </style>