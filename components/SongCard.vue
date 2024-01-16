<template>
  <div class="flex gap-6 items-center w-full max-w-xl">
    <div
      class="relative w-full h-64 bg-white rounded-lg shadow-lg overflow-hidde mb-24"
    >
      <div class="absolute inset-0 rounded-lg overflow-hidden bg-red-200">
        <img
          :src="songList.albumCover"
          :alt="`${songList.songTitle} Album Cover`"
        />
        <div
          class="absolute inset-0 backdrop backdrop-blur-10 bg-gradient-to-b from-transparent to-black"
        />
      </div>
      <div
        class="absolute flex space-x-6 transform translate-x-6 translate-y-8"
      >
        <div class="w-36 h-36 rounded-lg shadow-lg overflow-hidden">
          <img
            :src="songList.albumCover"
            :alt="`${songList.songTitle} Album Cover`"
          />
        </div>
        <div class="text-white pt-12">
          <h3 class="font-bold">
            {{ songList.artist }}
          </h3>
          <div class="text-sm opacity-60">
            {{ songList.songTitle }}
          </div>
          <div class="mt-8 text-gray-400">
            <div class="flex items-center space-x-2 text-xs">
              <svg
                class="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
                <path
                  d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"
                />
              </svg>
              <span>{{ songList.genre }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  songList: {
    artist: string;
    songTitle: string;
    albumCover: string;
    genre: string;
  };
}>();
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 2s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
