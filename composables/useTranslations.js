/**
 * Translations composable
 * Provides language detection and translation functionality
 * 
 * @param {Object} translations - Object containing translations for different languages
 * @returns {Object} Translation related methods and state
 */
import { ref } from 'vue';

export function useTranslations(translations) {
    // Default to English if no preferred language detected
    const currentLanguage = ref('en');
    
    /**
     * Detects user's preferred language from browser settings
     * Currently supports English and Polish
     * 
     * @returns {string} Language code ('en' or 'pl')
     */
    const detectUserLanguage = () => {
        const browserLang = navigator.language || navigator.userLanguage;
        return browserLang.startsWith('pl') ? 'pl' : 'en';
    };
    
    /**
     * Translates a key using the current language
     * Supports parameter replacement using {0}, {1}, etc. format
     * 
     * @param {string} key - Translation key to look up
     * @param {...any} args - Arguments to replace in the translated string
     * @returns {string} Translated text with parameters replaced
     */
    const translate = (key, ...args) => {
        // Get translation or fallback to key if not found
        let text = translations[currentLanguage.value]?.[key] || key;
        
        // Replace parameters {0}, {1}, etc. with appropriate arguments
        if (args.length > 0) {
            args.forEach((arg, index) => {
                text = text.replace(`{${index}}`, arg);
            });
        }
        
        return text;
    };
    
    // Set initial language based on browser preference
    currentLanguage.value = detectUserLanguage();
    
    return {
        currentLanguage,
        translate,
        detectUserLanguage
    };
}