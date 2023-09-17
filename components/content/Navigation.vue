<template>
  <div class="justify-center align-middle items-center">
    <div v-if="$route.path !== '/'" class="py-20">
      <NuxtLink
        to="/"
        aria-label="Home"
        class="mx-auto block text-center gradient-text text-5xl font-bold leading-loose"
      >
        baby ghosts
        <!-- <Logo class="w-32" /> -->
      </NuxtLink>
    </div>
    <nav
      class="w-full py-6 flex justify-center items-center space-x-4 rainbow-border text-2xl"
    >
      <NuxtLink to="/sponsor" class="flex-1 text-center"> Sponsor </NuxtLink>
      <NuxtLink to="/donate" class="flex-1 text-center"> Donate </NuxtLink>
      <NuxtLink to="/about" class="flex-1 text-center"> About </NuxtLink>
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
