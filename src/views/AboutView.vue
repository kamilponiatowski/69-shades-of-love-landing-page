<template>
    <div class="container about-page">
      <Header />
      
      <main class="about-content">
        <h1>About 69 Shades of Love</h1>
        
        <div class="content-section">
          <h2>Project Philosophy</h2>
          <p>
            69 Shades of Love is a self-care journey designed to help you incorporate 
            healthy habits into your daily routine. The application includes 69 carefully 
            selected self-care tasks divided into four key areas of wellbeing:
          </p>
          
          <ul class="area-list">
            <li class="physical-item">
              <strong>Physical Health</strong> - Taking care of your body
            </li>
            <li class="mental-item">
              <strong>Mental Wellbeing</strong> - Nurturing your mind and emotional health
            </li>
            <li class="personal-item">
              <strong>Personal Joy</strong> - Finding happiness in simple pleasures
            </li>
            <li class="relationship-item">
              <strong>Relationship Care</strong> - Strengthening connections with others
            </li>
          </ul>
        </div>
        
        <div class="content-section">
          <h2>Features</h2>
          <ul>
            <li>Progress tracking with visual indicators</li>
            <li>Category-based organization of self-care tasks</li>
            <li>Streak counter to maintain motivation</li>
            <li>Achievement celebrations for milestones</li>
            <li>Downloadable mind map PDF guide</li>
          </ul>
        </div>
        
        <div class="content-section">
          <h2>Creator</h2>
          <p>
            This project was created by WTQ - What The Quack, a digital creator passionate 
            about mental health, wellbeing, and creative solutions to everyday challenges.
          </p>
          <p>
            If you enjoy this application and would like to support future development, 
            consider <a href="https://tiptopjar.com/proDucktive" target="_blank" rel="noopener">supporting the project</a>.
          </p>
        </div>
        
        <div class="navigation-links">
          <router-link to="/" class="back-link">
            <i class="fas fa-arrow-left"></i> Back to Self-Care Journey
          </router-link>
        </div>
      </main>
      
      <Footer />
    </div>
  </template>
  
  <script setup lang="ts">
  import Header from '@/components/layout/Header.vue';
  import Footer from '@/components/layout/Footer.vue';
  </script>
  
  <style scoped>
  .about-page {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
  
  .about-content {
    flex: 1;
    padding: 20px;
    max-width: 800px;
    margin: 0 auto;
  }
  
  .content-section {
    margin-bottom: 30px;
  }
  
  .area-list {
    list-style: none;
    padding: 0;
  }
  
  .area-list li {
    padding: 10px 15px;
    margin-bottom: 10px;
    border-radius: 8px;
  }
  
  .physical-item {
    background-color: rgba(255, 159, 41, 0.2);
    border-left: 5px solid var(--physical-color);
  }
  
  .mental-item {
    background-color: rgba(126, 217, 87, 0.2);
    border-left: 5px solid var(--mental-color);
  }
  
  .personal-item {
    background-color: rgba(255, 217, 102, 0.2);
    border-left: 5px solid var(--personal-color);
  }
  
  .relationship-item {
    background-color: rgba(255, 151, 183, 0.2);
    border-left: 5px solid var(--relationship-color);
  }
  
  .navigation-links {
    margin-top: 30px;
  }
  
  .back-link {
    display: inline-flex;
    align-items: center;
    color: var(--main-color);
    text-decoration: none;
    padding: 10px 15px;
    border-radius: 8px;
    background-color: rgba(196, 30, 58, 0.1);
    transition: all 0.3s ease;
  }
  
  .back-link:hover {
    background-color: rgba(196, 30, 58, 0.2);
  }
  
  .back-link i {
    margin-right: 8px;
  }
  </style>