<template>
  <router-view />
</template>

<script>
import MenuNavigation from './components/Menu.vue';
import GreetingsSlide from './components/GreetingsSlide.vue';
import SlidesContainer from './components/SlidesContainer.vue';

export default {
  name: 'App',
  components: {
    GreetingsSlide,
    SlidesContainer,
    MenuNavigation,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>