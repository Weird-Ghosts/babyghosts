<template>
  <div class="flex flex-wrap mx-auto max-w-screen-xl">
    <section class="w-full lg:w-2/3">
      <h1 class="text-5xl uppercase sm:leading-none md:text-7xl text-container">
        <span class="text-bg">
          <ContentSlot :use="$slots.default" unwrap="p" class="text-bg" />
        </span>
        <span class="text-fg">
          <ContentSlot :use="$slots.default" unwrap="p" class="text-fg" />
        </span>
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
<style lang="postcss">
.text-container {
  position: relative;
}

.text-bg {
  position: absolute;
  top: 0;
  left: 0;
}
.text-fg {
  position: relative; /* or simply remove the position property altogether */
  /* ... other styles ... */
}

.text-container::after {
  content: "";
  display: block;
  height: 100%; /* occupy full height */
  visibility: hidden; /* hide the pseudo-element */
}

.text-fg {
  background-image: url("~/assets/img/CRT-screen-400x400.png");
  background-repeat: repeat;
  background-size: 100px 100px;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  mix-blend-mode: screen;
}
</style>
