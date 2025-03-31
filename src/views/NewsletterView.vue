<template>
    <div class="container">
        <a href="#main-content" class="skip-link">{{ t("skipToContent") }}</a>

        <Header @tell-duck-joke="tellDuckJoke" :streak-days="streakDays" :isHomePage="false"
            :customTitle="t('newsletterTitle')" :customSubtitle="t('newsletterSubtitle')" />

        <DuckJoke :joke="currentDuckJoke" :show-duck-joke="showDuckJoke" />

        <div class="page-layout">
            <main id="main-content" class="newsletter-page-content">
                <div class="content-section intro-section">
                    <h2 class="section-title">{{ t('newsletterBenefitsTitle') }}</h2>

                    <!-- Benefits list with animation -->
                    <ul class="newsletter-page-benefits">
                        <li v-for="(benefit, index) in benefitsList" :key="index"
                            :class="{ 'highlight-benefit': index === 0, 'highlight-benefit pop-culture': index === 1 }">
                            {{ benefit }}
                        </li>
                    </ul>

                    <!-- Pop Culture Wisdom Access Highlight -->
                    <div class="pop-culture-section animate-glow">
                        <div class="bubble-background">
                            <div class="bubble bubble-1"></div>
                            <div class="bubble bubble-2"></div>
                            <div class="bubble bubble-3"></div>
                            <div class="bubble bubble-4"></div>
                            <div class="bubble bubble-5"></div>
                        </div>
                        <i class="fas fa-theater-masks"></i>
                        <div class="pop-culture-text">
                            <h3>{{ t('popCultureTitle') }}</h3>
                            <p>{{ t('popCultureDescription') }}</p>
                        </div>
                    </div>

                    <!-- Embedded Newsletter Form -->
                    <div class="newsletter-embedded-form">
                        <form class="newsletter-form" @submit.prevent="submitNewsletterForm">
                            <!-- Name -->
                            <input type="text" class="newsletter-input"
                                placeholder="Your Name (optional, but nice to meet you 💜)" v-model="newsletterName">

                            <!-- Email -->
                            <input type="email" class="newsletter-input" :placeholder="t('newsletterEmailPlaceholder')"
                                required v-model="newsletterEmail">

                            <button type="submit" class="newsletter-submit animate-float"
                                :disabled="isSubmittingNewsletter">
                                <span class="button-shine"></span>
                                <i class="fas"
                                    :class="isSubmittingNewsletter ? 'fa-spinner fa-spin' : 'fa-paper-plane'"></i>
                                <span>{{ isSubmittingNewsletter ? t('newsletterSubmitting') : t('newsletterSubmitText')
                                    }}</span>
                            </button>
                        </form>

                        <div class="newsletter-success animate-fade-in" :class="{ show: showNewsletterSuccess }">
                            <strong>{{ t('newsletterSuccessTitle') }}</strong>
                            {{ t('newsletterSuccessText') }}
                        </div>

                        <div class="newsletter-error animate-fade-in" :class="{ show: showNewsletterError }">
                            <strong>{{ t('newsletterErrorTitle') }}</strong>
                            {{ t('newsletterErrorText') }}
                        </div>
                    </div>
                </div>

                <div class="navigation-links">
                    <router-link to="/journal" class="back-link">
                        <i class="fas fa-arrow-left"></i> {{ t('backToJourney') }}
                    </router-link>
                </div>
            </main>
        </div>

        <Footer />

        <!-- Newsletter Reward popup -->
        <NewsletterReward :show="showNewsletterReward" @close="closeNewsletterReward" />
    </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useI18n } from '@/composables/useI18n';
import { useDuckJokes } from '@/composables/useDuckJokes';
import { duckJokes } from '@/constants/duckJokes';
import { subscribeToNewsletter } from '@/utils/getResponseApi';

// Components
import Header from '@/components/layout/Header.vue';
import Footer from '@/components/layout/Footer.vue';
import DuckJoke from '@/components/widgets/DuckJoke.vue';
import NewsletterReward from '@/components/widgets/NewsletterReward.vue';

// Router instance
const router = useRouter();

// I18n composable instance
const { t, currentLanguage } = useI18n();

// For compatibility with Header component
const streakDays = ref<number>(0);

// Duck jokes functionality
const { showDuckJoke, currentDuckJoke, tellDuckJoke } = useDuckJokes(duckJokes, currentLanguage);

