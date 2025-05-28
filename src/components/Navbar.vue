<template>
  <nav class="bg-white shadow-md">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16 items-center">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <router-link to="/" class="text-xl font-bold text-blue-600">MyWatchStore</router-link>
        </div>

        <!-- Navigation Links -->
        <div class="hidden md:flex space-x-6">
          <router-link to="/" class="text-gray-600 hover:text-blue-600">Products</router-link>
          <router-link to="/about" class="text-gray-600 hover:text-blue-600">About</router-link>
          <router-link to="/contact" class="text-gray-600 hover:text-blue-600">Contact</router-link>
        </div>

        <!-- Right-side Actions -->
        <div class="flex items-center space-x-4">
          <!-- Cart Icon -->
          <div class="relative" v-if="$route.name !== 'itemcart'">
            <router-link to="/itemcart" class="text-gray-600 hover:text-blue-600 text-lg">
              🛒
            </router-link>
            <span
              class="absolute -top-1 -right-2 bg-red-500 text-white text-xs font-semibold px-1 py-0.5 rounded-full"
              v-if="cartItemLength > 0"
            >
              {{ cartItemLength }}
            </span>
          </div>

          <!-- Conditional Auth Buttons -->
          <div v-if="!isAuthenticated" class="flex space-x-2">
            <router-link
              to="/login"
              class="text-sm px-3 py-1 border rounded-md text-blue-600 border-blue-600 hover:bg-blue-50"
            >
              Login
            </router-link>
            <router-link
              to="/sign-up"
              class="text-sm px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Sign Up
            </router-link>
          </div>

          <!-- Profile icon (if logged in) -->
          <router-link
            v-else
            to="/user-profile"
            class="text-gray-600 hover:text-blue-600 text-xl"
            title="Profile"
          >
            👤
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  computed: {
    cartItemLength() {
      return Object.keys(this.$store.state.products.itemInCart).length
    },
    isAuthenticated() {
      const token = true // AddTo:get from local storage
      return !token
    },
  },
}
</script>
