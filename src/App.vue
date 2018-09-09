<template>
  <div id="app">
    <Nav></Nav>
    <router-view/>
    <ContactForm></ContactForm>
    <vue-cookie-accept-decline
      :debug="false"
      :position="'bottom'"
      :disableDecline="true"
      :transitionName="'slideFromBottom'"
      @status="cookieStatus"
      @clickedAccept="cookieClickedAccept"
      @clickedDecline="cookieClickedDecline">

      <!-- Optional -->
      <div slot="message">
          We use cookies to ensure you get the best experience on our website. <a href="https://cookiesandyou.com/" target="_blank">Learn More...</a>
      </div>

      <!-- Optional -->
      <div slot="declineContent">
          Opt Out
      </div>

      <!-- Optional -->
      <div slot="acceptContent">
          Got It!
      </div>
  </vue-cookie-accept-decline>
  </div>
</template>

<script>
import VueCookieAcceptDecline from 'vue-cookie-accept-decline';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import './assets/sass/styles.scss';
import './assets/sass/hamburgers.scss';
import Nav from './components/Nav';
import ContactForm from './components/ContactForm';

export default {
  name: 'App',
  data() {
    return {
      navHeight: 0,
      addBg: false,
      viewportHeight: '0px',
      bgPosition: '0px',
      bgWidth: 'unset',
      bgHeight: 'unset',
      footerRelative: false,
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
      this.viewportHeight = `${window.innerHeight}px`;
      this.bgPosition = `${window.innerHeight - 80 - this.navHeight}px`;

      this.setBgImageSize(this.navHeight);

      if (window.innerHeight < 565 && (window.innerWidth > window.innerHeight)) {
        this.footerRelative = true;
      } else {
        this.footerRelative = false;
      }
    },
    handleScroll() {
      this.addBg = scrollY > 50;
    },
    setBgImageSize() {
      if ((window.innerHeight - 80 - this.navHeight) >= window.innerWidth) {
        this.bgWidth = '100%';
        this.bgHeight = 'unset';
      } else if ((window.innerHeight - 80 - this.navHeight) < window.innerWidth) {
        this.bgHeight = '80%';
        this.bgWidth = 'unset';
      }
    },
  },
  mounted() {
    this.navHeight = document.getElementById('nav').clientHeight;
    this.viewportHeight = `${window.innerHeight}px`;
    this.bgPosition = `${window.innerHeight - 80 - this.navHeight}px`;
    this.setBgImageSize(this.navHeight);

    if (window.innerHeight < 565 && (window.innerWidth > window.innerHeight)) {
      this.footerRelative = true;
    }
  },
  components: {
    Nav,
    ContactForm,
    VueCookieAcceptDecline,
  },
};
</script>

<style lang="scss">
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

.cookie {
  font-family:'Circular Std Book', Helvetica !important;
  .cookie__buttons__button--accept {
    background-color: rgba(223, 0, 112, .8) !important;
    border-radius: 5px !important;
    padding: 8px 18px !important;
  }
}
</style>
