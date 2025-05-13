<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
    <ProductCard v-for="(product, key) in productData" :key="key" :product="product" />
  </div>
</template>

<script lang="ts">
import ProductCard from './ProductCard.vue'
export default {
  name: 'ProductList',
  components: { ProductCard },
  computed: {
    productData() {
      return this.$store.state.products.watchProducts
    },
  },
}
</script>
