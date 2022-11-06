import { createApp } from 'vue';
import App from './App.vue';
import './assets/css/common.css';
import './assets/iconfont/iconfont.css';
import router from './router/router';
import pinia from './store/index';
createApp(App).use(router).use(pinia).mount('#app');
