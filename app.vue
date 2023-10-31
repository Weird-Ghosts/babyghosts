<template>
  <div id="app">
    <div class="grain-wrapper">
      <div class="grain"></div>
    </div>

    <Navigation />
    <main class="w-full mx-auto max-w-screen-xl" role="main">
      <NuxtPage />
    </main>
    <Footer />
  </div>
</template>
<style>
#app {
  @apply flex flex-col min-h-screen;
}

main {
  @apply flex-grow;
}
</style>
<script setup>
const { page } = useContent();
import { ref, watch } from "vue";
let baseClasses = "overflow-x-hidden leading-normal flex flex-col min-h-screen";
let bodyClass = ref(baseClasses);
useContentHead(page);

useHead({
  bodyAttrs: {
    class: bodyClass,
  },

  meta: [
    { name: "twitter:card", content: "summary_large_image" },
    {
      name: "keywords",
      content:
        "indie studios, game dev funding, impact funding, social finance",
    },
    { name: "robots", content: "index, follow" },
    { name: "author", content: "Baby Ghosts" },
    { name: "copyright", content: "© 2023 Baby Ghosts" },
  ],
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Baby Ghosts` : "Baby Ghosts";
  },
  link: [
    {
      rel: "icon",
      type: "image/png",
      href: "/favicon-32x32.png",
    },
  ],
});
watchEffect(() => {
  const newVal = page.value ? page.value.bodyClass : null;
  if (newVal) {
    bodyClass.value = `${baseClasses} ${newVal}`;
  } else {
    bodyClass.value = baseClasses;
  }
});
const defaultTitle = "Baby Ghosts";
const defaultDescription =
  "Baby Ghosts is nonprofit supporting studios led by underrepresented founders across Canada.";
const defaultImage = "https://babyghosts.fund/img/cards/Twitter-Card@2x.png";
const defaultUrl = "https://babyghosts.fund";
const baseUrl = "https://babyghosts.fund";

useSeoMeta({
  ogTitle: () => (page.value && page.value.title) || defaultTitle,
  ogDescription: () =>
    (page.value && page.value.description) || defaultDescription,
  description: () =>
    (page.value && page.value.description) || defaultDescription,
  ogImage: () =>
    page.value && page.value.image ? page.value.image.src : defaultImage,
  ogUrl: () => (page.value && `${baseUrl}${page.value._path}`) || defaultUrl,
  twitterTitle: () => (page.value && page.value.title) || defaultTitle,
  twitterDescription: () =>
    (page.value && page.value.description) || defaultDescription,
  twitterImage: () =>
    page.value && page.value.image ? page.value.image.src : defaultImage,
});
</script>
