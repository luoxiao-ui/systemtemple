<template>
  <div class="container">
    <transition name="fade-transform" mode="out-in">
      <keep-alive :include="tablist">
      <router-view></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {}
},
  watch: {},
  computed: {
    ...mapGetters(['tabs']),
    tablist() {
        let a = []
        this.tabs.forEach(item=> {
          a.push(item.name)
        })
        return a.toString()
    }
  },
  created() {},
  mounted() {},
  methods: {},
}
</script> 

<style lang="scss" scoped>
</style>
