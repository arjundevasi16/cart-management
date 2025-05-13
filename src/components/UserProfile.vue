<template>
  <div class="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-2xl">
    <div class="flex items-center space-x-6">
      <img
        :src="user.avatar"
        alt="User avatar"
        class="w-24 h-24 rounded-full border-4 border-green-500 object-cover"
      />
      <div>
        <h2 class="text-2xl font-bold">{{ user.name }}</h2>
        <p class="text-gray-600">{{ user.email }}</p>
        <p class="text-sm text-gray-500 mt-1">Joined on {{ user.joined }}</p>
      </div>
    </div>

    <div class="mt-6">
      <h3 class="text-xl font-semibold mb-2">About</h3>
      <p class="text-gray-700 leading-relaxed">
        {{ user.bio }}
      </p>
    </div>

    <div class="mt-6">
      <button class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
        Edit Profile
      </button>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'UserProfile',
  data() {
    return {
      user: {
        name: 'Ananya Mehra',
        email: 'ananya@example.com',
        avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
        joined: 'January 5, 2023',
        bio: 'Software developer with a passion for clean UI, building fast apps, and learning new technologies.',
      },
    }
  },
}
</script>
