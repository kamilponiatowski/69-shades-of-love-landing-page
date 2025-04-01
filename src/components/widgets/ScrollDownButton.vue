<template>
  <button 
    @click="scrollToBottom" 
    class="scroll-down-button" 
    :class="{ visible: showButton }"
    aria-label="Scroll to bottom">
    <i class="fas fa-arrow-down"></i>
  </button>
</template>
  
<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';

const showButton = ref(false);
let lastScrollPosition = 0;
let ticking = false;

/**
 * Scrolls to the bottom of the page smoothly
 */
const scrollToBottom = () => {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth'
  });
};

/**
 * Checks scroll position to determine button visibility
 */
const handleScroll = () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      const currentScrollPosition = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      
      const isScrollingDown = currentScrollPosition > lastScrollPosition;
      const nearBottom = currentScrollPosition + clientHeight > scrollHeight - 200;
      
      showButton.value = !nearBottom && isScrollingDown && currentScrollPosition > 300;
      
      lastScrollPosition = currentScrollPosition;
      ticking = false;
    });
    
    ticking = true;
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>