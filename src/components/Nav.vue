<template>
  <div
    id="nav"
    class="nav-wrap"
    v-bind:class="{ 'not-home': notHomeRoute, 'add-bg': this.$parent.addBg }"
  >
    <nav class="d-flex justify-content-between">
      <router-link
        to="/"
        @click.native="navExpanded=false"
      >
        <div class="logo">
          <svg version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/"
            x="0px" y="0px" width="100%" height="100%"
            viewBox="0 0 388.1 88.5"
            style="enable-background:new 0 0 388.1 88.5;"
            xml:space="preserve"
          >
          <defs>
          </defs>
          <path id="XMLID_34_" class="st0" d="M108.2,16.4c0-0.6-0.2-1.1-0.6-1.6L95.8,0.9C95.3,0.3,94.7,0,93.9,0H76.3
            c-0.8,0-1.4,0.4-1.9,0.9l0,0L54,26.5L34,1.4c0,0,0-0.1,0-0.1C33.6,0.5,32.8,0,31.8,0H14.2c-0.7,0-1.4,0.3-1.9,0.9L0.6,14.8
            c-0.4,0.5-0.6,1-0.6,1.6V86c0,1.3,1.1,2.4,2.4,2.4h19.4c0.7,0,1.3-0.3,1.7-0.7l0,0l10-9.7c0.5-0.5,0.7-1.1,0.7-1.8V64.7l6.7,8.8
            c0.4,0.6,1.1,0.9,1.8,1v0l20.9,0c0.7,0,1.4-0.3,1.9-0.9l8.4-10.3l0.1,13c0,0.7,0.3,1.3,0.7,1.7l9.5,9.2c0.4,0.4,1.2,1.1,2.1,1.1
            h19.4c1.3,0,2.4-1.1,2.4-2.4V16.4L108.2,16.4z M92.8,4.9l7.7,9H87.6l-6.5-9H92.8z M31.9,6.6l19,23.9l-7,8.8L25,16.3L31.9,6.6z
             M15.4,4.9h11.7l-6.5,9H7.7L15.4,4.9z M29.4,75.3l-5.1,4.9V51.5l5.1,6.7V75.3z M23.8,42.8c-0.6-0.8-1.7-1.2-2.7-0.8
            c-1,0.3-1.7,1.3-1.7,2.3v39.3H4.9V18.8h15.8l21.3,25.9c0.5,0.6,1.2,0.9,1.9,0.9c0,0,0,0,0,0c0.7,0,1.4-0.3,1.9-0.9L76.2,6.5l7,9.8
            L42.9,68.1L23.8,42.8z M83.9,80.1l-5-4.8l-0.1-18l5.1-6.2V80.1z M103.3,83.6H88.7V44.2c0-1-0.7-2-1.6-2.3c-1-0.3-2.1,0-2.7,0.8
            l-21.9,27l-14.6,0l39.6-50.8h15.8V83.6z"/>
          <g id="XMLID_1_" v-bind:class="{ 'expanded': navExpanded }">
            <path id="XMLID_33_" d="M162.4,16.1c-3,0-5.5,1.1-7.5,3.2c-1.5-2.1-3.7-3.2-6.6-3.2c-2.5,0-4.6,0.9-6.2,2.6v-2.3h-6.1v25h6.2V26.3
              c0-1.6,0.4-2.8,1.3-3.6c0.7-0.7,1.7-1,2.8-1c1.1,0,2.1,0.3,2.8,1c0.9,0.8,1.3,2,1.3,3.6v15.1h6.2V26.1c0-1.5,0.5-2.7,1.4-3.5
              c0.7-0.6,1.7-1,2.8-1c1.1,0,2,0.3,2.8,1c0.9,0.8,1.3,2,1.3,3.6v15.1h6.2v-16c0-2.9-0.9-5.3-2.7-7.1C167,16.8,165,16.1,162.4,16.1z"
              />
            <path id="XMLID_29_" d="M186.4,16.3c-2.2,0-3.9,0.2-5.2,0.7c-1.4,0.5-2.7,1.4-3.9,2.7l4,3.8c1.2-1.3,2.9-2,4.9-2
              c1.7,0,2.9,0.3,3.6,0.9c0.7,0.6,1.1,1.6,1.1,3v1.3h-6c-2.8,0-5,0.7-6.6,2.1c-1.4,1.3-2.1,3-2.1,5.1c0,2.3,0.7,4.2,2.1,5.6
              c1.5,1.4,3.6,2.2,6.4,2.2c2.6,0,4.6-0.8,6.2-2.4v2.1h6.2V25.1C197.2,19.2,193.6,16.3,186.4,16.3z M190.8,32.2
              c0,1.5-0.3,2.6-0.9,3.1c-0.9,0.8-2.2,1.2-4,1.2c-2.4,0-3.7-0.9-3.7-2.8c0-1.9,1.2-2.8,3.6-2.8h5V32.2z"/>
            <path id="XMLID_28_" d="M205.8,34.3c0,2,0.6,3.6,1.7,4.9c1.3,1.5,3.2,2.3,5.5,2.3h3.4v-5.3h-2.3c-1.4,0-2.2-0.8-2.2-2.3v-12h4.4
              v-4.8h-4.4V9.7h-6.2v7.4h-2.6v4.8h2.6V34.3z"/>
            <path id="XMLID_25_" d="M230.8,16.2c-3.3,0-5.9,1.1-7.8,3.3c-2,2.3-3,5.4-3,9.4c0,8.5,3.8,12.7,11.5,12.7c3.7,0,6.8-1.3,9.5-3.9
              l-3.8-3.7c-1.5,1.6-3.4,2.4-5.6,2.4c-1.6,0-2.9-0.5-3.8-1.4c-0.9-0.9-1.4-2.1-1.5-3.6h0v-0.2c0,0,0-0.1,0-0.1c0,0,0-0.1,0-0.1h15.6
              v-2.8c0-3.5-0.9-6.3-2.8-8.5C236.8,17.4,234.2,16.2,230.8,16.2z M226.1,26.6c0-1,0.2-1.8,0.6-2.6c0.8-1.7,2.1-2.6,4.1-2.6
              c2,0,3.4,0.9,4.2,2.6c0.3,0.8,0.5,1.7,0.6,2.6H226.1z"/>
            <path id="XMLID_24_" d="M253.3,18.8v-2.4h-6.1v25h6.2V26.3c0-1.5,0.4-2.6,1.3-3.5c0.8-0.7,1.7-1.1,2.7-1.1c1.2,0,2.3,0.5,3.3,1.5
              l4.7-4.8c-1.6-1.6-3.5-2.4-5.9-2.4C256.9,16.1,254.8,17,253.3,18.8z"/>
            <rect id="XMLID_23_" x="270" y="7.1" width="6.4" height="5.1"/>
            <rect id="XMLID_22_" x="270.1" y="16.5" width="6.2" height="25"/>
            <path id="XMLID_19_" d="M293.4,16.3c-2.2,0-3.9,0.2-5.2,0.7c-1.4,0.5-2.7,1.4-3.9,2.7l4,3.8c1.2-1.3,2.9-2,4.9-2
              c1.7,0,2.9,0.3,3.6,0.9c0.7,0.6,1.1,1.6,1.1,3v1.3h-6c-2.8,0-5,0.7-6.6,2.1c-1.4,1.3-2.1,3-2.1,5.1c0,2.3,0.7,4.2,2.1,5.6
              c1.5,1.4,3.6,2.2,6.4,2.2c2.6,0,4.6-0.8,6.2-2.4v2.1h6.2V25.1C304.2,19.3,300.6,16.3,293.4,16.3z M297.9,32.3
              c0,1.5-0.3,2.6-0.9,3.1c-0.9,0.8-2.2,1.2-4,1.2c-2.4,0-3.7-0.9-3.7-2.8c0-1.9,1.2-2.8,3.6-2.8h5V32.3z"/>
            <path id="XMLID_18_" d="M316,33.9V7.2h-6.2v27.1c0,2,0.6,3.6,1.7,4.9c1.3,1.5,3.2,2.3,5.6,2.3h3.6v-5.3h-2.4
              C316.8,36.1,316,35.4,316,33.9z"/>
            <rect id="XMLID_17_" x="327.4" y="16.5" width="6.2" height="25"/>
            <rect id="XMLID_16_" x="327.3" y="7.1" width="6.4" height="5.1"/>
            <polygon id="XMLID_15_" points="341.1,22.1 351.5,22.1 340.4,36.8 340.4,41.5 359.5,41.5 359.5,35.9 348.3,35.9 359.5,21.2 359.5,16.5 341.1,16.5"/>
            <path id="XMLID_12_" d="M372.5,30.7C372.5,30.7,372.5,30.7,372.5,30.7l15.6-0.1v-2.8c0-3.5-0.9-6.3-2.8-8.5c-2-2.2-4.6-3.4-8-3.4
              c-3.3,0-5.9,1.1-7.8,3.3c-2,2.3-3,5.4-3,9.4c0,8.5,3.8,12.7,11.5,12.7c3.7,0,6.8-1.3,9.5-3.9l-3.8-3.7c-1.5,1.6-3.4,2.4-5.6,2.4
              c-1.6,0-2.9-0.5-3.8-1.4c-0.9-0.9-1.4-2.1-1.5-3.6h0v-0.2C372.5,30.9,372.5,30.8,372.5,30.7z M373.1,23.7c0.8-1.7,2.1-2.6,4.1-2.6
              c2,0,3.4,0.9,4.2,2.6c0.3,0.8,0.5,1.7,0.6,2.6h-9.5C372.5,25.4,372.7,24.5,373.1,23.7z"/>
            <path id="XMLID_11_" d="M141.9,74.9V50h-5.8v25.3c0,1.8,0.5,3.3,1.6,4.6c1.2,1.4,3,2.1,5.2,2.1h3.3V77H144
              C142.6,77,141.9,76.3,141.9,74.9z"/>
            <path id="XMLID_8_" d="M158.9,58.5c-2,0-3.7,0.2-4.9,0.7c-1.3,0.5-2.5,1.3-3.7,2.5l3.8,3.6c1.1-1.3,2.7-1.9,4.6-1.9
              c1.6,0,2.7,0.3,3.4,0.9c0.7,0.6,1,1.5,1,2.8v1.2h-5.6c-2.6,0-4.7,0.6-6.1,1.9c-1.3,1.2-2,2.8-2,4.8c0,2.2,0.7,3.9,2,5.2
              c1.4,1.3,3.4,2,6,2c2.4,0,4.3-0.7,5.8-2.2v2h5.8V66.7C169,61.2,165.6,58.5,158.9,58.5z M163,73.3c0,1.4-0.3,2.4-0.9,2.9
              c-0.8,0.7-2,1.1-3.7,1.1c-2.3,0-3.4-0.9-3.4-2.6c0-1.7,1.1-2.6,3.3-2.6h4.7V73.3z"/>
            <path id="XMLID_5_" d="M186.2,58.3c-2.4,0-4.2,0.8-5.7,2.3V50h-5.8v32l5.6,0.1c0.6,0.1,5.2,0.2,5.9,0.2c2.4,0,4.3-0.7,5.7-2.1
              c1.6-1.6,2.4-4.9,2.4-9.9c0-5-0.8-8.2-2.4-9.8C190.5,59,188.6,58.3,186.2,58.3z M187.8,75c-0.6,1.3-1.7,2-3.3,2c0,0-3.7,0-4,0
              l0.1-5.7c0-0.4,0-0.7,0-1.1c0-2.2,0.2-3.8,0.7-4.8c0.6-1.3,1.7-1.9,3.3-1.9c1.6,0,2.7,0.6,3.3,1.9c0.4,1,0.7,2.5,0.7,4.8
              C188.5,72.5,188.3,74.1,187.8,75z"/>
            <path id="XMLID_4_" d="M210.6,67.7l-3.7-0.4c-1.6-0.1-2.4-0.8-2.4-2c0-1.5,1.1-2.2,3.3-2.2c2.5,0,4.3,0.5,5.4,1.6l3.6-3.6
              c-1.9-1.8-4.9-2.7-8.9-2.7c-2.5,0-4.6,0.6-6.3,1.9c-1.8,1.4-2.7,3.2-2.7,5.6c0,3.9,2.3,6.1,6.8,6.5l3.7,0.4
              c1.6,0.1,2.5,0.9,2.5,2.2c0,1.6-1.4,2.4-4.1,2.4c-2.7,0-4.8-0.7-6.2-2.2l-3.8,3.8c2.2,2.2,5.6,3.4,10,3.4c2.9,0,5.2-0.6,7-1.9
              c1.9-1.3,2.9-3.3,2.9-5.7C217.5,70.4,215.2,68.1,210.6,67.7z"/>
          </g>
          </svg>
        </div>
      </router-link>

      <div class="nav-right d-flex justify-content-between">
        <div class="contact" v-b-modal.contact-form>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60.06 39.99"><title>Contact Us</title><g id="Layer_2" data-name="Layer 2" v-bind:class="{ 'expanded': navExpanded }"><g id="Capa_1" data-name="Capa 1"><path d="M60.05,1.16s0,0,0-.07a.81.81,0,0,0,0-.22V.81A1,1,0,0,0,60,.52l0-.05h0l0,0A1,1,0,0,0,59.67.2l-.06,0a.74.74,0,0,0-.24-.11.35.35,0,0,0-.11,0L59,0h-.2L.8,12a1,1,0,0,0-.79.84,1,1,0,0,0,.52,1l16.63,8.77,2.92,16.19v0a1,1,0,0,0,0,.24s0,.08,0,.12a.85.85,0,0,0,.11.26s0,0,0,.06a0,0,0,0,1,0,0l.05,0,.15.16,0,0,0,0,.19.1.08,0a1.35,1.35,0,0,0,.28,0h.07a1,1,0,0,0,.71-.32l11.08-7.38,11.6,7.54a1,1,0,0,0,.54.16,1.13,1.13,0,0,0,.32-.05,1,1,0,0,0,.62-.61l14-38,0-.11s0,0,0,0A.06.06,0,0,1,60.05,1.16ZM48.46,7.54l-24,17.65a.43.43,0,0,0-.1.09l0,0-.06.07-.05.07a1.63,1.63,0,0,0-.09.19.05.05,0,0,1,0,0h0l-2.75,8.94-2.18-12.1Zm-25.55,29,2.72-9,4.25,2.75,1.21.79L27,33.85ZM52,3.46l-34,17.4L3.93,13.41Zm-7.48,34-15.41-10-2.33-1.52L57,3.77Z"/></g></g></svg>
        </div>
        <button
          class="hamburger hamburger--collapse"
          v-bind:class="{ 'is-active': navExpanded }"
          type="button"
          v-on:click="navExpanded = !navExpanded"
        >
          <span class="hamburger-box">
            <span class="hamburger-inner"></span>
          </span>
        </button>
      </div>
    </nav>

    <transition name="fade">
      <div v-show="navExpanded" class="expanded-nav">
        <div class="nav-content">
          <transition name="slide-fade">
            <router-link
              to="/services"
              id="services"
              v-if="navExpanded"
              @click.native="navExpanded = !navExpanded"
            >
              services
            </router-link>
          </transition>
          <transition name="slide-fade">
            <router-link
              to="/about"
              id="about"
              v-if="navExpanded"
              @click.native="navExpanded = !navExpanded"
            >
              about
            </router-link>
          </transition>
          <transition name="slide-fade">
            <router-link
              to="/work"
              id="work"
              v-if="navExpanded"
              @click.native="navExpanded = !navExpanded"
            >
              work
            </router-link>
          </transition>
          <transition name="slide-fade">
            <router-link
              to="/contact"
              id="contact"
              v-if="navExpanded"
              @click.native="navExpanded = !navExpanded"
            >
              contact
            </router-link>
          </transition>
          <transition name="slide-fade">
            <div
              class="d-flex justify-content-center"
              id="social"
              v-if="navExpanded"
              @click.native="navExpanded = !navExpanded"
            >
              <div>
                <a href="https://www.facebook.com/materializelabs/" target="_blank">
                  <i class="fab fa-facebook-square"></i>
                </a>
              </div>
              <div>
                <a href="https://www.linkedin.com/company/materialize/" target="_blank">
                  <i class="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import '../assets/sass/hamburgers.scss';

