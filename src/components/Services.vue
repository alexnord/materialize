<template>
  <div
    class="graph-page"
  >
    <div class="wrapper">
      <div
        class="headline-img position-absolute"
        v-bind:style="{ height: this.$parent.bgPosition, top: `${this.$parent.navHeight}px` }"
      >
        <img
          v-bind:style="{ height: this.$parent.bgHeight, width: this.$parent.bgWidth }"
          src="../assets/img/backgrounds/devices.png"
        />
      </div>
      <div
        class="typed d-flex align-content-center flex-wrap"
        v-bind:style="{ height: this.$parent.viewportHeight }"
      >
        <div class="headline">
          <span id="headline"></span>
        </div>
        <div class="description">
          <span id="description"></span>
        </div>
      </div>
      <div class="container-fluid black-bg cut-to-top">
        <b-row>
          <b-col cols="12" md="8" offset-md="1">
            <h2
              class="mt-35 pink-font circular-black our-services"
              v-scroll-reveal="{ delay: 175, origin: 'left', distance: '100px' }"
            >
              Our Services
            </h2>
            <p
              class="ft-24 circular-book mb-35 our-services-copy"
              v-scroll-reveal="{ delay: 175, origin: 'left', distance: '100px' }"
            >
              We work closely with our clients through every stage of development and create tailored digital products designed to exceed their goals. Our services offer a one-stop, holistic solution for robust web development.
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
                <div class="title pink-font">
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
                <div class="title pink-font">
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
                <div class="title pink-font">
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
                <div class="title pink-font">
                  <p>Frontend Development</p>
                </div>
                <div class="sub-title">
                  <p>Beautifully landscaped digital experiences optimized for all browsers, devices, and screen sizes.</p>
                </div>
              </div>
            </div>
            <div class="tile">
              <div class="tile-content" v-scroll-reveal="{ delay: 175, origin: 'top', distance: '100px' }">
                <picture class="tile-icon">
                  <img src="../assets/img/icons/content_management.png" alt="content management icon">
                </picture>
                <div class="title pink-font">
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
                <div class="title pink-font">
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
                  <img src="../assets/img/icons/ecommerce.png" alt="ecommerce icon">
                </picture>
                <div class="title pink-font">
                  <p>E-Commerce</p>
                </div>
                <div class="sub-title">
                  <p>Shopify Plus certified. Seamless customer buying experience on your website and app.</p>
                </div>
              </div>
            </div>
            <div class="tile">
              <div class="tile-content" v-scroll-reveal="{ delay: 175, origin: 'bottom', distance: '100px' }">
                <picture class="tile-icon">
                  <img src="../assets/img/icons/content.png" alt="content icon">
                </picture>
                <div class="title pink-font">
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
            class="pink-font circular-black"
            v-scroll-reveal="{ delay: 175, origin: 'left', distance: '100px' }"
          >
            Our Clients
          </h2>
          <p
            class="circular-book"
            v-scroll-reveal="{ delay: 175, origin: 'left', distance: '100px' }"
          >
            Our clients range from startups and small companies launching digital products to large corporations requiring enterprise level software solutions. We provide the full spectrum of development needs and can augment projects that are already active.
          </p>

          <h2
            class="mt-35 pink-font circular-black"
            v-scroll-reveal="{ delay: 175, origin: 'left', distance: '100px' }"
          >
            Our Method
          </h2>
          <p
            class="circular-book"
            v-scroll-reveal="{ delay: 175, origin: 'left', distance: '100px' }"
          >
            We start with the end goal in mind. By knowing the goal, we build a roadmap that shows our clients the steps to get there. Client collaboration is key - we listen and advise on the best technologies, languages, and architecture to ensure a smooth rollout and impactful user-experience that will delight your customers. This roadmap allows us to efficiently move from a project’s infancy to its final delivery with full transparency and clear milestones.
          </p>
        </div>
      </div>
      <div class="info-block black-bg">
        <b-row class="">
          <b-col cols="12" sm="6" md="6" lg="4" class="text-center" v-scroll-reveal="{ delay: 275, origin: 'bottom', distance: '100px' }">
            <b-row>
              <b-col class="pink-font circular-black ft-18 mb-2 mt-4 text-uppercase">Strategy</b-col>
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
              <b-col class="pink-font circular-black ft-18 mb-2 mt-4 text-uppercase">Design and UX</b-col>
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
              <b-col class="pink-font circular-black ft-18 mb-2 mt-4 text-uppercase">App Development</b-col>
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
              <b-col class="pink-font circular-black ft-18 mb-2 mt-4 text-uppercase">Frontend Development</b-col>
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
              <b-col class="pink-font circular-black ft-18 mb-2 mt-4 text-uppercase">Backend Development</b-col>
            </b-row>
            <b-row>
              <b-col class="circular-book ft-16">
                <li>PHP</li>
                <li>Python</li>
                <li>Node</li>
                <li>Go</li>
                <li>MySQL / MongoDB</li>
                <li>API integration</li>
              </b-col>
            </b-row>
          </b-col>
          <b-col cols="12" sm="6" md="6" lg="4" class="text-center" v-scroll-reveal="{ delay: 275, origin: 'top', distance: '100px' }">
            <b-row>
              <b-col class="pink-font circular-black ft-18 mb-2 mt-4 text-uppercase">Systems</b-col>
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
          <router-link
            to="/work"
          >
            <h2
              class="pink-font circular-black"
              v-scroll-reveal="{ delay: 175, origin: 'left', distance: '100px' }"
            >
              Some of Our Clients
            </h2>
            <div v-scroll-reveal="{ delay: 275, origin: 'left', distance: '100px' }">
              <div class="d-none d-sm-flex justify-content-between align-self-center mx-auto clients">
                <div><img src="../assets/img/services/wb.svg" height="65" alt="Warner Bros." /></div>
                <div><img src="../assets/img/services/lf.svg" height="65" alt="LF Stores" /></div>
                <div><img src="../assets/img/services/fox.svg" height="65" alt="20th Century Fox" /></div>
                <!-- <div><img src="../assets/img/services/annenberg.svg" height="65" alt="The Annenberg Foundation" /></div> -->
              </div>
              <div class="d-block d-sm-none clients mt-5 mb-35">
                <b-row>
                  <b-col cols="6"><img src="../assets/img/services/wb.svg" height="70" alt="Warner Bros." /></b-col>
                  <b-col cols="6"><img src="../assets/img/services/lf.svg" height="70" alt="LF Stores" /></b-col>
                </b-row>
                <b-row class="mt-4">
                  <b-col cols="6"><img src="../assets/img/services/fox.svg" height="70" alt="20th Century Fox" /></b-col>
                  <!-- <b-col cols="6"><img src="../assets/img/services/annenberg.svg" height="70" alt="The Annenberg Foundation" /></b-col> -->
                </b-row>
              </div>
            </div>
          </router-link>
        </div>
      </div>
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Typed from 'typed.js';
import Flickity from 'vue-flickity';
import Footer from './Footer';

