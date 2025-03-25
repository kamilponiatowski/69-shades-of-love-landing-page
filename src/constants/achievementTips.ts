// @/constants/achievementTips.ts

/**
 * Collection of self-care tips and facts for achievement notifications
 * Organized by category to provide diverse and helpful insights
 */
export interface TipCategory {
    name: string;
    tips: string[];
  }
  
  export const achievementTips: TipCategory[] = [
    {
      name: 'physical',
      tips: [
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
      ]
    },
    {
      name: 'mental',
      tips: [
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
      ]
    },
    {
      name: 'personal',
      tips: [
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
      ]
    },
    {
      name: 'relationship',
      tips: [
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
      ]
    }
  ];
  
  /**
   * Gets a random tip from a specific category
   * @param category - Category name to get tip from
   * @returns Random tip from the category
   */
  export function getRandomTip(category: string): string {
    const foundCategory = achievementTips.find(c => c.name === category);
    if (!foundCategory) {
      // Fallback to a random category if specific one not found
      const randomCategory = achievementTips[Math.floor(Math.random() * achievementTips.length)];
      return randomCategory.tips[Math.floor(Math.random() * randomCategory.tips.length)];
    }
    
    return foundCategory.tips[Math.floor(Math.random() * foundCategory.tips.length)];
  }
  
  /**
   * Gets a random tip from any category
   * @returns Random tip from any category
   */
  export function getRandomTipFromAnyCategory(): string {
    const randomCategory = achievementTips[Math.floor(Math.random() * achievementTips.length)];
    return randomCategory.tips[Math.floor(Math.random() * randomCategory.tips.length)];
  }