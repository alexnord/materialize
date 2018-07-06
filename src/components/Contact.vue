<template>
  <div>
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
    const percentage = window.innerHeight * 0.8;
    this.viewportHeight = `${percentage}px`;
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
        'Please reach out with any inquiries, questions, or even just say say hello.</br></br><a class="pink-font" href="mailto:hello@materializelabs.com" target="_top">hello@materializelabs.com</a>',
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
      const percentage = window.innerHeight * 0.8;
      this.viewportHeight = `${percentage}px`;
    },
  },
  components: {
    Typed,
  },
};
</script>

<style scoped>
</style>
