<template>
  <footer
    class="max-w-screen-xl mx-auto py-12"
    v-if="route.path !== '/apply' && route.path !== '/baby-ghosts'"
  >
    <div class="mx-6">
      <p class="text-center text-base leading-6 mt-0">
        &copy; {{ new Date().getFullYear() }}

        Baby Ghosts Studio Development Fund. All rights reserved.
      </p>

      <p class="text-center text-base leading-6 mt-4">
        <NuxtLink to="/media-kit">media kit</NuxtLink>
        •
        <NuxtLink to="/privacy">privacy</NuxtLink>
      </p>
    </div>
  </footer>
</template>
<script setup lang="ts">
const route = useRoute();
</script>
<style lang="postcss" scoped>
a.social {
  @apply ml-6;
  &:hover {
    @apply text-body transform scale-150;
  }
  &:first-child {
    @apply ml-0;
  }
}
a.nav {
  @apply text-base leading-6 text-body;
  @screen sm {
    @apply text-xl;
  }
  &:hover {
    @apply border-b-2 border-body;
  }
}
</style>
