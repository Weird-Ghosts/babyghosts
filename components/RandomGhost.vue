<template>
  <div>
    <img
      width="135"
      height="129"
      class="ghostie flex items-center justify-center"
      :src="randomGhostSrc"
      alt="Random Ghost"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";

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

onMounted(() => {
  const randomIndex = Math.floor(Math.random() * ghosts.length);
  randomGhostSrc.value = "/img/ghosts/" + ghosts[randomIndex];
});
</script>
