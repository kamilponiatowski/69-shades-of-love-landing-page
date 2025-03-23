/**
 * DuckJoke component
 * Displays a popup with a duck joke
 */
export const DuckJoke = {
    props: {
        showDuckJoke: {
            type: Boolean,
            required: true
        },
        currentDuckJoke: {
            type: String,
            required: true
        }
    },
    
    template: `
        <div class="duck-joke-container" :class="{ show: showDuckJoke }" aria-live="polite" aria-atomic="true">
            <p class="duck-joke-text">{{ currentDuckJoke }}</p>
        </div>
    `
};