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
          src="../assets/img/ball.png"
          alt="Warner Bros."
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
      <div class="container-fluid black-bg cut-to-top">
        <b-row>
          <b-col cols="12" md="8" offset-md="1">
            <h2 class="ft-24 circular-book mt-35 pink-font">Leadership</h2>
          </b-col>
        </b-row>
      </div>
    </div>
  </div>
</template>

<script>
import Typed from 'typed.js';

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
  },
};
</script>

<style lang="scss" scoped>
// .headline-img img {
//   // background: url(../assets/img/ball.png) no-repeat;
//   // -webkit-background-size: contain;
//   // -moz-background-size: contain;
//   // -o-background-size: contain;
//   // background-size: contain;
//   // background-position: center;
//   // opacity: 0.3;
// }

// .fixed-bg {
//   position: fixed;
//   z-index: -10;
//   left: 50%;
//   -webkit-transform: translateX(-50%);
//   transform: translateX(-50%);
//   perspective: 1000px;
// }
// .fixed-bg img {
//   width: 75vmin;
//   transform-style: preserve-3d;
//   animation: spin 6s linear infinite;
//   -webkit-transform-style: preserve-3d;
//   -webkit-animation: spin 6s linear infinite;
// }
.typed {
  min-height: 500px;
}

@media (min-width: 1024px) {
  // .fixed-bg img {
  //   width: 63vmin;
  // }
}
</style>
