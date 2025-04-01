<template>
    <div class="quotes-container">
      <div v-for="(quote, index) in quotes" :key="index" :class="['quote-card', quote.category.toLowerCase()]">
        <div class="quote-content">
          <i class="fas fa-quote-left" aria-hidden="true"></i>
          <blockquote>{{ quote.text }}</blockquote>
          <i class="fas fa-quote-right" aria-hidden="true"></i>
        </div>
        <div class="quote-source">
          <div class="source-name">{{ quote.source }}</div>
          <div class="source-detail">
            <span class="character">{{ quote.character }}</span>
            <span class="universe">{{ quote.universe }}</span>
          </div>
        </div>
        <div class="corner-icon">
          <i :class="getCategoryIcon(quote.category)" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { Quote, isQuote } from '@/types';
  
  defineProps({
    quotes: {
      type: Array as () => Quote[],
      required: true,
      validator: (value: any[]) => value.every(isQuote)
    },
    getCategoryIcon: {
      type: Function,
      required: true
    }
  });
  </script>
  
  <style scoped>
  .quotes-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 25px;
  }
  
  .quote-card {
    position: relative;
    background-color: #f8f8f8;
    border-radius: 12px;
    padding: 25px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    overflow: hidden;
    border-top: 5px solid #ccc;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  
  .quote-card::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%238a2be2' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E");
    opacity: 0.5;
    z-index: 0;
  }
  
  .quote-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }
  
  /* Category-specific border colors */
  .quote-card.resilience {
    border-top-color: var(--physical-color);
  }
  
  .quote-card.motivation {
    border-top-color: var(--mental-color);
  }
  
  .quote-card.identity {
    border-top-color: var(--relationship-color);
  }
  
  .quote-card.perspective {
    border-top-color: var(--personal-color);
  }
  
  .quote-card.challenges {
    border-top-color: var(--main-color);
  }
  
  .quote-card.growth {
    border-top-color: #4CAF50;
  }
  
  .quote-card.humor {
    border-top-color: #FF9800;
  }
  
  .quote-card.emotions {
    border-top-color: #9C27B0;
  }
  
  .quote-content {
    position: relative;
    margin-bottom: 20px;
    flex-grow: 1;
    z-index: 1;
  }
  
  .quote-content i.fa-quote-left {
    position: absolute;
    top: -10px;
    left: -5px;
    opacity: 0.2;
    font-size: 1.2rem;
  }
  
  .quote-content i.fa-quote-right {
    position: absolute;
    bottom: -10px;
    right: -5px;
    opacity: 0.2;
    font-size: 1.2rem;
  }
  
  .quote-content blockquote {
    padding: 15px 0;
    margin: 0;
    font-style: italic;
    color: var(--text-color);
    line-height: 1.6;
    font-size: 1.1rem;
    text-align: center;
  }
  
  .quote-source {
    text-align: right;
    margin-top: 15px;
    padding-top: 15px;
    border-top: 1px dashed var(--border-color);
    position: relative;
    z-index: 1;
  }
  
  .source-name {
    font-weight: bold;
    color: var(--secondary-text-color);
    font-size: 1rem;
  }
  
  .source-detail {
    font-size: 0.9rem;
    color: var(--secondary-text-color);
    margin-top: 3px;
  }
  
  .source-detail .character {
    font-style: italic;
  }
  
  .source-detail .universe {
    margin-left: 5px;
    opacity: 0.7;
  }
  
  .source-detail .universe::before {
    content: "•";
    margin-right: 5px;
  }
  
  .corner-icon {
    position: absolute;
    top: 15px;
    right: 15px;
    opacity: 0.2;
    font-size: 1.2rem;
    color: var(--secondary-text-color);
  }
  
  @media (max-width: 768px) {
    .quotes-container {
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
    
    .quote-card {
      padding: 20px;
    }
    
    .quote-content blockquote {
      font-size: 1rem;
    }
  }
  
  @media (max-width: 480px) {
    .quotes-container {
      grid-template-columns: 1fr;
    }
  }
  </style>