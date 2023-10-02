<template>
  <div
    class="md:flex px-6 xl:px-0 max-w-7xl items-center justify-between mx-auto pt-8"
  >
    <NuxtLink
      to="/"
      aria-label="Home"
      class="text-center text-4xl lg:text-5xl font-bold py-8"
    >
      <Logo />
    </NuxtLink>

    <div
      v-if="
        route.path !== '/thank-you' &&
        route.path !== '/subscribe' &&
        route.path !== '/apply'
      "
      class="hidden md:flex items-center justify-end"
      id="subscribe"
    >
      <a name="subscribe"></a>
      <NuxtLink to="/subscribe" class="button primary"
        ><span>Subscribe</span></NuxtLink
      >
    </div>
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
  "lemonChiffon",

  "aquaFresh",

  "lavenderHush",

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
