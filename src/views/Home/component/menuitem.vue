<template>
  <div class="container">
      <el-menu mode="horizontal"
               background-color="#545c64"
               text-color="#fff"
               active-text-color="#ffd04b"
               :default-active="routername">
          <el-menu-item v-for="(item,index) in list"
                        :key="index"
                        :index="item.value"
                        @click="routergo(item)">
            {{item.label}}
          </el-menu-item>
      </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
        list: [
            {label: '首页', value: '/home'},
            {label: '基础配置', value: '/baseset'},
            {label: 'WMS', value: '/wms'},
            {label: 'DMS', value: '/dms'},
            {label: 'WCS', value: '/wcs'},
            {label: 'ERP', value: '/erp'}
        ],
        routername: this.$route.path
    }
},
  watch: {},
  computed: {},
  created() {},
  mounted() {},
  methods: {
    routergo(item){
      if(this.$route.path === item.value) return
      this.$router.push(item.value)
    }
  },
}
</script> 

<style lang="scss" scoped>
</style>
