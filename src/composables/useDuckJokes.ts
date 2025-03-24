// @/composables/useDuckJokes.ts
import { ref, onMounted, Ref } from 'vue';
import { Language } from './useI18n';

interface DuckJokes {
  [key: string]: string[];
}

/**
 * Duck joke functionality
 * Provides duck joke related methods and state
 * 
 * @param duckJokes - Object containing jokes in different languages
 * @param currentLanguage - Reference to current language
 * @returns Duck joke related methods and state
 */
export function useDuckJokes(duckJokes: DuckJokes, currentLanguage: Ref<Language>) {
    const showDuckJoke = ref<boolean>(false);
    const currentDuckJoke = ref<string>('');
    const duckAudio = ref<HTMLAudioElement | null>(null);
    
    /**
     * Shows a random duck joke
     */
    const tellDuckJoke = (): void => {
        // Play duck sound
        playDuckSound();
        
        // Select random joke based on current language
        const jokes = duckJokes[currentLanguage.value] || duckJokes.en;
        const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
        currentDuckJoke.value = randomJoke;
        
        // Force reset visibility state if already showing
        if (showDuckJoke.value) {
            showDuckJoke.value = false;
            setTimeout(() => {
                showDuckJoke.value = true;
            }, 10);
        } else {
            // Show joke
            showDuckJoke.value = true;
        }
        
        // Hide after 5 seconds
        setTimeout(() => {
            showDuckJoke.value = false;
        }, 5000);
    };
    
    /**
     * Plays duck quack sound
     */
    const playDuckSound = (): void => {
        try {
            // Create new audio object if not exists
            if (!duckAudio.value) {
                duckAudio.value = new Audio("assets/sounds/duck-quack.mp3");
            }
            
            // Reset to beginning and play
            duckAudio.value.currentTime = 0;
            duckAudio.value.play().catch(err => console.log("Audio play prevented by browser policy"));
        } catch (err) {
            console.error("Error playing duck sound:", err);
        }
    };
    
    // Initialize audio
    onMounted(() => {
        duckAudio.value = new Audio("assets/sounds/duck-quack.mp3");
        duckAudio.value.preload = "auto";
    });
    
    return {
        showDuckJoke,
        currentDuckJoke,
        tellDuckJoke,
        playDuckSound
    };
}