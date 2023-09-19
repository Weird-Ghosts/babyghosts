<script setup lang="ts">
import type { PropType } from "vue";
import type { NuxtLinkProps } from "#app";

defineProps({
  path: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    required: false,
  },
});
</script>

<template>
  <div class="card md:flex items-start align-items-start mt-8">
    <div class="md:w-1/3 md:mr-4 headshot">
      <NuxtImg
        :src="path"
        provider="imgix"
        class="rounded-xl"
        width="200"
        height="200"
        :alt="alt"
        fit="cover"
        :modifiers="{
          auto: 'format,compress',
          crop: 'faces',
          duotoneAlpha: 100,
          blendWidth: 750,
          blendFit: 'scale',
          blendAlpha: 40,
          blend: 'https://www.datocms-assets.com/35480/1601833062-10.png',
          monochrome: 'd4d4d8',
        }"
      />
    </div>

    <div class="md:w-2/3 text-sm bio">
      <slot name="bio" unwrap="p" />
    </div>
  </div>
</template>

<style lang="postcss">
.card {
  @apply overflow-hidden md:p-6 md:bg-zinc-900;
  &:first-child {
    @apply mt-8 md:mt-0;
  }
}
.headshot + .bio p:first-child {
  @apply mt-4 md:mt-0;
}
.bio p {
  @apply text-xs md:text-sm;
}
</style>
