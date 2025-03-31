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
    const showMobilePopup = ref<boolean>(false);
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
    const hasSeenPopup = ref<boolean>(false);
    
    // Detect mobile device
    const isMobileDevice = ref<boolean>(false);
    
    /**
     * Checks if the current device is a mobile device
     * @returns True if the device is mobile
     */
    const checkMobileDevice = (): boolean => {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || 
               window.innerWidth < 768;
    };
    
    /**
     * Opens newsletter popup or shows mini popup on mobile
     */
    const openNewsletterPopup = (): void => {
        // Don't open popup if user is already subscribed
        if (isSubscribed.value) {
            // Navigate to quotes/gift page instead when already subscribed
            navigateToQuotesPage();
            return;
        }
        
        // Mark that popup has been shown
        try {
            localStorage.setItem('hasSeenNewsletterPopup', 'true');
            hasSeenPopup.value = true;
        } catch (error) {
            console.error('Error saving popup state:', error);
        }
        
        // Check if on mobile device
        if (isMobileDevice.value) {
            // On mobile, show mini popup instead of redirecting
            showMobilePopup.value = true;
            return;
        }
        
        // For desktop: Reset form state
        newsletterEmail.value = '';
        newsletterName.value = '';
        showNewsletterSuccess.value = false;
        showNewsletterError.value = false;
        
        // Show popup (only on desktop)
        showNewsletterPopup.value = true;
    };
    
    /**
     * Closes newsletter popup
     */
    const closeNewsletterPopup = (): void => {
        showNewsletterPopup.value = false;
    };
    
    /**
     * Closes mobile popup
     */
    const closeMobilePopup = (): void => {
        showMobilePopup.value = false;
    };
    
    /**
     * Navigates to newsletter page
     */
    const navigateToNewsletterPage = (): void => {
        closeMobilePopup();
        router.push('/newsletter');
    };
    
    /**
     * Navigates user to the gift page
     */
    const navigateToQuotesPage = (): void => {
        router.push('/quotes');
    };
    
    /**
     * Handles gift button click based on device type and subscription status
     */
    const handleGiftButtonClick = (): void => {
        if (isSubscribed.value) {
            // If already subscribed, navigate to gift page
            router.push('/gift');
        } else {
            // Open newsletter popup on desktop, show mini popup on mobile
            openNewsletterPopup();
        }
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
            
            // Desktop behavior
            if (!isMobileDevice.value) {
                setTimeout(() => {
                    closeNewsletterPopup();
                    
                    // Show the reward popup instead of immediately navigating
                    showNewsletterReward.value = true;
                    
                    // Add confetti effect for celebration
                    createConfetti();
                }, 2000);
            } else {
                // Mobile behavior - on newsletter page, show reward after delay
                setTimeout(() => {
                    // Show the reward popup 
                    showNewsletterReward.value = true;
                    
                    // Add confetti effect for celebration
                    createConfetti();
                }, 2000);
            }
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
     * Navigation to Quotes page is now handled by the component
     */
    const closeNewsletterReward = (): void => {
        showNewsletterReward.value = false;
        localStorage.setItem('newsletterRewardShown', 'true');
        
        // Navigate to quotes page after closing reward on mobile view
        if (isMobileDevice.value) {
            router.push('/quotes');
        }
      };
    
    /**
     * Creates confetti animation for newsletter subscription
     */
    const createConfetti = (): void => {
        const colors = ['#FF9F29', '#7ED957', '#FFD966', '#FF97B7', '#C41E3A', '#8A2BE2'];
        
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
            const hasSeenPopupBefore = localStorage.getItem('hasSeenNewsletterPopup');
            
            // Check if the user is a first-time visitor
            isFirstTimeVisitor.value = !hasVisitedBefore;
            hasSeenPopup.value = hasSeenPopupBefore === 'true';
            
            // Set visited flag (always)
            localStorage.setItem('hasVisitedBefore', 'true');
            
            // Show popup automatically for first-time visitors who haven't seen the popup yet
            if (!isSubscribed.value && (isFirstTimeVisitor.value || !hasSeenPopup.value)) {
                
                // Show popup after 7 seconds for better UX
                // This allows users to first see the content before showing them the popup
                setTimeout(() => {
                    if (!isSubscribed.value) {
                        if (!isMobileDevice.value) {
                            // On desktop, show normal popup
                            if (!showNewsletterPopup.value) {
                                showNewsletterPopup.value = true;
                            }
                        } else {
                            // On mobile, show mini popup
                            if (!showMobilePopup.value) {
                                showMobilePopup.value = true;
                            }
                        }
                        
                        // Mark that we've shown the popup
                        localStorage.setItem('hasSeenNewsletterPopup', 'true');
                        hasSeenPopup.value = true;
                    }
                }, 7000);
            }
        } catch (error) {
            console.error('Error checking first-time visitor:', error);
        }
    };
    
    /**
     * Check for newsletter submission completion
     * This handles the redirect back from GetResponse
     */
    const checkNewsletterRedirect = (): void => {
        const rewardShown = localStorage.getItem('newsletterRewardShown') === 'true';
        const justSubscribed = checkNewsletterSubmissionComplete();

        if (justSubscribed && !rewardShown) {
          // User has completed subscription via GetResponse
          localStorage.setItem('newsletterSubscribed', 'true');
          isSubscribed.value = true;
          
          // Show reward popup instead of navigating immediately
          if (router.currentRoute.value.path === '/quotes' || 
              router.currentRoute.value.path === '/newsletter') {
            showNewsletterReward.value = true;
            createConfetti();
          }
        }
      };
    
    /**
     * Updates isMobile state on window resize
     */
    const updateDeviceStatus = (): void => {
        isMobileDevice.value = checkMobileDevice();
    };
    
    // On component mount
    onMounted(() => {
        // Check if device is mobile
        isMobileDevice.value = checkMobileDevice();
        
        // Add resize listener
        window.addEventListener('resize', updateDeviceStatus);
        
        checkSubscriptionStatus();
        checkFirstTimeVisitor();
        checkNewsletterRedirect();
        
        // Return cleanup function
        return () => {
            window.removeEventListener('resize', updateDeviceStatus);
        };
    });
    
    return {
        showNewsletterPopup,
        showMobilePopup,
        newsletterEmail,
        newsletterName,
        showNewsletterSuccess,
        showNewsletterError,
        showNewsletterReward,
        isSubmittingNewsletter,
        isFirstTimeVisitor,
        isSubscribed,
        isMobileDevice,
        openNewsletterPopup,
        closeNewsletterPopup,
        closeMobilePopup,
        navigateToNewsletterPage,
        submitNewsletterForm,
        closeNewsletterReward,
        navigateToQuotesPage,
        createConfetti,
        handleGiftButtonClick
    };
}