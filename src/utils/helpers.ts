/**
 * General utility functions for the application
 */

/**
 * Formats a date in a human-readable format
 * @param date - Date to format
 * @param locale - Locale to use for formatting
 * @returns Formatted date string
 */
export function formatDate(date: Date, locale: string = 'en-US'): string {
    return date.toLocaleDateString(locale, {
      year: 'numeric',
      month: 'long', 
      day: 'numeric'
    });
  }
  
  /**
   * Creates a debounced function that delays invoking the provided function
   * @param fn - Function to debounce
   * @param delay - Delay in milliseconds
   * @returns Debounced function
   */
  export function debounce<T extends (...args: any[]) => any>(
    fn: T, 
    delay: number
  ): (...args: Parameters<T>) => void {
    let timeoutId: ReturnType<typeof setTimeout>;
    
    return function(...args: Parameters<T>): void {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => fn(...args), delay);
    };
  }
  
  /**
   * Creates a throttled function that only invokes the provided function at most once per specified interval
   * @param fn - Function to throttle
   * @param limit - Throttle interval in milliseconds
   * @returns Throttled function
   */
  export function throttle<T extends (...args: any[]) => any>(
    fn: T, 
    limit: number
  ): (...args: Parameters<T>) => void {
    let inThrottle: boolean = false;
    
    return function(...args: Parameters<T>): void {
      if (!inThrottle) {
        fn(...args);
        inThrottle = true;
        setTimeout(() => {
          inThrottle = false;
        }, limit);
      }
    };
  }
  
  /**
   * Generates a random ID
   * @param length - Length of the ID
   * @returns Random ID string
   */
  export function generateId(length: number = 8): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    
    return result;
  }