<template>
    <div class="application-grid">
      <div v-for="(app, index) in applications" :key="index" class="application-card">
        <div class="application-icon">
          <i :class="['fas', app.icon]"></i>
        </div>
        <h3>{{ app.title }}</h3>
        <p>
          {{ app.description }}
        </p>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { Application, isApplication } from '@/types';
  
  defineProps({
    applications: {
      type: Array as () => Application[],
      required: true,
      validator: (value: any[]) => value.every(isApplication)
    }
  });
  </script>
  
  <style scoped>
  .application-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 25px;
    margin-top: 25px;
  }
  
  .application-card {
    background-color: var(--card-background);
    border-radius: 12px;
    padding: 25px;
    text-align: center;
    transition: all 0.3s ease, background-color 0.3s ease;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
    position: relative;
    overflow: hidden;
    height: 100%;
  }
  
  .application-card::before {
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
  
  .application-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }
  
  .application-icon {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: linear-gradient(135deg, var(--accent-color), #6a11cb);
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto 20px;
    color: white;
    font-size: 1.6rem;
    box-shadow: 0 5px 15px rgba(138, 43, 226, 0.3);
    position: relative;
    z-index: 1;
  }
  
  .application-card h3 {
    margin-bottom: 15px;
    color: var(--text-color);
    font-weight: 600;
    position: relative;
    z-index: 1;
  }
  
  .application-card p {
    color: var(--secondary-text-color);
    font-size: 0.95rem;
    line-height: 1.6;
    position: relative;
    z-index: 1;
  }
  
  @media (max-width: 768px) {
    .application-grid {
      grid-template-columns: 1fr;
    }
    
    .application-card {
      padding: 20px;
    }
    
    .application-icon {
      width: 50px;
      height: 50px;
      font-size: 1.4rem;
    }
  }
  </style>