<template>
  <button class="btn btn-accent animate-float" @click="handleClick">
    <i class="fas fa-gift"></i> <span>{{ t('newsletterBtnText') }}</span>
  </button>
</template>
  
<script setup lang="ts">
import { useI18n } from '@/composables/useI18n';
import { useRouter } from 'vue-router';

const props = defineProps({
  isSubscribed: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['click']);

const { t } = useI18n();
const router = useRouter();

// Methods
const handleClick = () => {
  if (props.isSubscribed) {
    router.push('/gift');
  } else {
    emit('click');
  }
};
</script>

<style scoped>
.btn {
  margin-top: var(--space-2);
  width: 100%;
}
</style>