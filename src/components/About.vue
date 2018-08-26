<template>
  <div class="About-page">
    <div
      class="fixed-bg"
      v-bind:style="{ top: bgPosition }"
    >
      <img src="../assets/img/plane.png" />
    </div>
    <div class="wrapper">
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
      </div>
    </div>
    <button class="contact" v-b-modal.contact-form>contact</button>
  </div>
</template>

<script>
import Typed from 'typed.js';

export default {
  name: 'About',
  data() {
    return {
      viewportHeight: '0px',
      bgPosition: '0px',
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
  beforeMount() {
    this.viewportHeight = `${window.innerHeight}px`;

    const percentage = window.innerHeight;
    const twentyFive = percentage * 0.35;
    const seventeen = percentage * 0.25;
    this.bgPosition = window.innerWidth >= 768 ? `${seventeen}px` : `${twentyFive}px`;
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
      strings: ['We&#39;re Materialize, a software development firm based in Los Angeles, CA.'],
      typeSpeed: 15,
      loop: false,
    });
    new Typed('#description', {
      strings: [
        'We are a passionate team of strategists, designers, and developers who love to create sophisticated products.',
      ],
      typeSpeed: 10,
      loop: false,
      showCursor: false,
    });
    /* eslint-enable no-new */
    this.fadeLink = true;
  },
  methods: {
    handleResize() {
      this.viewportHeight = `${window.innerHeight}px`;

      const percentage = window.innerHeight;
      const twentyFive = percentage * 0.35;
      const seventeen = percentage * 0.25;
      this.bgPosition = window.innerWidth >= 768 ? `${seventeen}px` : `${twentyFive}px`;
    },
  },
  components: {
    Typed,
  },
};
</script>

<style scoped>
.fixed-bg {
  position: fixed;
  z-index: -10;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  perspective: 1000px;
}
.fixed-bg img {
  width: 98vmin;
  transform-style: preserve-3d;
  animation: spin 6s linear infinite;
  -webkit-transform-style: preserve-3d;
  -webkit-animation: spin 6s linear infinite;
}
@keyframes spin {
  0%   { transform: rotateY(0deg) rotateX(0deg);   }
  25%  { transform: rotateY(15deg) rotateX(7.5deg); }
  50%  { transform: rotateY(0deg) rotateX(0deg);   }
  75%  { transform: rotateY(-15deg) rotateX(-7.5deg); }
  100% { transform: rotateY(0deg) rotateX(0deg);   }
}
@-webkit-keyframes spin {
  0%   { -webkit-transform: rotateY(0deg) rotateX(0deg);   }
  25%  { -webkit-transform: rotateY(15deg) rotateX(7.5deg); }
  50%  { -webkit-transform: rotateY(0deg) rotateX(0deg);   }
  75%  { -webkit-transform: rotateY(-15deg) rotateX(-7.5deg); }
  100% { -webkit-transform: rotateY(0deg) rotateX(0deg);   }
}
.wrapper {
  background-color: rgba(255, 255, 255, .76);
}
.cta {
  width: 100%;
  margin: 35px auto;
  font-size: 18px;
  cursor: pointer;
  transition-delay: 1.5s;
  transition-duration: 2s;
}
.cta button {
  padding: 8px 18px;
  background-color: rgba(223, 0, 112, .8);
  border: 2px solid rgba(0, 0, 0, 0.12);
  border-radius: 5px;
  color: #FFF;
}

@media (min-width: 1024px) {
  .fixed-bg img {
    width: 90vmin;
  }
}
</style>
