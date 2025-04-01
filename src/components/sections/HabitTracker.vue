<template>
    <div class="habit-tracker">
      <div class="tracker-header">
        <div class="tracker-cell header-cell">{{ t('habitColumnHeader') }}</div>
        <div v-for="day in days" :key="day" class="tracker-cell day-cell">{{ day }}</div>
      </div>
  
      <div v-for="(name, index) in habitNames" :key="index" class="tracker-row">
        <div class="tracker-cell habit-cell">{{ name }}</div>
        <div v-for="day in days" :key="day" class="tracker-cell checkbox-cell">
          <div class="checkbox-placeholder"></div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { useI18n } from '@/composables/useI18n';
  
  const { t } = useI18n();
  
  defineProps({
    habitNames: {
      type: Array,
      required: true
    },
    days: {
      type: Number,
      default: 21
    }
  });
  </script>
  
  <style scoped>
  .habit-tracker {
    margin-top: 30px;
    border: 1px solid #eee;
    border-radius: 8px;
    overflow-x: auto;
    table-layout: fixed;
    background-color: white;
    width: 100%;
  }
  
  .tracker-header,
  .tracker-row {
    display: flex;
    flex-wrap: nowrap;
  }
  
  .tracker-cell {
    padding: 10px;
    min-width: 30px;
    text-align: center;
    border: 1px solid #eee;
    box-sizing: border-box;
  }
  
  .header-cell,
  .habit-cell {
    background-color: #f8f8f8;
    font-weight: bold;
    min-width: 140px;
    width: 140px;
    text-align: left;
  }
  
  .day-cell {
    width: 40px;
    min-width: 40px;
    box-sizing: border-box;
    padding: 8px 5px;
  }
  
  .checkbox-cell {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    min-width: 40px;
    box-sizing: border-box;
  }
  
  .checkbox-placeholder {
    width: 20px;
    height: 20px;
    border: 2px solid #ddd;
    border-radius: 3px;
  }
  
  @media (max-width: 768px) {
    .habit-tracker {
      font-size: 0.9rem;
    }
    
    .header-cell, 
    .habit-cell {
      min-width: 120px;
      width: 120px;
    }
    
    .day-cell, 
    .checkbox-cell {
      width: 35px;
      min-width: 35px;
    }
    
    .checkbox-placeholder {
      width: 18px;
      height: 18px;
    }
  }
  
  @media (max-width: 480px) {
    .habit-tracker {
      font-size: 0.8rem;
    }
    
    .header-cell, 
    .habit-cell {
      min-width: 100px;
      width: 100px;
    }
    
    .day-cell, 
    .checkbox-cell {
      width: 30px;
      min-width: 30px;
    }
    
    .checkbox-placeholder {
      width: 16px;
      height: 16px;
    }
  }
  </style>