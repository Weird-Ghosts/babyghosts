<template>
  <div class="mx-auto max-w-7xl">
    <div class="mx-auto divide-y divide-gray-900/10">
      <dl class="mb-12 md:mb-0 space-y-6 divide-y divide-gray-900/10">
        <ContentSlot :use="$slots.default" unwrap="p" />
      </dl>
    </div>
  </div>
</template>
