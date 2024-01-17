<template>
  <div
    class="w-full max-w-5xl gap-2 h-auto wrapper"
    style="
       {
        grid-template-columns: repeat(var(--col), 1fr);
        grid-template-rows: repeat(var(--row), 1fr);
      }
    "
  >
    <div v-for="idx in col * row" class="row-span-1">
      <UPopover
        v-if="idx <= days"
        mode="hover"
        :popper="{ placement: 'top-end' }"
      >
        <button
          :id="`${idx + 1}`"
          class="dark:active:border-2 dark:active:border-teal-400 dark:bg-stone-800 dark:hover:bg-stone-600 ease-in-out duration-100 size-[clamp(0.75rem,4vw+1rem,1rem)] rounded-sm"
        ></button>

        <template #panel>
          <div
            class="px-2 py-1 bg-gray-100 dark:bg-gray-950 text-black dark:text-white"
          >
            {{ convertDay(idx + 1, year) }}
          </div>
        </template>
      </UPopover>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  col: number;
  row: number;
  days: number;
  year: number;
}>();

function convertDay(dayNumber: number, year: number): string {
  const date = new Date(year, 0, dayNumber);
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
}
</script>

<style scoped>
.wrapper {
  display: grid;
  grid-template-columns: repeat(v-bind(col), 1fr);
  grid-template-rows: repeat(v-bind(row), 1fr);
}
</style>
