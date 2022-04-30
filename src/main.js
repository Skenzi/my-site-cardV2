import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router';
import App from './App.vue'
import GreetingsSlide from './components/GreetingsSlide.vue';
import SlidesContainer from './components/SlidesContainer.vue';

const routes = [
    {
      path: '/',
      component: GreetingsSlide,
    },
    {
        path: '/slides',
        component: SlidesContainer,
    }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

const app = createApp(App);

app.use(router);

app.mount('#app');
