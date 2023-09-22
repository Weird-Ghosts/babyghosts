<template>
  <footer
    class="max-w-screen-xl mx-auto py-12"
    v-if="route.path !== '/apply' && route.path !== '/baby-ghosts'"
  >
    <div class="md:flex md:flex-wrap w-full">
      <div class="mb-12 md:mb-0 text-center mx-auto px-6 xl:px-0 md:w-1/2">
        <div class="text-3xl">Interested in partnering with us?</div>
        <a
          href="mailto:hello@babyghosts.fund"
          class="text-2xl font-bold underline"
          >Get in touch.</a
        >
      </div>
      <div
        v-if="
          route.path !== '/thank-you' &&
          route.path !== '/subscribe' &&
          route.path !== '/apply'
        "
        class="text-center md:w-1/2 justify-end"
        id="subscribe"
      >
        <a name="subscribe"></a>

        <NuxtLink to="/subscribe" class="button" Subscribe
          ><span>Subscribe</span></NuxtLink
        >
      </div>
    </div>
    <div class="mx-6">
      <p class="text-center text-base leading-6 mt-12">
        &copy; {{ new Date().getFullYear() }}

        Baby Ghosts Studio Development Fund. All rights reserved.
      </p>

      <!-- <p class="text-center text-base leading-6 mt-4">
        <NuxtLink to="/media-kit">media kit</NuxtLink>
        •
        <NuxtLink to="/privacy">privacy</NuxtLink>
      </p> -->
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
