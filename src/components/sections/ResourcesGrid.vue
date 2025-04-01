<template>
    <div class="resources-grid">
      <div v-for="(resource, index) in resources" :key="index" class="resource-card">
        <div class="resource-icon"><i :class="['fas', resource.icon]"></i></div>
        <h3>{{ resource.title }}</h3>
        <ul>
          <li v-for="(item, itemIndex) in resource.items" :key="itemIndex">{{ item }}</li>
        </ul>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  defineProps({
    resources: {
      type: Array,
      required: true,
      validator: (value: any[]) => {
        return value.every(
          item => 
            typeof item.icon === 'string' && 
            typeof item.title === 'string' && 
            Array.isArray(item.items)
        );
      }
    }
  });
  </script>
  
  <style scoped>
  .resources-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 25px;
    margin-top: 30px;
  }
  
  .resource-card {
    background-color: #f8f8f8;
    border-radius: 10px;
    padding: 20px;
    transition: transform 0.3s ease;
    height: 100%;
  }
  
  .resource-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
  
  .resource-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: var(--main-color);
    color: white;
    font-size: 1.3rem;
    margin: 0 auto 15px;
  }
  
  .resource-card h3 {
    text-align: center;
    margin-bottom: 15px;
    color: #333;
  }
  
  .resource-card ul {
    padding-left: 20px;
  }
  
  .resource-card li {
    margin-bottom: 8px;
    color: #555;
  }
  
  @media (max-width: 768px) {
    .resources-grid {
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    }
    
    .resource-card {
      padding: 15px;
    }
    
    .resource-icon {
      width: 40px;
      height: 40px;
      font-size: 1.1rem;
    }
    
    .resource-card h3 {
      font-size: 1.1rem;
    }
  }
  
  @media (max-width: 480px) {
    .resources-grid {
      grid-template-columns: 1fr;
    }
  }
  </style>