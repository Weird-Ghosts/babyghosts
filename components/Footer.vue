<template>
  <footer
    class="bg-zinc-900 w-full flex flex-wrap justify-between items-center space-y-6"
  >
    <div
      class="flex-wrap w-full mx-auto flex justify-between items-start p-6 max-w-screen-xl"
    >
      <!-- Left Side: Logo, About, etc. -->
      <nav class="md:flex items-center w-full md:w-auto">
        <ContentNavigation v-slot="{ navigation }">
          <ul>
            <li
              class="whitespace-nowrap"
              v-for="(link, index) of navigation"
              :key="link._path"
            >
              <NuxtLink
                :to="link._path"
                activeClass="active"
                class="text-sm font-body no-underline hover:text-zinc-50"
              >
                {{ link.title }}
              </NuxtLink>
            </li>
          </ul>
        </ContentNavigation>
      </nav>

      <!-- Right Side: Social Media Icons + SubscribeForm -->
      <div
        class="flex flex-wrap mt-6 md:mt-0 md:flex-col flex-row space-y-6 items-end"
      >
        <div class="flex space-x-4">
          <SocialMediaLinks />
          <!-- Add more icons as needed -->
        </div>
        <div class="w-full">
          <SubscribeForm />
        </div>
        <div>
          Email us:
          <a href="mailto:hello@babyghosts.fund" class="social">
            hello@babyghosts.fund
          </a>
        </div>
      </div>
      <div class="w-full mt-6 py-6">
        <p class="text-sm leading-6">
          &copy; {{ new Date().getFullYear() }} Baby Ghosts Studio Development
          Fund. <br />All rights reserved.
          <NuxtLink to="/media-kit" class="nav">media kit</NuxtLink>
          •
          <NuxtLink to="/privacy" class="nav">privacy</NuxtLink>
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const route = useRoute();

const { data: navigation } = await useAsyncData("navigation", () =>
  fetchContentNavigation()
);
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
  @apply leading-6 text-zinc-400;
  &:hover {
    @apply text-zinc-50;
  }
}
</style>
