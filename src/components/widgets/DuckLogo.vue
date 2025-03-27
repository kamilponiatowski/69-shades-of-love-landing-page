<template>
    <router-link v-if="!isHomePage" to="/" class="duck-logo" tabindex="0" role="link"
        :aria-label="t('duckLogoHomeAria')">
        <img src="@/assets/images/duck-logo.svg" alt="logo - Quack!!" aria-hidden="true">
        <div class="diagonal-shine"></div>
        <span class="duck-tooltip">What The Quack?</span>
    </router-link>
    <div v-else class="duck-logo" @click="$emit('tell-duck-joke')" tabindex="0" role="button"
        :aria-label="t('duckLogoAria')">
        <img src="@/assets/images/duck-logo.svg" alt="logo - Quack!!" aria-hidden="true">
        <div class="quick-diagonal-shine"></div>
        <span class="duck-tooltip">What The Quack?</span>
    </div>
</template>

<script setup lang="ts">
import { useI18n } from '@/composables/useI18n';

// Props
defineProps({
    isHomePage: {
        type: Boolean,
        default: false
    }
});

// Emits
defineEmits(['tell-duck-joke']);

// Composables
const { t } = useI18n();
</script>

<style scoped>
.duck-logo {
    cursor: pointer;
    z-index: 10;
    display: inline-block;
    position: relative;
    width: 69px;
    height: 69px;
    overflow: hidden;
    border-radius: 50%;
    background: transparent;
}

.duck-logo img {
    position: absolute;
    width: 95px;
    height: 95px;
    top: 5px;
    left: 4px;
    display: block;
    z-index: 1;
}

/* Rapid diagonal flash */
.quick-diagonal-shine {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg,
            transparent 0%,
            transparent 35%,
            rgba(255, 255, 255, 0.9) 45%,
            rgba(255, 255, 255, 0.9) 55%,
            transparent 65%,
            transparent 100%);
    transform: translateX(-150%) translateY(-150%);
    animation: quick-shine 6s infinite;
    z-index: 2;
    pointer-events: none;
}

.duck-tooltip {
    position: absolute;
    top: 50%;
    left: 100%;
    transform: translateY(-50%);
    background-color: white;
    padding: 8px 12px;
    border-radius: 15px;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    white-space: nowrap;
    font-weight: bold;
    color: #8A2BE2;
    pointer-events: none;
    z-index: 100;
    margin-left: 10px;
}

.duck-logo:focus {
    outline: none;
}

.duck-logo:hover .duck-tooltip,
.duck-logo:focus .duck-tooltip {
    opacity: 1;
    visibility: visible;
}

/* Mobile adjustments */
@media (max-width: 768px) {
    .duck-tooltip {
        top: 100%;
        left: 50%;
        transform: translateX(-50%);
        margin-left: 0;
        margin-top: 10px;
    }

    .duck-logo:hover .duck-tooltip,
    .duck-logo:focus .duck-tooltip {
        top: 110%;
    }
}

/* Fixed duck logo for mobile */
@media (max-width: 480px) {
    .duck-logo {
        position: fixed;
        right: 20px;
        bottom: 20px;
        left: auto;
        top: auto;
        width: 50px;
        height: 50px;
        z-index: 1000;
        background-color: white;
        border-radius: 50%;
        box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
        overflow: hidden;
    }

    .duck-logo img {
        width: 65px;
        height: 65px;
        top: 3px;
        left: 2px;
    }
}
</style>