<template>
  <div class="container">
    <a href="#main-content" class="skip-link">{{ t("skipToContent") }}</a>

    <ScrollDownButton />

    <Header @tell-duck-joke="tellDuckJoke" :streak-days="streakDays" :isHomePage="false" :customTitle="t('projectPhilosophyTitle')" :customSubtitle="t('projectPhilosophyDescription')" />

    <DuckJoke :joke="currentDuckJoke" :show-duck-joke="showDuckJoke" />

    <div class="page-layout">
      <main id="main-content" class="about-content">
        <div class="content-section philosophy-section">
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
            <li>
              <i class="fas fa-lightbulb"></i>
              {{ t('feature6') }}
            </li>
          </ul>
        </div>

        <div class="content-section insights-section">
          <h2 class="section-title">{{ t('insightsFeatureTitle') }}</h2>
          <p class="section-description">
            {{ t('insightsFeatureDescription') }}
          </p>
          <div class="insights-points">
            <div class="insight-item">
              <div class="insight-icon physical-icon">
                <i class="fas fa-running"></i>
              </div>
              <div class="insight-text">
                {{ t('insightsPoint1') }}
              </div>
            </div>
            <div class="insight-item">
              <div class="insight-icon mental-icon">
                <i class="fas fa-brain"></i>
              </div>
              <div class="insight-text">
                {{ t('insightsPoint2') }}
              </div>
            </div>
            <div class="insight-item">
              <div class="insight-icon personal-icon">
                <i class="fas fa-smile-beam"></i>
              </div>
              <div class="insight-text">
                {{ t('insightsPoint3') }}
              </div>
            </div>
            <div class="insight-item">
              <div class="insight-icon relationship-icon">
                <i class="fas fa-users"></i>
              </div>
              <div class="insight-text">
                {{ t('insightsPoint4') }}
              </div>
            </div>
          </div>
        </div>

        <AboutMe @open-newsletter="openNewsletterPopup" :isSubscribed="isSubscribed" />

        <div class="navigation-links">
          <router-link to="/journal" class="back-link">
            <i class="fas fa-arrow-left"></i> {{ t('backToJourney') }}
          </router-link>
        </div>
      </main>
    </div>

    <Footer />

    <!-- Newsletter Components -->
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

    <NewsletterReward :show="showNewsletterReward" @close="closeNewsletterReward" />
    
    <NewsletterFloatingButton @click="openNewsletterPopup" :isSubscribed="isSubscribed" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useI18n, Language } from '@/composables/useI18n';
import { useNewsletter } from '@/composables/useNewsletter';
import { useDuckJokes } from '@/composables/useDuckJokes';
import { duckJokes } from '@/constants/duckJokes';

// Components
import Header from '@/components/layout/Header.vue';
import Footer from '@/components/layout/Footer.vue';
import AboutMe from '@/components/widgets/AboutMe.vue';
import NewsletterPopup from '@/components/widgets/NewsletterPopup.vue';
import NewsletterReward from '@/components/widgets/NewsletterReward.vue';
import NewsletterFloatingButton from '@/components/widgets/NewsletterFloatingButton.vue';
import ScrollDownButton from '@/components/widgets/ScrollDownButton.vue';
import DuckJoke from '@/components/widgets/DuckJoke.vue';

// Composables
const { t, currentLanguage, setLanguage } = useI18n();
const router = useRouter();
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
  closeNewsletterReward
} = useNewsletter();

// Duck jokes functionality
const { showDuckJoke, currentDuckJoke, tellDuckJoke } = useDuckJokes(duckJokes, currentLanguage);

// For compatibility with Header component
const streakDays = ref<number>(0);

/**
 * Toggle between available languages
 */
const toggleLanguage = () => {
  const newLang: Language = currentLanguage.value === 'pl' ? 'en' : 'pl';
  setLanguage(newLang);
};

// Method to navigate home
const navigateToHome = () => {
  router.push('/');
};
</script>

<style scoped>
/* Common styles for consistent layout */
.container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: var(--background-color);
}

@media (max-width: 768px) {
    .container {
        padding: 0;
    }
}

.page-layout {
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  padding: 0 20px;
}

.about-content {
  flex: 1;
  max-width: 900px;
  margin: 0 auto;
  width: 100%;
}

/* Well-being areas grid with enhanced visuals */
.wellbeing-areas {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-top: 15px;
}

.area-item {
  display: flex;
  align-items: center;
  padding: 20px;
  border-radius: 12px;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

.area-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

.area-icon {
  font-size: 2.5rem;
  margin-right: 20px;
  opacity: 0.85;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
}

.area-text strong {
  display: block;
  margin-bottom: 8px;
  font-size: 1.2rem;
  color: #333;
}

.area-text p {
  color: #555;
  line-height: 1.5;
}

/* Category-specific styling */
.physical-item {
  background: linear-gradient(135deg, rgba(255, 159, 41, 0.1), rgba(255, 159, 41, 0.05));
  border-left: 4px solid var(--physical-color);
}

.mental-item {
  background: linear-gradient(135deg, rgba(126, 217, 87, 0.1), rgba(126, 217, 87, 0.05));
  border-left: 4px solid var(--mental-color);
}

.personal-item {
  background: linear-gradient(135deg, rgba(255, 217, 102, 0.1), rgba(255, 217, 102, 0.05));
  border-left: 4px solid var(--personal-color);
}

.relationship-item {
  background: linear-gradient(135deg, rgba(255, 151, 183, 0.1), rgba(255, 151, 183, 0.05));
  border-left: 4px solid var(--relationship-color);
}

/* Features list styling */
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
  padding: 10px 15px;
  border-radius: 8px;
  background-color: rgba(0, 0, 0, 0.02);
  transition: all 0.3s ease;
}

.features-list li:hover {
  background-color: rgba(0, 0, 0, 0.04);
  transform: translateX(5px);
}

.features-list li i {
  margin-right: 15px;
  color: var(--main-color);
  font-size: 1.3rem;
  width: 30px;
  text-align: center;
}

/* Insights section styling */
.insights-points {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-top: 25px;
}

.insight-item {
  display: flex;
  align-items: center;
  padding: 15px;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.02);
  transition: all 0.3s ease;
}

.insight-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
}

.insight-icon {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
  font-size: 1.4rem;
  color: white;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.physical-icon {
  background: linear-gradient(135deg, var(--physical-color), #FF7F00);
}

.mental-icon {
  background: linear-gradient(135deg, var(--mental-color), #5CB85C);
}

.personal-icon {
  background: linear-gradient(135deg, var(--personal-color), #FFB833);
}

.relationship-icon {
  background: linear-gradient(135deg, var(--relationship-color), #FF6B98);
}

.insight-text {
  flex: 1;
  font-size: 1.05rem;
  color: #444;
  line-height: 1.5;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .wellbeing-areas,
  .insights-points {
    grid-template-columns: 1fr;
  }

  .page-layout {
    padding: 0 15px;
  }
}
</style>