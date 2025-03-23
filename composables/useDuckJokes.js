/**
 * Duck joke functionality
 * Provides duck joke related methods and state
 * 
 * @param {Object} duckJokes - Object containing jokes in different languages
 * @param {Ref<string>} currentLanguage - Reference to current language
 * @returns {Object} Duck joke related methods and state
 */
import { ref, onMounted } from 'vue';

export function useDuckJokes(duckJokes, currentLanguage) {
    const showDuckJoke = ref(false);
    const currentDuckJoke = ref('');
    const duckAudio = ref(null);
    
    /**
     * Shows a random duck joke
     */
    const tellDuckJoke = () => {
        // Play duck sound
        playDuckSound();
        
        // Select random joke based on current language
        const jokes = duckJokes[currentLanguage.value] || duckJokes.en;
        const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
        currentDuckJoke.value = randomJoke;
        
        // Show joke
        showDuckJoke.value = true;
        
        // Hide after 5 seconds
        setTimeout(() => {
            showDuckJoke.value = false;
        }, 5000);
    };
    
    /**
     * Plays duck quack sound
     */
    const playDuckSound = () => {
        try {
            // Create new audio object if not exists
            if (!duckAudio.value) {
                duckAudio.value = new Audio("assets/duck-quack.mp3");
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
        duckAudio.value = new Audio("assets/duck-quack.mp3");
        duckAudio.value.preload = "auto";
    });
    
    return {
        showDuckJoke,
        currentDuckJoke,
        tellDuckJoke,
        playDuckSound
    };
}