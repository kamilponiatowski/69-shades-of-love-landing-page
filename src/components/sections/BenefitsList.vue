<template>
    <ul class="newsletter-page-benefits">
      <li 
        v-for="(benefit, index) in benefits" 
        :key="index"
        :class="{ 
          'highlight-benefit': index === 0, 
          'highlight-benefit pop-culture': index === 1 
        }"
      >
        {{ benefit }}
      </li>
    </ul>
  </template>
  
  <script setup lang="ts">
  defineProps({
    benefits: {
      type: Array,
      required: true
    }
  });
  </script>
  
  <style scoped>
  .newsletter-page-benefits {
    list-style: none;
    padding-left: 5px;
    margin-bottom: 25px;
  }
  
  .newsletter-page-benefits li {
    position: relative;
    padding-left: 30px;
    margin-bottom: 12px;
    font-size: 1.05rem;
    color: var(--text-color);
    transition: transform 0.3s ease;
  }
  
  .newsletter-page-benefits li:hover {
    transform: translateX(5px);
  }
  
  .newsletter-page-benefits li::before {
    content: "🦆";
    position: absolute;
    left: 0;
    top: 0;
    font-size: 1.2rem;
  }
  
  /* Highlight special benefits */
  .highlight-benefit {
    font-weight: bold;
    color: var(--main-color);
    margin-bottom: 15px !important;
    padding: 8px 8px 8px 30px !important;
    border-radius: 8px;
    background-color: rgba(196, 30, 58, 0.05);
  }
  
  .highlight-benefit::before {
    content: "🎁" !important;
  }
  
  /* Pop Culture benefit with rocket icon */
  .highlight-benefit.pop-culture::before {
    content: "🚀" !important;
  }
  
  .highlight-benefit.pop-culture {
    background-color: rgba(138, 43, 226, 0.05);
    color: var(--accent-color);
  }
  
  @media (max-width: a 768px) {
    .newsletter-page-benefits li {
      font-size: 0.95rem;
      padding-left: 25px;
    }
    
    .highlight-benefit {
      padding: 5px 5px 5px 25px !important;
    }
  }
  </style>