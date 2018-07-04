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
    <div class="info-block black-bg">
      <h2>what we do</h2>
    </div>
  </div>
</template>

<script>
import Typed from 'typed.js';

export default {
  name: 'About',
  data() {
    return {
      viewportHeight: '0px',
    };
  },
  beforeMount() {
    const eightyPercent = window.innerHeight * 0.8;
    this.viewportHeight = `${eightyPercent}px`;
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
      strings: ['Materialize is a process driven, development oriented full service agency.'],
      typeSpeed: 25,
      loop: false,
    });
    new Typed('#description', {
      strings: ['our approach focuses on building and supporting applications that are on brand and strategic in technique.'],
      typeSpeed: 12,
      loop: false,
    });
    /* eslint-enable no-new */

    this.fadeLink = true;
  },
  methods: {
    handleResize() {
      const eightyPercent = window.innerHeight * 0.8;
      this.viewportHeight = `${eightyPercent}px`;
    },
  },
  components: {
    Typed,
  },
};
</script>

<style scoped>
.typed {
  padding: 24px;
}
</style>
