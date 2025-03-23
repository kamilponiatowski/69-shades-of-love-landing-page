import { createApp } from 'vue';
import { createPinia } from 'pinia';
// @ts-ignore
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import App from '@/App.vue';

import './assets/css/variables.css';
import './assets/css/main.css';
import './assets/css/animations.css';
import './assets/css/layout.css';
import './assets/css/responsive.css';

// Create Pinia instance
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

// Create app
const app = createApp(App);

// Register plugins
app.use(pinia);

// Mount app
app.mount('#app');