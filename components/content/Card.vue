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
  <div class="md:flex items-start align-items-start mt-8 card">
    <div class="md:w-1/3 mr-4 headshot">
      <NuxtImg
        :src="path"
        provider="imgix"
        width="300"
        :alt="alt"
        height="500"
        fit="cover"
        :modifiers="{ auto: 'format,compress', crop: 'faces' }"
      />
    </div>

    <p class="md:w-2/3 text-sm bio">
      <slot name="bio" />
    </p>
  </div>
</template>

<style lang="postcss">
.card {
  @apply overflow-hidden p-6;
  &:first-child {
    @apply mt-0;
  }
}
.headshot + .bio p:first-child {
  @apply mt-0;
}
.bio p {
  @apply text-sm;
}
</style>
