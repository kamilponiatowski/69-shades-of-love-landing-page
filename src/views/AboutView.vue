<template>
  <div class="container about-page">
    <main class="about-content">
      <div class="about-header">
        <h1 class="main-title">{{ t('mainTitle') }}</h1>
        <p class="subtitle">{{ t('subtitle') }}</p>
      </div>

      <div class="content-section philosophy-section">
        <h2 class="section-title">{{ t('projectPhilosophyTitle') }}</h2>
        <p class="section-description">
          {{ t('projectPhilosophyDescription') }}
        </p>

        <div class="wellbeing-areas">
          <div class="area-item physical-item">
            <div class="area-icon">💪</div>
            <div class="area-text">
              <strong>{{ t('physical') }}</strong>
              <p>{{ t('physicalDescription') }}</p>
            </div>
          </div>
          <div class="area-item mental-item">
            <div class="area-icon">🧠</div>
            <div class="area-text">
              <strong>{{ t('mental') }}</strong>
              <p>{{ t('mentalDescription') }}</p>
            </div>
          </div>
          <div class="area-item personal-item">
            <div class="area-icon">🌈</div>
            <div class="area-text">
              <strong>{{ t('personal') }}</strong>
              <p>{{ t('personalDescription') }}</p>
            </div>
          </div>
          <div class="area-item relationship-item">
            <div class="area-icon">❤️</div>
            <div class="area-text">
              <strong>{{ t('relationship') }}</strong>
              <p>{{ t('relationshipDescription') }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="content-section features-section">
        <h2 class="section-title">{{ t('featuresTitle') }}</h2>
        <ul class="features-list">
          <li>
            <i class="fas fa-chart-line"></i>
            {{ t('feature1') }}
          </li>
          <li>
            <i class="fas fa-list-alt"></i>
            {{ t('feature2') }}
          </li>
          <li>
            <i class="fas fa-fire"></i>
            {{ t('feature3') }}
          </li>
          <li>
            <i class="fas fa-trophy"></i>
            {{ t('feature4') }}
          </li>
          <li>
            <i class="fas fa-file-pdf"></i>
            {{ t('feature5') }}
          </li>
        </ul>
      </div>

      <AboutMe @open-newsletter="openNewsletterPopup" />

      <div class="navigation-links">
        <router-link to="/" class="back-link">
          <i class="fas fa-arrow-left"></i> {{ t('backToJourney') }}
        </router-link>
      </div>
    </main>

    <Footer />

    <!-- Newsletter Components from HomeView -->
    <NewsletterPopup :show="showNewsletterPopup" :email="newsletterEmail" :name="newsletterName"
      :show-success="showNewsletterSuccess" :show-error="showNewsletterError" :is-submitting="isSubmittingNewsletter"
      @close="closeNewsletterPopup" @submit="submitNewsletterForm" @update:email="newsletterEmail = $event"
      @update:name="newsletterName = $event" />

    <NewsletterReward :show="showNewsletterReward" @close="closeNewsletterReward" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useI18n } from '@/composables/useI18n';
import { useNewsletter } from '@/composables/useNewsletter';

// Components
import Header from '@/components/layout/Header.vue';
import Footer from '@/components/layout/Footer.vue';
import AboutMe from '@/components/widgets/AboutMe.vue';
import NewsletterPopup from '@/components/widgets/NewsletterPopup.vue';
import NewsletterReward from '@/components/widgets/NewsletterReward.vue';

// Composables
const { t } = useI18n();
const router = useRouter();
const {
  showNewsletterPopup,
  newsletterEmail,
  newsletterName,
  showNewsletterSuccess,
  showNewsletterError,
  showNewsletterReward,
  isSubmittingNewsletter,
  openNewsletterPopup,
  closeNewsletterPopup,
  submitNewsletterForm,
  closeNewsletterReward
} = useNewsletter();

// Method to navigate home
const navigateToHome = () => {
  router.push('/');
};
</script>

<style scoped>
.about-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: var(--background-color);
}

.about-content {
  flex: 1;
  padding: 40px 20px;
  max-width: 900px;
  margin: 0 auto;
  width: 100%;
}

.about-header {
  text-align: center;
  margin-bottom: 40px;
}

.main-title {
  color: var(--main-color);
  font-size: 3rem;
  margin-bottom: 15px;
}

.subtitle {
  color: #666;
  font-size: 1.4rem;
}

.content-section {
  background-color: white;
  border-radius: 15px;
  padding: 30px;
  margin-bottom: 30px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.content-section:hover {
  transform: translateY(-5px);
}

.section-title {
  color: var(--main-color);
  border-bottom: 3px solid var(--main-color);
  padding-bottom: 10px;
  margin-bottom: 20px;
  font-size: 1.8rem;
}

.section-description {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #333;
  margin-bottom: 20px;
}

.wellbeing-areas {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.area-item {
  display: flex;
  align-items: center;
  padding: 15px;
  border-radius: 10px;
  transition: background-color 0.3s ease;
}

.area-icon {
  font-size: 3rem;
  margin-right: 20px;
  opacity: 0.7;
}

.area-text strong {
  display: block;
  margin-bottom: 10px;
  font-size: 1.2rem;
}

.area-text p {
  color: #666;
}

.physical-item {
  background-color: rgba(255, 159, 41, 0.1);
}

.mental-item {
  background-color: rgba(126, 217, 87, 0.1);
}

.personal-item {
  background-color: rgba(255, 217, 102, 0.1);
}

.relationship-item {
  background-color: rgba(255, 151, 183, 0.1);
}

.features-section ul {
  list-style: none;
  padding: 0;
}

.features-list li {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  font-size: 1.1rem;
  color: #333;
}

.features-list li i {
  margin-right: 15px;
  color: var(--main-color);
  font-size: 1.5rem;
  width: 30px;
  text-align: center;
}

.navigation-links {
  text-align: center;
  margin-top: 30px;
}

.back-link {
  display: inline-flex;
  align-items: center;
  color: white;
  background-color: var(--main-color);
  text-decoration: none;
  padding: 12px 20px;
  border-radius: 8px;
  transition: all 0.3s ease;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.back-link:hover,
.back-link:focus {
  background-color: #a01a30;
  /* ciemniejszy odcień głównego koloru */
  transform: translateY(-3px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.back-link i {
  margin-right: 10px;
}

@media (max-width: 768px) {
  .wellbeing-areas {
    grid-template-columns: 1fr;
  }

  .about-content {
    padding: 20px 15px;
  }

  .main-title {
    font-size: 2.5rem;
  }

  .section-title {
    font-size: 1.6rem;
  }
}
</style>