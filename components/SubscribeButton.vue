<template>
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
    <NuxtLink to="/subscribe" class="button purpleHaze"
      ><span>Subscribe</span></NuxtLink
    >
  </div>
</template>
<script setup>
const route = useRoute();
</script>
