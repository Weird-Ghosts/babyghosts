<template>
  <div
    id="header-wrap"
    class="flex justify-between items-center mx-auto max-w-screen-xl px-4 sm:px-6 pt-8 mb-12 lg:mb-24"
  >
    <div
      id="name-box"
      class="flex flex-wrap md:flex-nowrap max-w-screen-xl items-center"
    >
      <Logo />
    </div>
    <nav class="ml-auto hidden md:flex items-center">
      <ContentNavigation v-slot="{ navigation }">
        <ul
          class="list-none py-4 my-4 md:pl-4 md:m-0 grid md:grid-cols-2 md:grid-rows-3 lg:grid-cols-3 lg:grid-rows-2 md:gap-x-4"
        >
          <li
            class="inline whitespace-nowrap"
            v-for="(link, index) of navigation"
            :key="link._path"
          >
            <NuxtLink
              :to="link._path"
              :class="`text-base lg:text-xl glow-link ${getColorClass(index)}`"
            >
              {{ link.title }}
            </NuxtLink>
          </li>
        </ul>
      </ContentNavigation>

      <!-- image here called faberset -->
    </nav>
  </div>

  <MobileMenu />
</template>
<script setup>
const route = useRoute();

const { data: navigation } = await useAsyncData("navigation", () =>
  fetchContentNavigation()
);
import { ref } from "vue";

const colours = [
  "peachFuzz",
  "jadeMist",
  "skyKiss",
  "lavenderHush",
  "purpleHaze",
  "pinkBliss",
];

const getColorClass = (index) => {
  return colours[index % colours.length];
};
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
