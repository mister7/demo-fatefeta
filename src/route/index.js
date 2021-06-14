import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '@/views/Login'
import Main from '@/views/Main'
import List from '@/views/List'

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
            path: '/search',
            name: 'Main',
            component: Main
        },
        {
            path: '/list',
            name: 'List',
            component: List
        }
    ]
})

export default router;