<template>
  <div class="min-h-screen bg-gray-50 pt-28 px-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto bg-white rounded-3xl shadow-lg p-6 sm:p-10">
      <!-- Header -->
      <h1
        class="text-3xl font-extrabold text-gray-800 mb-8 text-center flex items-center justify-center gap-2"
      >
        🛒 Your Shopping Cart
      </h1>

      <!-- Cart Items -->
      <div v-if="cartItems.length > 0" class="space-y-6">
        <div class="w-full p-4 space-y-6">
          <div v-for="item in cartItems" :key="item.id">
            <!-- Image -->
            <div
              v-if="(item?.quantity || 0) > 0"
              class="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition-all p-4 flex flex-col md:flex-row md:items-center justify-between gap-8"
            >
              <img
                :src="item.image"
                alt="product"
                class="w-full md:w-24 h-24 object-cover rounded-md"
              />

              <!-- Product Info -->
              <div class="flex-1">
                <h3 class="text-lg font-semibold text-gray-800">{{ item.name }}</h3>
                <p class="text-sm text-gray-500">Brand: {{ item.brand }}</p>
                <p class="text-sm mt-1" :class="item.inStocks ? 'text-green-600' : 'text-red-500'">
                  {{ item.inStocks ? 'In Stock' : 'Out of Stock' }}
                </p>
              </div>

              <!-- Price and Actions -->
              <div class="text-right flex flex-col justify-between items-end gap-4">
                <span class="text-xl font-bold text-indigo-600">₹{{ item.price }}</span>
                <div class="flex gap-2 mt-1">
                  <button
                    class="w-6 h-6 flex items-center justify-center text-lg font-bold rounded bg-gray-200 hover:bg-gray-300 transition cursor-pointer"
                    @click="updateItemCount(-1, item.id)"
                  >
                    -
                  </button>
                  <span class="text-base font-medium">{{ item.quantity }}</span>
                  <button
                    :class="
                      item.inStocks > 0
                        ? 'w-6 h-6 flex items-center justify-center text-lg font-bold rounded bg-gray-200 hover:bg-gray-300 transition cursor-pointer'
                        : 'w-6 h-6 flex items-center justify-center text-lg font-bold rounded bg-gray-100 text-gray-400 cursor-not-allowed'
                    "
                    @click="updateItemCount(1, item.id)"
                  >
                    +
                  </button>
                </div>
                <button
                  @click="remove_cart(item.id)"
                  class="bg-red-500 text-white px-4 py-1 rounded-md text-sm hover:bg-red-600 transition"
                >
                  REMOVE
                </button>
              </div>
            </div>
          </div>
        </div>
        <!-- Total -->
        <div class="border-t pt-6 mt-6 flex justify-between items-center text-lg font-medium">
          <span class="text-2xl font-bold text-green-600">Total:₹{{ totalPrice }}</span>
        </div>
        <!-- Checkout Button -->
        <div class="mt-6 text-center">
          <button
            @click="checkOutPage"
            class="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-full shadow-md transition"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>

      <!-- Empty Cart -->
      <div v-else class="text-center text-gray-500 py-12">
        <p>🛍️ Your cart is currently empty.</p>
        <Button @click="$router.push('/')" class="!w-1/2 mt-4">ADD PRODUCT</Button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import type { Product } from '@/types'
import Button from './Button.vue'
import ProductCard from './ProductCard.vue'

export default {
  components: {
    ProductCard,
    Button,
  },
  computed: {
    cartItems(): Product[] {
      return this.$store.getters['products/getItemDetailsInCart']
    },
    totalPrice() {
      return this.$store.getters['products/totalPrice']
    },
  },
  methods: {
    remove_cart(id: number) {
      this.$store.commit('products/REMOVE_TO_CART', id)
    },
    updateItemCount(count: number, id: number) {
      this.$store.dispatch('products/updateItemQuantityAndStock', { count, id })
    },
    checkOutPage() {
      this.$router.push('/checkoutpage')
    },
  },
}
</script>
