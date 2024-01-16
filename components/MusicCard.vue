<script setup>
const date = ref(new Date());
const index = ref(0);
const label = computed(() =>
  date.value.toLocaleDateString("en-us", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  })
);

const listSong = ref([
  {
    artist: "Ed Sheeran",
    songTitle: "Photograph",
    albumCover: "https://source.unsplash.com/UToSNH3bKP4",
    genre: "Pop",
  },
  {
    artist: "Ed Sheeran",
    songTitle: "Hearts Don't Break Around Here",
    albumCover: "https://source.unsplash.com/Z5mzhMcFybs",
    genre: "Pop",
  },
]);
</script>

<template>
  <div class="flex gap-2 w-full mx-auto max-w-7xl items-start justify-evenly">
    <div class="flex flex-col h-auto mx-auto w-full items-center">
      <UPopover :popper="{ placement: 'bottom-start' }">
        <UButton
          icon="i-heroicons-calendar-days-20-solid"
          :label="label"
          variant="outline"
          color="black"
        />

        <template #panel="{ close }">
          <LazyDatePicker v-model="date" @close="close" />
        </template>
      </UPopover>
      <span
        style="font-family: 'Roboto Condensed', sans-serif"
        class="mt-10 text-[clamp(1.125rem,4vw+1rem,3rem)] tracking-tighter font-bold"
      >
        On That Day
      </span>
    </div>
    <div class="w-full flex items-center justify-center mx-auto gap-6">
      <svg
        @click="index -= 1"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="size-10"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg>
      <LazySongCard :song-list="listSong[index]" />
      <svg
        @click="index += 1"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="size-10"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg>
    </div>
  </div>
</template>
