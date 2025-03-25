// @/locales/index.ts
import type { TranslationObject } from '../composables/useI18n';

/**
 * Application translations
 * Contains text strings in English and Polish
 */
export interface Translations {
  [key: string]: TranslationObject;
}

export const translations: Translations = {
  en: {
    mainTitle: "69 Shades of Love",
    subtitle: "Your Self-Care Journey",
    aboutTitle: "WTQ - What The Quack!",
    aboutContent: "Hi there! I'm a digital duck paddling through the waters of creativity, crafting digital products, and sharing tools, knowledge, and value with awesome humans like you. If my quacking resonates with you, feel free to toss me some seeds of support – a coffee, some grains, or anything that keeps this duck afloat! 💚\n\nLet's make waves together – one quack at a time! 🌊✨",
    supportButton: "Support This Duck",
    
    // About page translations
    projectPhilosophyTitle: "Project Philosophy",
    projectPhilosophyDescription: "69 Shades of Love is a self-care journey designed to help you incorporate healthy habits into your daily routine. The application includes 69 carefully selected self-care tasks divided into four key areas of wellbeing:",
    physicalDescription: "Taking care of your body",
    mentalDescription: "Nurturing your mind and emotional health", 
    personalDescription: "Finding happiness in simple pleasures",
    relationshipDescription: "Strengthening connections with others",
    featuresTitle: "Features",
    feature1: "Progress tracking with visual indicators",
    feature2: "Category-based organization of self-care tasks",
    feature3: "Streak counter to maintain motivation",
    feature4: "Achievement celebrations for milestones",
    feature5: "Downloadable mind map PDF guide",
    feature6: "Self-Care Insights with science-based tips and facts",
    insightsFeatureTitle: "Self-Care Insights",
    insightsFeatureDescription: "The app provides educational and actionable science-based information about:",
    insightsPoint1: "How to enhance physical wellbeing",
    insightsPoint2: "Mental health improvement techniques",
    insightsPoint3: "Personal joy development strategies",
    insightsPoint4: "Relationship building insights",
    backToJourney: "Back to Self-Care Journey",
    
    pdfTitle: "Mind Map PDF",
    downloadButton: "Download Mind Map PDF",
    lockButton: "Complete 20% to Unlock PDF",
    downloadInfoLocked: "Complete {0} more tasks to unlock the full mind map PDF!",
    downloadInfoUnlocked: "Congratulations! You've unlocked the full mind map PDF (first PoC source). Download it to have an offline reference.",
    streakDays: "{0} day streak!",
    yourProgress: "Your Progress",
    physical: "Physical",
    mental: "Mental",
    personal: "Personal Joy",
    relationship: "Relationship",
    physicalHearts: "Physical Hearts",
    mentalHearts: "Mental Hearts",
    personalHearts: "Personal Joy Hearts",
    relationshipHearts: "Relationship Hearts",
    skipToContent: "Skip to main content",
    
    // Footer text parts
    footerStart: "Made with",
    footerMid: "| Feel free to quack at",
    
    continue: "Continue Self-Care Journey",
    completionAchievement: "Steps to Self-Love!",
    completionMessage: "You've completed {0} self-care activities. Keep going!",
    specialRewardTitle: "Self-Care Champion!",
    specialRewardDescription: "You've completed all 69 Shades of Love! Your commitment to self-care is truly inspiring. Remember that self-love is a journey, not a destination. Keep nurturing yourself every day!",
    duckLogoAria: "Click for a duck joke",
    collapsePdfSection: "Collapse PDF section",
    expandPdfSection: "Expand PDF section",
    dedication: "For my Muszka with love",
    motivationalTitle: "Self-Care Insight",
    motivationalDescription: "You're making great progress on your self-care journey! Every small step counts. Keep taking care of yourself!",
    pdfUnlockedTitle: "🎊 Mind Map Unlocked! 🎊",
    pdfUnlockedDescription: "Amazing job! You've reached a significant milestone in your self-care journey. Your beautiful Mind Map PDF guide is now available to download. It contains valuable insights and tips to support your ongoing self-care practice. Enjoy this reward, you've earned it!",
    downloadPdfNow: "Go to Mind Map PDF section and download it now!",

    // Newsletter
    newsletterBtnText: "Get Free Habits Guide",
    newsletterTitle: "Quack to your inbox!",
    newsletterSubtitle: "Get weekly tips to build healthier habits and change your life!",
    newsletterBenefitsTitle: "What you'll get:",
    newsletterBenefitsList: [
      "Free gift: '7 Quick Habits That Transform Your Day' guide (after e-mail confirmation)",
      "Pop Culture Wisdom - Quotes from geek productions to help you see the world from a new perspective",
      "Ducktastic habit-building advice",
      "Early access to new features",
      "Special discounts on premium content"
    ],
    newsletterEmailPlaceholder: "Your email address",
    newsletterSubmitText: "Join the flock",
    newsletterSubmitting: "Sending...",
    newsletterSuccessTitle: "Hooray! You're in the flock! 🎉",
    newsletterSuccessText: "Check your inbox to confirm your email and get your free '7 Quick Habits' guide!",
    newsletterErrorTitle: "Oops! Something went wrong.",
    newsletterErrorText: "Please try again later or contact us.",
    newsletterRewardTitle: "You're Quack-tastic!",
    newsletterRewardDescription: "Thank you for joining the Pro-Ducktive flock! We've sent a special gift to your email - a free mini-guide \"7 Quick Habits That Transform Your Day\"!",
    newsletterRewardButton: "Got it!",
    newsletterRewardHighlight: "Your '7 Quick Habits That Transform Your Day' guide will be sent to your email after confirming your subscription!",
    newsletterMemberNote: "You're now part of our flock! You can always return here by clicking the hidden purple heart in the footer.",
    duckLogoHomeAria: "Go to home page",
    navigateAbout: "Navigate to About page",

    // Reset App
    resetConfirmMessage: "Are you sure you want to reset all application data? This action is irreversible.",
    resetSuccessMessage: "All data has been reset. The page will be refreshed.",
    resetButtonText: "Reset App",

    // GiftView translations
    giftPageTitle: "7 Quick Habits That Transform Your Day",
    giftPageSubtitle: "Your exclusive guide to building better routines",
    welcomeTitle: "Welcome to Your Free Gift!",
    welcomeDescription: "Thank you for joining our newsletter! We've prepared this exclusive guide to help you enhance your daily routines with science-backed habits that can transform your productivity, wellbeing, and overall satisfaction with life. These seven powerful habits can be implemented immediately and require minimal time investment for maximum benefit.",
    downloadPdfButton: "Download as PDF",
    printTrackerButton: "Printable Tracker",
    habitsTitle: "Daily Habits for Transformation",
    habitTools: "Implementation Tools:",
    implementationTips: "Implementation Tips:",
    resourcesTitle: "Additional Resources",
    resourcesDescription: "Here are some carefully selected resources to help you deepen your understanding and mastery of these habits.",
    recommendedBooks: "Recommended Books",
    recommendedPodcasts: "Recommended Podcasts",
    onlineCourses: "Online Courses",
    inspiringQuotes: "Inspiring Quotes",
    
    // QuotesView translations
    quotesPageTitle: "Pop Culture Wisdom",
    quotesPageSubtitle: "Geek-inspired quotes to transform into your best self",
    quotesThankYouTitle: "Thank You For Joining Our Newsletter!",
    quotesThankYouDescription: "As a special thank you, we've curated this collection of inspiring quotes from your favorite movies, TV shows, comics, and books. Let these words of wisdom from the geek universe guide your self-improvement journey!",
    checkInboxMessage: "Check your inbox to confirm your email and get your free <strong>\"7 Quick Habits That Transform Your Day\"</strong> guide!",
    membershipNote: "You're now part of our flock! You can always return to the main page by clicking the hidden purple heart in the footer.",
    quotesWisdomTitle: "Words of Wisdom From Different Universes",
    allCategories: "All",
    applicationTitle: "Applying These Lessons",
    applicationDescription: "Wisdom from fictional worlds can be surprisingly applicable to our own lives. Here are some ways to use these quotes in your self-improvement journey:",
    dailyRemindersTitle: "Daily Reminders",
    dailyRemindersDescription: "Choose your favorite quote and make it your phone wallpaper or place it somewhere you'll see each day as a reminder of your goals.",
    reflectionJournalTitle: "Reflection Journal",
    reflectionJournalDescription: "Use these quotes as journaling prompts. Write about how the wisdom applies to challenges you're currently facing.",
    shareWisdomTitle: "Share the Wisdom",
    shareWisdomDescription: "Discuss these ideas with friends who appreciate the same stories. Different perspectives can reveal deeper meanings.",
    characterInspirationTitle: "Character Inspiration",
    characterInspirationDescription: "When facing a difficult situation, ask yourself what your favorite character would do, using their journey as inspiration.",
    // Habit Tracker
    trackerTitle: "21-Day Habit Building Challenge",
    trackerDescription: "Research shows it takes about 21 days to form a simple habit. Use this tracker to monitor your progress with these seven transformative habits. Remember, consistency is more important than perfection!",
    habitColumnHeader: "Habit",
    
    // Habits short names for tracker
    habit1ShortName: "Morning Goals",
    habit2ShortName: "Meditation",
    habit3ShortName: "Morning Exercise",
    habit4ShortName: "Healthy Breakfast",
    habit5ShortName: "Time Blocking",
    habit6ShortName: "Learn Something",
    habit7ShortName: "Evening Review",
    
    // Habits details
    habit1Title: "Start Your Day with Clear Goals",
    habit1Description: "Begin each day by setting three most important goals. This will help you maintain focus and prioritize your tasks. Write them down in a notebook or app to keep them in sight.",
    habit1Tip1: "Set your goals the night before for a more focused morning",
    habit1Tip2: "Use the \"MITs\" (Most Important Tasks) approach to identify your priorities",
    habit1Tip3: "Connect each goal to your bigger life vision for added motivation",
    habit1Tool1: "Todoist",
    habit1Tool2: "Notion",
    habit1Tool3: "Bullet Journal",
    
    habit2Title: "Morning Meditation",
    habit2Description: "Dedicate 5-10 minutes to morning meditation. This will help calm your mind, reduce stress, and improve focus throughout the day. You can use apps like Headspace or Calm.",
    habit2Tip1: "Start with just 2 minutes if you're new to meditation",
    habit2Tip2: "Focus on your breath - count to four as you inhale, hold for four, exhale for four",
    habit2Tip3: "Try different techniques until you find what works for you (guided, silent, mantra-based)",
    habit2Tool1: "Headspace",
    habit2Tool2: "Calm",
    habit2Tool3: "Insight Timer",
    
    habit3Title: "Quick Morning Exercise",
    habit3Description: "Perform a short workout, such as 10-15 minutes of yoga or warm-up exercises. This will stimulate your body and mind for action.",
    habit3Tip1: "Prepare your workout clothes the night before to remove friction",
    habit3Tip2: "Create a \"minimum viable workout\" that takes just 5 minutes for low-energy days",
    habit3Tip3: "Combine with your favorite music or podcast to make it more enjoyable",
    habit3Tool1: "Down Dog",
    habit3Tool2: "7 Minute Workout",
    habit3Tool3: "FitOn",
    
    habit4Title: "Nutritious Breakfast",
    habit4Description: "Eat a nutritious breakfast that will provide you with energy for the entire morning. Avoid sweets and choose foods rich in protein and fiber.",
    habit4Tip1: "Prepare overnight oats or chia pudding the night before for a grab-and-go option",
    habit4Tip2: "Aim for a balance of protein, healthy fats, and complex carbohydrates",
    habit4Tip3: "Stay hydrated - drink a full glass of water before your coffee or tea",
    habit4Tool1: "MyFitnessPal",
    habit4Tool2: "Mealime",
    habit4Tool3: "Yummly",
    
    habit5Title: "Time-Blocked Schedule with Breaks",
    habit5Description: "Divide your day into smaller time blocks with regular breaks. This will help you avoid burnout and maintain productivity.",
    habit5Tip1: "Try the Pomodoro Technique: 25 minutes of focused work followed by a 5-minute break",
    habit5Tip2: "Schedule your most challenging work during your peak energy hours",
    habit5Tip3: "Include buffer time between tasks to accommodate unexpected interruptions",
    habit5Tool1: "Forest",
    habit5Tool2: "Focus@Will",
    habit5Tool3: "Toggl Track",
    
    habit6Title: "Learn Something New",
    habit6Description: "Dedicate 15-30 minutes to learning something new. It could be a foreign language, a new skill, or an interesting book. Continuous growth is the key to success.",
    habit6Tip1: "Use \"learning triggers\" - attach learning to an existing habit (like during your commute)",
    habit6Tip2: "Focus on application, not just consumption - try to use what you learn immediately",
    habit6Tip3: "Share what you're learning with others to reinforce your understanding",
    habit6Tool1: "Duolingo",
    habit6Tool2: "Skillshare",
    habit6Tool3: "Blinkist",
    
    habit7Title: "Evening Review",
    habit7Description: "Before bed, review what you managed to achieve during the day. Write down your accomplishments and plan for tomorrow. This will help you maintain motivation and a sense of fulfillment.",
    habit7Tip1: "Practice gratitude by noting three good things that happened during the day",
    habit7Tip2: "Reflect on lessons learned - what went well and what could be improved",
    habit7Tip3: "Prepare your environment for tomorrow's morning routine",
    habit7Tool1: "Day One",
    habit7Tool2: "Five Minute Journal",
    habit7Tool3: "Notion",
    
    // Resources
    book1: "Atomic Habits by James Clear",
    book2: "Deep Work by Cal Newport",
    book3: "The Miracle Morning by Hal Elrod",
    book4: "Tiny Habits by BJ Fogg",
    
    podcast1: "The Tim Ferriss Show",
    podcast2: "Optimal Living Daily",
    podcast3: "The Science of Success",
    podcast4: "The Habit Coach",
    
    course1: "The Science of Well-Being (Yale/Coursera)",
    course2: "Learning How to Learn (Coursera)",
    course3: "A Life of Happiness and Fulfillment (Coursera)",
    course4: "Productivity Masterclass (Skillshare)",
    
    quote1: "\"We are what we repeatedly do. Excellence, then, is not an act, but a habit.\" - Aristotle",
    quote2: "\"Habits are the compound interest of self-improvement.\" - James Clear",
    quote3: "\"Your future is created by what you do today, not tomorrow.\" - Robert Kiyosaki"
  },
  pl: {
    mainTitle: "69 Odcieni Miłości",
    subtitle: "Twoja Droga do Dbania o Siebie",
    aboutTitle: "WTQ - Co Za Kwak!",
    aboutContent: "Cześć! Jestem cyfrową kaczką pływającą w wodach kreatywności, tworzącą cyfrowe produkty i dzielącą się narzędziami, wiedzą i wartością z niesamowitymi ludźmi takimi jak Ty. Jeśli moje kwakanie rezonuje z Tobą, nie krępuj się rzucić mi kilka ziaren wsparcia - kawę, ziarno, lub cokolwiek, co utrzyma tę kaczkę na powierzchni! 💚\n\nTwórzmy fale razem - jeden kwak na raz! 🌊✨",
    supportButton: "Wesprzyj Tę Kaczkę",
    
    // Tłumaczenia strony About
    projectPhilosophyTitle: "Filozofia Projektu",
    projectPhilosophyDescription: "69 Odcieni Miłości to podróż dbania o siebie, zaprojektowana, aby pomóc Ci włączyć zdrowe nawyki do codziennej rutyny. Aplikacja zawiera 69 starannie wybranych zadań związanych z samopieką, podzielonych na cztery kluczowe obszary dobrostanu:",
    physicalDescription: "Dbanie o ciało",
    mentalDescription: "Pielęgnowanie umysłu i zdrowia emocjonalnego", 
    personalDescription: "Znajdowanie radości w prostych przyjemnościach",
    relationshipDescription: "Wzmacnianie więzi z innymi",
    featuresTitle: "Funkcje",
    feature1: "Śledzenie postępów za pomocą wizualnych wskaźników",
    feature2: "Organizacja zadań w kategoriach",
    feature3: "Licznik serii dla utrzymania motywacji",
    feature4: "Świętowanie osiągnięć",
    feature5: "Możliwość pobrania przewodnika PDF",
    feature6: "Wskazówki samorozwoju oparte na badaniach naukowych",
    insightsFeatureTitle: "Wskazówki Samorozwoju",
    insightsFeatureDescription: "Aplikacja dostarcza edukacyjne i praktyczne informacje oparte na badaniach naukowych dotyczące:",
    insightsPoint1: "Jak poprawić dobrostan fizyczny",
    insightsPoint2: "Techniki poprawy zdrowia psychicznego",
    insightsPoint3: "Strategie rozwijania osobistej radości",
    insightsPoint4: "Wskazówki budowania relacji",
    backToJourney: "Powrót do Podróży Samorozwoju",
    
    pdfTitle: "Mapa Myśli PDF",
    downloadButton: "Pobierz Mapę Myśli PDF",
    lockButton: "Ukończ 20% aby odblokować PDF",
    downloadInfoLocked: "Ukończ jeszcze {0} zadań, aby odblokować pełną mapę myśli PDF!",
    downloadInfoUnlocked: "Gratulacje! Odblokowałeś/aś pełną mapę myśli PDF (pierwsze źródło PoC). Pobierz ją, aby mieć dostęp offline.",
    streakDays: "{0} dni pod rząd!",
    yourProgress: "Twój Postęp",
    physical: "Fizyczne",
    mental: "Umysłowe",
    personal: "Osobista Radość",
    relationship: "Relacje",
    physicalHearts: "Fizyczne Serca",
    mentalHearts: "Umysłowe Serca",
    personalHearts: "Serca Osobistej Radości",
    relationshipHearts: "Serca Relacji",
    skipToContent: "Pomiń do głównej treści",
    
    // Cześć stopki
    footerStart: "Stworzone z",
    footerMid: "| Śmiało kwacz do",
    
    continue: "Kontynuuj podróż samorozwoju",
    completionAchievement: "kroków do samoakceptacji!",
    completionMessage: "Ukończyłeś/aś {0} zadań związanych z dbaniem o siebie. Tak trzymaj!",
    specialRewardTitle: "Mistrz samorozwoju!",
    specialRewardDescription: "Ukończyłeś/aś wszystkie 69 Odcieni Miłości! Twoje zaangażowanie w dbanie o siebie jest naprawdę inspirujące. Pamiętaj, że miłość do samego siebie to podróż, a nie cel. Pielęgnuj siebie każdego dnia!",
    duckLogoAria: "Kliknij, aby usłyszeć żart o kaczce",
    collapsePdfSection: "Zwiń sekcję PDF",
    expandPdfSection: "Rozwiń sekcję PDF",
    dedication: "Dla mojej Muszki z miłością",
    motivationalTitle: "Wskazówka Samorozwoju",
    motivationalDescription: "Robisz świetne postępy w swojej podróży dbania o siebie! Każdy mały krok się liczy. Kontynuuj dbanie o siebie!",
    pdfUnlockedTitle: "🎊 Mapa Myśli Odblokowana! 🎊",
    pdfUnlockedDescription: "Wspaniała robota! Osiągnąłeś/aś ważny kamień milowy w swojej podróży samorozwoju. Twoja piękna Mapa Myśli w formacie PDF jest już dostępna do pobrania. Zawiera cenne wskazówki i porady wspierające Twoją praktykę dbania o siebie. Ciesz się tą nagrodą, zasłużyłeś/aś na nią!",
    downloadPdfNow: "Idź do sekcji Mapa Myśli PDF i pobierz ją teraz!",

    // Newsletter
    newsletterBtnText: "Odbierz Darmowy Poradnik",
    newsletterTitle: "Kwak do Twojej skrzynki!",
    newsletterSubtitle: "Otrzymuj cotygodniowe wskazówki, jak budować zdrowsze nawyki i zmienić swoje życie!",
    newsletterBenefitsTitle: "Co otrzymasz:",
    newsletterBenefitsList: [
      "Darmowy prezent: poradnik '7 szybkich nawyków, które transformują Twój dzień' (tuż po potwierdzeniu e-mail'a)",
      "Mądrość z Pop-kultury - Cycacy z geekowych produkcji, które pomogą Ci zobaczyć świat z nowej perspektywy",
      "Kaczastyczne porady budowania nawyków",
      "Wczesny dostęp do nowych funkcji",
      "Specjalne zniżki na treści premium"
    ],
    newsletterEmailPlaceholder: "Twój adres email",
    newsletterSubmitText: "Dołącz do stada",
    newsletterSubmitting: "Wysyłanie...",
    newsletterSuccessTitle: "Hurra! Jesteś w stadzie! 🎉",
    newsletterSuccessText: "Sprawdź swoją skrzynkę, aby potwierdzić email i otrzymać darmowy poradnik '7 szybkich nawyków'!",
    newsletterErrorTitle: "Ups! Coś poszło nie tak.",
    newsletterErrorText: "Spróbuj ponownie później lub skontaktuj się z nami.",
    newsletterRewardTitle: "Jesteś Kwa-ntastyczny!",
    newsletterRewardDescription: "Dziękujemy za dołączenie do stada Pro-Ducktive! Wysłaliśmy specjalny prezent na Twój adres email - darmowy mini-poradnik \"7 szybkich nawyków, które transformują Twój dzień\"!",
    newsletterRewardButton: "Rozumiem!",
    newsletterRewardHighlight: "Twój poradnik '7 szybkich nawyków, które transformują Twój dzień' zostanie wysłany na Twój email po potwierdzeniu subskrypcji!",
    newsletterMemberNote: "Jesteś już częścią naszego stada! Możesz zawsze powrócić tutaj klikając ukryte fioletowe serce w stopce.",
    duckLogoHomeAria: "Przejdź do strony głównej",
    navigateAbout: "Przejdź do strony O Projekcie",

    // Reset App
    resetConfirmMessage: "Czy na pewno chcesz zresetować wszystkie dane aplikacji? Ta operacja jest nieodwracalna.",
    resetSuccessMessage: "Wszystkie dane zostały zresetowane. Strona zostanie odświeżona.",
    resetButtonText: "Resetuj Aplikację",

    // GiftView translations
    giftPageTitle: "7 Szybkich Nawyków, Które Transformują Twój Dzień",
    giftPageSubtitle: "Twój ekskluzywny przewodnik do budowania lepszych rutyn",
    welcomeTitle: "Witaj w Twoim Darmowym Prezencie!",
    welcomeDescription: "Dziękujemy za dołączenie do naszego newslettera! Przygotowaliśmy ten ekskluzywny przewodnik, aby pomóc Ci ulepszyć Twoje codzienne rutyny z nawykami opartymi na badaniach naukowych, które mogą przekształcić Twoją produktywność, samopoczucie i ogólne zadowolenie z życia. Te siedem skutecznych nawyków można wdrożyć natychmiast, a wymagają minimalnego nakładu czasu dla maksymalnych korzyści.",
    downloadPdfButton: "Pobierz jako PDF",
    printTrackerButton: "Wydrukuj Tracker",
    habitsTitle: "Codzienne Nawyki dla Transformacji",
    habitTools: "Narzędzia do wdrożenia:",
    implementationTips: "Wskazówki wdrożeniowe:",
    resourcesTitle: "Dodatkowe Zasoby",
    resourcesDescription: "Oto starannie wyselekcjonowane zasoby, które pomogą Ci pogłębić zrozumienie i opanowanie tych nawyków.",
    recommendedBooks: "Polecane Książki",
    recommendedPodcasts: "Polecane Podcasty",
    onlineCourses: "Kursy Online",
    inspiringQuotes: "Inspirujące Cytaty",
    
    // QuotesView translations
    quotesPageTitle: "Mądrość Popkultury",
    quotesPageSubtitle: "Inspirowane geekowymi produkcjami cytaty, które pomogą Ci stać się lepszą wersją siebie",
    quotesThankYouTitle: "Dziękujemy Za Dołączenie Do Naszego Newslettera!",
    quotesThankYouDescription: "W ramach specjalnego podziękowania, zebraliśmy dla Ciebie kolekcję inspirujących cytatów z Twoich ulubionych filmów, seriali, komiksów i książek. Niech te słowa mądrości ze świata geeków poprowadzą Cię w podróży samodoskonalenia!",
    checkInboxMessage: "Sprawdź swoją skrzynkę, aby potwierdzić email i otrzymać darmowy przewodnik <strong>\"7 Szybkich Nawyków, Które Transformują Twój Dzień\"</strong>!",
    membershipNote: "Jesteś już częścią naszego stada! Możesz zawsze wrócić do strony głównej, klikając ukryte fioletowe serce w stopce.",
    quotesWisdomTitle: "Słowa Mądrości Z Różnych Uniwersów",
    allCategories: "Wszystkie",
    applicationTitle: "Zastosowanie Tych Lekcji",
    applicationDescription: "Mądrość ze światów fikcyjnych może być zaskakująco stosowalna w naszym własnym życiu. Oto kilka sposobów na wykorzystanie tych cytatów w twojej podróży samodoskonalenia:",
    dailyRemindersTitle: "Codzienne Przypomnienia",
    dailyRemindersDescription: "Wybierz swój ulubiony cytat i ustaw go jako tapetę telefonu lub umieść w miejscu, które będziesz widzieć każdego dnia jako przypomnienie o twoich celach.",
    reflectionJournalTitle: "Dziennik Refleksji",
    reflectionJournalDescription: "Użyj tych cytatów jako inspiracji do prowadzenia dziennika. Napisz, jak ta mądrość odnosi się do wyzwań, którym obecnie stawiasz czoła.",
    shareWisdomTitle: "Dziel Się Mądrością",
    shareWisdomDescription: "Omów te pomysły z przyjaciółmi, którzy doceniają te same historie. Różne perspektywy mogą ujawnić głębsze znaczenia.",
    characterInspirationTitle: "Inspiracja Postaciami",
    characterInspirationDescription: "Gdy mierzysz się z trudną sytuacją, zapytaj siebie, co zrobiłaby Twoja ulubiona postać, czerpiąc inspirację z jej podróży.",
    trackerTitle: "21-Dniowe Wyzwanie Budowania Nawyków",
    trackerDescription: "Badania pokazują, że potrzeba około 21 dni, aby utworzyć prosty nawyk. Używaj tego trackera do monitorowania postępów z siedmioma transformującymi nawykami. Pamiętaj, konsekwencja jest ważniejsza niż perfekcja!",
    habitColumnHeader: "Nawyk",
    
    // Habits short names for tracker
    habit1ShortName: "Poranne Cele",
    habit2ShortName: "Medytacja",
    habit3ShortName: "Poranna Aktywność",
    habit4ShortName: "Zdrowe Śniadanie",
    habit5ShortName: "Bloki Czasowe",
    habit6ShortName: "Nauka",
    habit7ShortName: "Wieczorny Przegląd",
    
    // Habits details
    habit1Title: "Zacznij Dzień z Jasnymi Celami",
    habit1Description: "Rozpocznij każdy dzień, ustalając trzy najważniejsze cele. Pomoże Ci to utrzymać koncentrację i ustalić priorytety zadań. Zapisz je w notatniku lub aplikacji, aby mieć je na widoku.",
    habit1Tip1: "Ustal cele wieczorem poprzedniego dnia, aby poranek był bardziej skupiony",
    habit1Tip2: "Używaj podejścia \"NZW\" (Najważniejsze Zadania), aby zidentyfikować priorytety",
    habit1Tip3: "Połącz każdy cel z Twoją większą wizją życia dla dodatkowej motywacji",
    habit1Tool1: "Todoist",
    habit1Tool2: "Notion",
    habit1Tool3: "Bullet Journal",
    
    habit2Title: "Poranna Medytacja",
    habit2Description: "Poświęć 5-10 minut na poranną medytację. Pomoże to uspokoić umysł, zredukować stres i poprawić koncentrację przez cały dzień. Możesz używać aplikacji jak Headspace lub Calm.",
    habit2Tip1: "Zacznij od zaledwie 2 minut, jeśli jesteś nowy w medytacji",
    habit2Tip2: "Skup się na oddechu - licz do czterech wdychając, zatrzymaj na cztery, wydychaj przez cztery",
    habit2Tip3: "Wypróbuj różne techniki, aż znajdziesz to, co działa dla Ciebie (prowadzona, cicha, z mantrą)",
    habit2Tool1: "Headspace",
    habit2Tool2: "Calm",
    habit2Tool3: "Insight Timer",
    
    habit3Title: "Szybkie Poranne Ćwiczenia",
    habit3Description: "Wykonaj krótki trening, np. 10-15 minut jogi lub ćwiczeń rozgrzewających. To pobudzi Twoje ciało i umysł do działania.",
    habit3Tip1: "Przygotuj ubrania treningowe wieczorem, aby usunąć przeszkody",
    habit3Tip2: "Stwórz \"minimalny wykonalny trening\", który zajmuje tylko 5 minut na dni z niską energią",
    habit3Tip3: "Połącz z ulubioną muzyką lub podcastem, aby było przyjemniej",
    habit3Tool1: "Down Dog",
    habit3Tool2: "7 Minute Workout",
    habit3Tool3: "FitOn",
    
    habit4Title: "Odżywcze Śniadanie",
    habit4Description: "Jedz odżywcze śniadanie, które zapewni Ci energię na cały poranek. Unikaj słodyczy i wybieraj pokarmy bogate w białko i błonnik.",
    habit4Tip1: "Przygotuj owsiankę overnight lub pudding chia wieczorem, aby mieć gotowe na wynos",
    habit4Tip2: "Dąż do równowagi białka, zdrowych tłuszczów i złożonych węglowodanów",
    habit4Tip3: "Nawadniaj się - wypij pełną szklankę wody przed kawą lub herbatą",
    habit4Tool1: "MyFitnessPal",
    habit4Tool2: "Mealime",
    habit4Tool3: "Yummly",
    
    habit5Title: "Harmonogram z Blokami Czasowymi i Przerwami",
    habit5Description: "Podziel swój dzień na mniejsze bloki czasowe z regularnymi przerwami. Pomoże to uniknąć wypalenia i utrzymać produktywność.",
    habit5Tip1: "Wypróbuj technikę Pomodoro: 25 minut skupionej pracy, po której następuje 5-minutowa przerwa",
    habit5Tip2: "Zaplanuj najtrudniejszą pracę w godzinach swojej najwyższej energii",
    habit5Tip3: "Uwzględnij czas buforowy między zadaniami, aby pomieścić nieoczekiwane przerwy",
    habit5Tool1: "Forest",
    habit5Tool2: "Focus@Will",
    habit5Tool3: "Toggl Track",
    
    habit6Title: "Naucz się Czegoś Nowego",
    habit6Description: "Poświęć 15-30 minut na naukę czegoś nowego. Może to być język obcy, nowa umiejętność lub interesująca książka. Ciągły rozwój to klucz do sukcesu.",
    habit6Tip1: "Używaj \"triggerów nauki\" - dołącz naukę do istniejącego nawyku (np. podczas dojazdu)",
    habit6Tip2: "Skup się na zastosowaniu, nie tylko konsumpcji - staraj się natychmiast wykorzystać to, czego się uczysz",
    habit6Tip3: "Dziel się z innymi tym, czego się uczysz, aby wzmocnić swoje zrozumienie",
    habit6Tool1: "Duolingo",
    habit6Tool2: "Skillshare",
    habit6Tool3: "Blinkist",
    
    habit7Title: "Wieczorny Przegląd",
    habit7Description: "Przed snem przejrzyj to, co udało Ci się osiągnąć w ciągu dnia. Zapisz swoje osiągnięcia i zaplanuj jutro. Pomoże to utrzymać motywację i poczucie spełnienia.",
    habit7Tip1: "Praktykuj wdzięczność, notując trzy dobre rzeczy, które wydarzyły się w ciągu dnia",
    habit7Tip2: "Zastanów się nad wyciągniętymi lekcjami - co poszło dobrze, a co można poprawić",
    habit7Tip3: "Przygotuj swoje otoczenie na jutrzejszą poranną rutynę",
    habit7Tool1: "Day One",
    habit7Tool2: "Five Minute Journal",
    habit7Tool3: "Notion",
    
    // Resources
    book1: "Atomowe Nawyki - James Clear",
    book2: "Głęboka Praca - Cal Newport",
    book3: "Cudowny Poranek - Hal Elrod",
    book4: "Małe Nawyki - BJ Fogg",
    
    podcast1: "The Tim Ferriss Show",
    podcast2: "Optimal Living Daily",
    podcast3: "The Science of Success",
    podcast4: "The Habit Coach",
    
    course1: "Nauka o Dobrym Samopoczuciu (Yale/Coursera)",
    course2: "Nauka Jak Się Uczyć (Coursera)",
    course3: "Życie Pełne Szczęścia i Spełnienia (Coursera)",
    course4: "Mistrzowski Kurs Produktywności (Skillshare)",
    
    quote1: "\"Jesteśmy tym, co regularnie robimy. Doskonałość nie jest więc aktem, lecz nawykiem.\" - Arystoteles",
    quote2: "\"Nawyki są procentem składanym samodoskonalenia.\" - James Clear",
    quote3: "\"Twoja przyszłość jest tworzona przez to, co robisz dzisiaj, a nie jutro.\" - Robert Kiyosaki"
  }
};

export default translations;