export default {
  name: 'Services',
  data() {
    return {
      flickityOptions: {
        pageDots: true,
        wrapAround: true,
        prevNextButtons: false,
      },
    };
  },
  mounted() {
    /* eslint-disable no-new */
    new Typed('#headline', {
      strings: ['Delivering expert <br> digital + ecommerce solutions.'],
      typeSpeed: 15,
      loop: false,
    });
    new Typed('#description', {
      strings: ['We build and support websites, mobile apps and ecommerce experiences that make an impact.'],
      typeSpeed: 10,
      loop: false,
    });
    /* eslint-enable no-new */
    this.fadeLink = true;
  },
  components: {
    Typed,
    Flickity,
    Footer,
  },
};
</script>

<style lang="scss" scoped>
.headline-img {
  display: flex;
  justify-content: center;
  align-items: center;
  perspective: 1000px;
  img {
    opacity: .35;
    transform-style: preserve-3d;
    animation: spin 6s linear infinite;
    -webkit-transform-style: preserve-3d;
    -webkit-animation: spin 6s linear infinite;
  }
}
@keyframes spin {
  0%   { transform: rotateY(0deg);   }
  25%  { transform: rotateY(10deg); }
  50%  { transform: rotateY(0deg);   }
  75%  { transform: rotateY(-10deg); }
  100% { transform: rotateY(0deg);   }
}
.typed {
  min-height: 430px;
}
.carousel-cell {
  width: 85%;
}
.cell-container {
  margin-left: -8%;
}

.our-services {
  font-size: 24px;
}
.our-services-copy {
  font-size: 16px;
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
.footer {
  position: relative !important;
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
  .our-services {
    font-size: 22px;
  }
  .our-services-copy {
    font-size: 22px;
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
