<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12">
    <div class="bg-white max-w-xl w-full rounded-3xl shadow-lg p-10 text-center space-y-6">
      <!-- Success Icon -->
      <div class="flex items-center justify-center">
        <div class="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
          <svg
            class="w-10 h-10 text-green-600"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
      </div>

      <!-- Order Confirmation -->
      <h2 class="text-3xl font-bold text-gray-800">Order Placed Successfully!</h2>
      <p class="text-gray-600">
        Thank you for shopping with us. Your order is confirmed and will be processed soon.
      </p>

      <!-- Order Summary (optional static example) -->
      <div class="bg-gray-50 p-4 rounded-lg text-left shadow-inner">
        <p><strong>Order ID:</strong> #{{ randomOrderId() }}</p>
        <p><strong>Estimated Delivery:</strong> 3-5 Business Days</p>
      </div>

      <!-- Continue Shopping Button -->
      <button
        @click="orderPlaced"
        class="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-full transition"
      >
        Continue Shopping
      </button>
    </div>
    <div class="absolute inset-0 pointer-events-none overflow-hidden">
      <div v-for="n in 30" :key="n" :class="['confetti', `confetti-${n}`]"></div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    orderPlaced() {
      this.$router.push('/')
    },
    randomOrderId() {
      const id = Math.floor(Math.random() * 900000)
      return id
    },
  },
}
</script>
<style scoped>
@keyframes fall {
  0% {
    transform: translateY(-100px) rotate(0deg);
    opacity: 1;
  }
  100% {
    transform: translateY(100vh) rotate(360deg);
    opacity: 0;
  }
}

.confetti {
  position: absolute;
  width: 12px;
  height: 12px;
  background: pink;
  border-radius: 50%;
  animation: fall linear infinite;
  opacity: 0.8;
}

.confetti-1 {
  left: 5%;
  animation-duration: 5s;
  animation-delay: 0s;
}
.confetti-2 {
  left: 10%;
  animation-duration: 6s;
  animation-delay: 1s;
}
.confetti-3 {
  left: 15%;
  animation-duration: 4s;
  animation-delay: 2s;
}
.confetti-4 {
  left: 20%;
  animation-duration: 6.5s;
  animation-delay: 1.5s;
}
.confetti-5 {
  left: 25%;
  animation-duration: 5.3s;
  animation-delay: 0.5s;
}
.confetti-30 {
  left: 95%;
  animation-duration: 6.2s;
  animation-delay: 0.8s;
}
</style>
