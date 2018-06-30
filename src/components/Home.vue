<template>
  <div class="typed mx-auto text-center ft-26">
      <vue-typer
        :text='msg'
        :repeat='0'
        initial-action='typing'
        :pre-type-delay='1000'
        :type-delay='80'
        :erase-on-complete='false'
        caret-animation='blink'
      ></vue-typer>
  </div>
</template>

<script>
import { VueTyper } from 'vue-typer';

export default {
  name: 'Home',
  data() {
    return {
      msg: 'we build digital experiences.',
      headline: '',
    };
  },
  beforeMount() {

  },
  methods: {
    typewriter() {
    },
  },
  components: {
    VueTyper,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.typed {
  max-width: 250px;
}
.vue-typer {
  font-family: monospace;
}
</style>
