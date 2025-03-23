// @/composables/useStreak.ts
import { ref, onMounted } from 'vue';

/**
 * Streak tracking composable
 * Keeps track of consecutive days of activity
 * 
 * @returns Streak related methods and state
 */
export function useStreak() {
    // Streak tracking state
    const streakDays = ref<number>(0);
    const lastCheckDate = ref<string>('');
    
    /**
     * Checks and updates the streak count
     * Increments streak if user visited on consecutive days
     * Resets streak if user missed a day
     */
    const checkStreak = (): void => {
        const today = new Date().toDateString();
        
        if (lastCheckDate.value && lastCheckDate.value !== today) {
            const lastDate = new Date(lastCheckDate.value);
            const currentDate = new Date(today);
            
            // Check if it's consecutive days (difference of 1 day)
            const timeDiff = currentDate.getTime() - lastDate.getTime();
            const dayDiff = Math.round(timeDiff / (1000 * 3600 * 24));
            
            if (dayDiff === 1) {
                // Consecutive day, increment streak
                streakDays.value++;
            } else {
                // Streak broken, reset to 1 (today)
                streakDays.value = 1;
            }
        } else if (!lastCheckDate.value) {
            // First day of using the app
            streakDays.value = 1;
        }
        
        // Update last check date
        lastCheckDate.value = today;
        localStorage.setItem('lastCheckDate', today);
        localStorage.setItem('streakDays', streakDays.value.toString());
    };
    
    /**
     * Loads streak data from localStorage
     */
    const loadStreakData = (): void => {
        const savedStreak = localStorage.getItem('streakDays');
        if (savedStreak) {
            streakDays.value = parseInt(savedStreak);
        }
        
        const savedLastCheck = localStorage.getItem('lastCheckDate');
        if (savedLastCheck) {
            lastCheckDate.value = savedLastCheck;
        }
        
        // Check if we need to update streak (for a new day)
        const today = new Date().toDateString();
        if (lastCheckDate.value !== today) {
            checkStreak();
        }
    };
    
    // Load streak data on component mount
    onMounted(() => {
        loadStreakData();
    });
    
    return {
        streakDays,
        lastCheckDate,
        checkStreak,
        loadStreakData
    };
}