<template>
  <div class="items-center rainbow-border px-6 pt-8">
    <NuxtLink
      to="/"
      aria-label="Home"
      class="gradient-animation block text-center gradient-text text-4xl lg:text-5xl font-bold py-8"
    >
      baby ghosts
      <!-- <Logo class="w-32" /> -->
    </NuxtLink>

    <nav
      class="flex justify-center w-full md:w-auto md:flex items-center md:item-end space-x-4 md:text-2xl"
    >
      <NuxtLink to="/about" class="text-center"> About Us </NuxtLink>
      <NuxtLink
        to="/grant-and-accelerator"
        class="text-center text-base md:text-2xl"
      >
        Grant & Accelerator
      </NuxtLink>
      <NuxtLink to="/get-involved" class="text-center"> Get Involved </NuxtLink>
      <NuxtLink to="/research-and-impact" class="text-center">
        Research & Impact </NuxtLink
      ><NuxtLink to="/donate" class="text-center"> Donate </NuxtLink>
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
.gradient-animation {
  background-size: 200% 200%;
  animation: gradient-animation 10s linear infinite;
  color: transparent;
}
@keyframes gradient-animation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