export default {
  name: 'Nav',
  data() {
    return {
      navExpanded: false,
      notHomeRoute: false,
    };
  },
  watch: {
    // eslint-disable-next-line
    '$route.path': function () {
      this.notHomeRoute = this.$route.path !== '/';
    },
  },
  mounted() {
    this.notHomeRoute = this.$route.path !== '/';
  },
};
</script>

<style>
.nav-wrap {
  position: fixed;
  width: 100%;
  z-index: 1;
}
.st0 {
  fill: #DF0070;
  transition-duration: 1s;
}
#XMLID_1_.expanded {
  fill: #FFF;
  transition-duration: 1s;
}
nav a {
  z-index: 2;
}
.router-link-active {
  color: #DF0070 !important;
  text-decoration: line-through !important;
}
.logo {
  width: 165px;
  margin: 20px 0px 0px 20px;
}
.contact {
  cursor: pointer;
  z-index: 2;
  margin: 27px 6px 0px 0px;
  width: 38px;
  height: 38px;
}
.contact g#Layer_2 {
  fill: #DF0070;
}
.contact:hover g#Layer_2 {
  fill: #000;
}
.contact:hover g#Layer_2.expanded {
  fill: #FFF;
}
button.hamburger {
  z-index: 2;
  margin: 15px 6px 0px 0px;
}
.hamburger.is-active .hamburger-inner,
.hamburger.is-active .hamburger-inner::before {
  background-color: #FFF;
}
.expanded-nav {
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  background-color: rgb(0,0,0);
  overflow-x: hidden;
}
.nav-content {
  position: relative;
  top: 25%;
  left: 25%;
  width: 0px;
  text-align: left;
}
.expanded-nav a {
  padding: 8px;
  text-decoration: none;
  font-size: 36px;
  color: #FFF;
  display: block;
}
.expanded-nav a:hover {
  color: #000;
  -webkit-text-stroke: 1px #FFF;
}

