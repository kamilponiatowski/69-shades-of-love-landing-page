<template>
    <div class="container gift-page">
        <main class="gift-content">
            <div class="gift-header">
                <h1 class="main-title">7 Quick Habits That Transform Your Day</h1>
                <p class="subtitle">Your exclusive guide to building better routines</p>
            </div>

            <div class="content-section intro-section">
                <h2 class="section-title">Welcome to Your Free Gift!</h2>
                <p class="section-description">
                    Thank you for joining our newsletter! We've prepared this exclusive guide to help you
                    enhance your daily routines with science-backed habits that can transform your productivity,
                    wellbeing, and overall satisfaction with life. These seven powerful habits can be implemented
                    immediately and require minimal time investment for maximum benefit.
                </p>

                <div class="download-options no-print">
                    <button @click="printFullGuide" class="download-button">
                        <i class="fas fa-file-pdf"></i> Download as PDF
                    </button>
                    <button @click="printHabitTracker" class="download-button">
                        <i class="fas fa-print"></i> Printable Tracker
                    </button>
                </div>
            </div>

            <div class="content-section habits-section">
                <h2 class="section-title">Daily Habits for Transformation</h2>

                <div class="habit-container">
                    <!-- Habit 1 -->
                    <div class="habit-card physical-habit">
                        <div class="habit-number">1</div>
                        <div class="habit-content">
                            <h3 class="habit-title">
                                <i class="fas fa-bullseye"></i> Start Your Day with Clear Goals
                            </h3>
                            <p class="habit-description">
                                Begin each day by setting three most important goals. This will help you maintain focus
                                and prioritize your tasks. Write them down in a notebook or app to keep them in sight.
                            </p>
                            <div class="habit-tips">
                                <h4>Implementation Tips:</h4>
                                <ul>
                                    <li>Set your goals the night before for a more focused morning</li>
                                    <li>Use the "MITs" (Most Important Tasks) approach to identify your priorities</li>
                                    <li>Connect each goal to your bigger life vision for added motivation</li>
                                </ul>
                            </div>
                            <div class="habit-tools">
                                <span class="tool-tag">Todoist</span>
                                <span class="tool-tag">Notion</span>
                                <span class="tool-tag">Bullet Journal</span>
                            </div>
                        </div>
                    </div>

                    <!-- Habit 2 -->
                    <div class="habit-card mental-habit">
                        <div class="habit-number">2</div>
                        <div class="habit-content">
                            <h3 class="habit-title">
                                <i class="fas fa-brain"></i> Morning Meditation
                            </h3>
                            <p class="habit-description">
                                Dedicate 5-10 minutes to morning meditation. This will help calm your mind, reduce
                                stress,
                                and improve focus throughout the day. You can use apps like Headspace or Calm.
                            </p>
                            <div class="habit-tips">
                                <h4>Implementation Tips:</h4>
                                <ul>
                                    <li>Start with just 2 minutes if you're new to meditation</li>
                                    <li>Focus on your breath - count to four as you inhale, hold for four, exhale for
                                        four</li>
                                    <li>Try different techniques until you find what works for you (guided, silent,
                                        mantra-based)</li>
                                </ul>
                            </div>
                            <div class="habit-tools">
                                <span class="tool-tag">Headspace</span>
                                <span class="tool-tag">Calm</span>
                                <span class="tool-tag">Insight Timer</span>
                            </div>
                        </div>
                    </div>

                    <!-- Habit 3 -->
                    <div class="habit-card physical-habit">
                        <div class="habit-number">3</div>
                        <div class="habit-content">
                            <h3 class="habit-title">
                                <i class="fas fa-running"></i> Quick Morning Exercise
                            </h3>
                            <p class="habit-description">
                                Perform a short workout, such as 10-15 minutes of yoga or warm-up exercises.
                                This will stimulate your body and mind for action.
                            </p>
                            <div class="habit-tips">
                                <h4>Implementation Tips:</h4>
                                <ul>
                                    <li>Prepare your workout clothes the night before to remove friction</li>
                                    <li>Create a "minimum viable workout" that takes just 5 minutes for low-energy days
                                    </li>
                                    <li>Combine with your favorite music or podcast to make it more enjoyable</li>
                                </ul>
                            </div>
                            <div class="habit-tools">
                                <span class="tool-tag">Down Dog</span>
                                <span class="tool-tag">7 Minute Workout</span>
                                <span class="tool-tag">FitOn</span>
                            </div>
                        </div>
                    </div>

                    <!-- Habit 4 -->
                    <div class="habit-card physical-habit">
                        <div class="habit-number">4</div>
                        <div class="habit-content">
                            <h3 class="habit-title">
                                <i class="fas fa-apple-alt"></i> Nutritious Breakfast
                            </h3>
                            <p class="habit-description">
                                Eat a nutritious breakfast that will provide you with energy for the entire morning.
                                Avoid sweets and choose foods rich in protein and fiber.
                            </p>
                            <div class="habit-tips">
                                <h4>Implementation Tips:</h4>
                                <ul>
                                    <li>Prepare overnight oats or chia pudding the night before for a grab-and-go option
                                    </li>
                                    <li>Aim for a balance of protein, healthy fats, and complex carbohydrates</li>
                                    <li>Stay hydrated - drink a full glass of water before your coffee or tea</li>
                                </ul>
                            </div>
                            <div class="habit-tools">
                                <span class="tool-tag">MyFitnessPal</span>
                                <span class="tool-tag">Mealime</span>
                                <span class="tool-tag">Yummly</span>
                            </div>
                        </div>
                    </div>

                    <!-- Habit 5 -->
                    <div class="habit-card mental-habit">
                        <div class="habit-number">5</div>
                        <div class="habit-content">
                            <h3 class="habit-title">
                                <i class="fas fa-hourglass-half"></i> Time-Blocked Schedule with Breaks
                            </h3>
                            <p class="habit-description">
                                Divide your day into smaller time blocks with regular breaks. This will help
                                you avoid burnout and maintain productivity.
                            </p>
                            <div class="habit-tips">
                                <h4>Implementation Tips:</h4>
                                <ul>
                                    <li>Try the Pomodoro Technique: 25 minutes of focused work followed by a 5-minute
                                        break</li>
                                    <li>Schedule your most challenging work during your peak energy hours</li>
                                    <li>Include buffer time between tasks to accommodate unexpected interruptions</li>
                                </ul>
                            </div>
                            <div class="habit-tools">
                                <span class="tool-tag">Forest</span>
                                <span class="tool-tag">Focus@Will</span>
                                <span class="tool-tag">Toggl Track</span>
                            </div>
                        </div>
                    </div>

                    <!-- Habit 6 -->
                    <div class="habit-card personal-habit">
                        <div class="habit-number">6</div>
                        <div class="habit-content">
                            <h3 class="habit-title">
                                <i class="fas fa-book"></i> Learn Something New
                            </h3>
                            <p class="habit-description">
                                Dedicate 15-30 minutes to learning something new. It could be a foreign language,
                                a new skill, or an interesting book. Continuous growth is the key to success.
                            </p>
                            <div class="habit-tips">
                                <h4>Implementation Tips:</h4>
                                <ul>
                                    <li>Use "learning triggers" - attach learning to an existing habit (like during your
                                        commute)</li>
                                    <li>Focus on application, not just consumption - try to use what you learn
                                        immediately</li>
                                    <li>Share what you're learning with others to reinforce your understanding</li>
                                </ul>
                            </div>
                            <div class="habit-tools">
                                <span class="tool-tag">Duolingo</span>
                                <span class="tool-tag">Skillshare</span>
                                <span class="tool-tag">Blinkist</span>
                            </div>
                        </div>
                    </div>

                    <!-- Habit 7 -->
                    <div class="habit-card mental-habit">
                        <div class="habit-number">7</div>
                        <div class="habit-content">
                            <h3 class="habit-title">
                                <i class="fas fa-moon"></i> Evening Review
                            </h3>
                            <p class="habit-description">
                                Before bed, review what you managed to achieve during the day. Write down your
                                accomplishments and plan for tomorrow. This will help you maintain motivation
                                and a sense of fulfillment.
                            </p>
                            <div class="habit-tips">
                                <h4>Implementation Tips:</h4>
                                <ul>
                                    <li>Practice gratitude by noting three good things that happened during the day</li>
                                    <li>Reflect on lessons learned - what went well and what could be improved</li>
                                    <li>Prepare your environment for tomorrow's morning routine</li>
                                </ul>
                            </div>
                            <div class="habit-tools">
                                <span class="tool-tag">Day One</span>
                                <span class="tool-tag">Five Minute Journal</span>
                                <span class="tool-tag">Notion</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Habit Tracker Section - hidden in full guide print -->
            <div id="habit-tracker-section" class="content-section tracker-section no-print-in-full-guide">
                <h2 class="section-title">21-Day Habit Building Challenge</h2>
                <p class="section-description">
                    Research shows it takes about 21 days to form a simple habit. Use this tracker to monitor
                    your progress with these seven transformative habits. Remember, consistency is more important
                    than perfection!
                </p>

                <div class="habit-tracker">
                    <div class="tracker-header">
                        <div class="tracker-cell header-cell">Habit</div>
                        <div v-for="day in 21" :key="day" class="tracker-cell day-cell">{{ day }}</div>
                    </div>

                    <div class="tracker-row">
                        <div class="tracker-cell habit-cell">Morning Goals</div>
                        <div v-for="day in 21" :key="day" class="tracker-cell checkbox-cell">
                            <div class="checkbox-placeholder"></div>
                        </div>
                    </div>

                    <div class="tracker-row">
                        <div class="tracker-cell habit-cell">Meditation</div>
                        <div v-for="day in 21" :key="day" class="tracker-cell checkbox-cell">
                            <div class="checkbox-placeholder"></div>
                        </div>
                    </div>

                    <div class="tracker-row">
                        <div class="tracker-cell habit-cell">Morning Exercise</div>
                        <div v-for="day in 21" :key="day" class="tracker-cell checkbox-cell">
                            <div class="checkbox-placeholder"></div>
                        </div>
                    </div>

                    <div class="tracker-row">
                        <div class="tracker-cell habit-cell">Healthy Breakfast</div>
                        <div v-for="day in 21" :key="day" class="tracker-cell checkbox-cell">
                            <div class="checkbox-placeholder"></div>
                        </div>
                    </div>

                    <div class="tracker-row">
                        <div class="tracker-cell habit-cell">Time Blocking</div>
                        <div v-for="day in 21" :key="day" class="tracker-cell checkbox-cell">
                            <div class="checkbox-placeholder"></div>
                        </div>
                    </div>

                    <div class="tracker-row">
                        <div class="tracker-cell habit-cell">Learn Something</div>
                        <div v-for="day in 21" :key="day" class="tracker-cell checkbox-cell">
                            <div class="checkbox-placeholder"></div>
                        </div>
                    </div>

                    <div class="tracker-row">
                        <div class="tracker-cell habit-cell">Evening Review</div>
                        <div v-for="day in 21" :key="day" class="tracker-cell checkbox-cell">
                            <div class="checkbox-placeholder"></div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Additional Resources Section -->
            <div class="content-section resources-section">
                <h2 class="section-title">Additional Resources</h2>
                <p class="section-description">
                    Here are some carefully selected resources to help you deepen your understanding and mastery of
                    these habits.
                </p>

                <div class="resources-grid">
                    <div class="resource-card">
                        <div class="resource-icon"><i class="fas fa-book"></i></div>
                        <h3>Recommended Books</h3>
                        <ul>
                            <li>Atomic Habits by James Clear</li>
                            <li>Deep Work by Cal Newport</li>
                            <li>The Miracle Morning by Hal Elrod</li>
                            <li>Tiny Habits by BJ Fogg</li>
                        </ul>
                    </div>

                    <div class="resource-card">
                        <div class="resource-icon"><i class="fas fa-podcast"></i></div>
                        <h3>Recommended Podcasts</h3>
                        <ul>
                            <li>The Tim Ferriss Show</li>
                            <li>Optimal Living Daily</li>
                            <li>The Science of Success</li>
                            <li>The Habit Coach</li>
                        </ul>
                    </div>

                    <div class="resource-card">
                        <div class="resource-icon"><i class="fas fa-laptop"></i></div>
                        <h3>Online Courses</h3>
                        <ul>
                            <li>The Science of Well-Being (Yale/Coursera)</li>
                            <li>Learning How to Learn (Coursera)</li>
                            <li>A Life of Happiness and Fulfillment (Coursera)</li>
                            <li>Productivity Masterclass (Skillshare)</li>
                        </ul>
                    </div>

                    <div class="resource-card">
                        <div class="resource-icon"><i class="fas fa-quote-right"></i></div>
                        <h3>Inspiring Quotes</h3>
                        <ul>
                            <li>"We are what we repeatedly do. Excellence, then, is not an act, but a habit." -
                                Aristotle</li>
                            <li>"Habits are the compound interest of self-improvement." - James Clear</li>
                            <li>"Your future is created by what you do today, not tomorrow." - Robert Kiyosaki</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="navigation-links no-print">
                <router-link to="/" class="back-link">
                    <i class="fas fa-arrow-left"></i> Back to Self-Care Journey
                </router-link>
            </div>
        </main>

        <Footer class="no-print" />
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import Footer from '@/components/layout/Footer.vue';

