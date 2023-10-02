<template>
  <main class="mt-10 mx-auto max-w-screen-xl">
    <div
      class="mt-6 flex flex-wrap md:grid md:grid-cols-2 lg:grid-cols-3 gap-12 items-start align-items-start"
    >
      <ContentList :query="query">
        <template #default="{ list }">
          <div v-for="studio in list" class="mx-auto h-full">
            <Studio :studio="studio" />
          </div>
        </template>
      </ContentList>
    </div>
  </main>
</template>
<script setup lang="ts">
// definePageMeta({ documentDriven: { page: false, surround: false } });

import type { QueryBuilderParams } from "@nuxt/content/dist/runtime/types";
const query: QueryBuilderParams = {
  path: "/studios",
  where: [{ _path: { $ne: "/studios" } }, { _path: { $ne: "/studios/_dir" } }],
};
</script>
