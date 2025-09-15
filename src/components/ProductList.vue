<template>
  <div class="p-6 space-y-6">
    <!-- Filter Section -->
    <div class="flex flex-wrap items-center gap-4 bg-white shadow-md rounded-xl p-4">
      <span class="font-semibold text-lg">Filter by:</span>

      <!-- In Stock Checkbox -->
      <label class="flex items-center space-x-2">
        <input
          type="checkbox"
          id="inStock"
          class="form-checkbox h-5 w-5 text-green-600"
          value="inStock"
          v-model="filteredQuery"
        />
        <span class="text-gray-700">In Stock</span>
      </label>

      <!-- Out of Stock Checkbox -->
      <label class="flex items-center space-x-2">
        <input
          type="checkbox"
          id="outOfStock"
          class="form-checkbox h-5 w-5 text-red-600"
          value="outOfStock"
          v-model="filteredQuery"
        />
        <span class="text-gray-700">Out of Stock</span>
      </label>

      <!-- Reset Button -->
      <button
        @click="resetFilters"
        class="ml-auto bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded-lg shadow-sm cursor-pointer"
      >
        Reset Filters
      </button>
    </div>

    <!-- Product Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <ProductCard v-for="(product, key) in filteredList" :key="key" :product="product" />
    </div>
  </div>
</template>

<script>
import ProductCard from './ProductCard.vue'

export default {
  name: 'ProductList',
  components: { ProductCard },
  data() {
    return {
      filteredQuery: [],
    }
  },
  computed: {
    productData() {
      return this.$store.state.products.watchProducts
    },
    filteredList() {
      const queryData = this.filteredQuery
      const watchProducts = Object.values(this.productData)

      if (queryData.length === 0) {
        return watchProducts
      }

      return watchProducts.filter((product) => {
        if (queryData.includes('inStock') && product.inStocks) {
          return true
        }
        if (queryData.includes('outOfStock') && product.inStocks === 0) {
          return true
        }
        return false
      })
    },
  },
  watch: {
    '$route.query': {
      handler(newQuery) {
        const filter = newQuery.filter || []
        this.filteredQuery = Array.isArray(filter) ? filter : filter ? [filter] : []
      },
      immediate: true,
    },
    filteredQuery(newValue) {
      this.$router.push({ query: { filter: newValue } })
    },
  },
  methods: {
    resetFilters() {
      this.filteredQuery = []
      this.$router.push({ query: {} })
    },
  },
}
</script>
