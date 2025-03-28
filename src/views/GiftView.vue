<template>
  <div class="container gift-page">
    <a href="#main-content" class="skip-link">{{ t("skipToContent") }}</a>

    <ScrollDownButton />

    <Header @tell-duck-joke="tellDuckJoke" :streak-days="streakDays" :isHomePage="false"
      :customTitle="t('giftPageTitle')" :customSubtitle="t('giftPageSubtitle')" />

    <DuckJoke :joke="currentDuckJoke" :show-duck-joke="showDuckJoke" />

    <main id="main-content" class="gift-content">
      <div class="content-section intro-section">
        <h2 class="section-title">{{ t('welcomeTitle') }}</h2>
        <p class="section-description">
          {{ t('welcomeDescription') }}
        </p>

        <div class="download-options no-print">
          <button @click="downloadPdf" class="download-button">
            <i class="fas fa-file-pdf"></i> {{ t('downloadPdfButton') }}
          </button>
          <button @click="printHabitTracker" class="download-button">
            <i class="fas fa-print"></i> {{ t('printTrackerButton') }}
          </button>
        </div>
      </div>

      <div class="content-section habits-section">
        <h2 class="section-title">{{ t('habitsTitle') }}</h2>

        <div class="habit-container">
          <!-- Habit 1 -->
          <div class="habit-card physical-habit">
            <div class="habit-number">1</div>
            <div class="habit-content">
              <h3 class="habit-title">
                <i class="fas fa-bullseye"></i> {{ t('habit1Title') }}
              </h3>
              <p class="habit-description">
                {{ t('habit1Description') }}
              </p>
              <div class="habit-tips">
                <h4>{{ t('implementationTips') }}</h4>
                <ul>
                  <li>{{ t('habit1Tip1') }}</li>
                  <li>{{ t('habit1Tip2') }}</li>
                  <li>{{ t('habit1Tip3') }}</li>
                </ul>
              </div>
              <div class="habit-tools">
                <span class="tool-tag">{{ t('habit1Tool1') }}</span>
                <span class="tool-tag">{{ t('habit1Tool2') }}</span>
                <span class="tool-tag">{{ t('habit1Tool3') }}</span>
              </div>
            </div>
          </div>

          <!-- Habit 2 -->
          <div class="habit-card mental-habit">
            <div class="habit-number">2</div>
            <div class="habit-content">
              <h3 class="habit-title">
                <i class="fas fa-brain"></i> {{ t('habit2Title') }}
              </h3>
              <p class="habit-description">
                {{ t('habit2Description') }}
              </p>
              <div class="habit-tips">
                <h4>{{ t('implementationTips') }}</h4>
                <ul>
                  <li>{{ t('habit2Tip1') }}</li>
                  <li>{{ t('habit2Tip2') }}</li>
                  <li>{{ t('habit2Tip3') }}</li>
                </ul>
              </div>
              <div class="habit-tools">
                <span class="tool-tag">{{ t('habit2Tool1') }}</span>
                <span class="tool-tag">{{ t('habit2Tool2') }}</span>
                <span class="tool-tag">{{ t('habit2Tool3') }}</span>
              </div>
            </div>
          </div>

          <!-- Habit 3 -->
          <div class="habit-card physical-habit">
            <div class="habit-number">3</div>
            <div class="habit-content">
              <h3 class="habit-title">
                <i class="fas fa-running"></i> {{ t('habit3Title') }}
              </h3>
              <p class="habit-description">
                {{ t('habit3Description') }}
              </p>
              <div class="habit-tips">
                <h4>{{ t('implementationTips') }}</h4>
                <ul>
                  <li>{{ t('habit3Tip1') }}</li>
                  <li>{{ t('habit3Tip2') }}</li>
                  <li>{{ t('habit3Tip3') }}</li>
                </ul>
              </div>
              <div class="habit-tools">
                <span class="tool-tag">{{ t('habit3Tool1') }}</span>
                <span class="tool-tag">{{ t('habit3Tool2') }}</span>
                <span class="tool-tag">{{ t('habit3Tool3') }}</span>
              </div>
            </div>
          </div>

          <!-- Habit 4 -->
          <div class="habit-card physical-habit">
            <div class="habit-number">4</div>
            <div class="habit-content">
              <h3 class="habit-title">
                <i class="fas fa-apple-alt"></i> {{ t('habit4Title') }}
              </h3>
              <p class="habit-description">
                {{ t('habit4Description') }}
              </p>
              <div class="habit-tips">
                <h4>{{ t('implementationTips') }}</h4>
                <ul>
                  <li>{{ t('habit4Tip1') }}</li>
                  <li>{{ t('habit4Tip2') }}</li>
                  <li>{{ t('habit4Tip3') }}</li>
                </ul>
              </div>
              <div class="habit-tools">
                <span class="tool-tag">{{ t('habit4Tool1') }}</span>
                <span class="tool-tag">{{ t('habit4Tool2') }}</span>
                <span class="tool-tag">{{ t('habit4Tool3') }}</span>
              </div>
            </div>
          </div>

          <!-- Habit 5 -->
          <div class="habit-card mental-habit">
            <div class="habit-number">5</div>
            <div class="habit-content">
              <h3 class="habit-title">
                <i class="fas fa-hourglass-half"></i> {{ t('habit5Title') }}
              </h3>
              <p class="habit-description">
                {{ t('habit5Description') }}
              </p>
              <div class="habit-tips">
                <h4>{{ t('implementationTips') }}</h4>
                <ul>
                  <li>{{ t('habit5Tip1') }}</li>
                  <li>{{ t('habit5Tip2') }}</li>
                  <li>{{ t('habit5Tip3') }}</li>
                </ul>
              </div>
              <div class="habit-tools">
                <span class="tool-tag">{{ t('habit5Tool1') }}</span>
                <span class="tool-tag">{{ t('habit5Tool2') }}</span>
                <span class="tool-tag">{{ t('habit5Tool3') }}</span>
              </div>
            </div>
          </div>

          <!-- Habit 6 -->
          <div class="habit-card personal-habit">
            <div class="habit-number">6</div>
            <div class="habit-content">
              <h3 class="habit-title">
                <i class="fas fa-book"></i> {{ t('habit6Title') }}
              </h3>
              <p class="habit-description">
                {{ t('habit6Description') }}
              </p>
              <div class="habit-tips">
                <h4>{{ t('implementationTips') }}</h4>
                <ul>
                  <li>{{ t('habit6Tip1') }}</li>
                  <li>{{ t('habit6Tip2') }}</li>
                  <li>{{ t('habit6Tip3') }}</li>
                </ul>
              </div>
              <div class="habit-tools">
                <span class="tool-tag">{{ t('habit6Tool1') }}</span>
                <span class="tool-tag">{{ t('habit6Tool2') }}</span>
                <span class="tool-tag">{{ t('habit6Tool3') }}</span>
              </div>
            </div>
          </div>

          <!-- Habit 7 -->
          <div class="habit-card mental-habit">
            <div class="habit-number">7</div>
            <div class="habit-content">
              <h3 class="habit-title">
                <i class="fas fa-moon"></i> {{ t('habit7Title') }}
              </h3>
              <p class="habit-description">
                {{ t('habit7Description') }}
              </p>
              <div class="habit-tips">
                <h4>{{ t('implementationTips') }}</h4>
                <ul>
                  <li>{{ t('habit7Tip1') }}</li>
                  <li>{{ t('habit7Tip2') }}</li>
                  <li>{{ t('habit7Tip3') }}</li>
                </ul>
              </div>
              <div class="habit-tools">
                <span class="tool-tag">{{ t('habit7Tool1') }}</span>
                <span class="tool-tag">{{ t('habit7Tool2') }}</span>
                <span class="tool-tag">{{ t('habit7Tool3') }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Habit Tracker Section - hidden in full guide print -->
      <div id="habit-tracker-section" class="content-section tracker-section print-tracker-only-visible">
        <h2 class="section-title">{{ t('trackerTitle') }}</h2>
        <p class="section-description">
          {{ t('trackerDescription') }}
        </p>

        <div class="habit-tracker">
          <div class="tracker-header">
            <div class="tracker-cell header-cell">{{ t('habitColumnHeader') }}</div>
            <div v-for="day in 21" :key="day" class="tracker-cell day-cell">{{ day }}</div>
          </div>

          <div class="tracker-row">
            <div class="tracker-cell habit-cell">{{ t('habit1ShortName') }}</div>
            <div v-for="day in 21" :key="day" class="tracker-cell checkbox-cell">
              <div class="checkbox-placeholder"></div>
            </div>
          </div>

          <div class="tracker-row">
            <div class="tracker-cell habit-cell">{{ t('habit2ShortName') }}</div>
            <div v-for="day in 21" :key="day" class="tracker-cell checkbox-cell">
              <div class="checkbox-placeholder"></div>
            </div>
          </div>

          <div class="tracker-row">
            <div class="tracker-cell habit-cell">{{ t('habit3ShortName') }}</div>
            <div v-for="day in 21" :key="day" class="tracker-cell checkbox-cell">
              <div class="checkbox-placeholder"></div>
            </div>
          </div>

          <div class="tracker-row">
            <div class="tracker-cell habit-cell">{{ t('habit4ShortName') }}</div>
            <div v-for="day in 21" :key="day" class="tracker-cell checkbox-cell">
              <div class="checkbox-placeholder"></div>
            </div>
          </div>

          <div class="tracker-row">
            <div class="tracker-cell habit-cell">{{ t('habit5ShortName') }}</div>
            <div v-for="day in 21" :key="day" class="tracker-cell checkbox-cell">
              <div class="checkbox-placeholder"></div>
            </div>
          </div>

          <div class="tracker-row">
            <div class="tracker-cell habit-cell">{{ t('habit6ShortName') }}</div>
            <div v-for="day in 21" :key="day" class="tracker-cell checkbox-cell">
              <div class="checkbox-placeholder"></div>
            </div>
          </div>

          <div class="tracker-row">
            <div class="tracker-cell habit-cell">{{ t('habit7ShortName') }}</div>
            <div v-for="day in 21" :key="day" class="tracker-cell checkbox-cell">
              <div class="checkbox-placeholder"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Additional Resources Section -->
      <div class="content-section resources-section">
        <h2 class="section-title">{{ t('resourcesTitle') }}</h2>
        <p class="section-description">
          {{ t('resourcesDescription') }}
        </p>

        <div class="resources-grid">
          <div class="resource-card">
            <div class="resource-icon"><i class="fas fa-book"></i></div>
            <h3>{{ t('recommendedBooks') }}</h3>
            <ul>
              <li>{{ t('book1') }}</li>
              <li>{{ t('book2') }}</li>
              <li>{{ t('book3') }}</li>
              <li>{{ t('book4') }}</li>
            </ul>
          </div>

          <div class="resource-card">
            <div class="resource-icon"><i class="fas fa-podcast"></i></div>
            <h3>{{ t('recommendedPodcasts') }}</h3>
            <ul>
              <li>{{ t('podcast1') }}</li>
              <li>{{ t('podcast2') }}</li>
              <li>{{ t('podcast3') }}</li>
              <li>{{ t('podcast4') }}</li>
            </ul>
          </div>

          <div class="resource-card">
            <div class="resource-icon"><i class="fas fa-laptop"></i></div>
            <h3>{{ t('onlineCourses') }}</h3>
            <ul>
              <li>{{ t('course1') }}</li>
              <li>{{ t('course2') }}</li>
              <li>{{ t('course3') }}</li>
              <li>{{ t('course4') }}</li>
            </ul>
          </div>

          <div class="resource-card">
            <div class="resource-icon"><i class="fas fa-quote-right"></i></div>
            <h3>{{ t('inspiringQuotes') }}</h3>
            <ul>
              <li>{{ t('quote1') }}</li>
              <li>{{ t('quote2') }}</li>
              <li>{{ t('quote3') }}</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="navigation-links no-print">
        <router-link to="/journal" class="back-link">
          <i class="fas fa-arrow-left"></i> {{ t('backToJourney') }}
        </router-link>
      </div>
    </main>

    <Footer class="no-print" />

    <!-- Newsletter Components -->
    <NewsletterFloatingButton @click="openNewsletterPopup" :isSubscribed="isSubscribed" class="no-print" />

    <NewsletterPopup :show="showNewsletterPopup" :email="newsletterEmail" :name="newsletterName"
      :show-success="showNewsletterSuccess" :show-error="showNewsletterError" :is-submitting="isSubmittingNewsletter"
      @close="closeNewsletterPopup" @submit="submitNewsletterForm" @update:email="newsletterEmail = $event"
      @update:name="newsletterName = $event" class="no-print" />

    <NewsletterReward :show="showNewsletterReward" @close="closeNewsletterReward" class="no-print" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useI18n, Language } from '@/composables/useI18n';
