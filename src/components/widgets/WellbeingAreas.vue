<template>
    <div class="wellbeing-areas">
      <div v-for="area in areas" :key="area.type" :class="['area-item', `${area.type}-item`]">
        <div class="area-icon">{{ area.emoji }}</div>
        <div class="area-text">
          <strong>{{ area.title }}</strong>
          <p>{{ area.description }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  interface WellbeingArea {
    type: string;
    emoji: string;
    title: string;
    description: string;
  }
  
  defineProps({
    areas: {
      type: Array as () => WellbeingArea[],
      required: true,
      validator: (value: any[]) => {
        return value.every(
          item => 
            typeof item.type === 'string' && 
            typeof item.emoji === 'string' && 
            typeof item.title === 'string' && 
            typeof item.description === 'string'
        );
      }
    }
  });
  </script>
  
  <style scoped>
  .wellbeing-areas {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    margin-top: 15px;
  }
  
  .area-item {
    display: flex;
    align-items: center;
    padding: 20px;
    border-radius: 12px;
    transition: all 0.3s ease;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  }
  
  .area-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  }
  
  .area-icon {
    font-size: 2.5rem;
    margin-right: 20px;
    opacity: 0.85;
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
  }
  
  .area-text strong {
    display: block;
    margin-bottom: 8px;
    font-size: 1.2rem;
    color: #333;
  }
  
  .area-text p {
    color: #555;
    line-height: 1.5;
  }
  
  /* Category-specific styling */
  .physical-item {
    background: linear-gradient(135deg, rgba(255, 159, 41, 0.1), rgba(255, 159, 41, 0.05));
    border-left: 4px solid var(--physical-color);
  }
  
  .mental-item {
    background: linear-gradient(135deg, rgba(126, 217, 87, 0.1), rgba(126, 217, 87, 0.05));
    border-left: 4px solid var(--mental-color);
  }
  
  .personal-item {
    background: linear-gradient(135deg, rgba(255, 217, 102, 0.1), rgba(255, 217, 102, 0.05));
    border-left: 4px solid var(--personal-color);
  }
  
  .relationship-item {
    background: linear-gradient(135deg, rgba(255, 151, 183, 0.1), rgba(255, 151, 183, 0.05));
    border-left: 4px solid var(--relationship-color);
  }
  
  @media (max-width: 768px) {
    .wellbeing-areas {
      grid-template-columns: 1fr;
    }
  }
  </style>