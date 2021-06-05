import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '@/views/Login'
import Main from '@/views/Main'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        {
            path: '/',
            name: 'Login',
            component: Login
        },
        {
            path: '/session',
            name: 'Main',
            component: Main
        }
    ]
})

export default router;