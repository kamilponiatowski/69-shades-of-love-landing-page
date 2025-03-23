/**
 * Achievements composable
 * Handles achievement notifications and rewards
 * 
 * @param {Ref<number>} completedCount - Reference to count of completed tasks
 * @param {Ref<number>} totalTasks - Reference to total tasks count
 * @returns {Object} Achievement related methods and state
 */
import { ref } from 'vue';

export function useAchievements(completedCount, totalTasks) {
    // Achievement notification state
    const showAchievement = ref(false);
    const achievementTitle = ref('');
    const achievementMessage = ref('');
    
    // Reward popup state
    const showReward = ref(false);
    const rewardTitle = ref('');
    const rewardDescription = ref('');
    
    /**
     * Checks if user reached any achievement milestones
     * Shows achievement notification if a milestone is reached
     */
    const checkAchievements = () => {
        const achievements = [
            { threshold: 5, title: "Self-Care Starter", message: "You've completed your first 5 self-care activities!" },
            { threshold: 10, title: "Wellness Warrior", message: "10 tasks done! Your self-care journey is taking off!" },
            { threshold: 25, title: "Harmony Hero", message: "25 acts of self-love completed. You're a quarter way there!" },
            { threshold: 40, title: "Balance Master", message: "40 tasks complete! You're becoming a self-care expert!" },
            { threshold: 69, title: "Self-Love Supreme", message: "All 69 shades of love experienced! You're amazing!" }
        ];

        for (const achievement of achievements) {
            if (completedCount.value === achievement.threshold) {
                achievementTitle.value = achievement.title;
                achievementMessage.value = achievement.message;
                showAchievement.value = true;
                
                setTimeout(() => {
                    showAchievement.value = false;
                }, 5000);

                if (completedCount.value === 69) {
                    showSpecialReward();
                }
                
                break;
            }
        }
    };
    
    /**
     * Shows the special reward popup for completing all tasks
     */
    const showSpecialReward = () => {
        rewardTitle.value = "Self-Care Champion!";
        rewardDescription.value = "You've completed all 69 Shades of Love! Your commitment to self-care is truly inspiring. Remember that self-love is a journey, not a destination. Keep nurturing yourself every day!";
        showReward.value = true;
    };
    
    /**
     * Check for category milestones
     * @param {Function} getCategoryProgress - Function to get category progress
     * @param {Function} triggerHeartAnimation - Function to trigger heart animation
     */
    const checkMilestones = (getCategoryProgress, triggerHeartAnimation) => {
        const categoryThreshold = 40; // 40% completion for any category
        const categories = ['physical', 'mental', 'personal', 'relationship'];
        
        for (const category of categories) {
            const progress = getCategoryProgress(category);
            if (progress >= categoryThreshold) {
                triggerHeartAnimation(category);
            }
        }
    };
    
    return {
        showAchievement,
        achievementTitle,
        achievementMessage,
        checkAchievements,
        showReward,
        rewardTitle,
        rewardDescription,
        showSpecialReward,
        checkMilestones
    };
}