<template>
  <div class="about-page">
    <div
      class="fixed-bg"
      v-bind:style="{ top: bgPosition }"
      >
      <img src="../assets/img/house.jpg" />
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
      <div
        class="info-block black-bg"
      >
        <div class="info-wrap">
          <h2
            v-scroll-reveal="{ delay: 175, origin: 'left', distance: '100px' }"
          >
            our method
          </h2>
          <p
            class="mt-35 ft-16"
            v-scroll-reveal="{ delay: 175, origin: 'left', distance: '100px' }"
          >
            Materialize analyzes the entire landscape of digital business to draft a calculated plan for effective digital presence. We design and build cutting edge digital solutions tailored to the needs of our clients to achieve maximum impact.
          </p>
          <p
            class="ft-16"
            v-scroll-reveal="{ delay: 175, origin: 'left', distance: '100px' }"
          >
            Our clients range from small companies launching new digital products to large brands needing a complex range of digital services. We provide the full spectrum of digital development needs and can also provide augmentation to current development teams.
          </p>
        </div>
      </div>
      <div class="info-block transparent-bg">
        <div class="info-wrap">
          <h2
            v-scroll-reveal="{ delay: 175, origin: 'left', distance: '100px' }">
            our services
          </h2>
          <div
            class="mt-35 ft-16"
            v-scroll-reveal="{ delay: 175, origin: 'bottom', distance: '100px' }"
          >
            <div class="d-none d-md-block">
              <div class="d-flex justify-content-between">
                <div>
                  <p class="ft-20">Production</p>
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
                  <p class="ft-20">Technologies</p>
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
                  <p class="ft-20">Creative</p>
                  <li>Web Design</li>
                  <li>App Design</li>
                  <li>UX / UI</li>
                  <li>Research</li>
                  <li>Protoypes</li>
                </div>
              </div>
            </div>
            <div
              class="d-md-none"
              v-scroll-reveal="{ delay: 175, origin: 'bottom', distance: '100px' }"
            >
              <flickity ref="flickity" :options="flickityOptions">
                <div class="carousel-cell">
                  <div class="cell-container">
                    <p class="ft-20">Production</p>
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
                    <p class="ft-20">Technologies</p>
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
                    <p class="ft-20">Creative</p>
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
      bgPosition: '0px',
      flickityOptions: {
        pageDots: true,
        wrapAround: true,
        prevNextButtons: false,
      },
    };
  },
  beforeMount() {
    const percentage = window.innerHeight * 0.8;
    const twentyFive = percentage * 0.25;
    const seventeen = percentage * 0.17;
    this.viewportHeight = `${percentage}px`;
    this.bgPosition = window.innerWidth >= 768 ? `${seventeen}px` : `${twentyFive}px`;
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
      strings: ['Materialize is&nbsp;</br>a development&nbsp;</br>oriented agency.'],
      typeSpeed: 25,
      loop: false,
    });
    new Typed('#description', {
      strings: ['Our approach focuses on building and supporting applications that are impactful and on brand.'],
      typeSpeed: 12,
      loop: false,
    });
    /* eslint-enable no-new */
    this.fadeLink = true;
  },
  methods: {
    handleResize() {
      const percentage = window.innerHeight * 0.8;
      const twentyFive = percentage * 0.25;
      const seventeen = percentage * 0.17;
      this.viewportHeight = `${percentage}px`;
      this.bgPosition = window.innerWidth >= 768 ? `${seventeen}px` : `${twentyFive}px`;
    },
  },
  components: {
    Typed,
    Flickity,
  },
};
</script>

<style scoped>
.fixed-bg {
  position: fixed;
  z-index: -10;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%)
}
.fixed-bg img {
  width: 100vmin;
}
.wrapper {
  background-color: rgba(255, 255, 255, .6);
}
.typed {
  padding: 24px;
}
.carousel-cell {
  width: 85%;
}
.cell-container {
  margin-left: -8%;
}

@media (min-width: 660px) {
  .fixed-bg {
  }
}

@media (min-width: 1024px) {
  .info-wrap {
    width: 65%;
    margin: 0 auto;
  }
}

@media (min-width: 1480px) {

}
</style>
