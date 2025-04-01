<template>
    <div class="container">
      <a href="#main-content" class="skip-link">{{ t("skipToContent") }}</a>
  
      <ScrollDownButton />
  
      <Header 
        @tell-duck-joke="tellDuckJoke" 
        :streak-days="streakDays" 
        :isHomePage="isHomePage" 
        :customTitle="customTitle" 
        :customSubtitle="customSubtitle" 
        :titleLinkTarget="titleLinkTarget"
      />
  
      <DuckJoke 
        :joke="currentDuckJoke" 
        :show-duck-joke="showDuckJoke"
      />
  
      <div class="page-layout">
        <slot />
      </div>
  
      <Footer />
  
      <NewsletterFloatingButton 
        @click="openNewsletterPopup" 
        :isSubscribed="isSubscribed" 
      />
  
      <NewsletterPopup 
        :show="showNewsletterPopup" 
        :email="newsletterEmail" 
        :name="newsletterName"
        :show-success="showNewsletterSuccess" 
        :show-error="showNewsletterError" 
        :is-submitting="isSubmittingNewsletter"
        @close="closeNewsletterPopup" 
        @submit="submitNewsletterForm" 
        @update:email="newsletterEmail = $event"
        @update:name="newsletterName = $event" 
      />
  
      <NewsletterReward 
        :show="showNewsletterReward" 
        @close="closeNewsletterReward" 
      />
  
      <MobileNewsletterPopup 
        v-if="isMobileDevice" 
        :show="showMobilePopup" 
        @close="closeMobilePopup"
        @navigate="navigateToNewsletterPage" 
      />
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, computed } from 'vue';
  import { useRouter } from 'vue-router';
  import { useI18n } from '@/composables/useI18n';
  import { useDuckJokes } from '@/composables/useDuckJokes';
  import { duckJokes } from '@/constants/duckJokes';
  import { useNewsletter } from '@/composables/useNewsletter';
  
  import Header from '@/components/layout/Header.vue';
  import Footer from '@/components/layout/Footer.vue';
  import DuckJoke from '@/components/widgets/DuckJoke.vue';
  import ScrollDownButton from '@/components/common/ScrollDownButton.vue';
  import NewsletterPopup from '@/components/ui/newsletter/NewsletterPopup.vue';
  import NewsletterReward from '@/components/ui/newsletter/NewsletterReward.vue';
  import MobileNewsletterPopup from '@/components/ui/newsletter/MobileNewsletterPopup.vue';
  import NewsletterFloatingButton from '@/components/ui/newsletter/NewsletterFloatingButton.vue';
  
  const props = defineProps({
    isHomePage: {
      type: Boolean,
      default: false
    },
    customTitle: {
      type: String,
      default: ''
    },
    customSubtitle: {
      type: String,
      default: ''
    },
    titleLinkTarget: {
      type: [String, Boolean],
      default: false
    },
    streakDays: {
      type: Number,
      default: 0
    }
  });
  
  const { t, currentLanguage } = useI18n();
  const router = useRouter();
  
  const { showDuckJoke, currentDuckJoke, tellDuckJoke } = useDuckJokes(duckJokes, currentLanguage);
  
  const {
    showNewsletterPopup,
    newsletterEmail,
    newsletterName,
    showNewsletterSuccess,
    showNewsletterError,
    showNewsletterReward,
    isSubmittingNewsletter,
    isSubscribed,
    openNewsletterPopup,
    closeNewsletterPopup,
    submitNewsletterForm,
    closeNewsletterReward,
    showMobilePopup,
    isMobileDevice,
    closeMobilePopup,
    navigateToNewsletterPage
  } = useNewsletter();
  </script>