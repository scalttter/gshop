import Vue from 'vue'
import VueRouter from 'vue-router'

import Msite from '../pages/Msite/Msite.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Proflie  from  '../pages/Proflie/Proflie.vue'
import Login  from  '../pages/Login/Login.vue'

Vue.use(VueRouter)

export default new VueRouter ({
    routes: [
        {
            path:'/msite',
            component: Msite,
            meta: {
                showFooter: true
            }
        },{
            path:'/search',
            component: Search,
            meta: {
                showFooter: true
            }
        },{
            path:'/order',
            component: Order,
            meta: {
                showFooter: true
            }
        },{
            path:'/proflie',
            component: Proflie,
            meta: {
                showFooter: true
            }
        },{
            path:'/',
            redirect: '/msite'
        },{
            path:'/login',
            component: Login
        },
         ]
})