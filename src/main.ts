import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';

// Import CSS
import './assets/css/variables.css';
import './assets/css/main.css';
import './assets/css/animations.css';
import './assets/css/layout.css';
import './assets/css/responsive.css';
import './assets/css/newsletter.css';
import './assets/css/content-sections.css';

// Create and configure Pinia store
const pinia = createPinia();

// Create app
const app = createApp(App);

// Register plugins
app.use(pinia);
app.use(router);

// Mount app
app.mount('#app');