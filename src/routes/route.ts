import { createRouter, createWebHistory } from 'vue-router'
import ProductDetail from '@/components/ProductDetail.vue'
import ProductList from '@/components/ProductList.vue'
import CartItem from '@/components/CartItem.vue'
import UserProfile from '@/components/UserProfile.vue'
import CheckOutPage from '@/components/CheckOutPage.vue'
import OrderCompleted from '@/components/OrderCompleted.vue'
const routes = [
  { path: '/', name: 'ProductList', component: ProductList, props: true },
  { path: '/itemcart', component: CartItem, props: true, name: 'itemcart' },
  { path: '/user-profile', component: UserProfile, props: true, name: 'user-profile' },
  { path: '/ProductDetails/:id', name: 'ProductDetails', component: ProductDetail, props: true },
  { path: '/checkoutpage', name: 'checkoutpage', component: CheckOutPage },
  { path: '/orderPlaced', name: 'orderPlaced', component: OrderCompleted },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
