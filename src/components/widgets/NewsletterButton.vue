<template>
  <button class="newsletter-button animate-float" @click="handleClick">
    <i class="fas fa-gift"></i> <span>{{ t('newsletterBtnText') }}</span>
  </button>
</template>
  
<script setup lang="ts">
import { useI18n } from '@/composables/useI18n';
import { useRouter } from 'vue-router';

// Props
const props = defineProps({
  isSubscribed: {
    type: Boolean,
    default: false
  }
});

// Emits
const emit = defineEmits(['click']);

// Composables
const { t } = useI18n();
const router = useRouter();

// Methods
const handleClick = () => {
  if (props.isSubscribed) {
    // If user is already subscribed, redirect to gift page
    router.push('/gift');
  } else {
    // If not subscribed, show newsletter popup
    emit('click');
  }
};
</script>

<style scoped>
.newsletter-button {
  position: relative;
  background: linear-gradient(135deg, var(--accent-color), #6a11cb);
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 30px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(138, 43, 226, 0.25);
  font-size: 1rem;
  min-height: 42px;
  width: 100%;
  margin-top: 10px;
  overflow: hidden;
}

.newsletter-button:hover,
.newsletter-button:focus {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(138, 43, 226, 0.4);
  background: linear-gradient(135deg, #7B25D1, #5a11ab);
}

.newsletter-button i {
  margin-right: 8px;
}
</style>