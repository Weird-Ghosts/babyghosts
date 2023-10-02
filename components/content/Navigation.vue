<template>
  <div
    class="px-6 xl:px-0 max-w-7xl items-center justify-center mx-auto pt-8 pb-32"
  >
    <NuxtLink
      to="/"
      aria-label="Home"
      class="gradient-animation block text-center gradient-text text-4xl lg:text-5xl font-bold py-8"
    >
      <div class="py-20 mx-auto">
        <Logo />
      </div>
    </NuxtLink>
    <nav
      class="flex w-full md:w-auto md:flex items-center md:item-end space-x-4"
    >
      <ContentNavigation v-slot="{ navigation }">
        <ul class="list-none p-0 m-0 flex flex-wrap space-x-4">
          <li
            class="inline text-base"
            v-for="link of navigation"
            :key="link._path"
          >
            <NuxtLink :to="link._path">{{ link.title }}</NuxtLink>
          </li>
        </ul>
      </ContentNavigation>
    </nav>
    <MobileMenu />
  </div>
</template>
<script setup>
const { data: navigation } = await useAsyncData("navigation", () =>
  fetchContentNavigation()
);
</script>

<style>
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
