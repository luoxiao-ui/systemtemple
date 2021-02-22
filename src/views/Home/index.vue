<template>
  <div class="container">
    <div class="menubox"><barmenu /></div>
    <div class="navbox"><navbar /></div>
    <div class="mainbox"><appmain /></div>
  </div>
</template>

<script>
import {navbar, barmenu, appmain} from './component'
export default {
  name: 'home',
  components: {
    navbar,
    barmenu,
    appmain
  },
  data() {
    return {}
},
  watch: {},
  computed: {},
  created() {},
  mounted() {},
  methods: {},
}
</script> 

<style lang="scss" scoped>
  .container {
      height: 100%;
      width: 100%;
  }

  .menubox {
    height: 50px;
    width: 100%;
  }

  .navbox {
    // height: 40px;
    width: 100%;
    padding: 10px 0 0 0;
  }

  .mainbox {
    width: 100%;
  }
</style>
