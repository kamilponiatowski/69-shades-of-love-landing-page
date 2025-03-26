<template>
    <div class="container">
      <a href="#main-content" class="skip-link">{{ t("skipToContent") }}</a>
  
      <ScrollDownButton />
  
      <Header @tell-duck-joke="tellDuckJoke" :streak-days="streakDays" :isHomePage="false" :customTitle="t('quotesPageTitle')" :customSubtitle="t('quotesPageSubtitle')" />
  
      <DuckJoke :joke="currentDuckJoke" :show-duck-joke="showDuckJoke" />
  
      <div class="page-layout">
        <main id="main-content" class="quotes-content">
          <!-- Introduction section -->
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
  
          <!-- Quotes section with filtering -->
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
  
            <!-- Quotes grid layout -->
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
  
          <!-- Application section -->
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
  
          <!-- Navigation links -->
          <div class="navigation-links">
            <router-link to="/" class="back-link">
              <i class="fas fa-arrow-left"></i> {{ t('backToJourney') }}
            </router-link>
          </div>
        </main>
      </div>
  
      <Footer />
  
      <!-- Newsletter Components -->
      <NewsletterFloatingButton @click="openNewsletterPopup" :isSubscribed="isSubscribed" />
      
      <NewsletterPopup 
        :show="showNewsletterPopup" 
        :email="newsletterEmail" 
        :name="newsletterName"
        :show-success="showNewsletterSuccess" 
        :show-error="showNewsletterError" 
        :is-submitting="isSubmittingNewsletter"
        @close="closeNewsletterPopup" 
        @submit="submitNewsletterForm" 
        @update:email="newsletterEmail = $event"
        @update:name="newsletterName = $event" 
      />
  
      <NewsletterReward :show="showNewsletterReward" @close="closeNewsletterReward" />
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, computed } from 'vue';
  import { useRouter } from 'vue-router';
  import { useI18n, Language } from '@/composables/useI18n';
  import { useDuckJokes } from '@/composables/useDuckJokes';
  import { duckJokes } from '@/constants/duckJokes';
  import { useNewsletter } from '@/composables/useNewsletter';
  
  // Components
  import Header from '@/components/layout/Header.vue';
  import Footer from '@/components/layout/Footer.vue';
  import ScrollDownButton from '@/components/widgets/ScrollDownButton.vue';
  import DuckJoke from '@/components/widgets/DuckJoke.vue';
  import NewsletterFloatingButton from '@/components/widgets/NewsletterFloatingButton.vue';
  import NewsletterPopup from '@/components/widgets/NewsletterPopup.vue';
  import NewsletterReward from '@/components/widgets/NewsletterReward.vue';
  
  // Router instance
  const router = useRouter();
  
  // I18n composable instance
  const { t, currentLanguage, setLanguage } = useI18n();
  
  // Duck jokes functionality
  const { showDuckJoke, currentDuckJoke, tellDuckJoke } = useDuckJokes(duckJokes, currentLanguage);
  
  // For compatibility with Header component
  const streakDays = ref<number>(0);
  
  // Newsletter functionality
  const {
    showNewsletterPopup,
    newsletterEmail,
    newsletterName,
    showNewsletterSuccess,
    showNewsletterError,
    showNewsletterReward,
    isSubmittingNewsletter,
    isSubscribed,
    openNewsletterPopup,
    closeNewsletterPopup,
    submitNewsletterForm,
    closeNewsletterReward
  } = useNewsletter();
  
  // Reactive state for category filtering
  const selectedCategory = ref('all');
  
  /**
   * Parse quotes from translations
   * Safely converts JSON string to array of Quote objects
   */
  const quotes = computed(() => {
    try {
      const rawQuotes = t('quotesList');
      
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
  
  // Extract unique categories from quotes
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
  
  /**
   * Get appropriate icon for quote category
   * @param category - The quote category
   * @returns FontAwesome icon class
   */
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
  
  /**
   * Changes the application language
   */
  const toggleLanguage = () => {
    const newLang: Language = currentLanguage.value === 'pl' ? 'en' : 'pl';
    setLanguage(newLang);
  };
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
  
  .quotes-content {
    flex: 1;
    max-width: 1000px;
    margin: 0 auto;
    width: 100%;
  }
  
  /* Content section styles */
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
    color: var(--accent-color);
    border-bottom: 3px solid var(--accent-color);
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
  
  /* Introduction section note styles */
  .intro-note {
    display: flex;
    align-items: center;
    background-color: rgba(138, 43, 226, 0.1);
    padding: 15px;
    border-radius: 10px;
    margin-top: 20px;
    position: relative;
    overflow: hidden;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.05);
    border-left: 4px solid var(--accent-color);
  }
  
  .intro-note i {
    font-size: 2rem;
    color: var(--accent-color);
    margin-right: 15px;
  }
  
  .intro-note p {
    color: #333;
    line-height: 1.5;
  }
  
  .intro-note strong {
    color: var(--accent-color);
  }
  
  /* Easter egg note with distinctive styling */
  .easter-egg-note {
    margin-top: 15px;
    background-color: rgba(196, 30, 58, 0.1);
    border-left: 4px solid var(--main-color);
  }
  
  .easter-egg-note i.purple-heart {
    color: var(--main-color);
    font-size: 1.5rem;
    animation: heartbeat 1.5s infinite;
  }
  
  /* Quotes filter buttons */
  .quotes-filter {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 25px;
  }
  
  .filter-button {
    padding: 8px 15px;
    border: none;
    border-radius: 20px;
    background-color: #f0f0f0;
    color: #333;
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: 0.95rem;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  }
  
  .filter-button:hover {
    background-color: #e0e0e0;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .filter-button.active {
    background-color: var(--accent-color);
    color: white;
    box-shadow: 0 4px 10px rgba(138, 43, 226, 0.2);
  }
  
  /* Quotes container - grid layout */
  .quotes-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 25px;
  }
  
  /* Quote card styling */
  .quote-card {
    position: relative;
    background-color: white;
    border-radius: 12px;
    padding: 25px;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
    transition: all 0.3s ease;
    overflow: hidden;
    border-top: 5px solid #ccc;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  
  .quote-card:hover {
    transform: translateY(-8px) rotate(1deg);
    box-shadow: 0 12px 25px rgba(0, 0, 0, 0.15);
  }
  
  /* Category-specific border colors */
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
  
  /* Quote content styling */
  .quote-content {
    position: relative;
    margin-bottom: 20px;
    flex-grow: 1;
  }
  
  .quote-content i {
    color: rgba(0, 0, 0, 0.1);
    font-size: 1.5rem;
    position: absolute;
  }
  
  .quote-content i.fa-quote-left {
    top: -10px;
    left: -10px;
  }
  
  .quote-content i.fa-quote-right {
    bottom: -10px;
    right: -10px;
  }
  
  .quote-content blockquote {
    padding: 15px 0;
    margin: 0;
    font-style: italic;
    color: #333;
    line-height: 1.6;
    font-size: 1.1rem;
    text-align: center;
  }
  
  /* Quote source styling */
  .quote-source {
    text-align: right;
    margin-top: 15px;
    padding-top: 15px;
    border-top: 1px dashed rgba(0, 0, 0, 0.1);
  }
  
  .source-name {
    font-weight: bold;
    color: #555;
    font-size: 1rem;
  }
  
  .source-detail {
    font-size: 0.9rem;
    color: #777;
    margin-top: 3px;
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
  
  /* Corner icon for category */
  .corner-icon {
    position: absolute;
    top: 15px;
    right: 15px;
    opacity: 0.2;
    font-size: 1.2rem;
    color: #555;
  }
  
  /* Application section */
  .application-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 25px;
    margin-top: 25px;
  }
  
  .application-card {
    background: linear-gradient(135deg, #fff, #f9f9f9);
    border-radius: 12px;
    padding: 25px;
    text-align: center;
    transition: all 0.3s ease;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
    position: relative;
    overflow: hidden;
    height: 100%;
  }
  
  .application-card::before {
    content: "";
    position: absolute;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(138, 43, 226, 0.1) 0%, rgba(255, 255, 255, 0) 70%);
    top: -50%;
    left: -50%;
    opacity: 0;
    transition: all 0.5s ease;
    z-index: 0;
  }
  
  .application-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }
  
  .application-card:hover::before {
    opacity: 1;
  }
  
  .application-icon {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: linear-gradient(135deg, var(--accent-color), #6a11cb);
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto 20px;
    color: white;
    font-size: 1.6rem;
    box-shadow: 0 5px 15px rgba(138, 43, 226, 0.3);
    position: relative;
    z-index: 1;
  }
  
  .application-card h3 {
    margin-bottom: 15px;
    color: #333;
    font-weight: 600;
    position: relative;
    z-index: 1;
  }
  
  .application-card p {
    color: #555;
    font-size: 0.95rem;
    line-height: 1.6;
    position: relative;
    z-index: 1;
  }
  
  /* Navigation */
  .navigation-links {
    text-align: center;
    margin-top: 40px;
    margin-bottom: 50px;
  }
  
  .back-link {
    display: inline-flex;
    align-items: center;
    color: white;
    background: linear-gradient(135deg, var(--accent-color), #6a11cb);
    text-decoration: none;
    padding: 12px 25px;
    border-radius: 30px;
    transition: all 0.3s ease;
    font-weight: bold;
    box-shadow: 0 4px 15px rgba(138, 43, 226, 0.3);
  }
  
  .back-link:hover,
  .back-link:focus {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(138, 43, 226, 0.4);
  }
  
  .back-link i {
    margin-right: 10px;
  }
  
  /* Heartbeat animation */
  @keyframes heartbeat {
    0% { transform: scale(1); }
    5% { transform: scale(1.2); }
    10% { transform: scale(1); }
    15% { transform: scale(1.1); }
    20% { transform: scale(1); }
    100% { transform: scale(1); }
  }
  
  /* Responsive adjustments */
  @media (max-width: 768px) {
    .page-layout {
      padding: 0 15px;
    }
  
    .quotes-container {
      grid-template-columns: 1fr;
    }
  
    .application-grid {
      grid-template-columns: 1fr;
    }
  
    .intro-note {
      flex-direction: column;
      text-align: center;
    }
  
    .intro-note i {
      margin-right: 0;
      margin-bottom: 10px;
    }
  
    .content-section {
      padding: 20px;
    }
  
    .section-title {
      font-size: 1.6rem;
    }
  }
  
  /* Smaller screens - additional adjustments */
  @media (max-width: 480px) {
    .section-title {
      font-size: 1.5rem;
    }
  
    .quotes-filter {
      justify-content: center;
    }
  }
  </style>