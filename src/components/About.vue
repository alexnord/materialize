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
      <div class="info-wrap">
        <h2>our method</h2>
        <p class="mt-35">
          Materialize analyzes the entire landscape of digital business to draft a calculated plan for effective digital presence. We design and build cutting edge digital solutions tailored to the needs of our clients to achieve maximum impact.
        </p>
        <p>
          Our clients range from small companies launching new digital products to large brands needing a complex range of digital services. We provide the full spectrum of digital development needs and can also provide augmentation to current development teams.
        </p>
      </div>
    </div>
    <div class="info-block white-bg">
      <div class="info-wrap">
        <h2>our services</h2>
        <div class="mt-35">
          <div class="d-none d-md-block">
            <div class="d-flex justify-content-between">
              <div>
                <p>Production</p>
                <li>Responsive Websites</li>
                <li>Web Apps</li>
                <li>Mobile Apps</li>
                <li>TV Apps</li>
                <li>Gaming</li>
                <li>Shopify</li>
                <li>Server Infrstructure</li>
                <li>Ecommerce</li>
                <li>Retail</li>
              </div>
              <div>
                <p>Technologies</p>
                <li>iOS / Android</li>
                <li>tvOS</li>
                <li>Backend Support</li>
                <li>VueJS / ReactJS</li>
                <li>HTML / CSS / JS</li>
                <li>DevOps / Infrastructure</li>
                <li>Shopify</li>
                <li>Magento</li>
              </div>
              <div>
                <p>Creative</p>
                <li>Web Design</li>
                <li>App Design</li>
                <li>UX / UI</li>
                <li>Research</li>
                <li>Protoypes</li>
              </div>
            </div>
          </div>
          <div class="d-md-none">
            <flickity ref="flickity" :options="flickityOptions">
              <div class="carousel-cell">
                <div class="cell-container">
                  <p>Production</p>
                    <li>Responsive Websites</li>
                    <li>Web Apps</li>
                    <li>Mobile Apps</li>
                    <li>TV Apps</li>
                    <li>Gaming</li>
                    <li>Shopify</li>
                    <li>Server Infrstructure</li>
                    <li>Ecommerce</li>
                    <li>Retail</li>
                </div>
              </div>
              <div class="carousel-cell">
                <div class="cell-container">
                  <p>Technologies</p>
                    <li>iOS / Android</li>
                    <li>tvOS</li>
                    <li>Backend Support</li>
                    <li>VueJS / ReactJS</li>
                    <li>HTML / CSS / JS</li>
                    <li>DevOps / Infrastructure</li>
                    <li>Shopify</li>
                    <li>Magento</li>
                </div>
              </div>
              <div class="carousel-cell">
                <div class="cell-container">
                  <p>Creative</p>
                    <li>Web Design</li>
                    <li>App Design</li>
                    <li>UX / UI</li>
                    <li>Research</li>
                    <li>Protoypes</li>
                </div>
              </div>
            </flickity>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Typed from 'typed.js';
import Flickity from 'vue-flickity';

export default {
  name: 'About',
  data() {
    return {
      viewportHeight: '0px',
      flickityOptions: {
        pageDots: true,
        wrapAround: true,
        prevNextButtons: false,
      },
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
      strings: ['Materialize is a</br>development oriented</br>digital production agency.'],
      typeSpeed: 25,
      loop: false,
    });
    new Typed('#description', {
      strings: ['Our approach focuses on building and supporting applications that are on brand and impactful.'],
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
    Flickity,
  },
};
</script>

<style scoped>
.typed {
  padding: 24px;
}
.carousel-cell {
  width: 85%;
}
.cell-container {
  margin-left: -8%;
}

@media (min-width: 1024px) {
  .info-wrap {
    width: 65%;
    margin: 0 auto;
  }
}
</style>
