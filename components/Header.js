/**
 * Header component
 * Displays the app header with logo, title, subtitle and streak counter
 */
export const Header = {
    props: {
        translate: {
            type: Function,
            required: true
        },
        streakDays: {
            type: Number,
            default: 0
        }
    },
    
    emits: ['tell-duck-joke'],
    
    template: `
        <header>
            <div class="logo-container">
                <div class="duck-logo" 
                     @click="$emit('tell-duck-joke')" 
                     tabindex="0" 
                     role="button" 
                     aria-label="Duck logo - click for a joke">
                    <img src="assets/images/duck-logo.svg" width="90" height="90" alt="logo - Quack!!" aria-hidden="true">
                    <span class="duck-tooltip">What The Quack?</span>
                </div>
                <h1 class="main-title">{{ translate('mainTitle') }}</h1>
            </div>
            <p class="subtitle">{{ translate('subtitle') }}</p>
            <!-- Dedication for Muszka -->
            <span class="dedication">Od Żuczka dla Muszki, z miłością</span>
            <div v-if="streakDays > 0" class="streak-counter" aria-live="polite">
                <span class="streak-flame" aria-hidden="true"><i class="fas fa-fire"></i></span>
                <span class="streak-count">{{ translate('streakDays', streakDays) }}</span>
            </div>
        </header>
    `
};