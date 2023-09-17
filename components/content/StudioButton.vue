<script setup lang="ts">
import type { PropType } from "vue";

import type { NuxtLinkProps } from "#app";
import { ref } from "vue";
const link = defineProps({
  link: {
    type: Object as PropType<NuxtLinkProps>,
    required: false,
  },
});

const buttonClass = ref("my-button");
</script>

<template>
  <NuxtLink :to="link.link.to">
    <button class="my-button">
      <span v-if="!$slots?.default">Hello Ghosties! 👋</span>
      <span v-else>
        <ContentSlot :use="$slots.default" unwrap="p" />
      </span>
    </button>
  </NuxtLink>
</template>

<style>
button.my-button {
  @apply inline-block transition-all ease-in-out duration-300 text-black rounded-2xl;
  box-shadow: 6px 6px 0 0 #99ffcc; /* Custom style */

  span {
    @apply inline-block uppercase font-bold text-xl leading-none transition-all ease-in-out duration-300 bg-zinc-100 px-8 py-4 rounded-2xl border-2 border-aquaFresh;
  }

  &:hover {
    span {
      @apply translate-y-2 translate-x-2; /* Assuming space.2 is 0.5rem */
    }
  }

  &:active {
    span {
      @apply translate-y-1; /* Assuming space.1 is 0.25rem */
    }
  }
}
</style>
