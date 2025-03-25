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
  const showButton = ref<boolean>(true);
  
  // Function to scroll to bottom
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
  };
  
  // Function to check scroll position and hide button if near bottom
  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    
    // Hide button when user has scrolled more than 80% of the page
    if (scrollTop + clientHeight > scrollHeight * 0.8) {
      showButton.value = false;
    } else {
      showButton.value = true;
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
    top: 88px;
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