.expanded-nav #social {
  width: 100px;
}

.expanded-nav .slide-fade-enter-active {
  transition: all .3s ease;
}
.expanded-nav .slide-fade-leave-active {
  transition: all .3s ease;
}
.expanded-nav .slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(-130px);
  opacity: 0;
}
.expanded-nav .slide-fade-enter-active#services {
  transition-delay: .2s;
}
.expanded-nav .slide-fade-enter-active#about {
  transition-delay: .2s;
}
.expanded-nav .slide-fade-enter-active#work {
  transition-delay: .3s;
}
.expanded-nav .slide-fade-enter-active#contact {
  transition-delay: .4s;
}
.expanded-nav .slide-fade-enter-active#social {
  transition-delay: .5s;
}

@media (min-height: 668px) {
  .nav-content {
    margin-top: 30px;
  }
}

@media (min-width: 375px) {
  .logo {
    width: 195px;
  }
  .contact {
    margin: 31px 6px 0px 0px;
    width: 44px;
    height: 44px;
  }
  button.hamburger {
    margin: 20px 8px 0px 0px;
  }
}

@media (min-width: 768px) {
  .logo {
    width: 350px;
  }
  .contact {
    margin: 44px 12px 0px 0px;
    width: 46px;
    height: 46px;
  }
}
</style>
