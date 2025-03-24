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
  
  <template>
    <div class="about-me-container">
      <div class="duck-pattern" aria-hidden="true">🦆</div>
      <h2 class="about-me-title">
        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCIgdmlld0JveD0iMCAwIDg3OSA4NzkiPjxwYXRoIGQ9Ik0gMzA3IDExNS4xMzQgQyAyNTAuNjMyIDEyMC44OTUsIDE5NS45ODcgMTQ5LjQ5NSwgMTU5LjIwNSAxOTIuNDg4IEMgMTEzLjQ5NCAyNDUuOTE4LCA5NS4xNzggMzE0LjMyOCwgMTA4LjA2MiAzODMuNTAwIEMgMTE3LjUyMSA0MzQuMjgyLCAxNDYuMTI3IDQ4Mi40MTIsIDE4Ni41MDAgNTE1LjQ3MyBDIDE5OS4wNDUgNTI1Ljc0NiwgMjA0Ljk1NiA1MjkuNzIxLCAyMjYuMDc4IDU0Mi4wOTAgQyAyNDQuMjA1IDU1Mi43MDYsIDI2MS4wMTEgNTYyLjU1OCwgMzAzIDU4Ny4xODcgQyAzMTcuNTc1IDU5NS43MzYsIDM4Ni44NzUgNjM2LjM4MSwgNDU3IDY3Ny41MTAgQyA1MjcuMTI1IDcxOC42MzksIDU4Ni45MDUgNzUzLjM2MiwgNTg5Ljg0MyA3NTQuNjczIEMgNjA5Ljg4MCA3NjMuNjEzLCA2NDEuMjA5IDc2Ni42NTMsIDY2NS4zMDAgNzYxLjk5NiBDIDcwNy4zOTAgNzUzLjg2MCwgNzQyLjU0OSA3MjcuMDc0LCA3NjEuNzcxIDY4OC41MDAgQyA3NzcuMDkwIDY1Ny43NTksIDc3OS42OTIgNjE5LjkxMywgNzY4Ljc4NSA1ODYuNTAwIEMgNzYzLjgyOSA1NzEuMzE3LCA3NTYuMzM3IDU1OC43MDgsIDcyNi43NzggNTE1LjgwMiBDIDcwMC4xNzQgNDc3LjE4NSwgNjYwLjUxNiA0MTkuNTc5LCA1OTguNTIyIDMyOS41MDAgQyA1ODQuMTM4IDMwOC42MDAsIDU1OS4zODAgMjcyLjYwMCwgNTQzLjUwNCAyNDkuNTAwIEMgNTEyLjQwMCAyMDQuMjQzLCA1MDguMTY0IDE5OC40NzgsIDQ5Ny41NzUgMTg3LjAwNCBDIDQ0OS4wMTAgMTM0LjM3NCwgMzc4LjU5MiAxMDcuODE4LCAzMDcgMTE1LjEzNCBNIDI5Ny41MDAgMjQ2LjA3MiBDIDI3OC40MTAgMjQ3LjQ0MiwgMjU5LjYyMCAyNDkuMDc3LCAyNTYuMjQ0IDI0OS42NjEgTCAyNTIuOTg5IDI1MC4yMjUgMjUzLjI0NCAzMzMuMzYyIEwgMjUzLjUwMCA0MTYuNTAwIDI4Ny43NTAgNDE2Ljc2MyBMIDMyMiA0MTcuMDI2IDMyMiA0MDEuNzYzIEwgMzIyLjAwMSAzODYuNTAwIDMzOC4yNTAgMzg2LjQxMyBDIDM1Ni4yNjIgMzg2LjMxNywgMzY0LjYyMSAzODQuNzA1LCAzNzYuODkzIDM3OC45NjMgQyAzOTcuNDE5IDM2OS4zNTgsIDQxMi44NDQgMzUwLjU3MywgNDE3LjU0MSAzMjkuNDYxIEMgNDE5LjY3NyAzMTkuODU5LCA0MTkuMTAyIDI5Ni44MDYsIDQxNi40OTMgMjg3LjUwMCBDIDQwOS43NTEgMjYzLjQ0NCwgMzkzLjE0MiAyNTAuODE2LCAzNjIuNTE3IDI0Ni40NjEgQyAzNTEuNjAzIDI0NC45MDksIDMxNi42MTQgMjQ0LjY5OSwgMjk3LjUwMCAyNDYuMDcyIE0gMzQwLjUwMCAyODkuODQ1IEMgMzM1LjAyMSAyOTEuODk5LCAzMjkuMjgwIDI5NS4wNjksIDMyNC4yNTAgMjk4LjgxNiBMIDMyMSAzMDEuMjM3IDMyMSAzMTkuOTUyIEMgMzIxIDMzMC4yNDUsIDMyMS4yNzggMzM4Ljk0NSwgMzIxLjYxOCAzMzkuMjg0IEMgMzIyLjU4NSAzNDAuMjUyLCAzMzguODIyIDMzMS43MjAsIDM0NS43ODkgMzI2LjU4MyBDIDM1My4wNTEgMzIxLjIyOSwgMzU3LjQxOCAzMTQuOTYwLCAzNTkuMDkwIDMwNy40ODggQyAzNjIuMjk1IDI5My4xNjcsIDM1My42MTQgMjg0LjkyOCwgMzQwLjUwMCAyODkuODQ1IiBzdHJva2U9Im5vbmUiIGZpbGw9IiNmZmZmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZSIvPjwvc3ZnPg==" alt="Duck Icon" aria-hidden="true">
        <span class="about-title-text">{{ t('aboutTitle') }}</span>
      </h2>
      <p class="about-me-content">
        <span class="about-content-text" v-html="formattedAboutContent"></span>
      </p>
      <div class="contact-info">
        <a href="mailto:poniatowski.dev@gmail.com" class="contact-link" aria-label="Email the creator">
          <i class="fas fa-envelope" aria-hidden="true"></i> poniatowski.dev@gmail.com
        </a>
      </div>
      <div>
        <a href="https://tiptopjar.com/proDucktive" target="_blank" class="support-button" rel="noopener">
          <i class="fas fa-heart" aria-hidden="true"></i> <span class="support-text">{{ t('supportButton') }}</span>
        </a>
        <NewsletterButton @click="$emit('open-newsletter')" />
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { computed } from 'vue';
  import { useI18n } from '@/composables/useI18n';
  import NewsletterButton from './NewsletterButton.vue';
  
  // Composables
  const { t } = useI18n();
  
  // Emits
  defineEmits(['open-newsletter']);
  
  // Computed
  const formattedAboutContent = computed(() => {
    return t('aboutContent').replace('\\n\\n', '<br><br>');
  });
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