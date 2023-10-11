<template>
  <div class="flex flex-wrap mx-auto max-w-screen-xl">
    <section class="w-full lg:w-2/3">
      <h1
        class="text-3xl sm:text-5xl uppercase sm:leading-none md:text-6xl text-zinc-200"
      >
        <ContentSlot :use="$slots.default" unwrap="p" />
      </h1>
      <div v-if="$slots.intro">
        <p
          class="text-xl leading-tight md:text-4xl mt-8 font-display text-zinc-300"
          id="intro"
        >
          <ContentSlot :use="$slots.intro" unwrap="p" />
        </p>
      </div>
    </section>
  </div>
</template>
