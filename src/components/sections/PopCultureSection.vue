<template>
    <div class="pop-culture-section animate-glow">
      <div class="bubble-background">
        <div class="bubble bubble-1"></div>
        <div class="bubble bubble-2"></div>
        <div class="bubble bubble-3"></div>
        <div class="bubble bubble-4"></div>
        <div class="bubble bubble-5"></div>
      </div>
      <i class="fas fa-theater-masks"></i>
      <div class="pop-culture-text">
        <h3>{{ t('popCultureTitle') }}</h3>
        <p>{{ t('popCultureDescription') }}</p>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { useI18n } from '@/composables/useI18n';
  
  const { t } = useI18n();
  </script>
  
  <style scoped>
  .pop-culture-section {
    position: relative;
    display: flex;
    gap: 15px;
    padding: 25px;
    border-radius: 15px;
    margin: 25px 0;
    position: relative;
    z-index: 1;
    background: linear-gradient(135deg, rgba(138, 43, 226, 0.85), rgba(106, 17, 203, 0.9));
    box-shadow: 0 5px 20px rgba(106, 17, 203, 0.3);
    overflow: hidden;
    color: white;
  }
  
  /* Bubble background for pop culture section */
  .bubble-background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    z-index: -1;
  }
  
  .bubble {
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(1px);
    animation: float 25s infinite ease-in-out;
  }
  
  .bubble-1 {
    width: 60px;
    height: 60px;
    left: 10%;
    top: 20%;
    animation-delay: -2s;
    opacity: 0.6;
  }
  
  .bubble-2 {
    width: 80px;
    height: 80px;
    right: 15%;
    bottom: 20%;
    animation-delay: -5s;
    opacity: 0.4;
  }
  
  .bubble-3 {
    width: 40px;
    height: 40px;
    right: 30%;
    top: 30%;
    animation-delay: -7s;
    opacity: 0.7;
  }
  .bubble-4 {
  width: 120px;
  height: 120px;
  left: 25%;
  bottom: -40px;
  animation-delay: -15s;
  opacity: 0.3;
}

.bubble-5 {
  width: 50px;
  height: 50px;
  right: 5%;
  top: 50%;
  animation-delay: -10s;
  opacity: 0.5;
}

.pop-culture-section i {
  font-size: 2.5rem;
  color: #FFD304;
  margin-top: 3px;
  z-index: 2;
  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.pop-culture-text {
  position: relative;
  z-index: 2;
}

.pop-culture-text h3 {
  font-size: 1.3rem;
  margin-bottom: 8px;
  color: #FFD304;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.pop-culture-text p {
  font-size: 1rem;
  margin: 0;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
}

@media (max-width: 768px) {
  .pop-culture-section {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  
  .pop-culture-section i {
    margin-right: 0;
    margin-bottom: 10px;
  }
}
</style>