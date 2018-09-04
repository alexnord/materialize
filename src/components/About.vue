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
          src="../assets/img/dna.png"
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
.footer {
  position: relative !important;
}
@media (min-width: 1024px) {

}
</style>
