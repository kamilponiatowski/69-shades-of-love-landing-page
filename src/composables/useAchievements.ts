// @/composables/useAchievements.ts
import { ref, Ref } from 'vue';
import { useI18n } from './useI18n';
import type { Category } from '../stores/taskStore';
import { getRandomTipFromAnyCategory, getRandomTip } from '../constants/achievementTips';

/**
 * Types for achievements
 */
interface Achievement {
  threshold: number;
  title: string;
  message: string;
}

type TriggerHeartAnimation = (categoryType: Category['type']) => void;
type GetCategoryProgress = (type: Category['type']) => number;

/**
 * Composable for handling achievements and rewards
 * Manages achievement notifications and special rewards
 */
export function useAchievements() {
  const { t } = useI18n();
  
  // Achievement state
  const showAchievement = ref<boolean>(false);
  const achievementTitle = ref<string>('');
  const achievementMessage = ref<string>('');
  
  // Reward state
  const showReward = ref<boolean>(false);
  const rewardTitle = ref<string>('');
  const rewardDescription = ref<string>('');
  
  // Counter for motivational popups
  const taskCompletionCounter = ref<number>(0);
  const lastCompletedCount = ref<number>(0);
  
  // Track the last shown tip category to avoid repetition
  const lastTipCategory = ref<string>('');
  
  /**
   * Gets a balanced tip based on rotating through categories
   * @returns A tip from a category that hasn't been shown recently
   */
  const getBalancedTip = (): string => {
    // List of categories
    const categories = ['physical', 'mental', 'personal', 'relationship'];
    
    // Find next category to show (different from last one)
    let nextCategory = '';
    
    if (!lastTipCategory.value || !categories.includes(lastTipCategory.value)) {
      // If no last category or invalid, pick random
      nextCategory = categories[Math.floor(Math.random() * categories.length)];
    } else {
      // Find next category in rotation
      const currentIndex = categories.indexOf(lastTipCategory.value);
      const nextIndex = (currentIndex + 1) % categories.length;
      nextCategory = categories[nextIndex];
    }
    
    // Remember this category as the last shown
    lastTipCategory.value = nextCategory;
    
    // Get a random tip from this category
    return getRandomTip(nextCategory);
  };
  
  /**
   * Checks if user has reached any milestones
   * Shows achievement notification if milestone is reached
   */
  const checkAchievements = (completedCount: number): void => {
    // Check if new task was completed
    if (completedCount > lastCompletedCount.value) {
      // Count completed tasks
      taskCompletionCounter.value += (completedCount - lastCompletedCount.value);
      
      // Show motivational popup every 5 completed tasks
      if (taskCompletionCounter.value >= 5) {
        showMotivationalPopup();
        taskCompletionCounter.value = 0; // Reset counter
      }
      
      lastCompletedCount.value = completedCount;
    }
    
    const achievements: Achievement[] = [
      { threshold: 5, title: t('completionAchievement'), message: t('completionMessage', 5) },
      { threshold: 10, title: t('completionAchievement'), message: t('completionMessage', 10) },
      { threshold: 25, title: t('completionAchievement'), message: t('completionMessage', 25) },
      { threshold: 40, title: t('completionAchievement'), message: t('completionMessage', 40) },
      { threshold: 69, title: t('completionAchievement'), message: t('completionMessage', 69) }
    ];

    for (const achievement of achievements) {
      if (completedCount === achievement.threshold) {
        achievementTitle.value = `${achievement.threshold} ${achievement.title}`;
        achievementMessage.value = achievement.message;
        showAchievement.value = true;
        
        setTimeout(() => {
          showAchievement.value = false;
        }, 5000);

        if (completedCount === 69) {
          showSpecialReward();
        }
        
        break;
      }
    }
  };
  
  /**
   * Shows motivational popup with a helpful tip
   * This popup disappears automatically after a short time
   */
  const showMotivationalPopup = (): void => {
    // Get a balanced tip that rotates through categories
    const tip = getBalancedTip();
    
    rewardTitle.value = t('motivationalTitle') || 'Self-Care Insight';
    rewardDescription.value = tip;
    showReward.value = true;
    
    // Automatically close after a short time, because it's just a motivational popup
    setTimeout(() => {
      showReward.value = false;
    }, 8000); // Increased time to allow reading the tip
  };
  
  /**
   * Shows special reward for completing all tasks
   * This popup requires user interaction to disappear
   */
  const showSpecialReward = (): void => {
    rewardTitle.value = t('specialRewardTitle');
    rewardDescription.value = t('specialRewardDescription');
    showReward.value = true;
    // No automatic closing - requires user interaction
  };

  /**
   * Shows reward after unlocking PDF
   * Requires user interaction to dismiss
   */
  const showPdfUnlockedReward = (): void => {
    rewardTitle.value = t('pdfUnlockedTitle') || 'Mind Map Unlocked! 🎉';
    rewardDescription.value = t('pdfUnlockedDescription') || 'Congratulations! You\'ve made amazing progress on your self-care journey. Your Mind Map PDF is now available. Download it to enhance your self-care practice!';
    showReward.value = true;
    // No automatic closing - user must close manually
  };
  
  /**
   * Closes reward window
   */
  const closeReward = (): void => {
    showReward.value = false;
  };
  
  /**
   * Checks milestones for categories
   * @param getCategoryProgress - Function to get category progress
   * @param triggerHeartAnimation - Function to trigger heart animation
   */
  const checkMilestones = (
    getCategoryProgress: GetCategoryProgress, 
    triggerHeartAnimation: TriggerHeartAnimation
  ): void => {
    const categoryThreshold = 40; // 40% completion for any category
    const categories: Category['type'][] = ['physical', 'mental', 'personal', 'relationship'];
    
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
    showPdfUnlockedReward,
    closeReward,
    checkMilestones
  };
}