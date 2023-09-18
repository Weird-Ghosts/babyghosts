<template>
  <footer
    class="text-center mx-auto"
    v-if="route.path !== '/apply' && route.path !== '/baby-ghosts'"
  >
    <!-- <div class="text-3xl">Interested in partnering with us?</div>
    <a href="mailto:hello@babyghosts.fund" class="text-2xl font-bold underline"
      >Get in touch.</a
    > -->
    <div class="max-w-screen-xl mx-auto pb-12 px-6 xl:px-0">
      <a name="subscribe"></a>
      <div class="mx-auto max-w-2xl" id="subscribe">
        <!-- <MailingListSignupForm
          v-if="
            route.path !== '/thank-you' &&
            route.path !== '/mailing-list' &&
            route.path !== '/apply'
          "
        /> -->
      </div>
      <p class="text-left text-base leading-6 mt-12">
        &copy; {{ new Date().getFullYear() }}

        Baby Ghosts Studio Development Fund. All rights reserved.
      </p>

      <p class="text-left text-base leading-6 mt-4">
        <!-- <NuxtLink to="/media-kit">media kit</NuxtLink>
        •
        <NuxtLink to="/privacy">privacy</NuxtLink> -->
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
