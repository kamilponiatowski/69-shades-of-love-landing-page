/**
 * Animation composable
 * Handles UI animations like hearts and confetti
 * 
 * @returns {Object} Animation related methods and state
 */

export function useAnimation(heartContainer) {
    /**
     * Creates a heart element with animation
     * 
     * @param {HTMLElement} container - Container element for hearts
     * @param {string} color - CSS color of the heart
    */
    const createHeart = (container, color) => {
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
            heart.remove();
        }, 4000);
    };

    /**
     * Creates confetti elements for celebration effect
     */
    const createConfetti = () => {
        const colors = ['#FF9F29', '#7ED957', '#FFD966', '#FF97B7', '#C41E3A'];

        for (let i = 0; i < 50; i++) {
            setTimeout(() => {
                const confetti = document.createElement('div');
                confetti.className = 'confetti';
                confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                confetti.style.left = `${Math.random() * window.innerWidth}px`;

                document.body.appendChild(confetti);

                // Remove after animation
                setTimeout(() => {
                    confetti.remove();
                }, 3000);
            }, i * 50);
        }
    };

    /**
     * Triggers heart animation for a specific category
     * 
     * @param {string} category - Category type identifier
     */
    const triggerHeartAnimation = (category) => {
        if (!heartContainer || !heartContainer.value) return;
        
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
                createHeart(heartContainer.value, color);
            }, i * 300);
        }
    };

    /**
     * Shows animation when task is completed
     * 
     * @param {string} taskType - Type of the completed task
     */
    const showCompletionAnimation = (taskType) => {
        // Show animation randomly to avoid overwhelming the user
        if (Math.random() > 0.7 && heartContainer.value) {
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