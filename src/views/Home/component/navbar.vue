<template>
  <div class="container">
    <el-tabs type="card"
             v-model="tabname">
      <el-tab-pane v-for="(item,index) in list"
                   :key="index"
                   :label="item.title"
                   :name="item.label">
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      tabname: ''
    }
},
  watch: {
    $route(to){
      this.tabname = to.meta.title
    }
  },
  computed: {},
  created() {
    this.tabname = this.$route.meta.title
  },
  mounted() {},
  methods: {},
}
</script> 

<style lang="scss" scoped>

</style>
