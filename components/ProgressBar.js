/**
 * ProgressBar component
 * Displays overall progress and category-specific progress
 */
export const ProgressBar = {
    props: {
        translate: {
            type: Function,
            required: true
        },
        completedCount: {
            type: Number,
            required: true
        },
        totalTasks: {
            type: Number,
            required: true
        },
        progressPercentage: {
            type: Number,
            required: true
        },
        getCategoryProgress: {
            type: Function,
            required: true
        }
    },
    
    template: `
        <div class="progress-container">
            <div class="progress-title">
                <h2>{{ translate('yourProgress') }}</h2>
                <span class="progress-stats">{{ completedCount }}/{{ totalTasks }} ({{ progressPercentage }}%)</span>
            </div>
            <div class="progress-bar" role="progressbar" :aria-valuenow="progressPercentage" aria-valuemin="0" aria-valuemax="100">
                <div class="progress-fill" :style="{ width: progressPercentage + '%' }"></div>
            </div>
            <div class="category-progress" aria-label="Category progress breakdown">
                <div class="category-progress-item">
                    <div class="category-label">{{ translate('physical') }}</div>
                    <div class="category-percentage physical-text">{{ getCategoryProgress('physical') }}%</div>
                </div>
                <div class="category-progress-item">
                    <div class="category-label">{{ translate('mental') }}</div>
                    <div class="category-percentage mental-text">{{ getCategoryProgress('mental') }}%</div>
                </div>
                <div class="category-progress-item">
                    <div class="category-label">{{ translate('personal') }}</div>
                    <div class="category-percentage personal-text">{{ getCategoryProgress('personal') }}%</div>
                </div>
                <div class="category-progress-item">
                    <div class="category-label">{{ translate('relationship') }}</div>
                    <div class="category-percentage relationship-text">{{ getCategoryProgress('relationship') }}%</div>
                </div>
            </div>
        </div>
    `
};