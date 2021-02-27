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
        classify: 'class',
        component: ()=> import('@/views/Home/component/index.vue'),
        meta: {
          title: '首页',
          tabindex: 1,
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
          title: '基础配置',
          tabindex: 1,
        }
      },
      {
        path: '/baseset/goodsfile',
        name: 'Goodsfile',
        component: ()=> import('@/views/Baseset/goodsfile/index'),
        meta: {
          title: '商品档案'
        }
      },
      {
        path: '/baseset/goodsdept',
        name: 'Goodsdept',
        component: ()=> import('@/views/Baseset/goodsdept/index'),
        meta: {
          title: '商品部门'
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
          title: 'WMS',
          tabindex: 1,
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
          title: 'DMS',
          tabindex: 1,
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
          title: 'WCS',
          tabindex: 1,
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
          title: 'ERP',
          tabindex: 1
        }
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
