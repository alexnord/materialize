<template>
  <div class="typed ft-31">
    <span class="typewriter"></span>
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
    const typed = new Typed('.typewriter', {
      strings: ['an agency <br> dedicated to <br> digital excellence.'],
      typeSpeed: 40,
      loop: false,
    });
  },
  methods: {
    typewriter() {
    },
  },
  components: {
    Typed,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.typed {
  font-family: monospace;
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
</style>