import { useDuckJokes } from '@/composables/useDuckJokes';
import { duckJokes } from '@/constants/duckJokes';
import { useNewsletter } from '@/composables/useNewsletter';

// Components
import Header from '@/components/layout/Header.vue';
import Footer from '@/components/layout/Footer.vue';
import ScrollDownButton from '@/components/widgets/ScrollDownButton.vue';
import DuckJoke from '@/components/widgets/DuckJoke.vue';
import NewsletterFloatingButton from '@/components/widgets/NewsletterFloatingButton.vue';
import NewsletterPopup from '@/components/widgets/NewsletterPopup.vue';
import NewsletterReward from '@/components/widgets/NewsletterReward.vue';

// I18n composable instance
const { t, currentLanguage, setLanguage } = useI18n();

// Router
const router = useRouter();

// For compatibility with Header component
const streakDays = ref<number>(0);

// Duck jokes functionality
const { showDuckJoke, currentDuckJoke, tellDuckJoke } = useDuckJokes(duckJokes, currentLanguage);

// Newsletter functionality
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

/**
 * Changes the application language
 * @param lang - Language code to switch to
 */
const changeLanguage = (lang: Language) => {
  setLanguage(lang);
};

// Method for downloading PDF
const downloadPdf = () => {
  // Create and add dynamic style with better print formatting for portrait mode
  const printStyle = document.createElement('style');
  printStyle.id = 'print-portrait-style';
  printStyle.innerHTML = `
    @page { 
      size: portrait !important; 
      margin: 1cm !important;
    }
    
    body.print-full-guide .modern-header {
      padding: 10px !important;
      margin-bottom: 10px !important;
    }
    
    body.print-full-guide content-section {
      padding: 15px !important;
      margin-bottom: 15px !important;
    }
  `;
  document.head.appendChild(printStyle);

  // Add a class to the body to trigger the print styles
  document.body.classList.add('print-full-guide');
  document.body.classList.remove('print-tracker-only');

  // Utwórz link do pobrania
  const link = document.createElement('a');
  link.href = '/assets/69_Shades_of_Self-Love.pdf';
  link.download = '69_Shades_of_Self-Love.pdf';

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  // Remove class and style after printing is done
  setTimeout(() => {
    document.body.classList.remove('print-full-guide');
    document.head.removeChild(printStyle);
  }, 1000);
};