// Newsletter state 
const newsletterEmail = ref<string>('');
const newsletterName = ref<string>('');
const showNewsletterSuccess = ref<boolean>(false);
const showNewsletterError = ref<boolean>(false);
const showNewsletterReward = ref<boolean>(false);
const isSubmittingNewsletter = ref<boolean>(false);

// Check if already subscribed
const isSubscribed = ref<boolean>(false);

/**
 * Submit newsletter form
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

        // Show the reward popup after delay
        setTimeout(() => {
            // Show the reward popup instead of immediately navigating
            showNewsletterReward.value = true;

            // Add confetti effect for celebration
            createConfetti();
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
    localStorage.setItem('newsletterRewardShown', 'true');

    // Navigate to quotes page after closing reward
    router.push('/quotes');
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

// Computed property to get benefits list
const benefitsList = computed(() => {
    // Get translation string with full benefits list, then split it to an array
    const rawValue = t('newsletterBenefitsList');

    if (typeof rawValue === 'string') {
        try {
            // Try to parse as JSON first
            return JSON.parse(rawValue);
        } catch (e) {
            // If not a valid JSON, return array with single string
            return [rawValue];
        }
    }

    // If value is already an array, return it
    if (Array.isArray(rawValue)) {
        return rawValue;
    }

    // Default empty array
    return [];
});

// Check subscription status on component mount
onMounted(() => {
    try {
        const subscribed = localStorage.getItem('newsletterSubscribed');
        isSubscribed.value = subscribed === 'true';

        // If already subscribed, redirect to journal
        if (isSubscribed.value) {
            router.push('/journal');
        }
    } catch (error) {
        console.error('Error checking subscription status:', error);
    }
});
</script>

<style scoped>
/* Common layout styles */
.container {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: var(--background-color);
}

.page-layout {
    display: flex;
    flex-direction: column;
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
    padding: 0 20px;
}

.newsletter-page-content {
    flex: 1;
    max-width: 800px;
    margin: 0 auto;
    width: 100%;
}

/* Newsletter benefits list with enhanced styling */
.newsletter-page-benefits {
    list-style: none;
    padding-left: 5px;
    margin-bottom: 25px;
}

.newsletter-page-benefits li {
    position: relative;
    padding-left: 30px;
    margin-bottom: 12px;
    font-size: 1.05rem;
    color: var(--text-color);
    transition: transform 0.3s ease;
}

.newsletter-page-benefits li:hover {
    transform: translateX(5px);
}

.newsletter-page-benefits li::before {
    content: "🦆";
    position: absolute;
    left: 0;
    top: 0;
    font-size: 1.2rem;
}

/* Highlight special benefits */
.highlight-benefit {
    font-weight: bold;
    color: var(--main-color);
    margin-bottom: 15px !important;
    padding: 8px 8px 8px 30px !important;
    border-radius: 8px;
    background-color: rgba(196, 30, 58, 0.05);
}

.highlight-benefit::before {
    content: "🎁" !important;
}

/* Pop Culture benefit with rocket icon */
.highlight-benefit.pop-culture::before {
    content: "🚀" !important;
}

.highlight-benefit.pop-culture {
    background-color: rgba(138, 43, 226, 0.05);
    color: var(--accent-color);
}

/* Pop Culture Section - Enhanced with purple gradient and bubbles */
.pop-culture-section {
    position: relative;
    display: flex;
    gap: 15px;
    padding: 25px;
    border-radius: 15px;
    margin: 25px 0;
    position: relative;
    z-index: 1;
    background: linear-gradient(135deg, rgba(138, 43, 226, 0.85), rgba(106, 17, 203, 0.9));
    box-shadow: 0 5px 20px rgba(106, 17, 203, 0.3);
    overflow: hidden;
    color: white;
    animation: glow 3s infinite alternate;
}

/* Bubble background for pop culture section */
.bubble-background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    z-index: -1;
}

.bubble {
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(1px);
    animation: float 25s infinite ease-in-out;
}

.bubble-1 {
    width: 60px;
    height: 60px;
    left: 10%;
    top: 20%;
    animation-delay: -2s;
    opacity: 0.6;
}

.bubble-2 {
    width: 80px;
    height: 80px;
    right: 15%;
    bottom: 20%;
    animation-delay: -5s;
    opacity: 0.4;
}

.bubble-3 {
    width: 40px;
    height: 40px;
    right: 30%;
    top: 30%;
    animation-delay: -7s;
    opacity: 0.7;
}

