<template>
  <div class="about-me-container">
    <div class="duck-pattern" aria-hidden="true">🦆</div>
    <h2 class="about-me-title">
      <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCIgdmlld0JveD0iMCAwIDg3OSA4NzkiPjxwYXRoIGQ9Ik0gMzA3IDExNS4xMzQgQyAyNTAuNjMyIDEyMC44OTUsIDE5NS45ODcgMTQ5LjQ5NSwgMTU5LjIwNSAxOTIuNDg4IEMgMTEzLjQ5NCAyNDUuOTE4LCA5NS4xNzggMzE0LjMyOCwgMTA4LjA2MiAzODMuNTAwIEMgMTE3LjUyMSA0MzQuMjgyLCAxNDYuMTI3IDQ4Mi40MTIsIDE4Ni41MDAgNTE1LjQ3MyBDIDE5OS4wNDUgNTI1Ljc0NiwgMjA0Ljk1NiA1MjkuNzIxLCAyMjYuMDc4IDU0Mi4wOTAgQyAyNDQuMjA1IDU1Mi43MDYsIDI2MS4wMTEgNTYyLjU1OCwgMzAzIDU4Ny4xODcgQyAzMTcuNTc1IDU5NS43MzYsIDM4Ni44NzUgNjM2LjM4MSwgNDU3IDY3Ny41MTAgQyA1MjcuMTI1IDcxOC42MzksIDU4Ni45MDUgNzUzLjM2MiwgNTg5Ljg0MyA3NTQuNjczIEMgNjA5Ljg4MCA3NjMuNjEzLCA2NDEuMjA5IDc2Ni42NTMsIDY2NS4zMDAgNzYxLjk5NiBDIDcwNy4zOTAgNzUzLjg2MCwgNzQyLjU0OSA3MjcuMDc0LCA3NjEuNzcxIDY4OC41MDAgQyA3NzcuMDkwIDY1Ny43NTksIDc3OS42OTIgNjE5LjkxMywgNzY4Ljc4NSA1ODYuNTAwIEMgNzYzLjgyOSA1NzEuMzE3LCA3NTYuMzM3IDU1OC43MDgsIDcyNi43NzggNTE1LjgwMiBDIDcwMC4xNzQgNDc3LjE4NSwgNjYwLjUxNiA0MTkuNTc5LCA1OTguNTIyIDMyOS41MDAgQyA1ODQuMTM4IDMwOC42MDAsIDU1OS4zODAgMjcyLjYwMCwgNTQzLjUwNCAyNDkuNTAwIEMgNTEyLjQwMCAyMDQuMjQzLCA1MDguMTY0IDE5OC40NzgsIDQ5Ny41NzUgMTg3LjAwNCBDIDQ0OS4wMTAgMTM0LjM3NCwgMzc4LjU5MiAxMDcuODE4LCAzMDcgMTE1LjEzNCBNIDI5Ny41MDAgMjQ2LjA3MiBDIDI3OC40MTAgMjQ3LjQ0MiwgMjU5LjYyMCAyNDkuMDc3LCAyNTYuMjQ0IDI0OS42NjEgTCAyNTIuOTg5IDI1MC4yMjUgMjUzLjI0NCAzMzMuMzYyIEwgMjUzLjUwMCA0MTYuNTAwIDI4Ny43NTAgNDE2Ljc2MyBMIDMyMiA0MTcuMDI2IDMyMiA0MDEuNzYzIEwgMzIyLjAwMSAzODYuNTAwIDMzOC4yNTAgMzg2LjQxMyBDIDM1Ni4yNjIgMzg2LjMxNywgMzY0LjYyMSAzODQuNzA1LCAzNzYuODkzIDM3OC45NjMgQyAzOTcuNDE5IDM2OS4zNTgsIDQxMi44NDQgMzUwLjU3MywgNDE3LjU0MSAzMjkuNDYxIEMgNDE5LjY3NyAzMTkuODU5LCA0MTkuMTAyIDI5Ni44MDYsIDQxNi40OTMgMjg3LjUwMCBDIDQwOS43NTEgMjYzLjQ0NCwgMzkzLjE0MiAyNTAuODE2LCAzNjIuNTE3IDI0Ni40NjEgQyAzNTEuNjAzIDI0NC45MDksIDMxNi42MTQgMjQ0LjY5OSwgMjk3LjUwMCAyNDYuMDcyIE0gMzQwLjUwMCAyODkuODQ1IEMgMzM1LjAyMSAyOTEuODk5LCAzMjkuMjgwIDI5NS4wNjksIDMyNC4yNTAgMjk4LjgxNiBMIDMyMSAzMDEuMjM3IDMyMSAzMTkuOTUyIEMgMzIxIDMzMC4yNDUsIDMyMS4yNzggMzM4Ljk0NSwgMzIxLjYxOCAzMzkuMjg0IEMgMzIyLjU4NSAzNDAuMjUyLCAzMzguODIyIDMzMS43MjAsIDM0NS43ODkgMzI2LjU4MyBDIDM1My4wNTEgMzIxLjIyOSwgMzU3LjQxOCAzMTQuOTYwLCAzNTkuMDkwIDMwNy40ODggQyAzNjIuMjk1IDI5My4xNjcsIDM1My42MTQgMjg0LjkyOCwgMzQwLjUwMCAyODkuODQ1IiBzdHJva2U9Im5vbmUiIGZpbGw9IiNmZmZmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZSIvPjwvc3ZnPg==" alt="Duck Icon" aria-hidden="true">
      <span class="about-title-text">{{ t('aboutTitle') }}</span>
    </h2>
    <p class="about-me-content">
      <span class="about-content-text" v-html="formattedAboutContent"></span>
    </p>
    <div class="contact-info">
      <a href="mailto:poniatowski.dev@gmail.com" class="contact-link" aria-label="Email the creator">
        <i class="fas fa-envelope" aria-hidden="true"></i> poniatowski.dev@gmail.com
      </a>
    </div>
    <!-- New container for buttons - better alignment -->
    <div class="about-me-buttons">
      <a href="https://tiptopjar.com/proDucktive" target="_blank" class="support-button" rel="noopener">
        <i class="fas fa-heart" aria-hidden="true"></i> <span class="support-text">{{ t('supportButton') }}</span>
      </a>
      <NewsletterButton @click="$emit('open-newsletter')" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from '@/composables/useI18n';
import NewsletterButton from './NewsletterButton.vue';

// Composables
const { t } = useI18n();

// Emits
defineEmits(['open-newsletter']);

// Computed
const formattedAboutContent = computed(() => {
  return t('aboutContent').replace('\\n\\n', '<br><br>');
});
</script>