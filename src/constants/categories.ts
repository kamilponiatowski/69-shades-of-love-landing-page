// @/constants/categories.ts
import type { Category } from '../stores/taskStore';

/**
 * Self-care tasks data organized by categories
 * Each category contains tasks with title, description and completed state
 */
export const categories: Category[] = [
    {
        name: "Physical",
        type: "physical",
        tasks: [
            { title: "Sleeping Beauty Mode", description: "8hr minimum, no exceptions!", completed: false },
            { title: "Hydro Homie", description: "Water before coffee, always", completed: false },
            { title: "Morning Wiggle", description: "Stretching before scrolling", completed: false },
            { title: "Fuel, Not Feels", description: "No emotional eating today", completed: false },
            { title: "Vitamin D-lightful", description: "Catch some rays, even briefly", completed: false },
            { title: "Pretzel Person", description: "Twist into yoga positions", completed: false },
            { title: "Phone-Free Feast", description: "Taste your food, not your feed", completed: false },
            { title: "Body Check-In", description: "\"How you doin'?\" but to yourself", completed: false },
            { title: "Spa Day at Home", description: "Treat your body like a temple", completed: false },
            { title: "Step Master", description: "Walk like your ex is watching", completed: false },
            { title: "Slouch Potato No More", description: "Posture check, straighten up!", completed: false },
            { title: "Supplement Superhero", description: "Pills & potions for peak performance", completed: false },
            { title: "Teeth TLC", description: "Beyond the 2-minute brush", completed: false },
            { title: "Eye Candy Break", description: "Rest those screen-strained peepers", completed: false },
            { title: "Chair Affair", description: "Sit properly, future you will thank you", completed: false },
            { title: "Breath of Fresh Sanity", description: "Inhale calm, exhale chaos", completed: false },
            { title: "Joint Juice", description: "Move it or lose it, flexibility is sexy", completed: false },
            { title: "Ergo-no-more-pain", description: "Adjust everything for comfort", completed: false },
            { title: "Morning Glory", description: "First light face time (not the app)", completed: false },
            { title: "Voluntary Polar Plunge", description: "Cold shower, hot results", completed: false }
        ]
    },
    {
        name: "Mental",
        type: "mental",
        tasks: [
            { title: "Thought Vacation", description: "Meditation without the hashtags", completed: false },
            { title: "Gratitude Attitude", description: "Three things that don't suck today", completed: false },
            { title: "Digital Detox Time", description: "Airplane mode for sanity", completed: false },
            { title: "Breath of Fresh Perspective", description: "Deep breathing in 4-7-8", completed: false },
            { title: "Dear Diary Moment", description: "Journal the day away", completed: false },
            { title: "Self Hype Squad", description: "Be your own cheerleader", completed: false },
            { title: "Laugh Until It Hurts", description: "Find something genuinely funny", completed: false },
            { title: "Brain Food", description: "Reading that's not a social feed", completed: false },
            { title: "Mindful Munching", description: "Taste every bite like a food critic", completed: false },
            { title: "Feelings Check-up", description: "Emotional vital signs", completed: false },
            { title: "Thought Reframing", description: "Plot twist: it's not a catastrophe", completed: false },
            { title: "Stress Exorcism", description: "Banish tension from your body", completed: false },
            { title: "Silent Disco in Your Head", description: "Quiet time, loud thoughts", completed: false },
            { title: "News Diet", description: "Information intermittent fasting", completed: false },
            { title: "\"No\" Practice", description: "Boundaries like you're a castle", completed: false },
            { title: "One Thing at a Time", description: "Monotasking is the new multitasking", completed: false },
            { title: "Single-Focus Superpower", description: "Attention without division", completed: false }
        ]
    },
    {
        name: "Personal Joy",
        type: "personal",
        tasks: [
            { title: "Bookworm Mode", description: "Get lost in pages, not feeds", completed: false },
            { title: "Podcast & Chill", description: "Learn while lounging", completed: false },
            { title: "Clean Slate", description: "Your space reflects your mind", completed: false },
            { title: "Hobby Happy Hour", description: "Do that thing you love", completed: false },
            { title: "Music Medicine", description: "Playlist therapy session", completed: false },
            { title: "Nature's Therapy", description: "Trees are cheaper than therapists", completed: false },
            { title: "Declutter Delight", description: "One item must go today", completed: false },
            { title: "Create Don't Consume", description: "Make something, anything", completed: false },
            { title: "Plant Parent Time", description: "Green children need love too", completed: false },
            { title: "Tea Ceremony Solo", description: "Mindful sipping moment", completed: false },
            { title: "Dance Like Nobody's Watching", description: "Because they're not", completed: false },
            { title: "Chef's Special", description: "Cook something that makes you proud", completed: false },
            { title: "Local Tourist", description: "Explore your area with fresh eyes", completed: false },
            { title: "Date Yourself", description: "Treat yourself how you deserve", completed: false },
            { title: "Inner Child Playtime", description: "Silly is the new sophisticated", completed: false },
            { title: "Pet Therapy Session", description: "Fur babies heal the soul", completed: false },
            { title: "Digital-Free Day", description: "Like the 90s but with better hair", completed: false },
            { title: "Coffee Break Actually Taken", description: "Savor, don't gulp", completed: false }
        ]
    },
    {
        name: "Relationship",
        type: "relationship",
        tasks: [
            { title: "Date Night Done Right", description: "No phones, all presence", completed: false },
            { title: "Magic Fingers", description: "Massage exchange with extras", completed: false },
            { title: "Future Fantasy", description: "Plan adventures together", completed: false },
            { title: "Couple's Cardio", description: "Walk and talk without distractions", completed: false },
            { title: "Soul-Deep Chat", description: "Beyond \"How was your day?\"", completed: false },
            { title: "Gratitude Shower", description: "Appreciation list shared aloud", completed: false },
            { title: "Skin-to-Skin Time", description: "Connect physically, whatever that means", completed: false },
            { title: "Conflict Resolution", description: "Fight fair, finish strong", completed: false },
            { title: "Cheerleader Mode", description: "Support their goals actively", completed: false },
            { title: "Daily Touch Point", description: "Physical connection, even briefly", completed: false },
            { title: "Verbal Validation", description: "Compliments that matter", completed: false },
            { title: "Relationship First", description: "Prioritize partner over productivity", completed: false },
            { title: "Morning Affection", description: "Kiss before phone check", completed: false },
            { title: "Evening Reconnection", description: "Share your full attention", completed: false }
        ]
    }
];