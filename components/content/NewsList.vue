<template>
  <ContentList :query="query">
    <template #default="{ list }">
      <div v-for="post in list" :key="post._path" class="mb-12 h-full">
        <Excerpt :post="post" />
      </div>
    </template>
    <template #not-found>
      <p class="text-2xl">No articles found… yet!</p>
    </template>
  </ContentList>
</template>
<script setup lang="ts">
// definePageMeta({ documentDriven: { page: false, surround: false } });
import type { QueryBuilderParams } from "@nuxt/content/dist/runtime/types";
const query: QueryBuilderParams = {
  path: "/news",
  where: [{ _path: { $ne: "/news" } }, { _path: { $ne: "/news/_dir" } }],
  only: ["title", "date", "_path", "description"],
  sort: [{ date: -1 }],
};
</script>
