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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="#ffb434"
              class="icon icon-tabler icons-tabler-filled icon-tabler-star"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path
                d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z"
              />
            </svg>
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
            :class="{ 'bg-gray-400 hover:bg-gray-300  !cursor-not-allowed': !product.inStocks }"
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

export default {
  name: 'ProductDetail',
  components: {
    Button,
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
