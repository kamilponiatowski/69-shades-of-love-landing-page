// @/constants/achievementTips.ts
import { useI18n } from '@/composables/useI18n';

/**
 * Collection of self-care tips and facts for achievement notifications
 * Organized by category to provide diverse and helpful insights
 */
export interface TipCategory {
  name: string;
  tips: Record<string, string[]>;
}

export const achievementTips: TipCategory[] = [
  {
    name: 'physical',
    tips: {
      en: [
        "Morning sunlight exposure helps regulate your sleep cycle and boosts vitamin D production, improving your overall energy.",
        "Drinking water before each meal not only improves hydration but can help with portion control and digestion.",
        "A 2-minute stretching session every hour can counteract the negative effects of sitting and boost your productivity.",
        "Deep breathing for just 60 seconds can reduce stress hormones and lower your blood pressure almost immediately.",
        "Cold showers for just 30 seconds can increase alertness, improve immunity, and accelerate recovery after exercise.",
        "The 'non-exercise activity thermogenesis' (NEAT) - small movements throughout the day - can burn more calories than a workout.",
        "Standing for just 3 hours a day can burn up to 30,000 extra calories per year - equivalent to running 10 marathons.",
        "Our bodies are about 60% water, and even mild dehydration can impact cognitive function and energy levels.",
        "Regular physical activity has been shown to improve memory and protect cognitive function as we age.",
        "The most refreshing nap length is 10-20 minutes - longer naps can lead to sleep inertia."
      ],
      pl: [
        "Poranna ekspozycja na światło słoneczne pomaga regulować cykl snu i zwiększa produkcję witaminy D, poprawiając ogólną energię.",
        "Picie wody przed każdym posiłkiem nie tylko poprawia nawodnienie, ale może pomóc w kontroli porcji i trawieniu.",
        "2-minutowa sesja rozciągania co godzinę może przeciwdziałać negatywnym skutkom siedzenia i zwiększyć produktywność.",
        "Głębokie oddychanie przez zaledwie 60 sekund może zmniejszyć poziom hormonów stresu i obniżyć ciśnienie krwi niemal natychmiast.",
        "Zimne prysznice przez zaledwie 30 sekund mogą zwiększyć czujność, poprawić odporność i przyspieszyć regenerację po ćwiczeniach.",
        "NEAT (Non-Exercise Activity Thermogenesis) - drobne ruchy w ciągu dnia - mogą spalać więcej kalorii niż trening.",
        "Stanie przez zaledwie 3 godziny dziennie może spalić do 30 000 dodatkowych kalorii rocznie - co odpowiada przebiegnięciu 10 maratonów.",
        "Nasze ciała składają się w około 60% z wody, a nawet łagodne odwodnienie może wpłynąć na funkcje poznawcze i poziom energii.",
        "Regularna aktywność fizyczna poprawia pamięć i chroni funkcje poznawcze w miarę starzenia się.",
        "Najbardziej odświeżająca drzemka trwa 10-20 minut - dłuższe drzemki mogą prowadzić do inercji snu."
      ]
    }
  },
  {
    name: 'mental',
    tips: {
      en: [
        "Mindfulness practice for just 5 minutes daily can increase the gray matter in your brain associated with memory and emotional regulation.",
        "Writing down three gratitudes before bed has been shown to improve sleep quality and reduce depressive symptoms.",
        "The 'two-minute rule' helps overcome procrastination - if a task takes less than two minutes, do it immediately.",
        "Mental breaks every 90 minutes align with your body's natural ultradian rhythm, enhancing focus and creativity.",
        "Visualizing success activates the same neural pathways as actually performing the action, strengthening your ability to achieve goals.",
        "Learning something new creates new neural connections, which helps maintain cognitive flexibility throughout life.",
        "Cognitive reframing - changing how you think about a situation - can significantly reduce stress and anxiety.",
        "Limiting decision-making in non-essential areas (like what to wear) preserves mental energy for more important choices.",
        "The '5-4-3-2-1' grounding technique engages all senses to quickly reduce anxiety and center your mind.",
        "Your brain consumes about 20% of your body's energy - proper nutrition directly impacts cognitive performance."
      ],
      pl: [
        "Praktyka uważności przez zaledwie 5 minut dziennie może zwiększyć ilość istoty szarej w mózgu, związanej z pamięcią i regulacją emocji.",
        "Zapisywanie trzech powodów do wdzięczności przed snem poprawia jakość snu i zmniejsza objawy depresyjne.",
        "Zasada dwóch minut pomaga przezwyciężyć prokrastynację - jeśli zadanie zajmuje mniej niż dwie minuty, zrób to natychmiast.",
        "Przerwy umysłowe co 90 minut są zgodne z naturalnym rytmem ultradialnym twojego ciała, zwiększając koncentrację i kreatywność.",
        "Wizualizacja sukcesu aktywuje te same ścieżki neuronowe, co faktyczne wykonywanie czynności, wzmacniając zdolność osiągania celów.",
        "Uczenie się czegoś nowego tworzy nowe połączenia neuronowe, co pomaga utrzymać elastyczność poznawczą przez całe życie.",
        "Przeformułowanie poznawcze - zmiana sposobu myślenia o sytuacji - może znacznie zmniejszyć stres i lęk.",
        "Ograniczanie podejmowania decyzji w nieistotnych obszarach (np. co nosić) oszczędza energię mentalną na ważniejsze wybory.",
        "Technika uziemiania 5-4-3-2-1 angażuje wszystkie zmysły, aby szybko zmniejszyć lęk i skoncentrować umysł.",
        "Twój mózg zużywa około 20% energii organizmu - odpowiednie odżywianie bezpośrednio wpływa na wydajność poznawczą."
      ]
    }
  },
  {
    name: 'personal',
    tips: {
      en: [
        "The '20-second rule' makes good habits easier - reduce barriers to positive activities by making them 20 seconds easier to start.",
        "Creating small, personalized rituals around everyday activities can transform routine moments into opportunities for mindfulness and joy.",
        "Novel experiences, even small ones like taking a new route home, stimulate dopamine release and create more vivid memories.",
        "Naming your emotions specifically (like 'disappointed' instead of just 'sad') helps your brain process them more effectively.",
        "Listening to music you love triggers dopamine release comparable to eating chocolate or achieving a personal goal.",
        "Having indoor plants can improve mood, productivity, concentration and reduce stress levels by up to 15%.",
        "Engaging in a creative hobby, even for 20 minutes, can reduce stress hormone levels significantly.",
        "Setting aside 'me time' is not selfish - it's necessary maintenance for better performance in all areas of life.",
        "Engaging in play as an adult improves problem-solving abilities and boosts creativity.",
        "The act of planning a vacation or trip can increase happiness for up to 8 weeks before the actual event."
      ],
      pl: [
        "Zasada 20 sekund ułatwia dobre nawyki - zmniejsz bariery dla pozytywnych działań, sprawiając, że będą o 20 sekund łatwiejsze do rozpoczęcia.",
        "Tworzenie małych, spersonalizowanych rytuałów wokół codziennych czynności może przemienić rutynowe momenty w okazje do uważności i radości.",
        "Nowe doświadczenia, nawet małe, jak wybranie nowej drogi do domu, stymulują uwalnianie dopaminy i tworzą żywsze wspomnienia.",
        "Precyzyjne nazywanie emocji (np. 'rozczarowany' zamiast po prostu 'smutny') pomaga mózgowi skuteczniej je przetwarzać.",
        "Słuchanie muzyki, którą kochasz, wyzwala uwalnianie dopaminy porównywalne do jedzenia czekolady lub osiągnięcia osobistego celu.",
        "Posiadanie roślin domowych może poprawić nastrój, produktywność, koncentrację i zmniejszyć poziom stresu nawet o 15%.",
        "Zajmowanie się kreatywnym hobby, nawet przez 20 minut, może znacząco obniżyć poziom hormonów stresu.",
        "Wygospodarowanie 'czasu dla siebie' nie jest samolubne - to niezbędna konserwacja dla lepszej wydajności we wszystkich obszarach życia.",
        "Zabawa w dorosłym życiu poprawia zdolności rozwiązywania problemów i zwiększa kreatywność.",
        "Sam akt planowania wakacji może zwiększyć szczęście nawet do 8 tygodni przed faktycznym wydarzeniem."
      ]
    }
  },
  {
    name: 'relationship',
    tips: {
      en: [
        "The 5:1 ratio is essential for healthy relationships - aim for five positive interactions for every negative one.",
        "Active listening, where you focus solely on understanding rather than responding, strengthens neural connection between people.",
        "Physical touch, even brief contact like a handshake, releases oxytocin, reducing stress and building trust between people.",
        "Expressing gratitude to others not only strengthens relationships but also improves your own well-being and happiness.",
        "The 'Michelangelo effect' shows that relationships thrive when partners help each other achieve their ideal selves.",
        "Sharing novel experiences with others creates stronger bonds than routine activities due to heightened emotional states.",
        "Vulnerability is not weakness but courage - it's the foundation of deep connection and intimacy.",
        "Asking questions rather than giving advice is more effective for helping others solve their own problems.",
        "Making bids for connection (small overtures for attention) and responding to others' bids strengthens relationships.",
        "Facing difficult conversations with a 'us against the problem' rather than 'me against you' mindset leads to better outcomes."
      ],
      pl: [
        "Proporcja 5:1 jest kluczowa dla zdrowych relacji - dąż do pięciu pozytywnych interakcji na każdą negatywną.",
        "Aktywne słuchanie, gdzie skupiasz się wyłącznie na zrozumieniu, a nie na odpowiadaniu, wzmacnia połączenie neuronowe między ludźmi.",
        "Fizyczny dotyk, nawet krótki kontakt jak uścisk dłoni, uwalnia oksytocynę, redukując stres i budując zaufanie między ludźmi.",
        "Wyrażanie wdzięczności wobec innych nie tylko wzmacnia relacje, ale także poprawia twoje własne samopoczucie i szczęście.",
        "Efekt Michała Anioła pokazuje, że relacje rozkwitają, gdy partnerzy pomagają sobie nawzajem osiągnąć swoje idealne ja.",
        "Dzielenie się nowymi doświadczeniami z innymi tworzy silniejsze więzi niż rutynowe aktywności dzięki zwiększonym stanom emocjonalnym.",
        "Wrażliwość to nie słabość, ale odwaga - to fundament głębokiego połączenia i intymności.",
        "Zadawanie pytań zamiast udzielania rad jest bardziej efektywne w pomaganiu innym w rozwiązywaniu ich własnych problemów.",
        "Tworzenie 'ofert połączenia' (małe gesty zwracające uwagę) i reagowanie na oferty innych wzmacnia relacje.",
        "Podchodzenie do trudnych rozmów z nastawieniem 'my przeciwko problemowi' zamiast 'ja przeciwko tobie' prowadzi do lepszych wyników."
      ]
    }
  }
];

