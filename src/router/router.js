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
            title: '首页'
        },
        component: Layout,
        children: [
            {
                path: 'home',
                name: 'home',
                meta: {
                    title: '首页',
                    icon: 'el-icon-location'
                },
                component: () => import('@/views/home/index')
            }
        ]
    },
    {
        path: '/car',
        name: 'car',
        meta: {
            title: '车辆管理',
            icon: 'el-icon-location'
        },
        component: Layout,
        children: [
            {
                path: 'jingli',
                name: 'jingli',
                meta: {
                    title: '经理专用'
                },
                component: () => import('@/views/jingli/jingli.vue')
            },
            {
                path: 'boss',
                name: 'boss',
                meta: {
                    title: '老板专用'
                },
                component: () => import('@/views/boss/boss')
            }
        ]
    }
]

export default routes
