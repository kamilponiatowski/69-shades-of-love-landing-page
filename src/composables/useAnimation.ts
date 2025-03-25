// @/composables/useAnimation.ts
import { ref, MaybeRef, unref } from 'vue';
import type { Category } from '../stores/taskStore';

/**
 * Animation composable for UI animations
 * Provides heart and confetti animations
 * 
 * @param heartContainer - Reference to animation container
 * @returns Animation methods
 */
export function useAnimation(heartContainer: MaybeRef<HTMLElement | null>) {
  /**
   * Creates a heart element with animation
   * @param container - HTML container element
   * @param color - Heart color in CSS format
   */
  const createHeart = (container: HTMLElement, color: string): void => {
    if (!container) return;

    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.style.backgroundColor = color;

    // Position at bottom of screen with random X position
    const x = Math.random() * window.innerWidth;
    heart.style.left = `${x}px`;
    heart.style.bottom = '0';

    // Add to container
    container.appendChild(heart);

    // Add animate class after small delay to trigger animation
    setTimeout(() => {
      heart.classList.add('animate');
    }, 10);

    // Remove after animation completes
    setTimeout(() => {
      if (heart.parentNode === container) {
        container.removeChild(heart);
      }
    }, 4000);
  };

  /**
   * Creates confetti animation for celebrations
   */
  const createConfetti = (): void => {
    const colors = ['#FF9F29', '#7ED957', '#FFD966', '#FF97B7', '#C41E3A'];
    const container = document.body;

    for (let i = 0; i < 50; i++) {
      setTimeout(() => {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = `${Math.random() * window.innerWidth}px`;

        container.appendChild(confetti);

        // Remove after animation completes
        setTimeout(() => {
          if (confetti.parentNode === container) {
            container.removeChild(confetti);
          }
        }, 3000);
      }, i * 50);
    }
  };

  /**
   * Triggers heart animation for a specific category
   * @param category - Category type
   */
  const triggerHeartAnimation = (category: Category['type']): void => {
    const container = unref(heartContainer);
    if (!container) return;
    
    // Select color based on category
    let color: string;
    switch (category) {
      case 'physical': color = '#FF9F29'; break;
      case 'mental': color = '#7ED957'; break;
      case 'personal': color = '#FFD966'; break;
      case 'relationship': color = '#FF97B7'; break;
      default: color = '#C41E3A';
    }

    // Create multiple hearts with delay
    for (let i = 0; i < 5; i++) {
      setTimeout(() => {
        createHeart(container, color);
      }, i * 300);
    }
  };

  // Counter for completed tasks for heart animations
  const completedTaskCounter = ref<number>(0);

  /**
   * Shows animation when a task is completed
   * @param taskType - Type of completed task
   */
  const showCompletionAnimation = (taskType: Category['type']): void => {
    // Increment counter and show animation every 3 tasks
    completedTaskCounter.value = (completedTaskCounter.value + 1) % 3;
    
    // Show animation when counter resets to 0 (every 3rd task)
    if (completedTaskCounter.value === 0) {
      const container = unref(heartContainer);
      if (container) {
        triggerHeartAnimation(taskType);
      }
    }
  };

  return {
    createHeart,
    createConfetti,
    triggerHeartAnimation,
    showCompletionAnimation
  };
}