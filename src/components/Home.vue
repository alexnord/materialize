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
    <div class="typed">
      <div class="headline">
        <span id="headline"></span>
      </div>
      <div class="home-block">
        <span id="description"></span>
      </div>
      <transition name="fade">
        <div class="see-work" v-show="fadeLink">
          <router-link to="/work"><span>see our work ></span></router-link>
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
    };
  },
  mounted() {
    /* eslint-disable no-new */
    new Typed('#headline', {
      strings: ['a digital agency <br> dedicated to <br>technical excellence.'],
      typeSpeed: 30,
      loop: false,
    });
    new Typed('#description', {
      strings: ['Los Angeles based agency specializing in high-end application development for brands.'],
      typeSpeed: 15,
      loop: false,
    });
    /* eslint-enable no-new */

    this.fadeLink = true;
  },
  methods: {},
  components: {
    Typed,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.headline {
  font-size: 28px;
  padding: 0px 5px;
}
.home-block {
  margin: 0 auto;
  font-size: 16px;
  margin-top: 40px;
  padding: 0px 10px;
}
.typed {
  text-align: center;
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
span.typed-cursor {
  position: relative;
  left: -9px;
}
.see-work {
  font-size: 22px;
  margin-top: 60px;
  transition-delay: 2.5s;
  transition-duration: 4s;
}
.see-work a {
  color: #DF0070;
}

@media (min-width: 375px) {
  .headline {
    font-size: 31px;
  }
}

@media (min-width: 768px) {
  .headline {
    font-size: 52px;
  }
  .home-block {
    font-size: 24px;
    margin-top: 60px;
    width: 680px;
  }
}
</style>
