// Oto nowy plik src/main.ts - zastąp nim istniejący:

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';

// Import zunifikowanego CSS
import './assets/css/main.css';

// Create and configure Pinia store
const pinia = createPinia();

// Create app
const app = createApp(App);

// Register plugins
app.use(pinia);
app.use(router);

// Mount app
app.mount('#app');