// Router
const router = useRouter();

// Print functions
const printFullGuide = () => {
    // Add a class to the body to trigger the print styles
    document.body.classList.add('print-full-guide');

    // Open print dialog
    window.print();

    // Remove class after printing is done
    setTimeout(() => {
        document.body.classList.remove('print-full-guide');
    }, 1000);
};

const printHabitTracker = () => {
    // Add a class to the body to trigger the print styles for tracker only
    document.body.classList.add('print-tracker-only');

    // Open print dialog
    window.print();

    // Remove class after printing is done
    setTimeout(() => {
        document.body.classList.remove('print-tracker-only');
    }, 1000);
};
</script>

<style scoped>
.gift-page {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: var(--background-color);
}

.gift-content {
    flex: 1;
    padding: 40px 20px;
    max-width: 1000px;
    margin: 0 auto;
    width: 100%;
}

.gift-header {
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

/* Download buttons */
.download-options {
    display: flex;
    gap: 15px;
    margin-top: 25px;
}

.download-button {
    background-color: var(--main-color);
    color: white;
    text-decoration: none;
    padding: 12px 20px;
    border-radius: 8px;
    display: inline-flex;
    align-items: center;
    font-weight: bold;
    transition: all 0.3s ease;
    border: none;
    cursor: pointer;
}

.download-button:hover {
    background-color: #a01a30;
    transform: translateY(-3px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.download-button i {
    margin-right: 10px;
}

/* Habits section */
.habit-container {
    display: flex;
    flex-direction: column;
    gap: 25px;
}

.habit-card {
    display: flex;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
}

.habit-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.habit-number {
    width: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    font-weight: bold;
    color: white;
}

.physical-habit .habit-number {
    background-color: var(--physical-color);
}

.mental-habit .habit-number {
    background-color: var(--mental-color);
}

.personal-habit .habit-number {
    background-color: var(--personal-color);
}

.relationship-habit .habit-number {
    background-color: var(--relationship-color);
}

.habit-content {
    flex: 1;
    padding: 20px;
    background-color: white;
}

.habit-title {
    color: #333;
    font-size: 1.4rem;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
}

.habit-title i {
    margin-right: 10px;
    color: var(--main-color);
}

.habit-description {
    color: #555;
    margin-bottom: 15px;
    line-height: 1.5;
}

.habit-tips {
    background-color: #f8f8f8;
    padding: 15px;
    border-radius: 8px;
    margin-bottom: 15px;
}

.habit-tips h4 {
    margin-bottom: 10px;
    color: #333;
}

.habit-tips ul {
    padding-left: 25px;
}

.habit-tips li {
    margin-bottom: 5px;
    color: #555;
}

.habit-tools {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
}

.tool-tag {
    background-color: #eee;
    padding: 5px 10px;
    border-radius: 30px;
    font-size: 0.85rem;
    color: #555;
}

/* Habit tracker */
.habit-tracker {
    margin-top: 30px;
    border: 1px solid #eee;
    border-radius: 8px;
    overflow-x: auto;
}

.tracker-header,
.tracker-row {
    display: flex;
}

.tracker-cell {
    padding: 10px;
    min-width: 30px;
    text-align: center;
    border: 1px solid #eee;
}

.header-cell,
.habit-cell {
    background-color: #f8f8f8;
    font-weight: bold;
    min-width: 140px;
    /* Set same width for both header-cell and habit-cell */
    text-align: left;
}

.checkbox-cell {
    display: flex;
    justify-content: center;
    align-items: center;
}

.checkbox-placeholder {
    width: 20px;
    height: 20px;
    border: 2px solid #ddd;
    border-radius: 3px;
}

/* Resources section */
.resources-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 25px;
    margin-top: 30px;
}

.resource-card {
    background-color: #f8f8f8;
    border-radius: 10px;
    padding: 20px;
    transition: transform 0.3s ease;
    height: 100%;
}

.resource-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.resource-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: var(--main-color);
    color: white;
    font-size: 1.3rem;
    margin: 0 auto 15px;
}

.resource-card h3 {
    text-align: center;
    margin-bottom: 15px;
    color: #333;
}

.resource-card ul {
    padding-left: 20px;
}

.resource-card li {
    margin-bottom: 8px;
    color: #555;
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
    .gift-content {
        padding: 20px 15px;
    }

    .main-title {
        font-size: 2.2rem;
    }

    .subtitle {
        font-size: 1.1rem;
    }

    .download-options {
        flex-direction: column;
    }

    .download-button {
        width: 100%;
        justify-content: center;
    }

    .resources-grid {
        grid-template-columns: 1fr;
    }
}

/* Print styles */
@media print {
  /* Define page layout for different print modes */
  @page {
    margin: 1cm;
  }
  
  /* Special landscape orientation for tracker-only mode */
  @page tracker {
    size: landscape;
  }
  
  body.print-tracker-only {
    page: tracker;
  }

  .gift-page {
    background-color: white;
  }
  
  .content-section {
    box-shadow: none;
    transform: none !important;
    break-inside: avoid;
    page-break-inside: avoid;
    margin-bottom: 20px;
    border: 1px solid #ddd;
  }
  
  .content-section:hover {
    transform: none;
  }
  
  .habit-card {
    box-shadow: none;
    break-inside: avoid;
    page-break-inside: avoid;
    margin-bottom: 15px;
    border: 1px solid #eee;
  }
  
  .habit-card:hover {
    transform: none;
    box-shadow: none;
  }
  
  .resource-card {
    box-shadow: none;
    transform: none !important;
    border: 1px solid #eee;
  }
  
  .resource-card:hover {
    transform: none;
    box-shadow: none;
  }
  
  .no-print {
    display: none !important;
  }
  
  /* Hide tracker section in full guide print */
  body.print-full-guide .no-print-in-full-guide {
    display: none !important;
  }
  
  .gift-header {
    margin-bottom: 20px;
  }
  
  /* Ensure tracker fits on print */
  .habit-tracker {
    overflow: visible;
    width: 100%;
    border: 1px solid #000;
  }
  
  .tracker-cell {
    border: 1px solid #999;
  }
  
  /* Tracker-only print mode */
  body.print-tracker-only .content-section:not(.tracker-section),
  body.print-tracker-only .gift-header {
    display: none;
  }
  
  body.print-tracker-only .tracker-section {
    page-break-before: avoid;
    margin-top: 20px;
    width: 100%;
    height: 100%;
  }
  
  body.print-tracker-only .habit-tracker {
    width: 100%;
    max-width: none;
    transform: scale(0.95);
    transform-origin: top left;
  }
  
  body.print-full-guide .content-section {
    page-break-inside: avoid;
  }
  
  /* Adjust habit container for printing */
  .habit-container {
    gap: 15px;
  }
  
  /* Make sure each habit starts on a new page if needed */
  .habit-card {
    page-break-inside: avoid;
  }
}
</style>