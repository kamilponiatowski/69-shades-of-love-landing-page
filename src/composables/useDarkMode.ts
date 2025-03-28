// @/composables/useDarkMode.ts
import { ref, onMounted, watch } from 'vue';

// Symbol for provide/inject pattern
export const DARK_MODE_KEY = Symbol('darkMode');

// Global singleton instance to ensure consistent state across components
let instance: ReturnType<typeof createDarkMode> | null = null;

/**
 * Creates dark mode state and functionality
 * @returns Dark mode state and toggle function
 */
function createDarkMode() {
  // State
  const isDarkMode = ref<boolean>(false);

  /**
   * Toggles dark mode state
   */
  const toggleDarkMode = (): void => {
    isDarkMode.value = !isDarkMode.value;
    updateDarkModeClass();
    saveDarkModePreference();
  };

  /**
   * Updates the dark-mode class on the document body
   */
  const updateDarkModeClass = (): void => {
    if (isDarkMode.value) {
      document.documentElement.classList.add('dark-mode');
    } else {
      document.documentElement.classList.remove('dark-mode');
    }
  };

  /**
   * Saves the current dark mode preference to localStorage
   */
  const saveDarkModePreference = (): void => {
    try {
      localStorage.setItem('darkMode', isDarkMode.value ? 'dark' : 'light');
    } catch (error) {
      console.error('Failed to save dark mode preference:', error);
    }
  };

  /**
   * Loads dark mode preference from localStorage or system preference
   * Modified to default to light mode instead of system preference
   */
  const loadDarkModePreference = (): void => {
    try {
      // Check localStorage first
      const savedMode = localStorage.getItem('darkMode');
      
      if (savedMode === 'dark') {
        isDarkMode.value = true;
      } else if (savedMode === 'light') {
        isDarkMode.value = false;
      } else {
        // If no saved preference, default to light mode instead of checking system preference
        isDarkMode.value = false;
      }
      
      // Apply the dark mode immediately
      updateDarkModeClass();
    } catch (error) {
      console.error('Failed to load dark mode preference:', error);
    }
  };

  // Watch for system preference changes
  onMounted(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Modern approach with addEventListener
    const handleChange = (e: MediaQueryListEvent) => {
      // Only update if user hasn't explicitly set a preference
      if (!localStorage.getItem('darkMode')) {
        // Modified to ignore system preference by default
        // Uncomment below line if you want to restore system preference behavior
        // isDarkMode.value = e.matches;
        // updateDarkModeClass();
      }
    };
    
    // Add listener for changes in system preference
    mediaQuery.addEventListener('change', handleChange);
    
    // Load preference on mount
    loadDarkModePreference();
  });

  // Watch for changes to isDarkMode to update document
  watch(isDarkMode, () => {
    updateDarkModeClass();
  });

  return {
    isDarkMode,
    toggleDarkMode,
    loadDarkModePreference
  };
}

/**
 * Provides dark mode functionality
 * Uses singleton pattern to ensure the same instance is used across components
 */
export function useDarkMode() {
  // Create or reuse singleton instance
  if (!instance) {
    instance = createDarkMode();
  }
  
  return instance;
}