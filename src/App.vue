<template>
  <div id="app">

    <div class="d-flex justify-content-between">
      <div class="logo">
        <img src="./assets/asset.svg" alt="materialize">
      </div>

      <button
        class="hamburger hamburger--collapse"
        v-bind:class="{ 'is-active': navExpanded }"
        type="button"
        v-on:click="toggleNav"
      >
        <span class="hamburger-box">
          <span class="hamburger-inner"></span>
        </span>
      </button>
    </div>

    <transition name="fade">
      <div v-show="navExpanded" class="expanded-nav"></div>
    </transition>

    <router-view/>

  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import './assets/css/styles.css';
import './assets/css/hamburgers.css';

export default {
  name: 'App',
  data() {
    return {
      navExpanded: false,
    };
  },
  methods: {
    toggleNav() {
      this.navExpanded = !this.navExpanded;
    },
  },
};
</script>

<style>
#app {}
</style>
