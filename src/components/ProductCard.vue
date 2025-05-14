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
    </div>

    <p class="mt-2 text-sm" :class="product.inStocks ? 'text-green-600' : 'text-red-500'">
      {{ product.inStocks ? 'In Stock' : 'Out of Stock' }}
    </p>
    <slot></slot>
  </div>
</template>

<script lang="ts">
export default {
  name: 'ProductCard',
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
