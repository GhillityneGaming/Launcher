import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            name: 'play',
            component: Home
        },
        {
            path: '/news',
            name: 'News',
            component: () =>
                import ('./views/News.vue')
        },
        {
            path: '/profiles',
            name: 'Profiles',
            component: () =>
                import ('./views/News.vue')
        },
        {
            path: '/settings',
            name: 'Settings',
            component: () =>
                import ('./views/News.vue')
        }
    ]
})