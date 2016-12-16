import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Goods from './components/header/goods/goods'
import Seller from './components/header/seller/seller'
import Ratings from './components/header/ratings/ratings'

// import './common/sass/index.scss'

// load the plugin
Vue.use(VueRouter)
Vue.use(VueResource)

// Create a router instantce, you can pass in additional options
var router = new VueRouter({
    linkActiveClass: 'active' // default 'v-link-active'
})

/*
    Define some routes
    Each route should map to a component(can either be an actual component
    consturctor created via Vue.extend(), or just a component options object)
 */
router.map({
    '/goods': {
        component: Goods
    },
    '/ratings': {
        component: Ratings
    },
    '/seller': {
        component: Seller
    }
})

// The router will create an instance of App and mount to the element matching the selector #app
router.start(App, '#app')

// set default router
router.go('/seller')
