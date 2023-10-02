<template>
  <div :class="{ 'menu-open': menuOpen }" class="absolute top-6 right-6 z-50">
    <Bars3Icon
      @click="toggleMenu"
      v-if="!menuOpen"
      class="h-6 w-6 md:hidden cursor-pointer"
      aria-hidden="true"
    />

    <nav
      id="nav-mobile"
      :style="{ left: menuOpen ? '0%' : '-100%' }"
      class="p-6 relative rainbow-border"
    >
      <XMarkIcon
        @click="toggleMenu"
        class="h-6 w-6 absolute top-6 right-6 z-50 cursor-pointer"
        aria-hidden="true"
      />
      <ContentNavigation v-slot="{ navigation }">
        <ul class="list-none p-0 m-0 space-y-4">
          <li class="text-2xl" v-for="link of navigation" :key="link._path">
            <NuxtLink :to="link._path" @click="closeMenu" class="glow-link">{{
              link.title
            }}</NuxtLink>
          </li>
        </ul>
      </ContentNavigation>
    </nav>
  </div>
</template>

<script setup>
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/20/solid";
import { ref } from "vue";
const menuOpen = ref(false);
const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};
const closeMenu = () => {
  menuOpen.value = false;
};
</script>

<style scoped>
nav#nav-mobile {
  @apply z-10 fixed top-0;

  left: -100%;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.9);
  transition: left 0.3s ease-out;
}

.menu-open nav {
  left: 0;
}
nav,
.slide-in-enter-active nav,
.slide-in-leave-active nav {
  transition: left 0.3s ease-out;
}

.slide-in-enter-from nav,
.slide-in-leave-to nav {
  left: -100%;
}

.slide-in-enter-to nav,
.slide-in-leave-from nav {
  left: 0;
}
</style>
