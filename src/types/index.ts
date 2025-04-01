// Common interfaces for project components

// Task related types
export interface TaskChangeInfo {
  wasCompleted: boolean;
  isNowCompleted: boolean;
}

// Features list types
export interface Feature {
  icon: string;
  text: string;
}

// Wellbeing areas types
export interface WellbeingArea {
  type: string;
  emoji: string;
  title: string;
  description: string;
}

// Application types
export interface Application {
  icon: string;
  title: string;
  description: string;
}

// Benefits list types
export interface Benefit {
  text: string;
  highlight?: boolean;
  popCulture?: boolean;
}

// Habits types
export interface Habit {
  id: number;
  title: string;
  description: string;
  tips: string[];
  tools: string[];
  category: string;
  icon: string;
}

// Insights types
export interface Insight {
  category: 'physical' | 'mental' | 'personal' | 'relationship';
  icon: string;
  text: string;
}

// Quotes types
export interface Quote {
  text: string;
  source: string;
  character: string;
  universe: string;
  category: string;
}

// Resources types
export interface Resource {
  icon: string;
  title: string;
  items: string[];
}

// Type guard functions
export function isFeature(item: any): item is Feature {
  return typeof item.icon === 'string' && typeof item.text === 'string';
}

export function isApplication(item: any): item is Application {
  return typeof item.icon === 'string' && 
         typeof item.title === 'string' && 
         typeof item.description === 'string';
}

export function isWellbeingArea(item: any): item is WellbeingArea {
  return typeof item.type === 'string' && 
         typeof item.emoji === 'string' && 
         typeof item.title === 'string' && 
         typeof item.description === 'string';
}

export function isHabit(item: any): item is Habit {
  return typeof item.id === 'number' &&
         typeof item.title === 'string' &&
         typeof item.description === 'string' &&
         Array.isArray(item.tips) &&
         Array.isArray(item.tools) &&
         typeof item.category === 'string' &&
         typeof item.icon === 'string';
}

export function isInsight(item: any): item is Insight {
  return typeof item.category === 'string' && 
         typeof item.icon === 'string' && 
         typeof item.text === 'string';
}

export function isQuote(item: any): item is Quote {
  return typeof item.text === 'string' && 
         typeof item.source === 'string' && 
         typeof item.character === 'string' && 
         typeof item.universe === 'string' && 
         typeof item.category === 'string';
}

export function isResource(item: any): item is Resource {
  return typeof item.icon === 'string' && 
         typeof item.title === 'string' && 
         Array.isArray(item.items);
}