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
import './assets/sass/styles.scss';
import './assets/sass/hamburgers.scss';
import Nav from './components/Nav';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';

export default {
  name: 'App',
  data() {
    return {
      navHeight: 0,
      addBg: false,
    };
  },
  created() {
    window.addEventListener('resize', this.handleResize);
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize);
    window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleResize() {
      this.navHeight = document.getElementById('nav').clientHeight;
    },
    handleScroll() {
      this.addBg = scrollY > 50;
    },
  },
  mounted() {
    this.navHeight = document.getElementById('nav').clientHeight;
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
