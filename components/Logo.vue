<template>
  <div class="text-crt text-7xl">
    <NuxtLink to="/">
      <NuxtImg src="/img/logo.png" alt="logo" class="logo" />
    </NuxtLink>
  </div>
</template>
<script setup>
// import { gsap } from "gsap";
// import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
// import { ref, onMounted } from "vue";

// gsap.registerPlugin(MorphSVGPlugin);

// // const characters = ref(["S2", "T", "S", "O", "H", "G", "Y", "B2", "A", "B"]);
// const characters = ref(["B", "A", "Y"]);

// function animateMorph(character) {
//   gsap.to(`#${character}_reg`, {
//     morphSVG: `#${character}_puff`,
//     duration: 2,
//     repeat: -1, // for infinite loop
//     yoyo: true, // to morph back and forth
//     ease: "power1.inOut",
//   });
// }

// function shuffle(array) {
//   array.sort(() => Math.random() - 0.5);
// }

// shuffle(characters.value);

// onMounted(() => {
//   characters.value.forEach((character) => {
//     gsap.delayedCall(Math.random() * 5, animateMorph, [character]);
//   });
// });
</script>

<style scoped>
.logo {
  mix-blend-mode: lighten;
}
/* path {
  fill: #ffffff;
} */
</style>
