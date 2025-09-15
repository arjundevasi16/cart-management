<template>
  <footer class="bg-gray-800 text-white py-8 mt-10">
    <div class="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
      <!-- About -->
      <div>
        <h3 class="text-lg font-semibold mb-3">About Us</h3>
        <p class="text-sm text-gray-300">
          We offer the best collection of modern and stylish watches tailored to match every
          personality.
        </p>
      </div>

      <!-- Links -->
      <div>
        <h3 class="text-lg font-semibold mb-3">Quick Links</h3>
        <ul class="space-y-2 text-sm text-gray-300">
          <li><router-link to="/" class="hover:underline">HOME</router-link></li>
          <li><router-link to="/" class="hover:underline">SHOP</router-link></li>
          <li><router-link to="/itemcart" class="hover:underline">CART</router-link></li>
        </ul>
      </div>

      <!-- Contact -->
      <div>
        <h3 class="text-lg font-semibold mb-3">Contact</h3>
        <address class="text-sm text-gray-300">
          <a href="mailto:support@example.com" class="text-sm text-gray-300">
            Email: support@example.com
          </a>
          <br />
          Phone: +91 98765 43210 <br />
          Location: New Delhi, India <br />
        </address>
      </div>
    </div>

    <div class="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
      © 2025 WatchStore. All rights reserved.
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
}
</script>
