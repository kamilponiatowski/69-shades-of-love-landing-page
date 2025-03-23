<template>
    <div class="container">
        <!-- Skip to content link for accessibility -->
        <a href="#main-content" class="skip-link">Pomiń do głównej treści</a>
      
        <Header 
            @tell-duck-joke="tellDuckJoke" 
        />
      
        <DuckJoke v-if="showDuckJoke" :joke="currentDuckJoke" />
      
        <div class="page-layout">
            <aside>
                <AboutMe />
              
                <PdfDownload 
                    :progress-percentage="progressPercentage"
                    :tasks-to-unlock="tasksToUnlock"
                    :is-unlocked="isUnlocked"
                    v-model:pdf-section-collapsed="pdfSectionCollapsed"
                />
            </aside>
          
            <main id="main-content">
                <ProgressBar />
              
                <div class="category-container">
                    <CategoryCard 
                        v-for="category in categories" 
                        :key="category.type"
                        :category="category"
                        @task-updated="handleTaskUpdate"
                    />
                </div>
            </main>
        </div>
      
        <Achievement 
            v-if="showAchievement"
            :title="achievementTitle"
            :message="achievementMessage"
        />
      
        <div class="heart-container" ref="heartContainer" aria-hidden="true"></div>
      
        <RewardPopup
            v-if="showReward"
            :title="rewardTitle"
            :description="rewardDescription"
            @close="closeReward"
        />
      
        <Footer />
    </div>
</template>

<script setup>
import { ref, computed, onMounted, watch, nextTick } from 'vue';
import { storeToRefs } from 'pinia';

// Imports
import { useTaskStore } from '@/stores/taskStore';
import { useAchievements } from '@/composables/useAchievements';
import { useStreak } from '@/composables/useStreak';
import { useAnimation } from '@/composables/useAnimation';
import { useDuckJokes } from '@/composables/useDuckJokes';
import { useI18n } from '@/composables/useI18n';

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

// Store
const taskStore = useTaskStore();
const { 
    categories, 
    completedCount, 
    totalTasks, 
    progressPercentage
} = storeToRefs(taskStore);

// PDF section state
const pdfSectionCollapsed = ref(false);
const pdfLink = "https://drive.google.com/file/d/1fPwsiyJxmMKKHA5ImRSDfjWk14NCnl-V/view?usp=drive_link";

// Computed properties for PDF
const tasksToUnlock = computed(() => {
    return Math.ceil(totalTasks.value * 0.2) - completedCount.value;
});

const isUnlocked = computed(() => {
    return progressPercentage.value >= 20;
});

// Translation
const { t } = useI18n();

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
const heartContainer = ref(null);
const { createConfetti, triggerHeartAnimation } = useAnimation(heartContainer);

// Duck joke functionality
const {
    showDuckJoke,
    currentDuckJoke,
    tellDuckJoke
} = useDuckJokes();

// Task update handler
const handleTaskUpdate = () => {
    taskStore.saveData();
    checkAchievements(completedCount.value);
    checkMilestones(taskStore.getCategoryProgress, triggerHeartAnimation);
    checkStreak();
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
                achievementTitle.value = `${milestone} kroków do samoakceptacji!`;
                achievementMessage.value = `Ukończyłeś/aś ${milestone} zadań związanych z dbaniem o siebie. Tak trzymaj!`;
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
    
    // Set conatainer for animation
    nextTick(() => {
        if (heartContainer.value) {
            const duckLogo = document.querySelector('.duck-logo');
            if (duckLogo) {
                duckLogo.addEventListener('keydown', (e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        tellDuckJoke();
                    }
                });
            }
        }
    });
});
</script>