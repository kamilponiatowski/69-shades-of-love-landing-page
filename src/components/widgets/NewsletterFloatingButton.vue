<template>
  <div class="newsletter-float-button animate-float" v-if="!isSubscribed" @click="handleClick"
    aria-label="Open newsletter subscription">
    <span class="diagonal-shine"></span>
    <i class="fas fa-envelope"></i>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { ref, onMounted } from 'vue';

const props = defineProps<{
  isSubscribed: boolean;
}>();

const emit = defineEmits(['click']);

const router = useRouter();

const isMobile = ref(false);

const checkMobile = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
    window.innerWidth < 768;
};

const handleClick = () => {
  if (isMobile.value) {
    router.push('/newsletter');
  } else {
    emit('click');
  }
};

const updateMobileStatus = () => {
  isMobile.value = checkMobile();
};

onMounted(() => {
  isMobile.value = checkMobile();
  window.addEventListener('resize', updateMobileStatus);
  return () => {
    window.removeEventListener('resize', updateMobileStatus);
  };
});
</script>

<style scoped>
@media (max-width: 768px) {
  .newsletter-float-button {
    width: 50px;
    height: 50px;
  }
}
</style>