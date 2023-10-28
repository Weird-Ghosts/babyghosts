<template>
  <div class="flex flex-wrap">
    <span v-if="$slots.aside" class="prose flex grow"
      ><slot name="aside"
    /></span>

    <div
      class="float-section highlight-wrapper my-6 md:my-12 ml-auto w-full md:w-2/3"
    >
      <hr />
      <div class="highlight p-6 py-12 md:pl-0">
        <div v-if="$slots.intro" class="text-7xl text-red-200">
          <slot name="intro" />
        </div>
        <div v-if="$slots.body" class="prose"><slot name="body" /></div>
        <div v-else><slot name="default" /></div>
      </div>
      <hr />
    </div>
  </div>
</template>

<style scoped lang="postcss">
hr {
  background-color: rgba(255, 255, 255, 0.6);
  border: none;
  height: 2px;
  box-shadow: calc(2px) 0 calc(2px) rgba(220, 148, 232, 1),
    calc(-2px) 0 calc(2px) rgba(92, 201, 245, 1),
    0 0 calc(10px) rgba(255, 255, 255, calc(0.1));
}
</style>
