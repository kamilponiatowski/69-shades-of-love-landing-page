<template>
  <div class="container">
    <a href="#main-content" class="skip-link">{{ t("skipToContent") }}</a>

    <Header @tell-duck-joke="tellDuckJoke" :streak-days="streakDays" />

    <DuckJoke :joke="currentDuckJoke" :show-duck-joke="showDuckJoke" />

    <div class="page-layout">
      <aside>
        <AboutMe @open-newsletter="openNewsletterPopup" />

        <PdfDownload :progress-percentage="progressPercentage" :tasks-to-unlock="tasksToUnlock"
          :is-unlocked="isUnlocked" v-model:pdf-section-collapsed="pdfSectionCollapsed"
          @pdf-unlocked="handlePdfUnlocked" />
      </aside>

      <main id="main-content">
        <ProgressBar />

        <div class="category-container">
          <CategoryCard v-for="category in categories" :key="category.type" :category="category"
            @task-updated="handleTaskUpdate" />
        </div>
      </main>
    </div>

    <Achievement v-if="showAchievement" :show-achievement="showAchievement" :achievement-title="achievementTitle"
      :achievement-message="achievementMessage" />

    <div class="heart-container" ref="heartContainer" aria-hidden="true"></div>

    <RewardPopup v-if="showReward" :show-reward="showReward" :reward-title="rewardTitle"
      :reward-description="rewardDescription" :category="rewardCategory"
      @close="closeReward"
      />

      <!-- Newsletter Components -->
      <NewsletterFloatingButton @click="openNewsletterPopup" :isSubscribed="isSubscribed" />

      <NewsletterPopup :show="showNewsletterPopup" :email="newsletterEmail" :name="newsletterName"
        :show-success="showNewsletterSuccess" :show-error="showNewsletterError" :is-submitting="isSubmittingNewsletter"
        @close="closeNewsletterPopup" @submit="submitNewsletterForm" @update:email="newsletterEmail = $event"
        @update:name="newsletterName = $event" />

      <NewsletterReward :show="showNewsletterReward" @close="closeNewsletterReward" />

      <Footer />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch, nextTick } from 'vue';
import { storeToRefs } from 'pinia';

// Stores
import { useTaskStore } from '@/stores/taskStore';

// Composables
import { useAchievements } from '@/composables/useAchievements';
import { useStreak } from '@/composables/useStreak';
import { useAnimation } from '@/composables/useAnimation';
import { useDuckJokes } from '@/composables/useDuckJokes';
import { useI18n } from '@/composables/useI18n';
import { useNewsletter } from '@/composables/useNewsletter';

// Constants
import { duckJokes } from '@/constants/duckJokes';

// Components
import Header from '@/components/layout/Header.vue';
import Footer from '@/components/layout/Footer.vue';
import AboutMe from '@/components/widgets/AboutMe.vue';
import PdfDownload from '@/components/widgets/PdfDownload.vue';
import ProgressBar from '@/components/widgets/ProgressBar.vue';
import CategoryCard from '@/components/widgets/CategoryCard.vue';
import DuckJoke from '@/components/widgets/DuckJoke.vue';
import Achievement from '@/components/widgets/Achievement.vue';
import RewardPopup from '@/components/widgets/RewardPopup.vue';
import NewsletterFloatingButton from '@/components/widgets/NewsletterFloatingButton.vue';
import NewsletterPopup from '@/components/widgets/NewsletterPopup.vue';
import NewsletterReward from '@/components/widgets/NewsletterReward.vue';

// Store
const taskStore = useTaskStore();
const {
  categories,
  completedCount,
  totalTasks,
  progressPercentage
} = storeToRefs(taskStore);

// PDF section state
const pdfSectionCollapsed = ref<boolean>(false);

// Computed properties for PDF
const tasksToUnlock = computed((): number => {
  return Math.ceil(totalTasks.value * 0.2) - completedCount.value;
});

const isUnlocked = computed((): boolean => {
  return progressPercentage.value >= 20;
});

// Translation
const { t, currentLanguage } = useI18n();

// Achievements setup
const {
  showAchievement,
  achievementTitle,
  achievementMessage,
  checkAchievements,
  showReward,
  rewardTitle,
  rewardDescription,
  rewardCategory,
  showSpecialReward,
  showPdfUnlockedReward,
  closeReward,
  checkMilestones
} = useAchievements();

