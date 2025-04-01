<template>
  <PageContainer
    :streak-days="streakDays"
    :isHomePage="false"
    :customTitle="t('giftPageTitle')"
    :customSubtitle="t('giftPageSubtitle')"
  >
    <main id="main-content" class="gift-content">
      <ContentSection class="intro-section">
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
      </ContentSection>

      <ContentSection class="habits-section">
        <h2 class="section-title">{{ t('habitsTitle') }}</h2>
        <HabitList :habits="habits" />
      </ContentSection>

      <!-- Habit Tracker Section - hidden in full guide print -->
      <ContentSection 
        id="habit-tracker-section" 
        class="tracker-section print-tracker-only-visible"
        :title="t('trackerTitle')"
        :description="t('trackerDescription')"
      >
        <HabitTracker :habitNames="habitShortNames" :days="21" />
      </ContentSection>

      <!-- Additional Resources Section -->
      <ContentSection 
        class="resources-section"
        :title="t('resourcesTitle')"
        :description="t('resourcesDescription')"
      >
        <ResourcesGrid :resources="resources" />
      </ContentSection>

      <NavigationLinks 
        backLink="/journal" 
        :backText="t('backToJourney')" 
        class="no-print"
      />
    </main>
  </PageContainer>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useI18n } from '@/composables/useI18n';
import { useDuckJokes } from '@/composables/useDuckJokes';
import { duckJokes } from '@/constants/duckJokes';
import { useNewsletter } from '@/composables/useNewsletter';

// Components
import PageContainer from '@/components/layout/PageContainer.vue';
import ContentSection from '@/components/sections/ContentSection.vue';
import NavigationLinks from '@/components/layout/NavigationLinks.vue';
import HabitList from '@/components/sections/HabitList.vue';
import HabitTracker from '@/components/sections/HabitTracker.vue';
import ResourcesGrid from '@/components/sections/ResourcesGrid.vue';

// I18n composable instance
const { t, currentLanguage } = useI18n();

// For compatibility with PageContainer
const streakDays = ref<number>(0);

// Habit data
const habits = computed(() => [
  {
    id: 1,
    title: t('habit1Title'),
    description: t('habit1Description'),
    tips: [t('habit1Tip1'), t('habit1Tip2'), t('habit1Tip3')],
    tools: [t('habit1Tool1'), t('habit1Tool2'), t('habit1Tool3')],
    category: 'physical',
    icon: 'fa-bullseye'
  },
  {
    id: 2,
    title: t('habit2Title'),
    description: t('habit2Description'),
    tips: [t('habit2Tip1'), t('habit2Tip2'), t('habit2Tip3')],
    tools: [t('habit2Tool1'), t('habit2Tool2'), t('habit2Tool3')],
    category: 'mental',
    icon: 'fa-brain'
  },
  {
    id: 3,
    title: t('habit3Title'),
    description: t('habit3Description'),
    tips: [t('habit3Tip1'), t('habit3Tip2'), t('habit3Tip3')],
    tools: [t('habit3Tool1'), t('habit3Tool2'), t('habit3Tool3')],
    category: 'physical',
    icon: 'fa-running'
  },
  {
    id: 4,
    title: t('habit4Title'),
    description: t('habit4Description'),
    tips: [t('habit4Tip1'), t('habit4Tip2'), t('habit4Tip3')],
    tools: [t('habit4Tool1'), t('habit4Tool2'), t('habit4Tool3')],
    category: 'physical',
    icon: 'fa-apple-alt'
  },
  {
    id: 5,
    title: t('habit5Title'),
    description: t('habit5Description'),
    tips: [t('habit5Tip1'), t('habit5Tip2'), t('habit5Tip3')],
    tools: [t('habit5Tool1'), t('habit5Tool2'), t('habit5Tool3')],
    category: 'mental',
    icon: 'fa-hourglass-half'
  },
  {
    id: 6,
    title: t('habit6Title'),
    description: t('habit6Description'),
    tips: [t('habit6Tip1'), t('habit6Tip2'), t('habit6Tip3')],
    tools: [t('habit6Tool1'), t('habit6Tool2'), t('habit6Tool3')],
    category: 'personal',
    icon: 'fa-book'
  },
  {
    id: 7,
    title: t('habit7Title'),
    description: t('habit7Description'),
    tips: [t('habit7Tip1'), t('habit7Tip2'), t('habit7Tip3')],
    tools: [t('habit7Tool1'), t('habit7Tool2'), t('habit7Tool3')],
    category: 'mental',
    icon: 'fa-moon'
  }
]);

// Habit short names for tracker
const habitShortNames = computed(() => [
  t('habit1ShortName'),
  t('habit2ShortName'),
  t('habit3ShortName'),
  t('habit4ShortName'),
  t('habit5ShortName'),
  t('habit6ShortName'),
  t('habit7ShortName')
]);

// Resources data
const resources = computed(() => [
  {
    icon: 'fa-book',
    title: t('recommendedBooks'),
    items: [t('book1'), t('book2'), t('book3'), t('book4')]
  },
  {
    icon: 'fa-podcast',
    title: t('recommendedPodcasts'),
    items: [t('podcast1'), t('podcast2'), t('podcast3'), t('podcast4')]
  },
  {
    icon: 'fa-laptop',
    title: t('onlineCourses'),
    items: [t('course1'), t('course2'), t('course3'), t('course4')]
  },
  {
    icon: 'fa-quote-right',
    title: t('inspiringQuotes'),
    items: [t('quote1'), t('quote2'), t('quote3')]
  }
]);

/**
 * Method for downloading PDF
 */
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

  // Create download link
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

/**
 * Method for printing habit tracker
 */
const printHabitTracker = () => {
  // Create and add dynamic style with better print formatting for landscape mode
  const printStyle = document.createElement('style');
  printStyle.id = 'print-landscape-style';
  printStyle.innerHTML = `
    @page { 
        size: landscape !important; 
        margin: 0.5cm 0.5cm 0.2cm 0.5cm !important;
    }
    
    body.print-tracker-only {
        padding: 0 !important;
        margin: 0 !important;
    }
    
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
    
    body.print-tracker-only .corner-element,
    body.print-tracker-only .duck-logo,
    body.print-tracker-only .dedication-badge {
        display: none !important;
    }
    
    body.print-tracker-only .tracker-section {
        padding: 5px !important;
        margin: 0 !important;
    }
    
    body.print-tracker-only .habit-tracker {
        transform-origin: top left;
        transform: scale(0.85);
        margin-top: 0 !important;
    }
    
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

@media (max-width: 768px) {
  .gift-content {
    padding: 20px 15px;
  }

  .download-options {
    flex-direction: column;
  }

  .download-button {
    width: 100%;
    justify-content: center;
  }
}

/* Print styles */
@media print {
  @page {
    margin: 1cm;
  }

  body.print-tracker-only {
    page: tracker;
  }

  .gift-content {
    background-color: white;
  }

  .no-print {
    display: none !important;
  }

  body.print-full-guide .print-tracker-only-visible {
    display: none !important;
  }

  body.print-tracker-only .content-section:not(.tracker-section) {
    display: none !important;
  }
}
</style>