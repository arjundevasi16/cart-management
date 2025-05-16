import type { CartItem, Product, ProductGetters } from '@/types'
interface ProductState {
  watchProducts: {
    [id: number]: Product
  }
  itemInCart: {
    [id: number]: CartItem
  }
}

export default {
  namespaced: true,
  state(): ProductState {
    return {
      watchProducts: {
        1: {
          id: 1,
          name: 'ChronoX Black Edition',
          brand: 'ChronoX',
          price: 199 * 83,
          image: 'https://cdn.pixabay.com/photo/2017/03/20/15/13/wrist-watch-2159351_1280.jpg',
          rating: 4.5,
          inStocks: 10,
        },
        2: {
          id: 2,
          name: 'Classic Leather Strap',
          brand: 'Elegance',
          price: 249 * 83,
          image:
            'https://images.unsplash.com/photo-1591256835964-153af608bfd5?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          rating: 4.7,
          inStocks: 10,
        },
        3: {
          id: 3,
          name: 'Elegant Silver Timepiece',
          brand: 'Timeless',
          price: 179 * 83,
          image:
            'https://images.unsplash.com/photo-1706164965907-f0ca4b16f7e4?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          rating: 4.3,
          inStocks: 0,
        },
        4: {
          id: 4,
          name: 'Modern Minimalist Watch',
          brand: 'SleekTime',
          price: 129 * 83,
          image:
            'https://images.unsplash.com/photo-1737731662588-729f42147158?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          rating: 4.6,
          inStocks: 10,
        },
        5: {
          id: 5,
          name: 'Luxury Gold Chronograph',
          brand: 'GoldElite',
          price: 299 * 83,
          image:
            'https://images.unsplash.com/photo-1638872726444-0579101a60e7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          rating: 4.8,
          inStocks: 10,
        },
        6: {
          id: 6,
          name: 'Sporty Digital Watch',
          brand: 'ActiveGear',
          price: 89 * 83,
          image:
            'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          rating: 4.2,
          inStocks: 10,
        },
        7: {
          id: 7,
          name: 'Vintage Pocket Watch',
          brand: 'Heritage',
          price: 159 * 83,
          image:
            'https://images.unsplash.com/photo-1605143185597-9fe1a8065fbb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          rating: 4.4,
          inStocks: 0,
        },
        8: {
          id: 8,
          name: 'Smart Fitness Tracker',
          brand: 'FitTech',
          price: 99 * 83,
          image:
            'https://images.unsplash.com/photo-1665860455423-166cab57c383?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          rating: 4.1,
          inStocks: 10,
        },
        9: {
          id: 9,
          name: 'Designer Rose Gold Watch',
          brand: 'RoseTime',
          price: 219 * 83,
          image:
            'https://images.unsplash.com/photo-1726981407933-06fe96c4cefa?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          rating: 4.5,
          inStocks: 10,
        },
        10: {
          id: 10,
          name: 'Eco-Friendly Wooden Watch',
          brand: 'NatureTime',
          price: 139,
          image:
            'https://plus.unsplash.com/premium_photo-1682125779534-76c5debea767?q=80&w=2031&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          rating: 4.3,
          inStocks: 10,
        },
      },
      itemInCart: {},
    }
  },
  mutations: {
    ADD_ITEM_IN_CART(state: ProductState, itemId: number) {
      state.itemInCart[itemId] = {
        id: itemId,
        quantity: 1,
      }
      state.watchProducts[itemId].inStocks -= 1
    },
    REMOVE_TO_CART(state: ProductState, id: number) {
      state.watchProducts[id].inStocks += state.itemInCart[id].quantity
      delete state.itemInCart[id]
    },
    RESET_CART(state: ProductState) {
      state.itemInCart = {}
    },
    UPDATE_STOCK_IN_WATCH_PRODUCT(state: ProductState, payload: { stock: number; id: number }) {
      state.watchProducts[payload.id].inStocks = payload.stock
    },
    UPDATE_CART_ITEM_QUANTITY(state: ProductState, payload: { quantity: number; id: number }) {
      state.itemInCart[payload.id].quantity = payload.quantity
    },
  },
  getters: {
    getItemDetailsInCart(state: ProductState) {
      const data = []
      const item = state.itemInCart
      for (let x in item) {
        const cartItem = item[x]
        data.push({ ...state.watchProducts[x], quantity: cartItem.quantity })
      }
      return data
    },
    totalPrice: (state: ProductState, getters: ProductGetters) => {
      return getters.getItemDetailsInCart.reduce((acc: number, crr: Product) => {
        return acc + crr.price * (crr.quantity || 0)
      }, 0)
    },
  },
  actions: {
    updateItemQuantityAndStock(
      { state, commit }: { state: ProductState; commit: Commit },
      payload: { id: number; count: number },
    ) {
      let quantity = state.itemInCart[payload.id].quantity
      let stock = state.watchProducts[payload.id].inStocks
      quantity += payload.count
      stock -= payload.count
      if (quantity === 0) {
        commit('REMOVE_TO_CART', payload.id)
        return
      }
      commit('UPDATE_STOCK_IN_WATCH_PRODUCT', { stock, id: payload.id })
      commit('UPDATE_CART_ITEM_QUANTITY', { quantity, id: payload.id })
    },
  },
}
