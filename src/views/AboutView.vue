<template>
  <PageContainer 
    :streak-days="streakDays" 
    :isHomePage="false" 
    :customTitle="t('projectPhilosophyTitle')" 
    :customSubtitle="t('projectPhilosophyDescription')"
  >
    <main id="main-content" class="about-content">
      <ContentSection>
        <WellbeingAreas :areas="wellbeingAreas" />
      </ContentSection>

      <ContentSection 
        :title="t('featuresTitle')"
      >
        <FeaturesList :features="features" />
      </ContentSection>

      <ContentSection 
        :title="t('insightsFeatureTitle')"
        :description="t('insightsFeatureDescription')"
      >
        <InsightGrid :insights="insights" />
      </ContentSection>

      <AboutMe @open-newsletter="openNewsletterPopup" :isSubscribed="isSubscribed" />

      <NavigationLinks backLink="/journal" />
    </main>
  </PageContainer>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useI18n } from '@/composables/useI18n';
import { useNewsletter } from '@/composables/useNewsletter';
import PageContainer from '@/components/layout/PageContainer.vue';
import AboutMe from '@/components/widgets/AboutMe.vue';
import InsightGrid from '@/components/widgets/InsightGrid.vue';
import WellbeingAreas from '@/components/widgets/WellbeingAreas.vue';
import FeaturesList from '@/components/widgets/FeaturesList.vue';
import ContentSection from '@/components/sections/ContentSection.vue';
import NavigationLinks from '@/components/layout/NavigationLinks.vue';

const { t } = useI18n();
const { isSubscribed, openNewsletterPopup } = useNewsletter();

const streakDays = ref<number>(0);

const wellbeingAreas = computed(() => [
  { 
    type: 'physical', 
    emoji: '💪', 
    title: t('physical'),
    description: t('physicalDescription')
  },
  { 
    type: 'mental', 
    emoji: '🧠', 
    title: t('mental'),
    description: t('mentalDescription')
  },
  { 
    type: 'personal', 
    emoji: '🌈', 
    title: t('personal'),
    description: t('personalDescription')
  },
  { 
    type: 'relationship', 
    emoji: '❤️', 
    title: t('relationship'),
    description: t('relationshipDescription')
  }
]);

const features = computed(() => [
  { icon: 'fa-chart-line', text: t('feature1') },
  { icon: 'fa-list-alt', text: t('feature2') },
  { icon: 'fa-fire', text: t('feature3') },
  { icon: 'fa-trophy', text: t('feature4') },
  { icon: 'fa-file-pdf', text: t('feature5') },
  { icon: 'fa-lightbulb', text: t('feature6') }
]);

const insights = computed(() => [
  { category: 'physical', icon: 'fa-running', text: t('insightsPoint1') },
  { category: 'mental', icon: 'fa-brain', text: t('insightsPoint2') },
  { category: 'personal', icon: 'fa-smile-beam', text: t('insightsPoint3') },
  { category: 'relationship', icon: 'fa-users', text: t('insightsPoint4') }
]);
</script>

<style scoped>
.about-content {
  max-width: 900px;
  margin: 0 auto;
  width: 100%;
}
</style>