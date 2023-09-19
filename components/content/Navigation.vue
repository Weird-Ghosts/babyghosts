<template>
  <div class="flex justify-between items-center rainbow-border px-6 h-24">
    <NuxtLink
      to="/"
      aria-label="Home"
      class="block text-left gradient-text item-start text-base md:text-3xl font-bold leading-[3rem]"
    >
      baby ghosts
      <!-- <Logo class="w-32" /> -->
    </NuxtLink>

    <nav class="py-6 flex items-center item-end space-x-4 text-2xl">
      <NuxtLink
        to="/grant-and-accelerator"
        class="text-right text-base md:text-2xl"
      >
        Grant & Accelerator
      </NuxtLink>
      <!-- <NuxtLink to="/sponsor" class="text-center text-sm text-zinc-500">
        Sponsor
      </NuxtLink>
      <NuxtLink to="/donate" class="text-center text-sm text-zinc-500">
        Donate
      </NuxtLink> -->
    </nav>
  </div>
</template>

<style>
.rainbow-border {
  border-top: 1px solid;
  border-image: linear-gradient(
    to right,
    #ff9999,
    #ffcc99,
    #ffff99,
    #ccff99,
    #99ff99,
    #99ffcc,
    #99ccff,
    #9999ff,
    #cc99ff,
    #ff99cc
  );
  border-image-slice: 1;
}
</style>
