<template>
  <div class="contact-page">
    <div class="fixed-bg">
      <img src="../assets/img/plane.png" />
      <!-- <img src="../assets/img/house.jpg" /> -->
    </div>
    <div class="wrapper">
      <div
        class="typed d-flex align-content-center flex-wrap"
        v-bind:style="{ height: viewportHeight }"
      >
        <div class="headline">
          <span id="headline"></span>
        </div>
        <div class="description">
          <span id="description"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Typed from 'typed.js';

export default {
  name: 'Contact',
  data() {
    return {
      viewportHeight: '0px',
    };
  },
  beforeMount() {
    this.viewportHeight = `${window.innerHeight}px`;
  },
  created() {
    window.addEventListener('resize', this.handleResize);
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize);
  },
  mounted() {
    /* eslint-disable no-new */
    new Typed('#headline', {
      strings: ['Don&#39;t be </br>a stranger. We&#39;d</br>love to hear</br>from you.'],
      typeSpeed: 25,
      loop: false,
    });
    new Typed('#description', {
      strings: [
        'Please reach out with any inquiries, questions, or even just say say hello.</br></br><a class="pink-font ft-20" href="mailto:hello@materializelabs.com" target="_top">hello@materializelabs.com</a></br><span class="pink-font ft-20">310.699.0125</span>',
      ],
      typeSpeed: 12,
      loop: false,
      showCursor: false,
    });
    /* eslint-enable no-new */
    this.fadeLink = true;
  },
  methods: {
    handleResize() {
      this.viewportHeight = `${window.innerHeight}px`;
    },
  },
  components: {
    Typed,
  },
};
</script>

<style scoped>
.fixed-bg {
  z-index: -10;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.fixed-bg img {
  width: 98vmin;
}
.wrapper {
  background-color: rgba(255, 255, 255, .7);
}
@media (min-width: 1024px) {
  .fixed-bg img {
    width: 90vmin;
  }
}
</style>
