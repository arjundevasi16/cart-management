<template>
  <nav class="bg-white shadow-md">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16 items-center">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <a href="#" class="text-xl font-bold text-blue-600">MyWatchStore</a>
        </div>

        <!-- Navigation Links -->
        <div class="hidden md:flex space-x-6">
          <router-link to="/" class="text-gray-600 hover:text-blue-600">Home</router-link>
          <a href="#" class="text-gray-600 hover:text-blue-600">Products</a>
          <a href="#" class="text-gray-600 hover:text-blue-600">About</a>
          <a href="#" class="text-gray-600 hover:text-blue-600">Contact</a>
        </div>

        <!-- Cart/Account Icons -->
        <div class="flex items-center space-x-4">
          <div class="relative" v-if="$route.name !== 'itemcart'">
            <router-link to="/itemcart">
              <button class="text-gray-600 hover:text-blue-600">🛒</button></router-link
            >

            <span
              v-if="$route.name !== 'itemcart'"
              class="absolute -top-1 -right-2 bg-red-500 text-white text-xs font-semibold px-1 py-0.2 rounded-full"
            >
              {{ cartItem }}
            </span>
          </div>
          <router-link :to="{ name: 'user-profile' }">
            <button class="text-gray-600 hover:text-blue-600">👤</button>
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
export default {
  name: 'Navbar',
  computed: {
    cartItem() {
      return Object.keys(this.$store.state.products.itemInCart).length
    },
  },
}
</script>
