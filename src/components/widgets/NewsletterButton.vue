<template>
  <button class="newsletter-button" @click="handleClick">
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