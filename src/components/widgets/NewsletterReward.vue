<template>
  <div class="newsletter-reward" :class="{ show }" role="dialog" aria-modal="true">
    <div class="newsletter-reward-container">
      <div class="newsletter-reward-icon">🎁</div>
      <h3 class="newsletter-reward-title">{{ t('newsletterRewardTitle') }}</h3>
      <p class="newsletter-reward-description">
        {{ t('newsletterRewardDescription') }}
        <strong class="reward-highlight">{{ t('newsletterRewardHighlight') }}</strong>
      </p>
      <button class="newsletter-reward-button" @click="$emit('close')">
        <i class="fas fa-check"></i> {{ t('newsletterRewardButton') }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from '@/composables/useI18n';

// Props
defineProps<{
  show: boolean;
}>();

// Emits
defineEmits(['close']);

// Composables
const { t } = useI18n();
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
  background-color: white;
  border-radius: 15px;
  padding: 30px;
  max-width: 90%;
  width: 450px;
  text-align: center;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
  transform: scale(0.9);
  transition: transform 0.3s ease;
}

.newsletter-reward.show .newsletter-reward-container {
  transform: scale(1);
}

.newsletter-reward-title {
  font-size: 1.8rem;
  color: var(--accent-color);
  margin-bottom: 15px;
  font-weight: bold;
}

.newsletter-reward-icon {
  font-size: 4rem;
  color: #FFD304;
  margin-bottom: 20px;
  animation: bounce 1s infinite alternate;
}

@keyframes bounce {
  from {
    transform: translateY(0);
  }

  to {
    transform: translateY(-10px);
  }
}

.newsletter-reward-description {
  color: #555;
  margin-bottom: 20px;
  line-height: 1.6;
}

.reward-highlight {
  display: block;
  margin-top: 10px;
  padding: 8px;
  background-color: rgba(255, 211, 4, 0.2);
  border-radius: 5px;
  color: #333;
}

.newsletter-reward-button {
  background-color: var(--accent-color);
  color: white;
  border: none;
  padding: 10px 25px;
  border-radius: 50px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1rem;
  display: inline-flex;
  align-items: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.newsletter-reward-button:hover,
.newsletter-reward-button:focus {
  background-color: #7B25D1;
  transform: translateY(-3px);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
}

.newsletter-reward-button i {
  margin-right: 8px;
}
</style>