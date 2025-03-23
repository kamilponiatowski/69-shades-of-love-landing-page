/**
 * Achievement component
 * Displays achievement notification
 */
export const Achievement = {
    props: {
        showAchievement: {
            type: Boolean,
            required: true
        },
        achievementTitle: {
            type: String,
            required: true
        },
        achievementMessage: {
            type: String,
            required: true
        }
    },
    
    template: `
        <div class="achievement-container" :class="{ show: showAchievement }" aria-live="polite" aria-atomic="true">
            <div class="achievement" role="alert">
                <div class="achievement-icon">
                    <i class="fas fa-star" aria-hidden="true"></i>
                </div>
                <div class="achievement-text">
                    <div class="achievement-title">{{ achievementTitle }}</div>
                    <div>{{ achievementMessage }}</div>
                </div>
            </div>
        </div>
    `
};