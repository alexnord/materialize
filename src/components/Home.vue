<template>
  <div>
    <vue-particles
        color="#6d6d6d"
        :particleOpacity="0.4"
        :particlesNumber="120"
        shapeType="polygon"
        :particleSize="2"
        linesColor="#6d6d6d"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.3"
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
      v-bind:style="{ height: viewportHeight }"
    >
      <div class="headline">
        <span id="headline"></span>
      </div>
      <div class="description">
        <span id="description"></span>
      </div>
      <transition name="fade">
        <div class="see-work" v-show="fadeLink">
          <router-link to="/work"><p>see our work <span id="chevron-right">&#62;</span></p></router-link>
        </div>
      </transition>
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
      strings: ['a digital agency <br> dedicated to <br>technical excellence.'],
      typeSpeed: 25,
      loop: false,
    });
    new Typed('#description', {
      strings: ['Los Angeles based agency specializing in high-end application development for brands.'],
      typeSpeed: 12,
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
.see-work {
  text-align: center;
  width: 100%;
  font-size: 22px;
  margin-top: 40px;
  transition-delay: 2.5s;
  transition-duration: 4s;
}
.see-work a {
  color: #DF0070;
}
.see-work a:hover {
  text-decoration: none;
  color: #000;
}
#chevron-right {
  position: relative;
  top: 1px;
}

@media (min-width: 375px) {
  .see-work {
    margin-top: 60px;
  }
}
</style>
