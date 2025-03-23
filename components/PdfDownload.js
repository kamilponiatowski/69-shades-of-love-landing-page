/**
 * PdfDownload component
 * Displays PDF download section with unlock/lock functionality based on progress
 */
export const PdfDownload = {
    props: {
        translate: {
            type: Function,
            required: true
        },
        progressPercentage: {
            type: Number,
            required: true
        },
        totalTasks: {
            type: Number,
            required: true
        },
        completedCount: {
            type: Number,
            required: true
        },
        pdfLink: {
            type: String,
            required: true
        },
        pdfSectionCollapsed: {
            type: Boolean,
            default: false
        }
    },
    
    emits: ['update:pdfSectionCollapsed'],
    
    computed: {
        /**
         * Number of tasks needed to unlock the PDF
         * @returns {number}
         */
        tasksToUnlock() {
            return Math.ceil(this.totalTasks * 0.2) - this.completedCount;
        },
        
        /**
         * Whether the PDF is unlocked (20% completion)
         * @returns {boolean}
         */
        isUnlocked() {
            return this.progressPercentage >= 20;
        }
    },
    
    template: `
        <div class="download-pdf-section">
            <h2 class="pdf-title">{{ translate('pdfTitle') }}</h2>
            
            <button 
                v-if="isUnlocked && !pdfSectionCollapsed" 
                class="pdf-section-toggle" 
                @click="$emit('update:pdfSectionCollapsed', true)"
                aria-label="Collapse PDF section">
                <i class="fas fa-times" aria-hidden="true"></i>
            </button>
            
            <button 
                v-if="isUnlocked && pdfSectionCollapsed" 
                class="pdf-section-toggle" 
                @click="$emit('update:pdfSectionCollapsed', false)"
                aria-label="Expand PDF section">
                <i class="fas fa-chevron-down" aria-hidden="true"></i>
            </button>
            
            <a :href="isUnlocked ? pdfLink : '#'" 
               :class="['download-button', !isUnlocked ? 'locked' : '']"
               :download="isUnlocked"
               target="_blank"
               :aria-disabled="!isUnlocked"
               @click="!isUnlocked ? $event.preventDefault() : null">
                <i class="fas" :class="isUnlocked ? 'fa-download' : 'fa-lock'" aria-hidden="true"></i>
                <span class="download-text">{{ isUnlocked ? translate('downloadButton') : translate('lockButton') }}</span>
            </a>
            
            <div :class="pdfSectionCollapsed && isUnlocked ? 'pdf-content-collapsed' : 'pdf-content'">
                <p class="download-info" v-if="!isUnlocked">
                    <span class="download-info-text">{{ translate('downloadInfoLocked', tasksToUnlock) }}</span>
                </p>
                <p class="download-info" v-else>
                    <span class="download-info-text">{{ translate('downloadInfoUnlocked') }}</span>
                </p>
                <img v-if="isUnlocked" class="qr-code" src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://drive.google.com/file/d/1fPwsiyJxmMKKHA5ImRSDfjWk14NCnl-V/view?usp=drive_link" alt="QR Code for PDF download">
            </div>
        </div>
    `
};