const printHabitTracker = () => {
  // Create and add dynamic style with better print formatting for landscape mode
  const printStyle = document.createElement('style');
  printStyle.id = 'print-landscape-style';
  printStyle.innerHTML = `
    @page { 
        size: landscape !important; 
        margin: 0.5cm 0.5cm 0.2cm 0.5cm !important; /* Reduced bottom margin even more */
    }
    
    /* More compact layout for printing */
    body.print-tracker-only {
        padding: 0 !important;
        margin: 0 !important;
    }
    
    /* Simplify and reduce header size */
    body.print-tracker-only .modern-header {
        padding: 5px !important;
        margin-bottom: 5px !important;
        min-height: auto !important;
        box-shadow: none !important;
        background: none !important;
    }
    
    body.print-tracker-only .main-title {
        font-size: 16pt !important;
        margin: 0 !important;
    }
    
    body.print-tracker-only .subtitle {
        font-size: 12pt !important;
        margin: 5px 0 0 0 !important;
    }
    
    /* Hide unnecessary elements in header */
    body.print-tracker-only .corner-element,
    body.print-tracker-only .duck-logo,
    body.print-tracker-only .dedication-badge {
        display: none !important;
    }
    
    /* Further optimize tracker section */
    body.print-tracker-only .tracker-section {
        padding: 5px !important;
        margin: 0 !important;
    }
    
    /* Scale and optimize tracker */
    body.print-tracker-only .habit-tracker {
        transform-origin: top left;
        transform: scale(0.85); /* More aggressive scaling to fit on one page */
        margin-top: 0 !important;
    }
    
    /* Smaller title and description */
    body.print-tracker-only .section-title {
        font-size: 14pt !important;
        margin-bottom: 2px !important;
        padding-bottom: 2px !important;
    }
    
    body.print-tracker-only .section-description {
        font-size: 10pt !important;
        margin-bottom: 5px !important;
        line-height: 1.2 !important;
    }
    
    /* More compact cells */
    body.print-tracker-only .day-cell,
    body.print-tracker-only .checkbox-cell {
        width: 25px !important;
        min-width: 25px !important;
        padding: 2px !important;
    }
    
    body.print-tracker-only .habit-cell,
    body.print-tracker-only .header-cell {
        width: 120px !important;
        min-width: 120px !important;
        padding: 2px 4px !important;
    }
    
    /* Smaller checkboxes */
    body.print-tracker-only .checkbox-placeholder {
        width: 12px !important;
        height: 12px !important;
    }
`;
  document.head.appendChild(printStyle);

  // Add print-tracker-only class and remove conflicting class
  document.body.classList.add('print-tracker-only');
  document.body.classList.remove('print-full-guide');

  // Open print dialog
  window.print();

  // Clean up after printing
  setTimeout(() => {
    document.body.classList.remove('print-tracker-only');
    document.head.removeChild(printStyle);
  }, 1000);
};
</script>

