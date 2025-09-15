<template>
  <div class="pt-24 px-4 min-h-screen bg-gray-50">
    <div
      class="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden p-6 md:flex md:gap-6"
    >
      <!-- Product Image -->
      <div class="md:w-1/2 mb-4 md:mb-0 h-96">
        <img
          :src="product.image"
          :alt="product.name"
          class="w-full h-full object-cover rounded-lg"
        />
      </div>

      <!-- Product Details -->
      <div class="md:w-1/2 flex flex-col justify-between">
        <div>
          <h1 class="text-3xl font-bold mb-2 text-gray-800">{{ product.name }}</h1>
          <p class="text-gray-600 mb-1 text-sm">
            Brand: <strong>{{ product.brand }}</strong>
          </p>
          <p class="text-xl text-green-700 font-semibold my-3">₹ {{ Math.floor(product.price) }}</p>
          <div class="flex gap-2">
            <Star />
            <span>{{ product.rating }} </span>
          </div>

          <p :class="product.inStocks ? 'text-green-600' : 'text-red-500'" class="font-semibold">
            {{ product.inStocks ? 'In Stock' : 'Out of Stock' }}
          </p>
          <p class="text-sm text-gray-600 mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur aliquam ab odit
            tenetur at, consequatur enim cum delectus ipsum unde quibusdam natus sint quis molestias
            molestiae. Quasi voluptatem earum dolore?
          </p>
        </div>

        <!-- Add to Cart -->
        <div class="mt-6">
          <Button
            @click="Button"
            :disabled="!product.inStocks"
            :class="{ 'bg-gray-400 hover:bg-gray-300 !cursor-not-allowed': !product.inStocks }"
          >
            <template #default>ADD TO CART</template>
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import type { Product } from '@/types'
import Button from './Button.vue'
import Star from './icons/StarIcon.vue'

export default {
  name: 'ProductDetail',
  components: {
    Button,
    Star,
  },
  props: {
    id: {
      type: [String, Number],
      required: true,
    },
  },
  data() {
    return {
      product: {} as Product,
    }
  },
  created() {
    const watchProducts = this.$store.state.products.watchProducts
    this.product = watchProducts[this.id]
  },
  methods: {
    Button() {
      this.$store.commit('products/ADD_ITEM_IN_CART', this.product.id)
      this.$router.push('/itemcart')
    },
  },
}
</script>
