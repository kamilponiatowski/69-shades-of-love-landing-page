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
import { useI18n } from '@/composables/useI18n';
import Header from '@/components/layout/Header.vue';
import Footer from '@/components/layout/Footer.vue';
import ScrollDownButton from '@/components/widgets/ScrollDownButton.vue';

// Router
const router = useRouter();

// I18n
const { t } = useI18n();

// Data structure for quotes
interface Quote {
    text: string;
    source: string;
    character: string;
    universe: string;
    category: string;
}

// Collection of quotes
const quotes: Quote[] = [
    {
        text: "With great power comes great responsibility.",
        source: "Spider-Man",
        character: "Uncle Ben",
        universe: "Marvel",
        category: "Resilience"
    },
    {
        text: "Do or do not, there is no try.",
        source: "Star Wars: The Empire Strikes Back",
        character: "Yoda",
        universe: "Star Wars",
        category: "Motivation"
    },
    {
        text: "It's not who I am underneath, but what I do that defines me.",
        source: "Batman Begins",
        character: "Batman",
        universe: "DC Comics",
        category: "Identity"
    },
    {
        text: "All we have to decide is what to do with the time that is given to us.",
        source: "The Lord of the Rings",
        character: "Gandalf",
        universe: "Middle-earth",
        category: "Perspective"
    },
    {
        text: "The hardest choices require the strongest wills.",
        source: "Avengers: Infinity War",
        character: "Thanos",
        universe: "Marvel",
        category: "Challenges"
    },
    {
        text: "It is our choices that show what we truly are, far more than our abilities.",
        source: "Harry Potter and the Chamber of Secrets",
        character: "Albus Dumbledore",
        universe: "Harry Potter",
        category: "Identity"
    },
    {
        text: "I can do this all day.",
        source: "Captain America: Civil War",
        character: "Steve Rogers",
        universe: "Marvel",
        category: "Resilience"
    },
    {
        text: "The way I see it, if you want the rainbow, you gotta put up with the rain.",
        source: "The Good Place",
        character: "Dolly Parton (quoted by Eleanor)",
        universe: "NBC",
        category: "Perspective"
    },
    {
        text: "Sometimes life is like this dark tunnel. You can't always see the light at the end of the tunnel, but if you just keep moving, you will come to a better place.",
        source: "Avatar: The Last Airbender",
        character: "Uncle Iroh",
        universe: "Avatar",
        category: "Resilience"
    },
    {
        text: "A person is smart. People are dumb, panicky, dangerous animals.",
        source: "Men in Black",
        character: "Agent K",
        universe: "MIB",
        category: "Perspective"
    },
    {
        text: "The real voyage of discovery consists not in seeking new landscapes, but in having new eyes.",
        source: "Westworld",
        character: "Dolores Abernathy",
        universe: "HBO",
        category: "Growth"
    },
    {
        text: "Wubba lubba dub dub!",
        source: "Rick and Morty",
        character: "Rick Sanchez",
        universe: "Adult Swim",
        category: "Humor"
    },
    {
        text: "The greatest teacher, failure is.",
        source: "Star Wars: The Last Jedi",
        character: "Yoda",
        universe: "Star Wars",
        category: "Growth"
    },
    {
        text: "You're more than what you have become.",
        source: "The Lion King",
        character: "Mufasa",
        universe: "Disney",
        category: "Identity"
    },
    {
        text: "I'm Mary Poppins, y'all!",
        source: "Guardians of the Galaxy Vol. 2",
        character: "Yondu",
        universe: "Marvel",
        category: "Humor"
    },
    {
        text: "Sometimes it is the people who no one imagines anything of who do the things that no one can imagine.",
        source: "The Imitation Game",
        character: "Alan Turing",
        universe: "Historical",
        category: "Motivation"
    },
    {
        text: "This is the way.",
        source: "The Mandalorian",
        character: "Din Djarin",
        universe: "Star Wars",
        category: "Identity"
    },
    {
        text: "The future is worth it. All the pain. All the tears. The future is worth the fight.",
        source: "Babylon 5",
        character: "Cmdr. Susan Ivanova",
        universe: "B5",
        category: "Resilience"
    },
    {
        text: "That's the thing about chaos, it's fair.",
        source: "Joker",
        character: "Arthur Fleck",
        universe: "DC Comics",
        category: "Perspective"
    },
    {
        text: "Inside of us, there are two wolves. One is evil. The other is good. The one that wins is the one you feed.",
        source: "The Walking Dead",
        character: "Morgan Jones",
        universe: "AMC",
        category: "Growth"
    },
    {
        text: "I know what it's like to lose. To feel so desperately that you're right, yet to fail nonetheless.",
        source: "Avengers: Infinity War",
        character: "Thanos",
        universe: "Marvel",
        category: "Challenges"
    },
    {
        text: "It's what you do right now that makes a difference.",
        source: "Black Panther",
        character: "T'Challa",
        universe: "Marvel",
        category: "Motivation"
    },
    {
        text: "You are who you choose to be.",
        source: "The Iron Giant",
        character: "The Iron Giant",
        universe: "Animation",
        category: "Identity"
    },
    {
        text: "Inside everyone is a person they are trying to hide.",
        source: "Hazbin Hotel",
        character: "Charlie",
        universe: "Adult Animation",
        category: "Identity"
    },
    {
        text: "The Dude abides.",
        source: "The Big Lebowski",
        character: "The Dude",
        universe: "Coen Brothers",
        category: "Perspective"
    },
    {
        text: "Life finds a way.",
        source: "Jurassic Park",
        character: "Dr. Ian Malcolm",
        universe: "Jurassic Park",
        category: "Resilience"
    },
    {
        text: "I find your lack of faith disturbing.",
        source: "Star Wars: A New Hope",
        character: "Darth Vader",
        universe: "Star Wars",
        category: "Motivation"
    },
    {
        text: "I'm going to make him an offer he can't refuse.",
        source: "The Godfather",
        character: "Don Vito Corleone",
        universe: "Mob Films",
        category: "Challenges"
    },
    {
        text: "I need my paddles!",
        source: "Pulp Fiction",
        character: "Vincent Vega",
        universe: "Tarantino",
        category: "Humor"
    },
    {
        text: "The ability to speak does not make you intelligent.",
        source: "Star Wars: The Phantom Menace",
        character: "Qui-Gon Jinn",
        universe: "Star Wars",
        category: "Perspective"
    },
    {
        text: "I will not say: do not weep; for not all tears are an evil.",
        source: "The Return of the King",
        character: "Gandalf",
        universe: "Middle-earth",
        category: "Emotions"
    },
    {
        text: "I'm going to find my crew. I'm going to be King of the Pirates!",
        source: "One Piece",
        character: "Monkey D. Luffy",
        universe: "Anime",
        category: "Motivation"
    }
];

// State
const selectedCategory = ref('all');

// Extract unique categories
const categories = computed(() => {
    const uniqueCategories = new Set(quotes.map(quote => quote.category));
    return Array.from(uniqueCategories).sort();
});

// Filter quotes based on selected category
const filteredQuotes = computed(() => {
    if (selectedCategory.value === 'all') {
        return quotes;
    }
    return quotes.filter(quote => quote.category === selectedCategory.value);
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