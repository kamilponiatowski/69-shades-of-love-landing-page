<template>
    <div 
      class="newsletter-float-button" 
      :class="{ 'hidden': isHidden }"
      @click="$emit('click')" 
      aria-label="Open newsletter subscription"
    >
      <i class="fas fa-envelope"></i>
    </div>
  </template>
  
  <script setup lang="ts">
  // Props
  defineProps<{
    isHidden?: boolean;
  }>();
  
  // Emits
  defineEmits(['click']);
  </script>