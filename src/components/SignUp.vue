<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
      <h2 class="text-2xl font-bold text-center text-gray-800 mb-6">Create an Account</h2>

      <form @submit.prevent="handleSignup">
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700 mb-1" for="name">Full Name</label>
          <input
            id="name"
            v-model="name"
            type="text"
            required
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700 mb-1" for="email">Email</label>
          <input
            id="email"
            v-model="email"
            type="email"
            required
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700 mb-1" for="password"
            >Password</label
          >
          <input
            id="password"
            v-model="password"
            type="password"
            required
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          class="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition duration-200"
        >
          Sign Up
        </button>
      </form>

      <p class="text-center text-sm text-gray-600 mt-6">
        Already have an account?
        <router-link to="/login" class="text-blue-600 font-medium hover:underline"
          >Login</router-link
        >
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      password: '',
    }
  },
  methods: {
    handleSignup() {
      // You can integrate backend logic here
      console.log('User signed up with:', this.name, this.email, this.password)
      this.$router.push('/login') // redirect after signup
    },
  },
}
</script>
