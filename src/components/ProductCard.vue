<template>
  <div
    class="max-w-s bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition p-4 cursor-pointer"
    @click="ProductDetail"
  >
    <img
      :src="product.image"
      :alt="product.name"
      class="w-full h-48 object-cover rounded-xl mb-4"
    />

    <h3 class="text-lg font-semibold text-gray-800">{{ product.name }}</h3>
    <p class="text-sm text-gray-500 mb-1">{{ product.brand }}</p>

    <div class="flex items-center justify-between mt-2">
      <span class="text-xl font-bold text-indigo-600">₹ {{ product.price.toFixed(0) }}</span>
      <div class="flex gap-2">
        <Star />
        <span>{{ product.rating }} </span>
      </div>
    </div>

    <p class="mt-2 text-sm" :class="product.inStocks ? 'text-green-600' : 'text-red-500'">
      {{ product.inStocks ? 'In Stock' : 'Out of Stock' }}
    </p>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Star from './icons/StarIcon.vue'

export default {
  name: 'ProductCard',
  components: {
    Star,
  },
  props: {
    product: {
      type: Object,
      required: true,
    },
  },

  methods: {
    ProductDetail() {
      this.$router.push({ name: 'ProductDetails', params: { id: this.product.id } })
    },
  },
}
</script>
