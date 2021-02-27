<template>
  <div class="container">
    <el-tabs type="card"
             v-model="tabname"
             @tab-remove="removetab"
             @tab-click="handleclick">
      <el-tab-pane v-for="(item,index) in list"
                   :key="index"
                   :label="item.meta.title"
                   :name="item.name"
                   :closable="index!=0">
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
  data() {
    return {
      tabname: ''
    }
},
  watch: {
    $route(to){
      this.tabname = to.name
      this.AddTab(to)
    }
  },
  computed: {
    ...mapGetters(['tabs']),
    list() {
      return this.tabs
    }
  },
  created() {
    this.tabname = this.$route.name
  },
  mounted() {},
  methods: {
    ...mapActions(['AddTab', 'CloseTab']),
    removetab(s){
      this.CloseTab({name: s, fontname: this.$route.name})
    },
    handleclick(s){
      if(this.$route.name!=s.name){
        this.$router.push({
          name: s.name
        })
      }
    }
  },
}
</script> 

<style lang="scss" scoped>

</style>
