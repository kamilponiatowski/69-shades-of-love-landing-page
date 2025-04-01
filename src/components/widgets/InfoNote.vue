<template>
    <div class="info-note" :class="customClass">
      <i :class="['fas', icon]" :style="iconStyle"></i>
      <p v-if="!html" class="info-text">{{ text }}</p>
      <p v-else class="info-text" v-html="text"></p>
    </div>
  </template>
  
  <script setup lang="ts">
  import { computed } from 'vue';
  
  const props = defineProps({
    text: {
      type: String,
      required: true
    },
    html: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: 'fa-info-circle'
    },
    iconColor: {
      type: String,
      default: ''
    },
    customClass: {
      type: String,
      default: ''
    }
  });
  
  const iconStyle = computed(() => {
    return props.iconColor ? { color: props.iconColor } : {};
  });
  </script>
  
  <style scoped>
  .info-note {
    display: flex;
    align-items: center;
    background-color: rgba(138, 43, 226, 0.1);
    padding: 15px;
    border-radius: 10px;
    margin-top: 20px;
    position: relative;
    overflow: hidden;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.05);
    border-left: 4px solid var(--accent-color);
  }
  .info-note i {
  font-size: 2rem;
  color: var(--accent-color);
  margin-right: 15px;
}

.info-text {
  color: var(--text-color);
  line-height: 1.5;
  margin: 0;
}

.info-text strong {
  color: var(--accent-color);
}

@media (max-width: 768px) {
  .info-note {
    padding: 12px;
  }
  
  .info-note i {
    font-size: 1.6rem;
  }
}

@media (max-width: 480px) {
  .info-note {
    flex-direction: column;
    text-align: center;
    padding: 10px;
  }
  
  .info-note i {
    margin-right: 0;
    margin-bottom: 10px;
  }
}
</style>