<style scoped>
footer {
  order: 99;
}

.gift-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: var(--background-color);
}

.gift-content {
  flex: 1;
  padding: 40px 20px;
  max-width: 1000px;
  margin: 0 auto;
  width: 100%;
}

/* Download buttons */
.download-options {
  display: flex;
  gap: 15px;
  margin-top: 25px;
}

.download-button {
  background-color: var(--main-color);
  color: white;
  text-decoration: none;
  padding: 12px 20px;
  border-radius: 8px;
  display: inline-flex;
  align-items: center;
  font-weight: bold;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
}

.download-button:hover {
  background-color: #a01a30;
  transform: translateY(-3px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.download-button i {
  margin-right: 10px;
}

/* Habits section */
.habit-container {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.habit-card {
  display: flex;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.habit-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.habit-number {
  width: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  font-weight: bold;
  color: white;
}

.physical-habit .habit-number {
  background-color: var(--physical-color);
}

.mental-habit .habit-number {
  background-color: var(--mental-color);
}

.personal-habit .habit-number {
  background-color: var(--personal-color);
}

.relationship-habit .habit-number {
  background-color: var(--relationship-color);
}

.habit-content {
  flex: 1;
  padding: 20px;
  background-color: white;
}

.habit-title {
  color: #333;
  font-size: 1.4rem;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
}

.habit-title i {
  margin-right: 10px;
  color: var(--main-color);
}

.habit-description {
  color: #555;
  margin-bottom: 15px;
  line-height: 1.5;
}

.habit-tips {
  background-color: #f8f8f8;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 15px;
}

.habit-tips h4 {
  margin-bottom: 10px;
  color: #333;
}

.habit-tips ul {
  padding-left: 25px;
}

.habit-tips li {
  margin-bottom: 5px;
  color: #555;
}

.habit-tools {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tool-tag {
  background-color: #eee;
  padding: 5px 10px;
  border-radius: 30px;
  font-size: 0.85rem;
  color: #555;
}

/* Ensure tracker stays together with fixed layout */
.habit-tracker {
  margin-top: 30px;
  border: 1px solid #eee;
  border-radius: 8px;
  overflow-x: auto;
  table-layout: fixed;
  background-color: white;
  /* Add this to force consistent column widths */
  width: 100%;
}

.tracker-header,
.tracker-row {
  display: flex;
  flex-wrap: nowrap;
  /* Prevent wrapping */
}

/* Tracker cell styles */
.tracker-cell {
  padding: 10px;
  min-width: 30px;
  text-align: center;
  border: 1px solid #eee;
  box-sizing: border-box;
  /* Ensure padding is included in width calculation */
}

/* Header and habit name cells */
.header-cell,
.habit-cell {
  background-color: #f8f8f8;
  font-weight: bold;
  min-width: 140px;
  width: 140px;
  /* Fixed width for consistent alignment */
  text-align: left;
}

/* Tracker header & rows styles - fix alignment */
.day-cell {
  width: 40px;
  /* Same fixed width as checkbox cells */
  min-width: 40px;
  /* Ensure minimum width matches */
  box-sizing: border-box;
  /* Include padding in width */
  padding: 8px 5px;
  /* Reduced padding for better fit */
}

/* Checkbox cells */
.checkbox-cell {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  /* Fixed width for consistent grid alignment */
  min-width: 40px;
  /* Ensure minimum width matches */
  box-sizing: border-box;
  /* Include padding in width */
}

.checkbox-placeholder {
  width: 20px;
  height: 20px;
  border: 2px solid #ddd;
  border-radius: 3px;
}

/* Resources section */
.resources-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 25px;
  margin-top: 30px;
}

.resource-card {
  background-color: #f8f8f8;
  border-radius: 10px;
  padding: 20px;
  transition: transform 0.3s ease;
  height: 100%;
}

.resource-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.resource-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: var(--main-color);
  color: white;
  font-size: 1.3rem;
  margin: 0 auto 15px;
}

.resource-card h3 {
  text-align: center;
  margin-bottom: 15px;
  color: #333;
}

.resource-card ul {
  padding-left: 20px;
}

.resource-card li {
  margin-bottom: 8px;
  color: #555;
}

/* By default hide the habit tracker in normal view */
.print-tracker-only-visible {
  display: block;
  /* Make sure it's visible by default in normal view */
}

/* Responsive */
@media (max-width: 768px) {
  .gift-content {
    padding: 20px 15px;
  }

  .gift-title {
    font-size: 2rem;
  }

  .gift-subtitle {
    font-size: 1.1rem;
  }

  .dedication-badge {
    font-size: 0.85rem;
    padding: 6px 12px;
  }

  .language-switcher {
    top: 10px;
    right: 10px;
  }

  .download-options {
    flex-direction: column;
  }

  .download-button {
    width: 100%;
    justify-content: center;
  }

  .resources-grid {
    grid-template-columns: 1fr;
  }
}

/* Dla mniejszych ekranów - dodatkowe poprawki */
@media (max-width: 480px) {
  .gift-header {
    padding: 20px 10px;
  }

  .gift-title {
    font-size: 1.7rem;
  }

  .gift-subtitle {
    font-size: 1rem;
  }

  .dedication-badge {
    font-size: 0.8rem;
    padding: 5px 10px;
  }

  .language-switcher {
    position: relative;
    top: 0;
    right: 0;
    margin: 15px auto 0;
    justify-content: center;
  }
}

/* Print styles */
@media print {

  /* Define page layout for different print modes */
  @page {
    margin: 1cm;
  }

  body.print-tracker-only {
    page: tracker;
  }

  .gift-page {
    background-color: white;
  }

  .habit-card {
    box-shadow: none;
    break-inside: avoid;
    page-break-inside: avoid;
    margin-bottom: 15px;
    border: 1px solid #eee;
  }

  .habit-card:hover {
    transform: none;
    box-shadow: none;
  }

  .resource-card {
    box-shadow: none;
    transform: none !important;
    border: 1px solid #eee;
  }

  .resource-card:hover {
    transform: none;
    box-shadow: none;
  }

  /* Hide elements with no-print class in any print mode */
  .no-print {
    display: none !important;
  }

  /* When printing full guide, hide the tracker section */
  body.print-full-guide .print-tracker-only-visible {
    display: none !important;
  }

  /* When printing tracker only, show only the tracker section */
  body.print-tracker-only .content-section:not(.tracker-section) {
    display: none !important;
  }

  body.print-tracker-only .gift-header {
    display: block !important;
    /* Keep the header in tracker mode */
    margin-bottom: 20px;
  }

  body.print-tracker-only .tracker-section {
    display: block !important;
    page-break-before: avoid;
    margin-top: 20px;
    width: 100%;
  }

  body.print-tracker-only .habit-tracker {
    width: 100%;
    max-width: none;
  }

  /* Ensure tracker fits on page properly */
  body.print-tracker-only .habit-tracker {
    overflow: visible;
    width: 100%;
    border: 1px solid #000;
  }

  body.print-tracker-only .tracker-cell {
    border: 1px solid #999;
  }

  /* Make checkboxes more visible when printed */
  body.print-tracker-only .checkbox-placeholder {
    border: 2px solid #000;
    width: 15px;
    height: 15px;
  }

  /* Give more spacing for printing */
  body.print-tracker-only .tracker-section {
    padding: 0;
    margin: 0;
    width: 100%;
  }

  body.print-tracker-only .tracker-header,
  body.print-tracker-only .tracker-row {
    page-break-inside: avoid;
  }
}
</style>