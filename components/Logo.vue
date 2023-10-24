<template>
  <div class="text-crt text-7xl">
    <NuxtLink to="/">
      <NuxtImg
        src="/img/logo.png"
        class="logo"
        provider="imgix"
        width="413"
        height="213"
        alt="Baby Ghosts logo, glowing text with a CRT pattern"
        :modifiers="{
          auto: 'format,compress',
        }"
      />
    </NuxtLink>
  </div>
</template>

<style scoped>
.logo {
  @apply -ml-3 md:-ml-8;
}
/* path {
  fill: #ffffff;
} */
</style>
