<template>
  <div class="newsletter-reward" :class="{ show }" role="dialog" aria-modal="true">
    <div class="newsletter-reward-container">
      <div class="reward-background"></div>
      <div class="newsletter-reward-icon animate-bounce">🎁</div>
      <h3 class="newsletter-reward-title">{{ t('newsletterRewardTitle') }}</h3>
      <p class="newsletter-reward-description">
        {{ t('newsletterRewardDescription') }}
        <strong class="reward-highlight">{{ t('newsletterRewardHighlight') }}</strong>
      </p>
      
      <!-- Pop Culture Wisdom Access Notice -->
      <div class="pop-culture-access">
        <i class="fas fa-theater-masks"></i>
        <p>{{ t('newsletterMemberNote') }}</p>
      </div>
      
      <button class="newsletter-reward-button animate-float" @click="handleClose">
        <span class="button-shine"></span>
        <i class="fas fa-check"></i> {{ t('newsletterRewardButton') }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from '@/composables/useI18n';
import { useRouter } from 'vue-router';

// Props
defineProps<{
  show: boolean;
}>();

// Emits
const emit = defineEmits(['close']);

// Composables
const { t } = useI18n();
const router = useRouter();

// Redirect to Quotes page on close
const handleClose = () => {
  emit('close');
  // Navigate to the Pop Culture Wisdom page
  router.push('/quotes');
};
</script>

<style scoped>
.newsletter-reward {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 2001;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
}

.newsletter-reward.show {
  opacity: 1;
  visibility: visible;
}

.newsletter-reward-container {
  position: relative;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(250, 250, 250, 0.9));
  border-radius: 20px;
  padding: 35px;
  max-width: 90%;
  width: 480px;
  text-align: center;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.25);
  transform: scale(0.9);
  transition: transform 0.3s ease;
  overflow: hidden;
}

.reward-background {
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

.newsletter-reward.show .newsletter-reward-container {
  transform: scale(1);
  animation: rewardPulse 0.5s ease-in-out;
}

.newsletter-reward-title {
  position: relative;
  font-size: 1.8rem;
  color: var(--accent-color);
  margin-bottom: 15px;
  font-weight: bold;
  z-index: 1;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.newsletter-reward-icon {
  position: relative;
  z-index: 1;
  width: 90px;
  height: 90px;
  margin: 0 auto 20px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3.5rem;
  background: linear-gradient(135deg, #FFD304, #FFA500);
  box-shadow: 0 10px 25px rgba(255, 211, 4, 0.3);
  animation: bounce 1.2s infinite alternate cubic-bezier(0.4, 0, 0.2, 1);
}

.newsletter-reward-description {
  position: relative;
  z-index: 1;
  color: #444;
  margin-bottom: 20px;
  line-height: 1.6;
}

.reward-highlight {
  display: block;
  margin-top: 15px;
  padding: 12px;
  background-color: rgba(255, 211, 4, 0.15);
  border-radius: 10px;
  color: #333;
  border-left: 4px solid #FFD304;
  text-align: left;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.05);
  font-size: 0.95rem;
}

/* Pop Culture Access Notice */
.pop-culture-access {
  position: relative;
  z-index: 1;
  margin: 20px 0;
  padding: 15px;
  background-color: rgba(138, 43, 226, 0.15);
  border-radius: 10px;
  border-left: 4px solid var(--accent-color);
  display: flex;
  align-items: center;
  text-align: left;
  animation: fadeIn 0.5s ease-out;
}

.pop-culture-access i {
  font-size: 1.8rem;
  color: var(--accent-color);
  margin-right: 15px;
  flex-shrink: 0;
}

.pop-culture-access p {
  color: #333;
  margin: 0;
  font-size: 0.95rem;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.newsletter-reward-button {
  position: relative;
  background: linear-gradient(135deg, var(--accent-color), #6a11cb);
  color: white;
  border: none;
  padding: 12px 25px;
  border-radius: 30px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1.05rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 6px 15px rgba(138, 43, 226, 0.25);
  z-index: 1;
  overflow: hidden;
}

.newsletter-reward-button:hover,
.newsletter-reward-button:focus {
  background: linear-gradient(135deg, #7B25D1, #5a11ab);
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(138, 43, 226, 0.3);
}

.newsletter-reward-button i {
  margin-right: 8px;
}

/* Responsive styles */
@media (max-width: 768px) {
  .newsletter-reward-container {
    padding: 25px;
    width: 95%;
  }
  
  .newsletter-reward-icon {
    width: 80px;
    height: 80px;
    font-size: 3rem;
  }
  
  .newsletter-reward-title {
    font-size: 1.6rem;
  }
  
  .pop-culture-access {
    flex-direction: column;
    text-align: center;
  }
  
  .pop-culture-access i {
    margin-right: 0;
    margin-bottom: 10px;
  }
}

@media (max-width: 480px) {
  .newsletter-reward-container {
    padding: 20px;
  }
  
  .newsletter-reward-icon {
    width: 70px;
    height: 70px;
    font-size: 2.5rem;
    margin-bottom: 15px;
  }
  
  .newsletter-reward-title {
    font-size: 1.4rem;
  }
  
  .newsletter-reward-button {
    width: 100%;
    padding: 10px 20px;
  }
}
</style>