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
          blendWidth: 400,
          blendFit: 'scale',
          blendAlpha: 80,
          blend:
            'https://t3.ftcdn.net/jpg/03/19/67/96/360_F_319679641_3l4WuzjrJkzjUJu6sbribyYOE9OmoJei.jpg',
          // blend:
          // 'https://www.shutterstock.com/shutterstock/videos/1069690582/thumb/1.jpg',
          // blend: 'https://babyghosts.fund/img/line-screen.png',
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
