/// <reference types="vite/client" />

// Deklaracje dla Vue 3
declare module '*.vue' {
    import type { DefineComponent } from 'vue'
    const component: DefineComponent<{}, {}, any>
    export default component
  }
  
  // Deklaracje dla importów zasobów statycznych
  declare module '*.svg' {
    const content: string
    export default content
  }
  
  declare module '*.png' {
    const content: string
    export default content
  }
  
  declare module '*.jpg' {
    const content: string
    export default content
  }
  
  // Deklaracje dla importów CSS
  declare module '*.css' {
    const content: Record<string, string>
    export default content
  }
  
  // Deklaracje dla pinia-plugin-persistedstate
  declare module 'pinia-plugin-persistedstate' {
    import type { PiniaPluginContext } from 'pinia'
    export default function(context: PiniaPluginContext): any
  }