<template>
  <div id="app">
    <Nav></Nav>
    <router-view/>
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
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import './assets/css/styles.css';
import './assets/css/hamburgers.css';
import Nav from './components/Nav';

export default {
  name: 'App',
  data() {
    return {};
  },
  components: {
    Nav,
  },
};
</script>

<style>
#app {}
#particles-js {
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: transparent;
  background-size: cover;
  background-position: 50% 50%;
  background-repeat: no-repeat;
}

.body-particles{
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
}
</style>
