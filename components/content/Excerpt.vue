<template>
  <NuxtLink :to="post._path" class="block mb-2">
    <div class="article-title--excerpt" v-html="post.title" />
    <div class="uppercase font-black text-sm inline-block">
      {{ $dayjs(post.date).format("MMMM D, YYYY") }}
    </div>
  </NuxtLink>

  <div class="prose excerpt" v-html="md.render(post.description)" />
</template>

<script>
import MarkdownIt from "markdown-it";

export default {
  props: ["post"],
  data() {
    return {
      md: new MarkdownIt({ typographer: true }),
    };
  },
};
</script>

<style scoped>
h3 {
  @apply text-3xl underline;
}

section {
  .excerpt {
    :deep() p {
      @apply text-lg mt-0 pt-0 !important;
    }
    @apply text-xl;
  }
}
</style>
