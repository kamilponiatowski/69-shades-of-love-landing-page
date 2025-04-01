<template>
  <PageContainer
    :streak-days="streakDays"
    :isHomePage="false"
    :customTitle="t('quotesPageTitle')"
    :customSubtitle="t('quotesPageSubtitle')"
  >
    <main id="main-content" ref="mainContent" class="quotes-content">
      <!-- Introduction section -->
      <ContentSection class="intro-section">
        <h2 class="section-title">{{ t('quotesThankYouTitle') }}</h2>
        <p class="section-description">
          {{ t('quotesThankYouDescription') }}
        </p>
        <InfoNote :text="t('checkInboxMessage')" icon="fa-envelope" />
        <InfoNote :text="t('membershipNote')" icon="fa-heart" class="easter-egg-note" />
      </ContentSection>

      <!-- Quotes section with filtering -->
      <ContentSection class="quotes-section" :title="t('quotesWisdomTitle')">
        <QuotesFilter 
          :categories="categories" 
          :selectedCategory="selectedCategory"
          @category-selected="selectedCategory = $event"
        />
        <QuotesGrid :quotes="filteredQuotes" :getCategoryIcon="getCategoryIcon" />
      </ContentSection>

      <!-- Application section -->
      <ContentSection 
        class="application-section"
        :title="t('applicationTitle')"
        :description="t('applicationDescription')"
      >
        <ApplicationGrid :applications="applications" />
      </ContentSection>

      <NavigationLinks backLink="/journal" :backText="t('backToJourney')" />
    </main>
  </PageContainer>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useI18n } from '@/composables/useI18n';

// Components
import PageContainer from '@/components/layout/PageContainer.vue';
import ContentSection from '@/components/sections/ContentSection.vue';
import NavigationLinks from '@/components/layout/NavigationLinks.vue';
import InfoNote from '@/components/common/InfoNote.vue';
import QuotesFilter from '@/components/sections/QuotesFilter.vue';
import QuotesGrid from '@/components/sections/QuotesGrid.vue';
import ApplicationGrid from '@/components/sections/ApplicationGrid.vue';

// Streak days for header
const streakDays = ref<number>(0);

// I18n
const { t } = useI18n();

// Reactive state for category filtering
const selectedCategory = ref('all');

/**
* Parse quotes from translations
*/
const quotes = computed(() => {
  try {
    const rawQuotes = t('quotesList');

    if (typeof rawQuotes === 'string') {
      const parsedQuotes = JSON.parse(rawQuotes);
      return Array.isArray(parsedQuotes) ? parsedQuotes : [];
    }

    return Array.isArray(rawQuotes) ? rawQuotes : [];
  } catch (error) {
    console.error('Error parsing quotes:', error);
    return [];
  }
});

// Extract unique categories from quotes
const categories = computed(() => {
  const uniqueCategories = new Set(quotes.value.map(quote => quote.category));
  return Array.from(uniqueCategories).sort();
});

// Filter quotes based on selected category
const filteredQuotes = computed(() => {
  if (selectedCategory.value === 'all') {
    return quotes.value;
  }
  return quotes.value.filter(quote => quote.category === selectedCategory.value);
});

/**
* Get appropriate icon for quote category
* @param category - The quote category
* @returns FontAwesome icon class
*/
const getCategoryIcon = (category: string) => {
  switch (category.toLowerCase()) {
    case 'resilience':
      return 'fas fa-shield-alt';
    case 'motivation':
      return 'fas fa-bolt';
    case 'identity':
      return 'fas fa-fingerprint';
    case 'perspective':
      return 'fas fa-eye';
    case 'challenges':
      return 'fas fa-mountain';
    case 'growth':
      return 'fas fa-seedling';
    case 'humor':
      return 'fas fa-laugh';
    case 'emotions':
      return 'fas fa-heart';
    default:
      return 'fas fa-star';
  }
};

// Applications data
const applications = computed(() => [
  {
    icon: 'fa-bookmark',
    title: t('dailyRemindersTitle'),
    description: t('dailyRemindersDescription')
  },
  {
    icon: 'fa-journal-whills',
    title: t('reflectionJournalTitle'),
    description: t('reflectionJournalDescription')
  },
  {
    icon: 'fa-users',
    title: t('shareWisdomTitle'),
    description: t('shareWisdomDescription')
  },
  {
    icon: 'fa-theater-masks',
    title: t('characterInspirationTitle'),
    description: t('characterInspirationDescription')
  }
]);
</script>

<style scoped>
.quotes-content {
  max-width: 1000px;
  margin: 0 auto;
  width: 100%;
}

.easter-egg-note {
  margin-top: 15px;
}

.easter-egg-note :deep(i) {
  color: var(--main-color);
}
</style>