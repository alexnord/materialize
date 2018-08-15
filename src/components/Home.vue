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
      v-bind:style="{ height: viewportHeight }"
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
          <router-link to="/about"><button id="learn-more">learn more</button></router-link>
          <button id="reach-out" v-b-modal.contact-form>reach out</button>
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
    this.viewportHeight = `${window.innerHeight + 50}px`;
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
      strings: ['a digital agency dedicated to technical excellence.'],
      typeSpeed: 15,
      loop: false,
    });
    new Typed('#description', {
      strings: ['Specializing in high-end digital design and development for companies and brands.</br></br>Los Angeles, CA'],
      typeSpeed: 10,
      loop: false,
    });
    /* eslint-enable no-new */

    this.fadeLink = true;
  },
  methods: {
    handleResize() {
      this.viewportHeight = `${window.innerHeight + 50}px`;
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
  background-color: rgba(245, 169, 30, .8);
  border: 2px solid rgba(0, 0, 0, 0.12);
}
button#learn-more:hover {
  background-color: rgb(162, 115, 29);
}
button#reach-out {
  background-color: rgba(223, 0, 112, .8);
  border: 2px solid rgba(0, 0, 0, 0.12);
}
button#reach-out:hover {
  background-color: rgba(119, 1, 60, 0.8);
}

@media (min-width: 375px) {
  .see-work {
    margin-top: 60px;
  }
}
</style>
