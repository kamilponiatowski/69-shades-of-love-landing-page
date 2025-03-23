// @/composables/useAchievements.ts
import { ref, Ref } from 'vue';
import { useI18n } from './useI18n';
import type { Category } from '../stores/taskStore';

/**
 * Typy dla osiągnięć
 */
interface Achievement {
  threshold: number;
  title: string;
  message: string;
}

type TriggerHeartAnimation = (categoryType: Category['type']) => void;
type GetCategoryProgress = (type: Category['type']) => number;

/**
 * Composable do obsługi osiągnięć i nagród
 * Zarządza powiadomieniami o osiągnięciach i specjalnymi nagrodami
 */
export function useAchievements() {
  const { t } = useI18n();
  
  // Stan osiągnięć
  const showAchievement = ref<boolean>(false);
  const achievementTitle = ref<string>('');
  const achievementMessage = ref<string>('');
  
  // Stan nagrody
  const showReward = ref<boolean>(false);
  const rewardTitle = ref<string>('');
  const rewardDescription = ref<string>('');
  
  /**
   * Sprawdza czy użytkownik osiągnął jakieś kamienie milowe
   * Pokazuje powiadomienie o osiągnięciu, jeśli kamień milowy został osiągnięty
   */
  const checkAchievements = (completedCount: number): void => {
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
   * Pokazuje specjalną nagrodę za ukończenie wszystkich zadań
   */
  const showSpecialReward = (): void => {
    rewardTitle.value = t('specialRewardTitle');
    rewardDescription.value = t('specialRewardDescription');
    showReward.value = true;
  };
  
  /**
   * Zamyka okno nagrody
   */
  const closeReward = (): void => {
    showReward.value = false;
  };
  
  /**
   * Sprawdza kamienie milowe dla kategorii
   * @param getCategoryProgress - Funkcja do pobierania postępu kategorii
   * @param triggerHeartAnimation - Funkcja wywołująca animację serca
   */
  const checkMilestones = (
    getCategoryProgress: GetCategoryProgress, 
    triggerHeartAnimation: TriggerHeartAnimation
  ): void => {
    const categoryThreshold = 40; // 40% ukończenia dla dowolnej kategorii
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
    closeReward,
    checkMilestones
  };
}