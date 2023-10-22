<template>
  <div class="text-crt text-7xl">
    <NuxtLink to="/">
      <NuxtImg
        src="/img/logo.png"
        provider="imgix"
        class="logo"
        width="417"
        height="218"
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
  mix-blend-mode: lighten;
}
/* path {
  fill: #ffffff;
} */
</style>
