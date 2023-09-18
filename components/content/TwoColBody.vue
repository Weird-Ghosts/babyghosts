<template>
  <div class="md:mt-10 mx-auto max-w-screen-xl pb-6 md:pb-0">
    <section class="relative">
      <div class="order-1 w-full lg:grid lg:grid-cols-2 gap-8">
        <div v-if="$slots.col1"><slot name="col1" /></div>
        <div v-if="$slots.col2"><slot name="col2" /></div>
        <div v-else><slot name="default" /></div>
      </div>
    </section>
  </div>
</template>

<style lang="postcss">
ul {
  @apply list-outside list-disc pl-5;
}
ul,
p {
  @apply text-xl mt-4;
}
</style>
