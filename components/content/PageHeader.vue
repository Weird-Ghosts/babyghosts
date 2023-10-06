<template>
  <div class="flex flex-wrap mx-auto max-w-screen-xl">
    <section class="w-full lg:w-2/3 max-w-4xl">
      <h1
        class="text-3xl font-thin italic sm:text-5xl sm:leading-none md:text-6xl text-zinc-200"
      >
        <ContentSlot :use="$slots.default" unwrap="p" />
      </h1>
      <div v-if="$slots.intro">
        <p class="text-2xl leading-8 mt-8">
          <ContentSlot :use="$slots.intro" unwrap="p" />
        </p>
      </div>
    </section>
  </div>
</template>
