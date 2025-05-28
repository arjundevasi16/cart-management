import { createRouter, createWebHistory } from 'vue-router'
import ProductDetail from '@/components/ProductDetail.vue'
import ProductList from '@/components/ProductList.vue'
import CartItem from '@/components/CartItem.vue'
import UserProfile from '@/components/UserProfile.vue'
import CheckOutPage from '@/components/CheckOutPage.vue'
import OrderCompleted from '@/components/OrderCompleted.vue'
import LoginForm from '@/components/LoginForm.vue'
import SignUP from '@/components/SignUp.vue'
import AboutPage from '@/components/AboutPage.vue'
const routes = [
  { path: '/', name: 'ProductList', component: ProductList, props: true },
  { path: '/itemcart', component: CartItem, props: true, name: 'itemcart' },

  { path: '/user-profile', component: UserProfile, props: true, name: 'user-profile' },
  { path: '/about', component: AboutPage, props: true, name: 'about' },
  { path: '/ProductDetails/:id', name: 'ProductDetails', component: ProductDetail, props: true },
  {
    path: '/checkout-page',
    name: 'checkout-page',
    component: CheckOutPage,
    meta: { isAuthentication: true },
  },
  {
    path: '/orderPlaced',
    name: 'orderPlaced',
    component: OrderCompleted,
    meta: { isAuthentication: true },
  },

  {
    path: '/login',
    name: 'login',
    component: LoginForm,
    beforeEnter: (to, from, next) => {
      const localStoredToken = true // TODO: add local storage token
      const Token = Boolean(localStoredToken)
      if (Token) {
        next('/')
      } else {
        next()
      }
    },
  },
  { path: '/sign-up', name: 'sign-up', component: SignUP },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  const token = true //Add To: local storage get token
  const needauth = to.meta.isAuthentication
  if (needauth && !token) {
    next({ name: 'login' })
  } else {
    next()
  }
})
export default router
