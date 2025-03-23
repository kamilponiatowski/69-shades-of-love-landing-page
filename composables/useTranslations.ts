// @/composables/useTranslations.ts
import { ref, Ref } from 'vue';
import { Language } from './useI18n';

interface Translations {
  [key: string]: {
    [key: string]: string;
  };
}

/**
 * Translations composable
 * Provides language detection and translation functionality
 * 
 * @param translations - Object containing translations for different languages
 * @returns Translation related methods and state
 */
export function useTranslations(translations: Translations) {
    // Default to English if no preferred language detected
    const currentLanguage = ref<Language>('en');
    
    /**
     * Detects user's preferred language from browser settings
     * Currently supports English and Polish
     * 
     * @returns Language code ('en' or 'pl')
     */
    const detectUserLanguage = (): Language => {
        const browserLang = navigator.language || (navigator as any).userLanguage;
        return browserLang.startsWith('pl') ? 'pl' : 'en';
    };
    
    /**
     * Translates a key using the current language
     * Supports parameter replacement using {0}, {1}, etc. format
     * 
     * @param key - Translation key to look up
     * @param args - Arguments to replace in the translated string
     * @returns Translated text with parameters replaced
     */
    const translate = (key: string, ...args: any[]): string => {
        // Get translation or fallback to key if not found
        let text = translations[currentLanguage.value]?.[key] || key;
        
        // Replace parameters {0}, {1}, etc. with appropriate arguments
        if (args.length > 0) {
            args.forEach((arg, index) => {
                text = text.replace(`{${index}}`, String(arg));
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