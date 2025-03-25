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
  
  // Function to scroll to bottom
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
  };
  
  // Function to check scroll position and control button visibility
  const handleScroll = () => {
    // Get header element
    const header = document.querySelector('header');
    
    if (header) {
      // Get header height and calculate threshold (half of header height)
      const headerHeight = header.offsetHeight;
      const threshold = headerHeight / 2;
      
      // Get current scroll position
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      
      // Show button when scrolled past threshold
      showButton.value = scrollTop >= threshold;
      
      // Additional logic: hide when near bottom (kept from original implementation)
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      
      if (scrollTop + clientHeight > scrollHeight * 0.8) {
        showButton.value = false;
      }
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
  
  /* Responsywność */
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