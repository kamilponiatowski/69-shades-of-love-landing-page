<template>
  <button 
    @click="scrollToTop" 
    class="scroll-top-button" 
    :class="{ show: showButton }"
    aria-label="Scroll to top">
    <i class="fas fa-arrow-up"></i>
  </button>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';

const showButton = ref(false);
let lastScrollPosition = 0;
let ticking = false;

/**
 * Scrolls to the top of the page smoothly
 */
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

/**
 * Checks scroll position and direction to determine button visibility
 */
const handleScroll = () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      const currentScrollPosition = window.scrollY || document.documentElement.scrollTop;
      const isScrollingUp = currentScrollPosition < lastScrollPosition;
      
      showButton.value = currentScrollPosition > 300 && isScrollingUp;
      
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