/**
 * Gets a random tip from a specific category in the current language
 * @param category - Category name to get tip from
 * @returns Random tip from the category
 */
export function getRandomTip(category: string): string {
  // Get current language from i18n
  const { currentLanguage } = useI18n();
  const lang = currentLanguage.value || 'en';
  
  const foundCategory = achievementTips.find(c => c.name === category);
  if (!foundCategory) {
    // Fallback to a random category if specific one not found
    const randomCategory = achievementTips[Math.floor(Math.random() * achievementTips.length)];
    const langTips = randomCategory.tips[lang] || randomCategory.tips.en; // fallback to English if language not available
    return langTips[Math.floor(Math.random() * langTips.length)];
  }
  
  const langTips = foundCategory.tips[lang] || foundCategory.tips.en; // fallback to English if language not available
  return langTips[Math.floor(Math.random() * langTips.length)];
}

/**
 * Gets a random tip from any category in the current language
 * @returns Random tip from any category
 */
export function getRandomTipFromAnyCategory(): string {
  // Get current language from i18n
  const { currentLanguage } = useI18n();
  const lang = currentLanguage.value || 'en';
  
  const randomCategory = achievementTips[Math.floor(Math.random() * achievementTips.length)];
  const langTips = randomCategory.tips[lang] || randomCategory.tips.en; // fallback to English if language not available
  return langTips[Math.floor(Math.random() * langTips.length)];
}