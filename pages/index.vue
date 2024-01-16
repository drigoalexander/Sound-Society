<template>
  <div class="my-16 flex flex-col gap-24">
    <h1
      class="flex flex-col leading-none text-[clamp(1rem,4vw+1rem,4rem)] uppercase font-bold tracking-tight items-center text-left"
      style="font-family: 'Roboto Condensed', sans-serif"
    >
      <span class="">Your <span class="text-[#FFC122]">taste</span>.</span>
      <span> amplified by <span class="text-[#00995E]"> others </span> </span>
    </h1>

    <div
      style="font-family: 'Roboto Condensed', sans-serif"
      class="font-semibold w-[120%] -translate-x-[8rem] mx-auto py-4 whitespace-nowrap uppercase bg-[#f93b21] rotate-[-2deg]"
    >
      <span
        id="running-text"
        class="flex items-center gap-4 w-full text-[clamp(1rem,4vw+1rem,1.75rem)]"
        >TRACK YOUR SONG RESONATE WITH OTHERS · TRACK YOUR SONG · RESONATE WITH
        OTHERS · TRACK YOUR SONG · RESONATE WITH OTHERS · TRACK YOUR SONG ·
        RESONATE WITH OTHERS · TRACK YOUR SONG · RESONATE WITH OTHERS · TRACK
        YOUR SONG · RESONATE WITH OTHERS ·
      </span>
    </div>

    <section class="mt-16 flex flex-col gap-32 w-full mx-auto">
      <div class="w-full max-w-xl mx-auto text-center">
        <h4
          class="text-[clamp(1.125rem,4vw+1rem,3rem)] font-semibold tracking-tight capitalize leading-none"
        >
          Remember that song? <br />
          It's waiting for <span class="text-[#ff8693]"> you</span>.
        </h4>
        <p
          class="capitalize text-[clamp(0.75rem,4vw+1rem,1rem)] font-light mt-6 tracking-wide"
        >
          One click away, a thousand memories. Let the music take you back, song
          by song.
        </p>
      </div>
      <MusicCard />
    </section>
  </div>
</template>

<script setup lang="ts">
const user = useSupabaseUser();
onMounted(() => {
  const runningText = document.getElementById("running-text");

  runningText?.animate(
    {
      transform: "translateX(-40%)",
    },
    {
      duration: 15000,

      iterations: Infinity,
    }
  );
});
</script>