// Streak tracking setup
const { streakDays, checkStreak } = useStreak();

// Animation utilities setup
const heartContainer = ref<HTMLElement | null>(null);
const { createConfetti, triggerHeartAnimation, showCompletionAnimation } = useAnimation(heartContainer);

// Newsletter functionality
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
  closeNewsletterReward,
  isSubscribed
} = useNewsletter();

// PDF unlock tracking
const pdfUnlockTracked = ref<boolean>(false);
const pdfUnlockShown = ref<boolean>(false);

// Duck joke functionality
const {
  showDuckJoke,
  currentDuckJoke,
  tellDuckJoke
} = useDuckJokes(duckJokes, currentLanguage);

// Task update handler
const handleTaskUpdate = (): void => {
  taskStore.saveData();
  checkAchievements(completedCount.value);
  checkMilestones(taskStore.getCategoryProgress, triggerHeartAnimation);
  checkStreak();

  // Check for last completed task for animations
  if (taskStore.lastCompletedTask && taskStore.lastCompletedTask.completed) {
    showCompletionAnimation(taskStore.lastCompletedTask.categoryType);
  }
};

// Handle PDF unlocking event
const handlePdfUnlocked = (): void => {
  // Check that the PDF has not yet been unlocked
  const wasUnlockedBefore = localStorage.getItem('pdfUnlockedBefore') === 'true';

  if (!wasUnlockedBefore) {
    // Show popup only on first unlock
    showPdfUnlockedReward();

    // Invoke heart animation every 1 second for a ‘wow’ effect
    triggerHeartAnimation('personal');
    setTimeout(() => triggerHeartAnimation('mental'), 1000);
    setTimeout(() => triggerHeartAnimation('physical'), 2000);

    createConfetti(); // Add a confetti effect for more ‘wow’

    // Delay the second confetti for a longer effect
    setTimeout(() => createConfetti(), 1500);

    // Mark PDF as unlocked
    localStorage.setItem('pdfUnlockedBefore', 'true');
  }
};

// Check if PDF is already unlocked on component mount
onMounted(async () => {
  await taskStore.loadData();

  // Delete state pdfUnlockTracked, replace localStorage
  const wasUnlockedBefore = localStorage.getItem('pdfUnlockedBefore') === 'true';
  const isPdfUnlocked = progressPercentage.value >= 20;

  // Add this condition to prevent multiple displays
  if (isPdfUnlocked && !wasUnlockedBefore) {
    localStorage.setItem('pdfUnlockedBefore', 'true');
    showPdfUnlockedReward();
  }
  // Check the status of the PDF unlock in the localStorage
  const wasShown = localStorage.getItem('pdfUnlockShown') === 'true';

  // If the PDF is already unlocked and has not yet been shown
  if (isUnlocked.value && !wasShown) {
    pdfUnlockTracked.value = true;
    pdfUnlockShown.value = true;
    localStorage.setItem('pdfUnlockShown', 'true');
  }
});

// ========== WATCHERS ==========
// Watch for completed task counts to show rewards
watch(completedCount, (newVal, oldVal) => {
  // Special milestones
  const milestones = [10, 25, 50, 69];

  for (const milestone of milestones) {
    if (oldVal < milestone && newVal >= milestone) {
      if (milestone === 69) {
        showSpecialReward();
        createConfetti();
      } else {
        achievementTitle.value = `${milestone} ${t('completionAchievement', milestone)}`;
        achievementMessage.value = t('completionMessage', milestone);
        showAchievement.value = true;

        setTimeout(() => {
          showAchievement.value = false;
        }, 5000);
      }
    }
  }
}, { deep: true });

// ========== LIFECYCLE HOOKS ==========
onMounted(async () => {
  await taskStore.loadData();

  // Set container for animation
  nextTick(() => {
    if (heartContainer.value) {
      const duckLogo = document.querySelector('.duck-logo');
      if (duckLogo) {
        duckLogo.addEventListener('keydown', (e: Event) => {
          const keyEvent = e as KeyboardEvent;
          if (keyEvent.key === 'Enter' || keyEvent.key === ' ') {
            e.preventDefault();
            tellDuckJoke();
          }
        });
      }
    }
  });
});
</script>