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
      <h2>our method</h2>
      <p class="mt-35">
        Materialize analyzes the entire landscape of digital business to draft a calculated plan for effective execution. We design and build cutting edge digital solutions tailored to the needs of our clients to achieve maximum impact.
      </p>
    </div>
    <div class="info-block white-bg">
      <h2>our services</h2>
      <div class="mt-35">
        <carousel
          :paginationEnabled="true"
          :perPage="1"
        >
          <slide>
            <p>Production</p>
            <ul>
              <li>Websites / Web Apps</li>
              <li>Mobile Apps</li>
              <li>TV Apps</li>
              <li>Gaming</li>
              <li>Shopify</li>
              <li>Server Infrstructure</li>
              <li>Ecommerce</li>
              <li>Retail</li>
            </ul>
          </slide>
          <slide>
            <p>Technologies</p>
            <ul>
              <li>VueJS / ReactJS</li>
              <li>HTML / CSS / JS</li>
              <li>iOS / Android</li>
              <li>DevOps / Infrastructure</li>
              <li>tvOS</li>
              <li>Shopify</li>
              <li>Magento</li>
            </ul>
          </slide>
          <slide>
            <p>Creative</p>
            <ul>
              <li>Research</li>
              <li>Protoypes</li>
              <li>Web Design</li>
              <li>App Design</li>
              <li>UX / UI</li>
            </ul>
          </slide>
        </carousel>
      </div>
    </div>
  </div>
</template>

<script>
import Typed from 'typed.js';
import { Carousel, Slide } from 'vue-carousel';

export default {
  name: 'About',
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
      strings: ['Materialize is a process driven, development oriented digital production agency.'],
      typeSpeed: 25,
      loop: false,
    });
    new Typed('#description', {
      strings: ['Our approach focuses on building and supporting applications that are on brand and strategic in technique.'],
      typeSpeed: 12,
      loop: false,
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
    Carousel,
    Slide,
  },
};
</script>

<style scoped>
.typed {
  padding: 24px;
}
</style>
