// src/composables/useNewsletter.ts
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { subscribeToNewsletter, checkNewsletterSubmissionComplete } from '@/utils/getResponseApi';

/**
 * Newsletter composable
 * Manages newsletter functionality including popup display and first-time visitor logic
 */
export function useNewsletter() {
    // Router
    const router = useRouter();
    
    // State
    const showNewsletterPopup = ref<boolean>(false);
    const newsletterEmail = ref<string>('');
    const newsletterName = ref<string>(''); // Added name field
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
        newsletterName.value = '';
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
     * Navigates user to the gift page after successful subscription
     */
    const navigateToGiftPage = (): void => {
        router.push('/gift');
    };
    
    /**
     * Submits newsletter form
     * Sends data to GetResponse
     */
    const submitNewsletterForm = async (): Promise<void> => {
        if (!newsletterEmail.value || !newsletterEmail.value.includes('@')) {
            return;
        }
        
        isSubmittingNewsletter.value = true;
        
        try {
            // Submit to GetResponse with name and email
            await subscribeToNewsletter(newsletterEmail.value, newsletterName.value);
            
            // Show success message
            showNewsletterSuccess.value = true;
            
            // Store subscription status
            try {
                localStorage.setItem('newsletterSubscribed', 'true');
                isSubscribed.value = true;
            } catch (error) {
                console.error('Error saving newsletter data:', error);
            }
            
            // Close popup after delay
            setTimeout(() => {
                closeNewsletterPopup();
                
                // Navigate to gift page instead of showing reward popup
                navigateToGiftPage();
            }, 2000);
        } catch (error) {
            // Show error message
            showNewsletterError.value = true;
            console.error('Newsletter subscription failed:', error);
            
            // Hide error after 5 seconds
            setTimeout(() => {
                showNewsletterError.value = false;
            }, 5000);
        } finally {
            isSubmittingNewsletter.value = false;
        }
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
    
    /**
     * Check for newsletter submission completion
     * This handles the redirect back from GetResponse
     */
    const checkNewsletterRedirect = (): void => {
        if (checkNewsletterSubmissionComplete()) {
            // User has completed subscription via GetResponse
            localStorage.setItem('newsletterSubscribed', 'true');
            isSubscribed.value = true;
            
            // Navigate to gift page
            navigateToGiftPage();
        }
    };
    
    // On component mount
    onMounted(() => {
        checkSubscriptionStatus();
        checkFirstTimeVisitor();
        checkNewsletterRedirect();
    });
    
    return {
        showNewsletterPopup,
        newsletterEmail,
        newsletterName,
        showNewsletterSuccess,
        showNewsletterError,
        showNewsletterReward,
        isSubmittingNewsletter,
        isFirstTimeVisitor,
        isSubscribed,
        openNewsletterPopup,
        closeNewsletterPopup,
        submitNewsletterForm,
        closeNewsletterReward,
        navigateToGiftPage
    };
}