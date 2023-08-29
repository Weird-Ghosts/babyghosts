<template>
  <ContentDoc>
    <template #default="{ doc }">
      <div
        class="heading py-16 flex flex-wrap mx-auto h-screen justify-center items-center"
      >
        <div class="w-full h-full">
          <div class="page max-w-7xl mx-auto">
            <div class="prose lg:prose-base">
              <ContentRenderer :value="doc" />
            </div>
          </div>
        </div>
      </div>
    </template>
    <template #not-found>
      <div class="heading md:py-16 flex flex-wrap mx-auto">
        <div class="w-full h-full">
          <div class="page max-w-5xl mx-auto">
            <h1 class="page-title">Sorry, no post here!</h1>
          </div>
        </div>
      </div>
    </template>
  </ContentDoc>
</template>

<style lang="postcss">
.page {
  @apply p-4;

  @screen md {
    @apply p-12;
  }
}
</style>
