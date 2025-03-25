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
      "Pop Culture Wisdom - Quotes from geek productions to help you see the world from a new perspective 🚀",
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
    newsletterMemberNote: "You're now part of our flock! You can always return here by clicking the purple heart in the footer.",
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
      "Mądrość z Pop-kultury - Cycacy z geekowych produkcji, które pomogą Ci zobaczyć świat z nowej perspektywy 🚀",
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
    newsletterMemberNote: "Jesteś już częścią naszego stada! Możesz zawsze powrócić tutaj klikając fioletowe serce w stopce."
  }
};

export default translations;