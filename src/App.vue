<template>
  <div id="app">
    <Nav></Nav>
    <router-view/>
    <Footer></Footer>
    <ContactForm></ContactForm>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import './assets/css/styles.css';
import './assets/css/hamburgers.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';

export default {
  name: 'App',
  data() {
    return {};
  },
  methods: {
  },
  components: {
    Nav,
    Footer,
    ContactForm,
  },
};
</script>

<style>
#app {}
#particles-js {
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: transparent;
  background-size: cover;
  background-position: 50% 50%;
  background-repeat: no-repeat;
}
.body-particles{
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
}
</style>