.bubble-4 {
    width: 120px;
    height: 120px;
    left: 25%;
    bottom: -40px;
    animation-delay: -15s;
    opacity: 0.3;
}

.bubble-5 {
    width: 50px;
    height: 50px;
    right: 5%;
    top: 50%;
    animation-delay: -10s;
    opacity: 0.5;
}

@keyframes float {
    0%, 100% {
        transform: translateY(0) translateX(0);
    }
    25% {
        transform: translateY(-15px) translateX(10px);
    }
    50% {
        transform: translateY(-25px) translateX(0);
    }
    75% {
        transform: translateY(-10px) translateX(-10px);
    }
}

@keyframes glow {
    0% {
        box-shadow: 0 0 10px rgba(138, 43, 226, 0.5);
    }
    100% {
        box-shadow: 0 0 25px rgba(138, 43, 226, 0.8);
    }
}

.pop-culture-section i {
    font-size: 2.5rem;
    color: #FFD304;
    margin-top: 3px;
    z-index: 2;
    text-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.pop-culture-text {
    position: relative;
    z-index: 2;
}

.pop-culture-text h3 {
    font-size: 1.3rem;
    margin-bottom: 8px;
    color: #FFD304;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.pop-culture-text p {
    font-size: 1rem;
    margin: 0;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.9);
}

/* Embedded newsletter form styling */
.newsletter-embedded-form {
    margin-top: 40px;
    background: linear-gradient(135deg, rgba(138, 43, 226, 0.1), rgba(138, 43, 226, 0.05));
    padding: 30px;
    border-radius: 15px;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.05);
}

.newsletter-form {
    position: relative;
    z-index: 1;
}

.newsletter-input {
    width: 100%;
    padding: 15px 20px;
    border-radius: 10px;
    border: 1px solid rgba(138, 43, 226, 0.2);
    background-color: rgba(255, 255, 255, 0.9);
    color: #333;
    font-size: 1rem;
    margin-bottom: 15px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease;
}

.newsletter-input::placeholder {
    color: #777;
}

.newsletter-input:focus {
    outline: none;
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
    border-color: var(--accent-color);
}

.newsletter-submit {
    position: relative;
    background: linear-gradient(135deg, var(--accent-color), #6a11cb);
    color: white;
    border: none;
    padding: 15px 20px;
    border-radius: 10px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
    display: inline-flex;
    align-items: center;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    margin-top: 10px;
    width: 100%;
    justify-content: center;
    font-size: 1.05rem;
    overflow: hidden;
}

.newsletter-submit:hover,
.newsletter-submit:focus {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
    background: linear-gradient(135deg, #7B25D1, #5a11ab);
}

.newsletter-submit i {
    margin-right: 10px;
}

.newsletter-success,
.newsletter-error {
    padding: 15px;
    border-radius: 10px;
    margin-top: 20px;
    display: none;
    animation: fadeIn 0.5s ease forwards;
}

.newsletter-success {
    background-color: rgba(0, 200, 83, 0.15);
    border-left: 4px solid rgba(0, 200, 83, 0.6);
}

.newsletter-error {
    background-color: rgba(255, 0, 0, 0.15);
    border-left: 4px solid rgba(255, 0, 0, 0.6);
}

.newsletter-success.show,
.newsletter-error.show {
    display: block;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(10px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Responsive styles */
@media (max-width: 768px) {
    .page-layout {
        padding: 0 15px;
    }

    .newsletter-page-content {
        padding: 20px 0;
    }

    .pop-culture-section {
        flex-direction: column;
        align-items: center;
        text-align: center;
        padding: 20px;
    }

    .pop-culture-section i {
        margin-bottom: 10px;
        font-size: 2rem;
    }

    .newsletter-embedded-form {
        padding: 20px;
    }

    .newsletter-input {
        padding: 12px 15px;
    }

    .newsletter-submit {
        padding: 12px 15px;
    }
}

@media (max-width: 480px) {
    .newsletter-page-content {
        padding: 10px 0;
    }

    .newsletter-embedded-form {
        padding: 15px;
        margin-top: 20px;
    }

    .newsletter-page-benefits li {
        font-size: 0.95rem;
        padding-left: 25px;
    }

    .highlight-benefit {
        padding: 5px 5px 5px 25px !important;
    }

    .newsletter-input {
        padding: 10px 12px;
        font-size: 0.95rem;
    }

    .newsletter-submit {
        padding: 10px 15px;
        font-size: 0.95rem;
    }
}
</style>