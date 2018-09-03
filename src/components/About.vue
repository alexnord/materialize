<template>
  <div
    id="about-page"
    class="page"
  >
<!--     <div
      class="fixed-bg"
      v-bind:style="{ top: bgPosition }"
    >
      <img src="../assets/img/ball.png" />
    </div> -->
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
  created() {
    window.addEventListener('resize', this.handleResize);
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {},
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

#about-page {
  background-color: rgba(255, 255, 255, 0);
  background-image:
    linear-gradient(rgba(0, 0, 0, .3) 1px, transparent 2px),
    linear-gradient(90deg, rgba(0, 0, 0, .3) 1px, transparent 2px),
    linear-gradient(rgba(0,0,0,.3) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0,0,0,.3) 1px, transparent 1px);
  background-size: 75px 75px, 75px 75px, 15px 15px, 15px 15px;
  background-position: -2px -2px, -2px -2px, -1px -1px, -1px -1px;
}

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
// @keyframes spin {
//   0%   { transform: rotateY(0deg); }
//   25%  { transform: rotateY(50deg); }
//   50%  { transform: rotateY(0deg); }
//   75%  { transform: rotateY(-50deg); }
//   100% { transform: rotateY(0deg); }
// }
@keyframes spin {
  0%   { transform: rotateY(0deg) rotateX(0deg);   }
  25%  { transform: rotateY(10deg) rotateX(7.5deg); }
  50%  { transform: rotateY(0deg) rotateX(0deg);   }
  75%  { transform: rotateY(-10deg) rotateX(-7.5deg); }
  100% { transform: rotateY(0deg) rotateX(0deg);   }
}
@-webkit-keyframes spin {
  0%   { -webkit-transform: rotateY(0deg) rotateX(0deg);   }
  25%  { -webkit-transform: rotateY(10deg) rotateX(7.5deg); }
  50%  { -webkit-transform: rotateY(0deg) rotateX(0deg);   }
  75%  { -webkit-transform: rotateY(-10deg) rotateX(-7.5deg); }
  100% { -webkit-transform: rotateY(0deg) rotateX(0deg);   }
}

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

.wrapper {
  background-color: rgba(255, 255, 255, .85);
}
.typed {
  min-height: 500px;
}

@media (min-width: 1024px) {
  // .fixed-bg img {
  //   width: 63vmin;
  // }
}
</style>
