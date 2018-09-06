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
          src="../assets/img/backgrounds/dna.png"
        />
      </div>
      <div
        class="typed d-flex align-content-center flex-wrap"
        v-bind:style="{ height: this.$parent.viewportHeight }"
      >
        <div class="headline">
          <div class="fixed-width">
            <span id="headline"></span>
          </div>
        </div>
        <div class="description">
          <span id="description"></span>
        </div>
      </div>
      <b-container fluid class="black-bg cut-to-top">
        <b-row>
          <b-col cols="12" class="text-center">
            <h2 class="mt-3 pink-font circular-black leadership-headline">Leadership</h2>
          </b-col>
        </b-row>
        <b-row class="mt-3 leadership pb-4">
          <b-col cols="12" offset-md="2" md="4" offset-lg="3" lg="3">
            <div class="person">
              <img src="../assets/img/headshots/alex.jpg" class="img-fluid" alt="Founder - Alex Nordlinger">
              <div class="name circular-med pink-font">Alex Nordlinger</div>
              <div class="position circular-book mb-3">Founder</div>
            </div>
          </b-col>
          <b-col cols="12" md="4" lg="3">
            <div class="person">
              <img src="../assets/img/headshots/cody.jpg" class="img-fluid" alt="Managing Director - Cody Rasmus">
              <div class="name circular-med pink-font">Cody Rasmus</div>
              <div class="position circular-book">Managing Director</div>
            </div>
          </b-col>
        </b-row>
      </b-container>
      <div class="info-block transparent-bg">
        <div class="info-wrap">
          <h2
            class="pink-font circular-black"
            v-scroll-reveal="{ delay: 175, origin: 'left', distance: '100px' }"
          >
            Why work with us?
          </h2>
          <p
            class="circular-book"
            v-scroll-reveal="{ delay: 175, origin: 'left', distance: '100px' }"
          >
            Our team loves bringing ideas to life just as much as improving existing ones. By building beautiful products that are easy to use, we promise your idea will make a big splash. Whether that means saving time through automated back-end systems, improving the buying experience on your site, or the next big app release, we can deliver the best technology and service for your needs.
          </p>
          <div class="cta text-center" v-show="fadeLink">
            <button id="blue" v-b-modal.contact-form>contact us</button>
          </div>
        </div>
      </div>
      <div class="info-block transparent-bg">
        <div class="info-wrap">
          <router-link
            to="/work"
          >
            <h2
              class="pink-font circular-black mb-3"
              v-scroll-reveal="{ delay: 175, origin: 'left', distance: '100px' }"
            >
              Some of our happy clients
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
import Footer from './Footer';

export default {
  name: 'About',
  data() {
    return {
      fadeLink: false,
      form: {
        first_name: '',
        last_name: '',
        email: '',
        company: '',
        phone: '',
        message: '',
      },
    };
  },
  mounted() {
    /* eslint-disable no-new */
    new Typed('#headline', {
      strings: ['a software development firm based in Los Angeles.'],
      typeSpeed: 15,
      loop: false,
    });
    new Typed('#description', {
      strings: [
        'we are a passionate team of strategists, designers, and developers who love to create sophisticated products.',
      ],
      typeSpeed: 10,
      loop: false,
      showCursor: false,
    });
    /* eslint-enable no-new */
    this.fadeLink = true;
  },
  components: {
    Typed,
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
    opacity: .2;
    transform-style: preserve-3d;
    animation: spin 6s linear infinite;
    -webkit-transform-style: preserve-3d;
    -webkit-animation: spin 6s linear infinite;
  }
}
@keyframes spin {
  0%   { transform: rotateY(0deg);   }
  25%  { transform: rotateY(10deg); }
  50%  { transform: rotateY(15deg);   }
  75%  { transform: rotateY(10deg); }
  100% { transform: rotateY(0deg);   }
}
.typed {
  min-height: 500px;
}
.leadership-headline {
  font-size: 22px;
}
.leadership {
  .person {
    img {
      margin-bottom: 5px;
    }
    .name {
      font-size: 20px;
    }
    .position {
      position: relative;
      bottom: 6px;
      font-size: 16px;
    }
  }
}
.footer {
  position: relative !important;
}
@media (min-width: 768px) {
  .leadership-headline {
    font-size: 28px;
  }
}
</style>
