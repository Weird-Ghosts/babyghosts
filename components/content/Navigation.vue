<template>
  <div class="flex justify-between items-center rainbow-border px-6">
    <div v-if="$route.path !== '/'" class="">
      <NuxtLink
        to="/"
        aria-label="Home"
        class="block text-left gradient-text text-2xl md:text-5xl font-bold leading-loose"
      >
        baby ghosts
        <!-- <Logo class="w-32" /> -->
      </NuxtLink>
    </div>
    <nav class="py-6 flex items-center space-x-4 text-2xl">
      <!-- <NuxtLink to="/sponsor" class="text-center"> Sponsor </NuxtLink>
      <NuxtLink to="/donate" class="text-center"> Donate </NuxtLink> -->

      <NuxtLink to="/grant-and-accelerator" class="text-center">
        Grant & Accelerator
      </NuxtLink>
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
