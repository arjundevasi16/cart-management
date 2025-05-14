<template>
  <div class="min-h-screen bg-gray-50 pt-28 px-4 sm:px-6 lg:px-8">
    <div class="max-w-5xl mx-auto bg-white shadow-lg rounded-3xl overflow-hidden">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
        <!-- Left: Shipping Details -->
        <div>
          <h2 class="text-2xl font-bold text-gray-800 mb-6">Shipping Information</h2>

          <div class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                placeholder="John Doe"
                class="mt-1 w-full border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700">Address</label>
              <input
                type="text"
                placeholder="123 Main Street"
                class="mt-1 w-full border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div class="flex gap-4">
              <div class="w-1/2">
                <label class="block text-sm font-medium text-gray-700">City</label>
                <input
                  type="text"
                  placeholder="Mumbai"
                  class="mt-1 w-full border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div class="w-1/2">
                <label class="block text-sm font-medium text-gray-700">PIN Code</label>
                <input
                  type="text"
                  placeholder="400001"
                  class="mt-1 w-full border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
            </div>
          </div>
        </div>

        <!-- Right: Order Summary -->
        <div>
          <h2 class="text-2xl font-bold text-gray-800 mb-6">Order Summary</h2>

          <div class="bg-gray-50 rounded-xl p-4 space-y-4">
            <!-- Dummy Items -->
            <div
              v-for="item in getItemsInCartDetails"
              :key="item.id"
              class="flex justify-between items-center"
            >
              <div>
                <p class="text-gray-700 font-medium">Product Name {{ item.name }}</p>
                <p class="text-sm text-gray-500">Qty {{ item.quantity }}</p>
              </div>
              <p class="font-semibold text-indigo-600">₹ {{ item.price }}</p>
            </div>

            <div class="border-t pt-4 mt-4">
              <div class="flex justify-between text-lg font-semibold">
                <span>Total</span>
                <span class="text-green-600">{{ totalPrice }}</span>
              </div>
            </div>
          </div>

          <!-- Payment Method -->
          <div class="mt-6">
            <label class="block text-sm font-medium text-gray-700 mb-2">Payment Method</label>
            <select
              class="w-full border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option>Credit Card</option>
              <option>UPI</option>
              <option>Cash on Delivery</option>
            </select>
          </div>

          <!-- Place Order Button -->
          <div class="mt-8">
            <button
              @click="orderPlace"
              class="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-xl shadow-md transition"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    getItemsInCartDetails() {
      return this.$store.getters['products/getItemDetailsInCart']
    },
    totalPrice() {
      return this.$store.getters['products/totalPrice']
    },
  },
  methods: {
    orderPlace() {
      this.$router.push('/orderPlaced')
      this.$store.commit('products/REMOVE_TO_CART', { id: 0, emptyCart: true })
    },
  },
}
</script>
