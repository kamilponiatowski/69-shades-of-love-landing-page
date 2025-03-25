// @/composables/useI18n.ts
import { ref, computed } from 'vue';
import { translations } from '../locales';

// Types
export type TranslationKey = string;
export type Language = 'en' | 'pl';

// Define a type for translation objects with string index signature
export interface TranslationObject {
  [key: string]: string | string[];
}

/**
 * Internationalization composable
 * Provides translation functions and language management
 * 
 * @returns Translation functions and language state
 */
export function useI18n() {
  /**
   * Detects browser language preference
   * @returns Detected language code ('en' or 'pl')
   */
  const detectBrowserLanguage = (): Language => {
    const browserLang = navigator.language || (navigator as any).userLanguage;
    return browserLang.startsWith('pl') ? 'pl' : 'en';
  };

  // State
  const currentLanguage = ref<Language>(detectBrowserLanguage());

  /**
   * Changes the current language
   * @param lang - New language code
   */
  const setLanguage = (lang: Language): void => {
    currentLanguage.value = lang;
    try {
      localStorage.setItem('preferredLanguage', lang);
    } catch (error) {
      console.error('Cannot save language preference:', error);
    }
  };

  /**
   * Loads saved language preference from localStorage
   */
  const loadSavedLanguage = (): void => {
    try {
      const savedLang = localStorage.getItem('preferredLanguage');
      if (savedLang && (savedLang === 'en' || savedLang === 'pl')) {
        currentLanguage.value = savedLang as Language;
      }
    } catch (error) {
      console.error('Cannot read language preference:', error);
    }
  };

  /**
   * Gets a raw translation value without string conversion
   * This allows getting array values directly
   * 
   * @param key - Translation key
   * @returns The raw translation value (can be string or string[])
   */
  const getRawTranslation = (key: TranslationKey): string | string[] | undefined => {
    const lang = currentLanguage.value;
    const translationObj = translations[lang] as TranslationObject || 
                           translations.en as TranslationObject;
    
    return translationObj[key];
  };

  /**
   * Translates a key using the current language
   * Supports parameter replacement using {0}, {1}, etc. format
   * Note: Arrays will be joined with commas
   * 
   * @param key - Translation key
   * @param params - Parameters to substitute in the translation
   * @returns Translated text
   */
  const t = (key: TranslationKey, ...params: any[]): string => {
    try {
      // Get translation value or fallback to key itself
      const value = getRawTranslation(key) || key;
      
      // Convert arrays to string if needed
      let text: string;
      if (Array.isArray(value)) {
        text = value.join(', ');
      } else {
        text = value;
      }
      
      // Substitute parameters if available
      if (params.length > 0) {
        params.forEach((param, index) => {
          text = text.replace(`{${index}}`, String(param));
        });
      }
      
      return text;
    } catch (error) {
      console.error(`Translation error for key "${key}":`, error);
      return key;
    }
  };

  // Available languages for UI language switcher
  const availableLanguages = computed<Language[]>(() => 
    Object.keys(translations) as Language[]
  );

  return {
    currentLanguage,
    t,
    getRawTranslation,
    setLanguage,
    loadSavedLanguage,
    availableLanguages
  };
}