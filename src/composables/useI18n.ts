import { ref, computed, provide, inject, ComputedRef } from 'vue';
import { translations } from '../locales';

// Types
export type TranslationKey = string;
export type Language = 'en' | 'pl';

// Symbol for provide/inject pattern
export const I18N_KEY = Symbol('i18n');

// Define a type for translation objects with string index signature
export interface TranslationObject {
  [key: string]: string | string[] | Quote[] | Record<string, any>;
}

export interface Quote {
  text: string;
  source: string;
  character: string;
  universe: string;
  category: string;
}

export interface I18nInstance {
  currentLanguage: ReturnType<typeof ref<Language>>;
  t: (key: TranslationKey, ...params: any[]) => string;
  getRawTranslation: (key: TranslationKey) => string | string[] | Quote[] | undefined;
  setLanguage: (lang: Language) => void;
  loadSavedLanguage: () => void;
  availableLanguages: ComputedRef<Language[]>;
}

// Shared singleton instance
let instance: I18nInstance | null = null;

/**
 * Internationalization composable
 * Provides translation functions and language management
 * 
 * @returns Translation functions and language state
 */
export function createI18n(): I18nInstance {
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
  const getRawTranslation = (key: TranslationKey): string | string[] | Quote[] | undefined => {
    const lang = currentLanguage.value;
    const translationObj = translations[lang] as TranslationObject || 
                         translations.en as TranslationObject;
    
    const value = translationObj[key];
    
    if (Array.isArray(value)) {
      if (value.length > 0 && 'text' in value[0]) {
        return value as Quote[];
      }
      return value as string[];
    }
    
    if (typeof value === 'string') {
      return value;
    }
    
    return undefined;
  };
  
  /**
   * Translates a key using the current language
   * Supports parameter replacement using {0}, {1}, etc. format
   * Note: Arrays will be converted to JSON string
   * 
   * @param key - Translation key
   * @param params - Parameters to substitute in the translation
   * @returns Translated text
   */
  const t = (key: TranslationKey, ...params: any[]): string => {
    try {
      const value = getRawTranslation(key);
      
      let text: string;
      if (Array.isArray(value)) {
        text = JSON.stringify(value);
      } else if (typeof value === 'string') {
        text = value;
      } else {
        text = key;
      }
      
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
  // Changed to explicitly type as ComputedRef<Language[]>
  const availableLanguages: ComputedRef<Language[]> = computed(() => {
    return Object.keys(translations) as Language[];
  });

  // Load saved language on initialization
  loadSavedLanguage();

  return {
    currentLanguage,
    t,
    getRawTranslation,
    setLanguage,
    loadSavedLanguage,
    availableLanguages
  };
}

/**
 * Internationalization composable
 * Uses singleton pattern to ensure the same instance is used across components
 * 
 * @returns Translation functions and language state
 */
export function useI18n(): I18nInstance {
  // Try to get existing instance from provide/inject
  const existingInstance = inject<I18nInstance | null>(I18N_KEY, null);
  if (existingInstance) {
    return existingInstance;
  }

  // Create or reuse singleton instance
  if (!instance) {
    instance = createI18n();
  }

  return instance;
}

/**
 * Provides i18n instance to all child components
 * Call this in your App.vue or main.ts
 */
export function provideI18n(): I18nInstance {
  // Create or reuse singleton instance
  if (!instance) {
    instance = createI18n();
  }

  // Provide to all child components
  provide(I18N_KEY, instance);

  return instance;
}