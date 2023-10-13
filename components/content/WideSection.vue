<template>
  <div class="py-6 my-6 md:py-12 md:my-12 glow-bg mx-6 lg:mx-0">
    <div class="mx-auto max-w-screen-xl">
      <section class="wide">
        <template v-if="$slots.col1 && $slots.col2">
          <div class="order-1 w-full lg:grid lg:grid-cols-2 gap-8">
            <div v-if="$slots.col1"><slot name="col1" /></div>
            <div class="mt-12 lg:mt-0" v-if="$slots.col2">
              <slot name="col2" />
            </div>
          </div>
        </template>
        <div v-else><slot name="default" /></div>
      </section>
    </div>
  </div>
</template>

<style scoped lang="postcss">
p {
  @apply text-xl mt-4;
}
h3 {
  @apply text-3xl mt-8 leading-10;
  + p,
  &:first-child {
    @apply mt-0;
  }
}
</style>
