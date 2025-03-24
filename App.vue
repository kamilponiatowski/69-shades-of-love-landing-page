<template>
    <div class="container">
        <!-- Skip to content link for accessibility -->
        <a href="#main-content" class="skip-link">{{ t('skipToContent') }}</a>

        <Header @tell-duck-joke="tellDuckJoke" />

        <DuckJoke :joke="currentDuckJoke" :show-duck-joke="showDuckJoke" />

        <div class="page-layout">
            <aside>
                <AboutMe />

                <PdfDownload :progress-percentage="progressPercentage" :tasks-to-unlock="tasksToUnlock"
                    :is-unlocked="isUnlocked" v-model:pdf-section-collapsed="pdfSectionCollapsed" />
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

        <RewardPopup v-if="showReward" :title="rewardTitle" :description="rewardDescription" @close="closeReward" />

        <Footer />
    </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch, nextTick } from 'vue';
import { storeToRefs } from 'pinia';

// Stores
import { useTaskStore } from './stores/taskStore';

// Composables
import { useAchievements } from './composables/useAchievements';
import { useStreak } from './composables/useStreak';
import { useAnimation } from './composables/useAnimation';
import { useDuckJokes } from './composables/useDuckJokes';
import { useI18n } from './composables/useI18n';

// Constants
import { duckJokes } from './constants/duckJokes';

// Components
import Header from './components/layout/Header.vue';
import Footer from './components/layout/Footer.vue';
import AboutMe from './components/widgets/AboutMe.vue';
import PdfDownload from './components/widgets/PdfDownload.vue';
import ProgressBar from './components/widgets/ProgressBar.vue';
import CategoryCard from './components/widgets/CategoryCard.vue';
import DuckJoke from './components/widgets/DuckJoke.vue';
import Achievement from './components/widgets/Achievement.vue';
import RewardPopup from './components/widgets/RewardPopup.vue';

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
    showSpecialReward,
    checkMilestones,
    closeReward
} = useAchievements();

// Streak tracking setup
const { streakDays, checkStreak } = useStreak();

// Animation utilities setup
const heartContainer = ref<HTMLElement | null>(null);
const { createConfetti, triggerHeartAnimation, showCompletionAnimation } = useAnimation(heartContainer);

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

    // Tutaj powinniśmy dodać wywołanie animacji serduszek
    // Pobierz ostatnio ukończone zadanie z taskStore
    if (taskStore.lastCompletedTask && taskStore.lastCompletedTask.completed) {
        showCompletionAnimation(taskStore.lastCompletedTask.categoryType);
    }
};

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