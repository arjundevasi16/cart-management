<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
      <h2 class="text-2xl font-bold text-center text-gray-800 mb-6">Welcome Back</h2>

      <form @submit.prevent="handleLogin">
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

        <div class="flex justify-between items-center text-sm text-gray-600 mb-6">
          <label class="flex items-center space-x-2">
            <input type="checkbox" class="form-checkbox" />
            <span>Remember me</span>
          </label>
          <router-link to="/forgot-password" class="text-blue-600 hover:underline"
            >Forgot password?</router-link
          >
        </div>

        <button
          type="submit"
          class="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Login
        </button>
      </form>

      <p class="text-center text-sm text-gray-600 mt-6">
        Don’t have an account?
        <router-link to="/sign-up" class="text-blue-600 font-medium hover:underline"
          >Sign up</router-link
        >
      </p>
    </div>
  </div>
</template>
