<template>
  <div id="app">
    <Nav></Nav>
    <router-view/>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import './assets/css/styles.css';
import './assets/css/hamburgers.css';
import Nav from './components/Nav';

export default {
  name: 'App',
  data() {
    return {};
  },
  components: {
    Nav,
  },
};
</script>

<style>
#app {}
</style>
