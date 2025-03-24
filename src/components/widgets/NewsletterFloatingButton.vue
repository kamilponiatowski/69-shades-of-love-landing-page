<template>
    <div 
      class="newsletter-float-button" 
      v-if="!isSubscribed"
      @click="$emit('click')" 
      aria-label="Open newsletter subscription"
    >
      <i class="fas fa-envelope"></i>
    </div>
  </template>
  
  <script setup lang="ts">
  // Props
  defineProps<{
    isSubscribed: boolean;
  }>();
  
  // Emits
  defineEmits(['click']);
  </script>