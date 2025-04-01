<template>
  <div class="newsletter-reward" :class="{ show }" role="dialog" aria-modal="true">
    <div class="newsletter-reward-container">
      <div class="pattern-background pattern-background-accent"></div>
      <div class="newsletter-reward-icon animate-bounce">🎁</div>
      <h3 class="newsletter-reward-title">{{ t('newsletterRewardTitle') }}</h3>
      <p class="newsletter-reward-description">
        {{ t('newsletterRewardDescription') }}
        <strong class="reward-highlight">{{ t('newsletterRewardHighlight') }}</strong>
      </p>
      
      <div class="pop-culture-access">
        <i class="fas fa-theater-masks"></i>
        <p>{{ t('newsletterMemberNote') }}</p>
      </div>
      
      <button class="btn btn-accent animate-float" @click="handleClose">
        <span class="button-shine"></span>
        <i class="fas fa-check"></i> {{ t('newsletterRewardButton') }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from '@/composables/useI18n';
import { useRouter } from 'vue-router';

defineProps<{
  show: boolean;
}>();

const emit = defineEmits(['close']);

const { t } = useI18n();
const router = useRouter();

const handleClose = () => {
  emit('close');
  
  setTimeout(() => {
    router.push('/quotes');
  }, 100);
};
</script>

<style scoped>
.newsletter-reward-title {
  color: var(--accent-color);
  z-index: 1;
}

.reward-highlight {
  display: block;
  margin-top: var(--space-3);
  padding: var(--space-3);
  background-color: rgba(255, 211, 4, 0.15);
  border-radius: var(--radius-md);
  color: var(--color-text-dark);
  border-left: 4px solid #FFD304;
  text-align: left;
  box-shadow: var(--shadow-sm);
  font-size: 0.95rem;
  position: relative;
  z-index: 1;
}

.pop-culture-access {
  position: relative;
  z-index: 1;
  margin: var(--space-5) 0;
  padding: var(--space-4);
  background-color: rgba(138, 43, 226, 0.15);
  border-radius: var(--radius-md);
  border-left: 4px solid var(--accent-color);
  display: flex;
  align-items: center;
  text-align: left;
  animation: fadeIn 0.5s ease-out;
}

.pop-culture-access i {
  font-size: 1.8rem;
  color: var(--accent-color);
  margin-right: var(--space-4);
  flex-shrink: 0;
}

.pop-culture-access p {
  color: var(--color-text-dark);
  margin: 0;
  font-size: 0.95rem;
}

@media (max-width: 768px) {
  .pop-culture-access {
    flex-direction: column;
    text-align: center;
  }
  
  .pop-culture-access i {
    margin-right: 0;
    margin-bottom: var(--space-2);
  }
}

@media (max-width: 480px) {
  .newsletter-reward-icon {
    width: 70px;
    height: 70px;
    font-size: 2.5rem;
    margin-bottom: var(--space-3);
  }
}
</style>