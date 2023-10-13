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
  <div class="card">
    <div class="headshot">
      <NuxtImg
        :src="path"
        provider="imgix"
        class="rounded-xl"
        width="300"
        height="300"
        :alt="alt"
        fit="cover"
        :modifiers="{
          auto: 'format,compress',
          crop: 'faces',
          duotoneAlpha: 100,
          blendWidth: 600,
          blendFit: 'scale',
          blendAlpha: 90,
          blend:
            'https://t3.ftcdn.net/jpg/03/19/67/96/360_F_319679641_3l4WuzjrJkzjUJu6sbribyYOE9OmoJei.jpg',
          // blend:
          // 'https://www.shutterstock.com/shutterstock/videos/1069690582/thumb/1.jpg',
          // blend: 'https://babyghosts.fund/img/line-screen.png',
          monochrome: 'd4d4d8',
        }"
      />
    </div>

    <div class="bio">
      <slot name="bio" unwrap="p" />
    </div>
  </div>
</template>

<style lang="postcss">
.card {
  @apply flex flex-col md:flex-row md:text-left overflow-hidden md:p-6 p-6 bg-zinc-900  md:flex md:items-start mt-8;
  &:first-child {
    @apply mt-0;
  }
}

.headshot {
  @apply md:w-1/3 md:mr-4;
}
.headshot + .bio p:first-child {
  @apply mt-4 md:mt-0;
}
.bio {
  @apply md:w-2/3 text-sm mt-4 md:mt-0;
  p {
    @apply text-base md:text-sm;
  }
}
</style>
