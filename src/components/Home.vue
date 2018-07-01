<template>
  <div class="typed">
    <div class="headline">
      <span id="headline"></span>
    </div>
    <div class="home-block">
      <span id="description"></span>
    </div>
  </div>
</template>

<script>
import Typed from 'typed.js';

export default {
  name: 'Home',
  data() {
    return {};
  },
  mounted() {
    /* eslint-disable no-new */
    new Typed('#headline', {
      strings: ['a digital agency <br> dedicated to <br>technical excellence.'],
      typeSpeed: 40,
      loop: false,
    });
    new Typed('#description', {
      strings: ['Los Angeles based agency specializing in high-end application development for brands.'],
      typeSpeed: 20,
      loop: false,
    });
    /* eslint-enable no-new */
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
  font-size: 31px;
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
