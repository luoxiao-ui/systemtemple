import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: ()=> import('@/views/Home/index.vue'),
    children: [
      {
        path: '/home',
        name: 'Homeindex',
        component: ()=> import('@/views/Home/component/index.vue'),
        meta: {
          title: '首页'
        }
      }
    ]
  },
  {
    path: '/baseset',
    name: 'Baseset',
    component: ()=> import('@/views/Home/index.vue'),
    children: [
      {
        path: '/baseset',
        name: 'Basesetindex',
        component: ()=> import('@/views/Baseset/index.vue'),
        meta: {
          title: '基础配置'
        }
      }
    ]
  },
  {
    path: '/wms',
    name: 'WMS',
    component: ()=> import('@/views/Home/index.vue'),
    children: [
      {
        path: '/wms',
        name: 'Wmsindex',
        component: ()=> import('@/views/WMS/index.vue'),
        meta: {
          title: 'WMS'
        }
      }
    ]
  },
  {
    path: '/dms',
    name: 'DMS',
    component: ()=> import('@/views/Home/index.vue'),
    children: [
      {
        path: '/dms',
        name: 'Dmsindex',
        component: ()=> import('@/views/DMS/index.vue'),
        meta: {
          title: 'DMS'
        }
      }
    ]
  },
  {
    path: '/wcs',
    name: 'WCS',
    component: ()=> import('@/views/Home/index.vue'),
    children: [
      {
        path: '/wcs',
        name: 'Wcsindex',
        component: ()=> import('@/views/WCS/index.vue'),
        meta: {
          title: 'WCS'
        }
      }
    ]
  },
  {
    path: '/erp',
    name: 'ERP',
    component: ()=> import('@/views/Home/index.vue'),
    children: [
      {
        path: '/erp',
        name: 'Erpindex',
        component: ()=> import('@/views/ERP/index.vue'),
        meta: {
          title: 'ERP'
        }
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
