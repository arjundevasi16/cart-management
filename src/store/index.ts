import { createStore } from 'vuex'
import products from './modules/products'
interface STATE {
  modules: object
}
const store = createStore<STATE>({
  modules: {
    products,
  },
})

export default store
