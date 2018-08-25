<template>
  <div id="services-page">
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
        <b-row>
          <b-col cols="12" md="8" offset-md="1">
            <p
              class="ft-24 circular-book my-35"
              v-scroll-reveal="{ delay: 175, origin: 'left', distance: '100px' }"
            >
              <span class="pink-font">We work closely with our clients throughout the entire development process.</span> We propose solutions that are tailored specifically for each product we build. There's no project too large or too small.
            </p>
          </b-col>
        </b-row>
        <div class="row">
          <div class="tile-grid">
            <div class="tile">
              <div class="tile-content" v-scroll-reveal="{ delay: 175, origin: 'top', distance: '100px' }">
                <picture class="tile-icon">
                  <img src="../assets/img/icons/strategy.png" alt="strategy icon">
                </picture>
                <div class="title">
                  <p>Strategy &amp; Planning</p>
                </div>
                <div class="sub-title">
                  <p>Understand the needs of our clients and mindfully roadmap product development.</p>
                </div>
              </div>
            </div>
            <div class="tile">
              <div class="tile-content" v-scroll-reveal="{ delay: 175, origin: 'bottom', distance: '100px' }">
                <picture class="tile-icon">
                  <img src="../assets/img/icons/web-design.png" alt="ui/ux design icon">
                </picture>
                <div class="title">
                  <p>UI / UX Design</p>
                </div>
                <div class="sub-title">
                  <p>From wireframes to polished compositions, a 360&deg; view of the product before engineering begins.</p>
                </div>
              </div>
            </div>
            <div class="tile">
              <div class="tile-content" v-scroll-reveal="{ delay: 175, origin: 'top', distance: '100px' }">
                <picture class="tile-icon">
                  <img src="../assets/img/icons/mobile_apps.png" alt="mobile apps icon">
                </picture>
                <div class="title">
                  <p>Mobile Apps</p>
                </div>
                <div class="sub-title">
                  <p>Develop and maintain cutting edge iOS, Android, and TV apps.</p>
                </div>
              </div>
            </div>
            <div class="tile">
              <div class="tile-content" v-scroll-reveal="{ delay: 175, origin: 'bottom', distance: '100px' }">
                <picture class="tile-icon">
                  <img src="../assets/img/icons/web_development.png" alt="web devleopment icon">
                </picture>
                <div class="title">
                  <p>Frontend Development</p>
                </div>
                <div class="sub-title">
                  <p>Beautifully landscaped digital experiences optimized for all browsers, devices, and sizes.</p>
                </div>
              </div>
            </div>
            <div class="tile">
              <div class="tile-content" v-scroll-reveal="{ delay: 175, origin: 'top', distance: '100px' }">
                <picture class="tile-icon">
                  <img src="../assets/img/icons/content_management.png" alt="content management icon">
                </picture>
                <div class="title">
                  <p>Backend Development</p>
                </div>
                <div class="sub-title">
                  <p>The underlying architecture and business logic that makes your product tick.</p>
                </div>
              </div>
            </div>
            <div class="tile">
              <div class="tile-content" v-scroll-reveal="{ delay: 175, origin: 'bottom', distance: '100px' }">
                <picture class="tile-icon">
                  <img src="../assets/img/icons/infrastructure.png" alt="infrastructure icon">
                </picture>
                <div class="title">
                  <p>Infrastructure</p>
                </div>
                <div class="sub-title">
                  <p>DevOps services employing the latest technologies in server and hosting solutions.</p>
                </div>
              </div>
            </div>
            <div class="tile">
              <div class="tile-content" v-scroll-reveal="{ delay: 175, origin: 'top', distance: '100px' }">
                <picture class="tile-icon">
                  <img src="../assets/img/icons/strategy.png" alt="strategy icon">
                </picture>
                <div class="title">
                  <p>Testing</p>
                </div>
                <div class="sub-title">
                  <p>Comprehensive quality assurance testing for 100% peace of mind.</p>
                </div>
              </div>
            </div>
            <div class="tile">
              <div class="tile-content" v-scroll-reveal="{ delay: 175, origin: 'bottom', distance: '100px' }">
                <picture class="tile-icon">
                  <img src="../assets/img/icons/content.png" alt="content icon">
                </picture>
                <div class="title">
                  <p>Project Management</p>
                </div>
                <div class="sub-title">
                  <p>Hands-on project oversight and direct communication with our clients.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="info-block transparent-bg">
        <div class="info-wrap">
          <h2
            class="pink-font mt-35 circular-black"
            v-scroll-reveal="{ delay: 175, origin: 'left', distance: '100px' }"
          >
            our clients
          </h2>
          <p
            class="circular-book"
            v-scroll-reveal="{ delay: 175, origin: 'left', distance: '100px' }"
          >
            Our clients range from startups or small companies launching new digital products to large brands requiring a complex range of digital services. We provide the full spectrum of digital development needs and can also provide augmentation to current development teams.
          </p>

          <h2
            class="mt-35 pink-font circular-black"
            v-scroll-reveal="{ delay: 175, origin: 'left', distance: '100px' }"
          >
            our method
          </h2>
          <p
            class="circular-book"
            v-scroll-reveal="{ delay: 175, origin: 'left', distance: '100px' }"
          >
            Our team analyzes the best approach and strategy for your product and team. From the infancy of a project to its ultimate delivery, we ensure the maximum impact with minimum stress. We assess and employ the technologies, languages, and architecture most suitable for each product for a smooth rollout. Client feedback and collaboration is key; we listen and advise on the best strategic action every step of the way.
          </p>
          <p
            class="circular-book"
            v-scroll-reveal="{ delay: 175, origin: 'left', distance: '100px' }"
          >
            Our team uses our expertise in design and development to explore and define the best strategy for your team. We work to grow and maintain a transparent collaboration that extends beyond a launch date. From concept to delivery, we offer solutions that will ensure a successful product.
          </p>
        </div>
      </div>
      <div class="info-block black-bg">
        <b-row class="">
          <b-col cols="12" sm="6" md="6" lg="4" class="text-center" v-scroll-reveal="{ delay: 275, origin: 'bottom', distance: '100px' }">
            <b-row>
              <b-col class="pink-font circular-black ft-22 mb-2 mt-4">Strategy</b-col>
            </b-row>
            <b-row>
              <b-col class="circular-book ft-16">
                <li>Market research</li>
                <li>Brand expertise</li>
                <li>Conceptualize</li>
                <li>Collaborate</li>
                <li>Product management</li>
              </b-col>
            </b-row>
          </b-col>
          <b-col cols="12" sm="6" md="6" lg="4" class="text-center" v-scroll-reveal="{ delay: 275, origin: 'top', distance: '100px' }">
            <b-row>
              <b-col class="pink-font circular-black ft-22 mb-2 mt-4">Design and UX</b-col>
            </b-row>
            <b-row>
              <b-col class="circular-book ft-16">
                <li>Photoshop / Sketch</li>
                <li>Wireframing</li>
                <li>User interface</li>
                <li>User experience</li>
                <li>Mobile app design</li>
                <li>Responsive website design</li>
              </b-col>
            </b-row>
          </b-col>
          <b-col cols="12" sm="6" md="6" lg="4" class="text-center" v-scroll-reveal="{ delay: 275, origin: 'bottom', distance: '100px' }">
            <b-row>
              <b-col class="pink-font circular-black ft-22 mb-2 mt-4">App Development</b-col>
            </b-row>
            <b-row>
              <b-col class="circular-book ft-16">
                <li>iOS (Objective-C, Swift)</li>
                <li>Android (Java, Kotlin)</li>
                <li>Hybrid apps (ReactNative, JS)</li>
              </b-col>
            </b-row>
          </b-col>
          <b-col cols="12" sm="6" md="6" lg="4" class="text-center" v-scroll-reveal="{ delay: 275, origin: 'top', distance: '100px' }">
            <b-row>
              <b-col class="pink-font circular-black ft-22 mb-2 mt-4">Frontend Development</b-col>
            </b-row>
            <b-row>
              <b-col class="circular-book ft-16">
                <li>Responsive websites</li>
                <li>HTML5</li>
                <li>CSS3 / SASS</li>
                <li>Javascript / ES6</li>
                <li>VueJS</li>
                <li>ReactJS</li>
                <li>Shopify</li>
                <li>Wordpress</li>
              </b-col>
            </b-row>
          </b-col>
          <b-col cols="12" sm="6" md="6" lg="4" class="text-center" v-scroll-reveal="{ delay: 275, origin: 'bottom', distance: '100px' }">
            <b-row>
              <b-col class="pink-font circular-black ft-22 mb-2 mt-4">Backend Development</b-col>
            </b-row>
            <b-row>
              <b-col class="circular-book ft-16">
                <li>PHP</li>
                <li>Python</li>
                <li>GO</li>
                <li>Ruby</li>
                <li>MySQL / MongoDB</li>
                <li>API integration</li>
              </b-col>
            </b-row>
          </b-col>
          <b-col cols="12" sm="6" md="6" lg="4" class="text-center" v-scroll-reveal="{ delay: 275, origin: 'top', distance: '100px' }">
            <b-row>
              <b-col class="pink-font circular-black ft-22 mb-2 mt-4">Systems</b-col>
            </b-row>
            <b-row>
              <b-col class="circular-book ft-16">
                <li>AWS / Cloud hosting</li>
                <li>Docker</li>
                <li>Kubernetes</li>
                <li>Continuous integration</li>
                <li>Unit / Integration testing</li>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </div>
      <div class="info-block transparent-bg">
        <div class="info-wrap">
          <h2
            class="pink-font circular-black"
            v-scroll-reveal="{ delay: 175, origin: 'left', distance: '100px' }"
          >
            some of our clients
          </h2>
          <div v-scroll-reveal="{ delay: 275, origin: 'right', distance: '100px' }">
            <div class="d-none d-sm-flex justify-content-between align-self-center mx-auto clients">
              <div><img src="../assets/img/services/wb.svg" height="65" alt="Warner Bros." /></div>
              <div><img src="../assets/img/services/lf.svg" height="65" alt="LF Stores" /></div>
              <div><img src="../assets/img/services/fox.svg" height="65" alt="20th Century Fox" /></div>
              <div><img src="../assets/img/services/annenberg.svg" height="65" alt="The Annenberg Foundation" /></div>
            </div>
            <div class="d-block d-sm-none clients mt-5 mb-35">
              <b-row>
                <b-col cols="6"><img src="../assets/img/services/wb.svg" height="70" alt="Warner Bros." /></b-col>
                <b-col cols="6"><img src="../assets/img/services/lf.svg" height="70" alt="LF Stores" /></b-col>
              </b-row>
              <b-row class="mt-4">
                <b-col cols="6"><img src="../assets/img/services/fox.svg" height="70" alt="20th Century Fox" /></b-col>
                <b-col cols="6"><img src="../assets/img/services/annenberg.svg" height="70" alt="The Annenberg Foundation" /></b-col>
              </b-row>
              <!-- <div class="d-flex justify-content-between">
                <img src="../assets/img/services/wb.svg" height="70" alt="Warner Bros." />
                <img src="../assets/img/services/lf.svg" height="70" alt="LF Stores" />
              </div>
              <div class="d-flex justify-content-between">
                <img src="../assets/img/services/fox.svg" height="70" alt="20th Century Fox" />
                <img src="../assets/img/services/annenberg.svg" height="70" alt="The Annenberg Foundation" />
              </div> -->
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
  name: 'Services',
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
      // strings: ['Materialize is&nbsp;</br>a design and development&nbsp;</br>oriented agency.'],
      strings: ['Materialize engineers </br> compelling digital products.'],
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
  perspective: 1000px;
}
.fixed-bg img {
  width: 98vmin;
  transform-style: preserve-3d;
  animation: spin 4s linear infinite;
  -webkit-transform-style: preserve-3d;
  -webkit-animation: spin 4s linear infinite;
}
@keyframes spin {
  0%   { transform: rotateY(0deg) rotateX(0deg);   }
  25%  { transform: rotateY(15deg) rotateX(7.5deg); }
  50%  { transform: rotateY(0deg) rotateX(0deg);   }
  75%  { transform: rotateY(-15deg) rotateX(-7.5deg); }
  100% { transform: rotateY(0deg) rotateX(0deg);   }
}
@-webkit-keyframes spin {
  0%   { -webkit-transform: rotateY(0deg) rotateX(0deg);   }
  25%  { -webkit-transform: rotateY(15deg) rotateX(7.5deg); }
  50%  { -webkit-transform: rotateY(0deg) rotateX(0deg);   }
  75%  { -webkit-transform: rotateY(-15deg) rotateX(-7.5deg); }
  100% { -webkit-transform: rotateY(0deg) rotateX(0deg);   }
}

.wrapper {
  background-color: rgba(255, 255, 255, .7);
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
}
.info-wrap p {
  font-size: 16px;
}

.tile-grid {
}

.tile-grid p {
  font-weight: 700;
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
  width: calc(100% - 0px);
  padding: 5% 20px;
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
  font-family:'Circular Std Black', Helvetica;
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
  font-family:'Circular Std Book', Helvetica;
  height: auto;
  align-items: center;
  display: flex;
  justify-content: center;
}

.sub-title p {
  font-size: 14px;
  font-weight: 100;
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
.tile:nth-child(4n) {
  margin-right: 0;
  border-right: none;
}

@media (min-width: 576px) {
  .tile {
    width: calc(50% - 0px);
    border-right: 1px solid #eaeaea;
  }
}

@media (min-width: 768px) {
  .tile {
    width: calc(25% - 0px);
  }
}

@media only screen and (max-width: 768px) {
  .tile-grid p {
    padding: 18px 15px 6px 15px;
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
  .info-wrap p {
    font-size: 18px;
  }
  .sub-title {
    height: 200px;
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
  .sub-title {
    height: 144px;
  }
}
</style>
