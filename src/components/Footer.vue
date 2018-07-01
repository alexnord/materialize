<template>
  <div>
    <!-- <p>&copy; 2018 Materialize, LLC</p> -->
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      date: '2018',
    };
  },
  beforeMount() {
    this.date = new Date().getFullYear();
  },
  components: {},
};
</script>

<style scoped>
</style>
