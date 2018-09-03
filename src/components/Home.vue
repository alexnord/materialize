<template>
  <div class="overflow-hidden">
    <vue-particles
        color="#6d6d6d"
        :particleOpacity="0.4"
        :particlesNumber="120"
        shapeType="polygon"
        :particleSize="2"
        linesColor="#6d6d6d"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.2"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="false"
        hoverMode="grab"
        :clickEffect="false"
        clickMode="push"
        >
      </vue-particles>
    <div
      class="typed d-flex align-content-center flex-wrap"
      v-bind:style="{ height: viewportHeight, top: 35 + 'px' }"
    >
      <div class="headline">
        <div class="fixed-width">
          <span id="headline"></span>
        </div>
      </div>
      <div class="description">
        <span id="description"></span>
      </div>
      <transition name="fade">
        <div class="cta" v-show="fadeLink">
          <router-link to="/services"><button id="learn-more">our services</button></router-link>
        </div>
      </transition>
      <!-- <div class="clients-block">
        <h2
          class="pink-font mb-4 text-left text-lowercase"
          v-scroll-reveal="{ delay: 175, origin: 'left', distance: '100px' }"
        >
          some happy clients
        </h2>
        <div v-scroll-reveal="{ delay: 275, origin: 'left', distance: '100px' }">
          <div class="d-none d-sm-flex justify-content-between align-self-center mx-auto clients">
            <div><img src="../assets/img/services/wb.svg" height="55" alt="Warner Bros." /></div>
            <div><img src="../assets/img/services/lf.svg" height="55" alt="LF Stores" /></div>
            <div><img src="../assets/img/services/fox.svg" height="55" alt="20th Century Fox" /></div>
            <div><img src="../assets/img/services/annenberg.svg" height="55" alt="The Annenberg Foundation" /></div>
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
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
import Typed from 'typed.js';

export default {
  name: 'Home',
  data() {
    return {
      fadeLink: false,
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
      strings: ['a digital product agency dedicated to technical excellence.'],
      typeSpeed: 15,
      loop: false,
    });
    new Typed('#description', {
      strings: ['Specializing in high-end digital design and engineering for companies and brands.</br></br>Los Angeles, CA'],
      typeSpeed: 10,
      loop: false,
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.typed {
  min-height: 565px;
}
#chevron-right {
  position: relative;
  top: 1px;
}
.cta {
  width: 100%;
  margin: 40px auto;
  font-size: 18px;
  cursor: pointer;
  transition-delay: 1.7s;
  transition-duration: 2s;
}
.cta button {
  border-radius: 5px;
  color: #FFF;
  padding: 8px 18px;
  cursor: pointer;
}
button#learn-more {
  background-color: rgba(8, 189, 189, .8);
  border: 2px solid rgba(0, 0, 0, 0.12);
}
button#learn-more:hover {
  background-color: rgba(12, 154, 154, 1)
}
.clients-block {
  width: 600px;
  height: 140px;
  margin: 0 auto;
}
.clients img {
  opacity: .8;
}
</style>
