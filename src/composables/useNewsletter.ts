// src/composables/useNewsletter.ts
import { ref, onMounted } from 'vue';

/**
 * Newsletter composable
 * Manages newsletter functionality including popup display and first-time visitor logic
 */
export function useNewsletter() {
    // State
    const showNewsletterPopup = ref<boolean>(false);
    const newsletterEmail = ref<string>('');
    const showNewsletterSuccess = ref<boolean>(false);
    const showNewsletterError = ref<boolean>(false);
    const showNewsletterReward = ref<boolean>(false);
    const isSubmittingNewsletter = ref<boolean>(false);
    
    // Subscription status
    const isSubscribed = ref<boolean>(false);
    
    // First-time visitor detection
    const isFirstTimeVisitor = ref<boolean>(false);
    
    /**
     * Opens newsletter popup
     */
    const openNewsletterPopup = (): void => {
        // Reset form state
        newsletterEmail.value = '';
        showNewsletterSuccess.value = false;
        showNewsletterError.value = false;
        
        // Show popup
        showNewsletterPopup.value = true;
    };
    
    /**
     * Closes newsletter popup
     */
    const closeNewsletterPopup = (): void => {
        showNewsletterPopup.value = false;
    };
    
    /**
     * Submits newsletter form
     * Simulates API call to email service
     */
    const submitNewsletterForm = (): void => {
        if (!newsletterEmail.value || !newsletterEmail.value.includes('@')) {
            return;
        }
        
        isSubmittingNewsletter.value = true;
        
        // Simulate API call to email service
        setTimeout(() => {
            isSubmittingNewsletter.value = false;
            showNewsletterSuccess.value = true;
            
            // Close popup after delay
            setTimeout(() => {
                closeNewsletterPopup();
                
                // Show reward
                setTimeout(() => {
                    showNewsletterReward.value = true;
                    
                    // Create confetti animation
                    createConfetti();
                    
                    // Set newsletter subscription flag in localStorage
                    try {
                        localStorage.setItem('newsletterSubscribed', 'true');
                        isSubscribed.value = true;
                    } catch (error) {
                        console.error('Error saving newsletter data:', error);
                    }
                }, 500);
            }, 2000);
        }, 1500);
    };
    
    /**
     * Closes newsletter reward popup
     */
    const closeNewsletterReward = (): void => {
        showNewsletterReward.value = false;
    };
    
    /**
     * Creates confetti animation for newsletter subscription
     */
    const createConfetti = (): void => {
        const colors = ['#FF9F29', '#7ED957', '#FFD966', '#FF97B7', '#C41E3A'];
        
        for (let i = 0; i < 50; i++) {
            setTimeout(() => {
                const confetti = document.createElement('div');
                confetti.className = 'confetti';
                confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                confetti.style.left = `${Math.random() * window.innerWidth}px`;
                
                document.body.appendChild(confetti);
                
                // Remove after animation
                setTimeout(() => {
                    if (confetti.parentNode === document.body) {
                        document.body.removeChild(confetti);
                    }
                }, 3000);
            }, i * 50);
        }
    };
    
    /**
     * Checks if user has already subscribed to newsletter
     */
    const checkSubscriptionStatus = (): void => {
        try {
            const subscribed = localStorage.getItem('newsletterSubscribed');
            isSubscribed.value = subscribed === 'true';
        } catch (error) {
            console.error('Error checking subscription status:', error);
        }
    };
    
    /**
     * Checks if it's user's first visit and shows popup after delay
     */
    const checkFirstTimeVisitor = (): void => {
        try {
            const hasVisitedBefore = localStorage.getItem('hasVisitedBefore');
            
            if (!hasVisitedBefore && !isSubscribed.value) {
                isFirstTimeVisitor.value = true;
                
                // Show popup for first-time visitors after 15 seconds
                setTimeout(() => {
                    if (!isSubscribed.value) {
                        openNewsletterPopup();
                    }
                }, 15000);
            }
            
            // Set visited flag
            localStorage.setItem('hasVisitedBefore', 'true');
        } catch (error) {
            console.error('Error checking first-time visitor:', error);
        }
    };
    
    // On component mount
    onMounted(() => {
        checkSubscriptionStatus();
        checkFirstTimeVisitor();
    });
    
    return {
        showNewsletterPopup,
        newsletterEmail,
        showNewsletterSuccess,
        showNewsletterError,
        showNewsletterReward,
        isSubmittingNewsletter,
        isFirstTimeVisitor,
        isSubscribed,
        openNewsletterPopup,
        closeNewsletterPopup,
        submitNewsletterForm,
        closeNewsletterReward
    };
}