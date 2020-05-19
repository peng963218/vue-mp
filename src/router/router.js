import Layout from "../Layout/index";

const routes = [
  {
    path: '/login',
    name: 'login',
    meta: {
      title: '登录',
      hidden: true
    },
    component: () => import('@/views/login/index')
  },
  {
    path: '/index',
    name: 'index',
    meta: {
      title: '监控平台'
    },
    component: Layout,
    children: [
      {
        path: 'home',
        name: 'home',
        meta: {
          title: '首页'
        },
        component: () => import('@/views/home/index')
      }
    ]
  },
  {
    path: '/i',
    name: 'indexs',
    meta: {
      title: '监控平台1',
      alwaysShow: true
    },
    component: Layout,
    children: [
      {
        path: 'homes',
        name: 'homes',
        meta: {
          title: '首页2'
        },
        component: () => import('@/views/home/index')
      }
    ]
  },
  {
    path: '/car',
    name: 'car',
    meta: {
      title: '车辆管理1',
      icon: 'el-icon-location'
    },
    component: Layout,
    children: [
      {
        path: 'jingli',
        name: 'jingli',
        meta: {
          title: '经理专用1'
        },
        component: () => import('@/views/jingli/jingli.vue')
      },
      {
        path: 'boss',
        name: 'boss',
        meta: {
          title: '老板专用1'
        },
        component: () => import('@/views/boss/boss')
      }
    ]
  }
]

export default routes
