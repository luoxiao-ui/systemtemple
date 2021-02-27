<template>
  <div class="container">
    <div class="rowflex">
      <div v-for="(item,index) in list"
           :key="index"
           style="margin-left: 30px;">
        <span @click="routergo(item)">{{item.meta.title}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
},
  watch: {},
  computed: {
    list() {
      // console.log(this.$router)
      let a = this.$router.options.routes.findIndex(v=> {
        if(v.path === '/baseset'){
          return true
        }
      })
      let i = []
      this.$router.options.routes[a].children.forEach((item,index)=>{
        if(index!=0){
          let s = {
            name: item.name,
            meta: item.meta
          }
          i.push(s)
        }
      })
      return i
    }
  },
  created() {},
  mounted() {},
  methods: {
    routergo(item){
      if(this.$route.name!=item.name){
        this.$router.push({
          name: item.name
        })
      }
    }
  },
}
</script> 

<style lang="scss" scoped>
  span {
    cursor: pointer;
  }
</style>
