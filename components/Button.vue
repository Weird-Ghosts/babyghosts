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

const buttonClass = ref("button");
</script>

<template>
  <NuxtLink :to="link.link.to">
    <button class="button">
      <span v-if="!$slots?.default">Hello Ghosties! 👋</span>
      <span v-else>
        <ContentSlot :use="$slots.default" unwrap="p" />
      </span>
    </button>
  </NuxtLink>
</template>

<style></style>
