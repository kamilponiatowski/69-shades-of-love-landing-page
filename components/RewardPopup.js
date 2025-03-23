/**
 * RewardPopup component
 * Displays reward popup for completing all tasks
 */
export const RewardPopup = {
    props: {
        showReward: {
            type: Boolean,
            required: true
        },
        rewardTitle: {
            type: String,
            required: true
        },
        rewardDescription: {
            type: String,
            required: true
        }
    },
    
    emits: ['close'],
    
    template: `
        <div class="reward-animation" 
             :class="{ show: showReward }" 
             @click="$emit('close')" 
             role="dialog" 
             aria-modal="true" 
             aria-labelledby="reward-title">
            <div class="reward-content" @click.stop>
                <div class="reward-icon">
                    <i class="fas fa-crown" aria-hidden="true"></i>
                </div>
                <h3 class="reward-title" id="reward-title">{{ rewardTitle }}</h3>
                <p class="reward-description">{{ rewardDescription }}</p>
                <button class="reward-button" @click="$emit('close')">Continue Self-Care Journey</button>
            </div>
        </div>
    `
};