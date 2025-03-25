<template>
    <div class="container quotes-page">
        <ScrollDownButton />
        <main class="quotes-content">
            <Header :customTitle="t('quotesPageTitle')"
                :customSubtitle="t('quotesPageSubtitle')" />

            <div class="content-section intro-section">
                <h2 class="section-title">{{ t('quotesThankYouTitle') }}</h2>
                <p class="section-description">
                    {{ t('quotesThankYouDescription') }}
                </p>
                <div class="intro-note">
                    <i class="fas fa-envelope"></i>
                    <p v-html="t('checkInboxMessage')"></p>
                </div>

                <div class="intro-note easter-egg-note">
                    <i class="fas fa-heart purple-heart"></i>
                    <p>{{ t('membershipNote') }}</p>
                </div>
            </div>

            <div class="content-section quotes-section">
                <h2 class="section-title">{{ t('quotesWisdomTitle') }}</h2>

                <div class="quotes-filter">
                    <button 
                        :class="['filter-button', { active: selectedCategory === 'all' }]"
                        @click="selectedCategory = 'all'"
                    >
                        {{ t('allCategories') }}
                    </button>
                    <button v-for="category in categories" :key="category"
                        :class="['filter-button', { active: selectedCategory === category }]"
                        @click="selectedCategory = (selectedCategory === category) ? 'all' : category"
                    >
                        {{ category }}
                    </button>
                </div>

                <div class="quotes-container">
                    <div v-for="(quote, index) in filteredQuotes" :key="index"
                        :class="['quote-card', quote.category.toLowerCase()]">
                        <div class="quote-content">
                            <i class="fas fa-quote-left" aria-hidden="true"></i>
                            <blockquote>{{ quote.text }}</blockquote>
                            <i class="fas fa-quote-right" aria-hidden="true"></i>
                        </div>
                        <div class="quote-source">
                            <div class="source-name">{{ quote.source }}</div>
                            <div class="source-detail">
                                <span class="character">{{ quote.character }}</span>
                                <span class="universe">{{ quote.universe }}</span>
                            </div>
                        </div>
                        <div class="corner-icon">
                            <i :class="getCategoryIcon(quote.category)" aria-hidden="true"></i>
                        </div>
                    </div>
                </div>
            </div>

            <div class="content-section application-section">
                <h2 class="section-title">{{ t('applicationTitle') }}</h2>
                <p class="section-description">
                    {{ t('applicationDescription') }}
                </p>

                <div class="application-grid">
                    <div class="application-card">
                        <div class="application-icon">
                            <i class="fas fa-bookmark"></i>
                        </div>
                        <h3>{{ t('dailyRemindersTitle') }}</h3>
                        <p>
                            {{ t('dailyRemindersDescription') }}
                        </p>
                    </div>

                    <div class="application-card">
                        <div class="application-icon">
                            <i class="fas fa-journal-whills"></i>
                        </div>
                        <h3>{{ t('reflectionJournalTitle') }}</h3>
                        <p>
                            {{ t('reflectionJournalDescription') }}
                        </p>
                    </div>

                    <div class="application-card">
                        <div class="application-icon">
                            <i class="fas fa-users"></i>
                        </div>
                        <h3>{{ t('shareWisdomTitle') }}</h3>
                        <p>
                            {{ t('shareWisdomDescription') }}
                        </p>
                    </div>

                    <div class="application-card">
                        <div class="application-icon">
                            <i class="fas fa-theater-masks"></i>
                        </div>
                        <h3>{{ t('characterInspirationTitle') }}</h3>
                        <p>
                            {{ t('characterInspirationDescription') }}
                        </p>
                    </div>
                </div>
            </div>

            <div class="navigation-links">
                <router-link to="/" class="back-link">
                    <i class="fas fa-arrow-left"></i> {{ t('backToJourney') }}
                </router-link>
            </div>
        </main>

        <Footer />
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { Quote, useI18n } from '@/composables/useI18n';
import Header from '@/components/layout/Header.vue';
import Footer from '@/components/layout/Footer.vue';
import ScrollDownButton from '@/components/widgets/ScrollDownButton.vue';

const router = useRouter();
const { t } = useI18n();

const quotes = computed(() => {
    const { t } = useI18n();
    try {
        const rawQuotes = t('quotesList');
        console.dir(rawQuotes)
        
        if (typeof rawQuotes === 'string') {
            const parsedQuotes = JSON.parse(rawQuotes);
            return Array.isArray(parsedQuotes) ? parsedQuotes : [];
        }
        
        return Array.isArray(rawQuotes) ? rawQuotes : [];
    } catch (error) {
        console.error('Error parsing quotes:', error);
        return [];
    }
});

const selectedCategory = ref('all');

// Extract unique categories
const categories = computed(() => {
    const uniqueCategories = new Set(quotes.value.map(quote => quote.category));
    return Array.from(uniqueCategories).sort();
});

// Filter quotes based on selected category
const filteredQuotes = computed(() => {
    if (selectedCategory.value === 'all') {
        return quotes.value;
    }
    return quotes.value.filter(quote => quote.category === selectedCategory.value);
});

// Helper function to get icon for category
const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
        case 'resilience':
            return 'fas fa-shield-alt';
        case 'motivation':
            return 'fas fa-bolt';
        case 'identity':
            return 'fas fa-fingerprint';
        case 'perspective':
            return 'fas fa-eye';
        case 'challenges':
            return 'fas fa-mountain';
        case 'growth':
            return 'fas fa-seedling';
        case 'humor':
            return 'fas fa-laugh';
        case 'emotions':
            return 'fas fa-heart';
        default:
            return 'fas fa-star';
    }
};
</script>

