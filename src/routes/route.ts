import { createRouter, createWebHistory } from 'vue-router'
import ProductDetail from '@/components/ProductDetail.vue'
import ProductList from '@/components/ProductList.vue'
import CartItem from '@/components/CartItem.vue'
import UserProfile from '@/components/UserProfile.vue'
const routes = [
  { path: '/ProductDetails/:id', name: 'ProductDetails', component: ProductDetail, props: true },
  { path: '/', name: 'ProductList', component: ProductList, props: true },
  { path: '/itemcart', component: CartItem, props: true },
  { path: '/user-profile', component: UserProfile, props: true, name: 'user-profile' },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
