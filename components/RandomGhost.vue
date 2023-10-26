<template>
  <div>
    <img
      width="135"
      height="129"
      class="ghostie flex items-center justify-center"
      :src="randomGhostSrc"
      alt="Random Ghost"
      @mouseover="changeGhost"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const ghosts = [
  "Ghost-Disbelieving.svg",
  "Ghost-Double-Take.svg",
  "Ghost-Exasperated.svg",
  "Ghost-Happy.svg",
  "Ghost-Mild.svg",
  "Ghost-Sweet.svg",
  "Ghost-WTF.svg",
];

const randomGhostSrc = ref("");

const getRandomGhost = () => {
  let randomIndex;
  // Ensure the new random index is different from the current one
  do {
    randomIndex = Math.floor(Math.random() * ghosts.length);
  } while (`/img/ghosts/${ghosts[randomIndex]}` === randomGhostSrc.value);

  return `/img/ghosts/${ghosts[randomIndex]}`;
};

const changeGhost = () => {
  randomGhostSrc.value = getRandomGhost();
};

onMounted(() => {
  randomGhostSrc.value = getRandomGhost();
});
</script>