<style scoped>
.quotes-page {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: var(--background-color);
}

.quotes-content {
    flex: 1;
    padding: 40px 20px;
    max-width: 1000px;
    margin: 0 auto;
    width: 100%;
}

.quotes-header {
    text-align: center;
    margin-bottom: 40px;
}

.main-title {
    color: var(--main-color);
    font-size: 2.8rem;
    margin-bottom: 15px;
}

.subtitle {
    color: #666;
    font-size: 1.3rem;
}

.content-section {
    background-color: white;
    border-radius: 15px;
    padding: 30px;
    margin-bottom: 30px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
}

.content-section:hover {
    transform: translateY(-5px);
}

.section-title {
    color: var(--main-color);
    border-bottom: 3px solid var(--main-color);
    padding-bottom: 10px;
    margin-bottom: 20px;
    font-size: 1.8rem;
}

.section-description {
    font-size: 1.1rem;
    line-height: 1.6;
    color: #333;
    margin-bottom: 20px;
}

/* Intro section with newsletter note */
.intro-note {
    display: flex;
    align-items: center;
    background-color: rgba(138, 43, 226, 0.1);
    padding: 15px;
    border-radius: 10px;
    margin-top: 20px;
}

.intro-note i {
    font-size: 2rem;
    color: var(--accent-color);
    margin-right: 15px;
}

.intro-note p {
    color: #333;
}

.intro-note strong {
    color: var(--accent-color);
}

/* Easter egg note styling */
.easter-egg-note {
    margin-top: 15px;
    background-color: rgba(138, 43, 226, 0.1);
    border: 1px dashed var(--accent-color);
}

.purple-heart {
    color: var(--accent-color);
    font-size: 1.5rem;
    animation: heartbeat 1.5s infinite;
}

/* Quotes filter */
.quotes-filter {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 20px;
}

.filter-button {
    padding: 8px 15px;
    border: none;
    border-radius: 20px;
    background-color: #f0f0f0;
    color: #333;
    cursor: pointer;
    transition: all 0.3s ease;
}

.filter-button:hover {
    background-color: #e0e0e0;
}

.filter-button.active {
    background-color: var(--main-color);
    color: white;
}

/* Quotes container */
.quotes-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
}

.quote-card {
    position: relative;
    background-color: white;
    border-radius: 10px;
    padding: 25px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
    overflow: hidden;
    border-top: 5px solid #ccc;
}

.quote-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

/* Category border colors */
.quote-card.resilience {
    border-top-color: var(--physical-color);
}

.quote-card.motivation {
    border-top-color: var(--mental-color);
}

.quote-card.identity {
    border-top-color: var(--relationship-color);
}

.quote-card.perspective {
    border-top-color: var(--personal-color);
}

.quote-card.challenges {
    border-top-color: var(--main-color);
}

.quote-card.growth {
    border-top-color: #4CAF50;
}

.quote-card.humor {
    border-top-color: #FF9800;
}

.quote-card.emotions {
    border-top-color: #9C27B0;
}

.quote-content {
    position: relative;
    margin-bottom: 20px;
}

.quote-content i {
    color: rgba(0, 0, 0, 0.1);
    font-size: 1.5rem;
}

.quote-content i.fa-quote-left {
    position: absolute;
    top: -5px;
    left: -5px;
}

.quote-content i.fa-quote-right {
    position: absolute;
    bottom: -5px;
    right: -5px;
}

.quote-content blockquote {
    padding: 10px 0;
    margin: 0;
    font-style: italic;
    color: #333;
    line-height: 1.5;
    font-size: 1.1rem;
}

.quote-source {
    text-align: right;
    margin-top: 10px;
}

.source-name {
    font-weight: bold;
    color: #555;
    font-size: 1rem;
}

.source-detail {
    font-size: 0.9rem;
    color: #777;
}

.source-detail .character {
    font-style: italic;
}

.source-detail .universe {
    margin-left: 5px;
    opacity: 0.7;
}

.source-detail .universe::before {
    content: "•";
    margin-right: 5px;
}

.corner-icon {
    position: absolute;
    top: 10px;
    right: 10px;
    opacity: 0.2;
    font-size: 1.2rem;
}

/* Application section */
.application-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
    margin-top: 20px;
}

.application-card {
    background-color: #f9f9f9;
    border-radius: 10px;
    padding: 20px;
    text-align: center;
    transition: transform 0.3s ease;
}

.application-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.application-icon {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: var(--main-color);
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto 15px;
    color: white;
    font-size: 1.3rem;
}

.application-card h3 {
    margin-bottom: 10px;
    color: #333;
}

.application-card p {
    color: #666;
    font-size: 0.95rem;
    line-height: 1.5;
}

/* Navigation */
.navigation-links {
    text-align: center;
    margin-top: 30px;
    margin-bottom: 50px;
}

.back-link {
    display: inline-flex;
    align-items: center;
    color: white;
    background-color: var(--main-color);
    text-decoration: none;
    padding: 12px 20px;
    border-radius: 8px;
    transition: all 0.3s ease;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.back-link:hover,
.back-link:focus {
    background-color: #a01a30;
    transform: translateY(-3px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.back-link i {
    margin-right: 10px;
}

/* Responsive */
@media (max-width: 768px) {
    .quotes-content {
        padding: 20px 15px;
    }

    .main-title {
        font-size: 2.2rem;
    }

    .subtitle {
        font-size: 1.1rem;
    }

    .quotes-container {
        grid-template-columns: 1fr;
    }

    .application-grid {
        grid-template-columns: 1fr;
    }
}
</style>