<template>
    <div class="quotes-filter">
      <button 
        :class="['filter-button', { active: selectedCategory === 'all' }]"
        @click="$emit('category-selected', 'all')"
      >
        {{ t('allCategories') }}
      </button>
      <button 
        v-for="category in categories" 
        :key="category"
        :class="['filter-button', { active: selectedCategory === category }]"
        @click="$emit('category-selected', selectedCategory === category ? 'all' : category)"
      >
        {{ category }}
      </button>
    </div>
  </template>
  
  <script setup lang="ts">
  import { useI18n } from '@/composables/useI18n';
  
  const { t } = useI18n();
  
  defineProps({
    categories: {
      type: Array as () => string[],
      required: true
    },
    selectedCategory: {
      type: String,
      required: true
    }
  });
  
  defineEmits(['category-selected']);
  </script>
  
  <style scoped>
  .quotes-filter {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 25px;
  }
  
  .filter-button {
    padding: 8px 15px;
    border: none;
    border-radius: 20px;
    background-color: var(--btn-background);
    color: var(--text-color);
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: 0.95rem;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  }
  
  .filter-button:hover {
    background-color: rgba(0, 0, 0, 0.05);
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .filter-button.active {
    background-color: var(--accent-color);
    color: white;
    box-shadow: 0 4px 10px rgba(138, 43, 226, 0.2);
  }
  
  @media (max-width: 768px) {
    .quotes-filter {
      justify-content: center;
    }
    
    .filter-button {
      font-size: 0.9rem;
      padding: 6px 12px;
    }
  }
  </style>