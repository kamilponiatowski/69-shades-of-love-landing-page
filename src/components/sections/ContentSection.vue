<!-- src/components/sections/ContentSection.vue -->
<template>
    <section class="content-section" :class="customClass">
      <div class="pattern-background" v-if="showPattern"></div>
      <h2 class="section-title" v-if="title">{{ title }}</h2>
      <p class="section-description" v-if="description">{{ description }}</p>
      <slot></slot>
    </section>
  </template>
  
  <script setup lang="ts">
  defineProps({
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    customClass: {
      type: String,
      default: ''
    },
    showPattern: {
      type: Boolean,
      default: true
    }
  });
  </script>