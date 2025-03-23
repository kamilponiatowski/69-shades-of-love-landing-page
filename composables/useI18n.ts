// @/composables/useI18n.ts
import { ref, computed } from 'vue';
import { translations } from '../locales'; // Poprawiona ścieżka importu

// Używamy konkretnych stringów zamiast keyof, aby uniknąć problemów z typami
export type TranslationKey = string;
export type Language = 'en' | 'pl';

/**
 * Composable do obsługi internacjonalizacji
 * Zapewnia funkcje tłumaczenia i zarządzania językiem
 */
export function useI18n() {
  // Domyślny język bazujący na przeglądarce
  const detectBrowserLanguage = (): Language => {
    const browserLang = navigator.language || (navigator as any).userLanguage;
    return browserLang.startsWith('pl') ? 'pl' : 'en';
  };

  const currentLanguage = ref<Language>(detectBrowserLanguage());

  /**
   * Zmienia bieżący język
   * @param lang Nowy język (en|pl)
   */
  const setLanguage = (lang: Language): void => {
    currentLanguage.value = lang;
    try {
      localStorage.setItem('preferredLanguage', lang);
    } catch (error) {
      console.error('Nie można zapisać preferencji języka:', error);
    }
  };

  /**
   * Ładuje zapisany język z localStorage
   */
  const loadSavedLanguage = (): void => {
    try {
      const savedLang = localStorage.getItem('preferredLanguage');
      if (savedLang && (savedLang === 'en' || savedLang === 'pl')) {
        currentLanguage.value = savedLang as Language;
      }
    } catch (error) {
      console.error('Nie można odczytać preferencji języka:', error);
    }
  };

  /**
   * Funkcja tłumaczenia
   * @param key Klucz tłumaczenia
   * @param params Parametry do podstawienia w tłumaczeniu
   * @returns Przetłumaczony tekst
   */
  const t = (key: TranslationKey, ...params: any[]): string => {
    try {
      // Pobierz tekst dla aktualnego języka lub jako fallback użyj angielskiego
      const lang = currentLanguage.value;
      const translationObj = translations[lang] || translations.en;
      let text: string = (translationObj[key] as string) || key;
      
      // Podstaw parametry jeśli są dostępne
      if (params.length > 0) {
        params.forEach((param, index) => {
          text = text.replace(`{${index}}`, String(param));
        });
      }
      
      return text;
    } catch (error) {
      console.error(`Błąd tłumaczenia dla klucza "${key}":`, error);
      return key;
    }
  };

  // Lista dostępnych języków
  const availableLanguages = computed<Language[]>(() => Object.keys(translations) as Language[]);

  return {
    currentLanguage,
    t,
    setLanguage,
    loadSavedLanguage,
    availableLanguages
  };
}