// @/composables/useAnimation.ts
import { ref, Ref, MaybeRef, unref } from 'vue';
import type { Category } from '@/stores/taskStore';

/**
 * Composable do obsługi animacji UI
 * Zapewnia animacje serc i konfetti
 * 
 * @param heartContainer - Referencja do kontenera animacji
 * @returns Metody do tworzenia animacji
 */
export function useAnimation(heartContainer: MaybeRef<HTMLElement | null>) {
  /**
   * Tworzy element serca z animacją
   * @param container - Element HTML kontenera
   * @param color - Kolor serca w formacie CSS
   */
  const createHeart = (container: HTMLElement, color: string) => {
    if (!container) return;

    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.style.backgroundColor = color;

    // Pozycja na dole ekranu w losowej pozycji X
    const x = Math.random() * window.innerWidth;
    heart.style.left = `${x}px`;
    heart.style.bottom = '0';

    // Dodaj do kontenera
    container.appendChild(heart);

    // Dodaj klasę animate po małym opóźnieniu, aby uruchomić animację
    setTimeout(() => {
      heart.classList.add('animate');
    }, 10);

    // Usuń po zakończeniu animacji
    setTimeout(() => {
      if (heart.parentNode === container) {
        container.removeChild(heart);
      }
    }, 4000);
  };

  /**
   * Tworzy animację konfetti do świętowania
   */
  const createConfetti = () => {
    const colors = ['#FF9F29', '#7ED957', '#FFD966', '#FF97B7', '#C41E3A'];
    const container = document.body;

    for (let i = 0; i < 50; i++) {
      setTimeout(() => {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = `${Math.random() * window.innerWidth}px`;

        container.appendChild(confetti);

        // Usuń po zakończeniu animacji
        setTimeout(() => {
          if (confetti.parentNode === container) {
            container.removeChild(confetti);
          }
        }, 3000);
      }, i * 50);
    }
  };

  /**
   * Wywołuje animację serca dla określonej kategorii
   * @param category - Typ kategorii
   */
  const triggerHeartAnimation = (category: Category['type']) => {
    const container = unref(heartContainer);
    if (!container) return;
    
    let color;
    switch (category) {
      case 'physical': color = '#FF9F29'; break;
      case 'mental': color = '#7ED957'; break;
      case 'personal': color = '#FFD966'; break;
      case 'relationship': color = '#FF97B7'; break;
      default: color = '#C41E3A';
    }

    for (let i = 0; i < 5; i++) {
      setTimeout(() => {
        createHeart(container, color);
      }, i * 300);
    }
  };

  /**
   * Pokazuje animację przy ukończeniu zadania
   * @param taskType - Typ ukończonego zadania
   */
  const showCompletionAnimation = (taskType: Category['type']) => {
    // Pokaż animację losowo, aby uniknąć przytłoczenia użytkownika
    const container = unref(heartContainer);
    if (Math.random() > 0.7 && container) {
      triggerHeartAnimation(taskType);
    }
  };

  return {
    createHeart,
    createConfetti,
    triggerHeartAnimation,
    showCompletionAnimation
  };
}