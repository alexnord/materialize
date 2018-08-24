<template>
  <div id="about-page">
    <div
      class="fixed-bg"
      v-bind:style="{ top: bgPosition }"
      >
      <img src="../assets/img/house_1200px.png" />
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
      <div class="container-fluid black-bg">
        <div class="row">
          <div class="tile-grid">
            <div class="tile">
              <div class="tile-content">
                <picture class="tile-icon">
                  <img src="../assets/img/icons/web_development.png" alt="web devleopment icon">
                </picture>
                <div class="title">
                  <p>Frontend Development</p>
                </div>
                <div class="sub-title">
                  <p>Design and build your digital presence.</p>
                </div>
              </div>
            </div>
            <div class="tile">
              <div class="tile-content">
                <picture class="tile-icon">
                  <img src="../assets/img/icons/content_management.png" alt="content management icon">
                </picture>
                <div class="title">
                  <p>Backend Development</p>
                </div>
                <div class="sub-title">
                  <p>Built to manage your site and business operations.</p>
                </div>
              </div>
            </div>
            <div class="tile">
              <div class="tile-content">
                <picture class="tile-icon">
                  <img src="../assets/img/icons/online-shop.png" alt="ecommerce icon">
                </picture>
                <div class="title">
                  <p>E-Commerce Stores</p>
                </div>
                <div class="sub-title">
                  <p>Improve the buying experience for your customers.</p>
                </div>
              </div>
            </div>
            <div class="tile">
              <div class="tile-content">
                <picture class="tile-icon">
                  <img src="../assets/img/icons/mobile_apps.png" alt="mobile apps icon">
                </picture>
                <div class="title">
                  <p>Apps</p>
                </div>
                <div class="sub-title">
                  <p>Develop and maintain iOS, Android and TV apps.</p>
                </div>
              </div>
            </div>
            <div class="tile">
              <div class="tile-content">
                <picture class="tile-icon">
                  <img src="../assets/img/icons/web-design.png" alt="ui/ux design icon">
                </picture>
                <div class="title">
                  <p>UX / UI Design</p>
                </div>
                <div class="sub-title">
                  <p>A seamless interaction with your brand across all devices.</p>
                </div>
              </div>
            </div>
            <div class="tile">
              <div class="tile-content">
                <picture class="tile-icon">
                  <img src="../assets/img/icons/content.png" alt="content icon">
                </picture>
                <div class="title">
                  <p>Content Management Systems</p>
                </div>
                <div class="sub-title">
                  <p>Curate beautiful and engaging content for your site.</p>
                </div>
              </div>
            </div>
            <div class="tile">
              <div class="tile-content">
                <picture class="tile-icon">
                  <img src="../assets/img/icons/strategy.png" alt="strategy icon">
                </picture>
                <div class="title">
                  <p>SEO</p>
                </div>
                <div class="sub-title">
                  <p>Make your site easy to find with Search Engine Optimization.</p>
                </div>
              </div>
            </div>
            <div class="tile">
              <div class="tile-content">
                <picture class="tile-icon">
                  <!-- <img src="../assets/img/icons/analytics.png" alt="analytics icon"> -->
                  <img src="../assets/img/icons/infrastructure.png" alt="infrastructure icon">
                </picture>
                <div class="title">
                  <p>Server Infrastructure</p>
                </div>
                <div class="sub-title">
                  <p>Scalable cloud hosting solutions and DevOps.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="info-block transparent-bg mt-4">
        <div class="info-wrap">
          <h2
            v-scroll-reveal="{ delay: 175, origin: 'left', distance: '100px' }"
            class="text-center">
            our services
          </h2>
          <div
            class="mt-35"
            v-scroll-reveal="{ delay: 175, origin: 'bottom', distance: '100px' }"
          >
            <div class="d-none d-md-block">
              <div class="d-flex justify-content-between">
                <div>
                  <p class="ft-22">Production</p>
                  <li>Responsive Websites</li>
                  <li>E-Commerce Stores</li>
                  <li>Web Apps</li>
                  <li>Mobile Apps</li>
                  <li>TV Apps</li>
                  <li>Digital Marketing</li>
                  <li>SEO</li>
                  <li>Cloud Computing</li>
                  <li>Server Infrstructure</li>
                  <li>Retail</li>
                </div>
                <div>
                  <p class="ft-22">Technologies</p>
                  <li>Frontend Development</li>
                  <li>Backend Development</li>
                  <li>Shopify</li>
                  <li>iOS / Android</li>
                  <li>tvOS</li>
                  <li>VueJS / ReactJS</li>
                  <li>HTML / CSS / JS</li>
                  <li>Cloud Hosting</li>
                  <li>DevOps / Infrastructure</li>
                  <li>Magento</li>
                  <li>Wordpress</li>
                  <li>Content Management Systems</li>
                </div>
                <div>
                  <p class="ft-22">Creative</p>
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
                    <p class="ft-22">Production</p>
                      <li>Responsive Websites</li>
                      <li>E-Commerce Stores</li>
                      <li>Web Apps</li>
                      <li>Mobile Apps</li>
                      <li>TV Apps</li>
                      <li>Digital Marketing</li>
                      <li>SEO</li>
                      <li>Cloud Computing</li>
                      <li>Server Infrstructure</li>
                      <li>Retail</li>
                  </div>
                </div>
                <div class="carousel-cell">
                  <div class="cell-container">
                    <p class="ft-22">Technologies</p>
                      <li>Frontend Development</li>
                      <li>Backend Development</li>
                      <li>Shopify</li>
                      <li>iOS / Android</li>
                      <li>tvOS</li>
                      <li>VueJS / ReactJS</li>
                      <li>HTML / CSS / JS</li>
                      <li>DevOps / Infrastructure</li>
                      <li>Magento</li>
                      <li>Wordpress</li>
                      <li>Content Management Systems</li>
                  </div>
                </div>
                <div class="carousel-cell">
                  <div class="cell-container">
                    <p class="ft-22">Creative</p>
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
      <div class="info-block black-bg">
        <div class="info-wrap">
          <h2
            v-scroll-reveal="{ delay: 175, origin: 'left', distance: '100px' }"
          >
            our method
          </h2>
          <p
            class="mt-35"
            v-scroll-reveal="{ delay: 175, origin: 'left', distance: '100px' }"
          >
            We believe form should match function, and can meet your brand’s high-end digital needs inside and out. We take your ideas and goals from concept to reality, and give you a digital presence that resonates with your clients.
          </p>
          <p
            v-scroll-reveal="{ delay: 175, origin: 'left', distance: '100px' }"
          >
            Our clients range from small companies launching new digital products to large brands requiring a complex range of digital services. We provide the full spectrum of digital development needs and can also provide augmentation to current development teams.
          </p>
        </div>
      </div>
      <div class="info-block transparent-bg">
        <div class="info-wrap">
          <h2
            v-scroll-reveal="{ delay: 175, origin: 'left', distance: '100px' }"
          >
            some of our clients
          </h2>
          <div class="d-none d-sm-flex justify-content-between align-self-center mx-auto clients">
            <div><img src="../assets/img/about/wb.png" alt="Warner Bros." /></div>
            <div><img src="../assets/img/about/lf.png" alt="LF Stores" /></div>
            <div><img src="../assets/img/about/fox.png" alt="20th Century Fox" /></div>
            <div><img src="../assets/img/about/annenberg.png" alt="The Annenberg Foundation" /></div>
          </div>
          <div class="d-block d-sm-none clients mt-5">
            <div class="d-flex justify-content-around">
              <img src="../assets/img/about/wb.png" class="img-fluid" alt="Warner Bros." />
              <img src="../assets/img/about/lf.png" alt="LF Stores" />
            </div>
            <div class="d-flex justify-content-around">
              <img src="../assets/img/about/fox.png" alt="20th Century Fox" />
              <img src="../assets/img/about/annenberg.png" alt="The Annenberg Foundation" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <button class="contact" v-b-modal.contact-form>contact</button>
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
      strings: ['Materialize is&nbsp;</br>a design and development&nbsp;</br>oriented agency.'],
      typeSpeed: 15,
      loop: false,
    });
    new Typed('#description', {
      strings: ['We focus on building and supporting websites, apps, and software that are impactful and on brand.'],
      typeSpeed: 10,
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
  transform: translateX(-50%);
}
.fixed-bg img {
  width: 98vmin;
}
.wrapper {
  background-color: rgba(255, 255, 255, .7);
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
.contact {
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 10px;
  background-color: rgba(223, 0, 112, .9);
  border: 2px solid rgba(0, 0, 0, 0.12);
  border-radius: 5px;
  font-size: 15px;
  color: #FFF;
}

.info-block {
  position: relative;
  padding: 40px;
  top: -40px;
}
.info-block li {
  list-style: none;
  font-size: 16px;
}
.info-wrap p {
  font-size: 16px;
}

.tile-grid {
  font-family:'Circular Std Medium', Helvetica;
}

.tile-grid p {
  font-weight: 700;
  color: #FFF;
  padding: 24px 15px 12px 15px;
  font-size: 2vw;
  text-transform: uppercase;
  letter-spacing: 2.3px;
}

.tile-grid {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: stretch;
  -ms-flex-pack: stretch;
  justify-content: stretch;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  width: 100%;
}

.tile, .tile-icon {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  color: #fff;
}
.tile {
  position: relative;
  -webkit-box-align: center;
  -ms-flex-align: center;
  width: calc(25% - 0px);
  padding: 5% 20px;
  border-right: 1px solid #eaeaea;
  border-top: 1px solid #eaeaea;
  text-align: center;
}

.tile .tile-content picture {
  position: relative;
  -webkit-box-align: end;
  -ms-flex-align: end;
  align-items: flex-end;
  height: 60px;
  margin: 20px 0;
  background-color: transparent;
}
.tile .tile-content img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 1;
  transition: opacity .2s;
  position: relative;
  width: auto;
  height: 100%;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  opacity: 1;
}

.title {
  height: 100px;
  align-items: center;
  display: flex;
  justify-content: center;
}

.title p {
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
}

.sub-title {
  height: 144px;
  align-items: center;
  display: flex;
  justify-content: center;
}

.sub-title p {
  font-size: 15px;
  font-weight: 100;
}

.tile:nth-child(4n) {
  margin-right: 0;
  border-right: none;
}

.clients {
  text-align: center;
  height: 140px;
  align-items: center;
  margin-bottom: 20px;
}
.clients img {
  opacity: .8;
}

@media only screen and (max-width: 768px) {
  .tile-grid p {
    padding: 18px 15px 6px 15px;
  }

  .tile {
    width: calc(50% - 0px);
  }

  .tile:nth-child(2n) {
    margin-right: 0;
    border-right: none;
  }
  .clients img {
    margin-bottom: 20px;
  }
}

@media (min-width: 768px) {
  .contact {
    bottom: 20px;
    right: 20px;
    padding: 10px;
    font-size: 24px;
    color: #FFF;
  }
  .info-block li,
  .info-wrap p {
    font-size: 18px;
  }
}
@media (min-width: 1024px) {
  .info-wrap {
    width: 65%;
    margin: 0 auto;
  }
  .fixed-bg img {
    width: 75vmin;
  }
}
</style>
