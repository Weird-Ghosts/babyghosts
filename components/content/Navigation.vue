<template>
  <div
    id="header-wrap"
    class="flex flex-wrap max-w-screen-xl items-center mb-4"
  >
    <div
      id="name-box"
      class="flex flex-wrap lg:flex-nowrap max-w-screen-xl items-center w-full lg:w-1/2"
    >
      <Logo />
    </div>
    <nav class="flex flex-wrap items-center w-full lg:w-1/2">
      <div class="w-full">
        <ContentNavigation v-slot="{ navigation }">
          <ul
            class="list-none py-4 my-4 lg:pl-4 lg:m-0 grid lg:grid-cols-3 lg:grid-rows-2 lg:gap-x-4 border-t-2 border-b-2 border-black lg:border-none"
          >
            <li
              class="inline text-base whitespace-nowrap truncate"
              v-for="(link, index) of navigation"
              :key="link._path"
            >
              <NuxtLink
                :to="link._path"
                :class="`glow-link ${getColorClass(index)}`"
              >
                {{ link.title }}
              </NuxtLink>
            </li>
          </ul>
        </ContentNavigation>
      </div>

      <!-- image here called faberset -->
    </nav>
  </div>

  <nav
    class="md:flex px-6 mx-auto xl:px-0 max-w-7xl items-center md:item-end space-x-4 hidden md:visible"
  >
    <ContentNavigation v-slot="{ navigation }">
      <ul class="list-none p-0 m-0 flex flex-wrap space-x-4">
        <li
          class="inline text-base"
          v-for="(link, index) of navigation"
          :key="link._path"
        >
          <NuxtLink
            :to="link._path"
            :class="`glow-link ${getColorClass(index)}`"
          >
            {{ link.title }}
          </NuxtLink>
        </li>
      </ul>
    </ContentNavigation>
  </nav>
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
