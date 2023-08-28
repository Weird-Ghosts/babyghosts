<template>
  <div class="heading flex flex-wrap mx-auto max-w-screen-xl">
    <section class="w-full lg:w-2/3 h-full max-w-4xl">
      <h1
        class="text-3xl font-extrabold sm:text-5xl sm:leading-none md:text-6xl"
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
