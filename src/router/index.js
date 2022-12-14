import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('../views/Login.vue')
    },
    {
        path: '/frame',
        name: 'Frame',
        component: () => import('../components/Frame.vue'),
        redirect: '/home',
        children: [
            {
                path: '/home',
                name: 'Home',
                component: () => import('../views/Home.vue')
            },
            {
                path: '/notice',
                name: 'Notice',
                component: () => import('../views/notice/Notice.vue'),
                redirect: '/notice/UnRead',
                children: [
                    {
                        path: '/notice/unRead',
                        name: 'UnRead',
                        component: () => import('../views/notice/UnRead.vue')
                    },
                    {
                        path: '/notice/read',
                        name: 'Read',
                        component: () => import('../views/notice/Read.vue')
                    }
                ]
            },
            {
                path: '/manage/admin',
                name: 'Admin',
                component: () => import('../views/manage/Admin.vue')
            },
            {
                path: '/manage/employees',
                name: 'Employees',
                component: () => import('../views/manage/Employees.vue')
            },
            {
                path: '/personal',
                name: 'Personal',
                component: () => import('../views/Personal.vue')
            },
        ]
    }
]

const router = new VueRouter ({
    mode: 'history',
    routes
})

//避免重复点击导航爆错 
const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (to) {
  return VueRouterPush.call(this, to).catch(err => err)
}

export default router