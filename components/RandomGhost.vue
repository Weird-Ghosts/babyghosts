<template>
  <div class="ghost-container flex items-center justify-center">
    <div
      v-for="(ghost, index) in randomGhostsSrc"
      :key="index"
      :class="`absolute ghost-${index} ${ghost.animationClass} min-w-[75px]`"
      :style="ghost.styles"
    >
      <img
        width="135"
        height="129"
        class="ghostie"
        :src="ghost.src"
        alt="Random Ghost"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { gsap, ScrollTrigger } from "gsap/all";

const ghosts = [
  "Ghost-Disbelieving.svg",
  "Ghost-Double-Take.svg",
  "Ghost-Exasperated.svg",
  "Ghost-Happy.svg",
  "Ghost-Mild.svg",
  "Ghost-Sweet.svg",
  "Ghost-WTF.svg",
];
const randomGhostsSrc = ref([]);

const getRandomUniqueGhosts = (numOfGhosts) => {
  let newRandomGhosts = [];
  let uniqueIndexes = new Set();
  const animationClasses = [
    "animate-float-1",
    "animate-float-2",
    "animate-float-3",
  ];

  // Shuffle animation classes
  const shuffledClasses = animationClasses.sort(() => 0.5 - Math.random());

  while (uniqueIndexes.size < numOfGhosts) {
    let randomIndex = Math.floor(Math.random() * ghosts.length);
    uniqueIndexes.add(randomIndex);
  }

  let i = 0; // Counter for animation class
  uniqueIndexes.forEach((index) => {
    let styles = {
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
    };
    const animationClass = shuffledClasses[i % shuffledClasses.length];
    newRandomGhosts.push({
      src: `/img/ghosts/${ghosts[index]}`,
      styles,
      animationClass,
    });
    i++;
  });

  return newRandomGhosts;
};

const changeGhosts = () => {
  const numOfGhosts = Math.floor(Math.random() * 3) + 1;
  randomGhostsSrc.value = getRandomUniqueGhosts(numOfGhosts);
};

const initAnimations = () => {
  nextTick(() => {
    randomGhostsSrc.value.forEach((ghost, index) => {
      const element = document.querySelector(`.ghost-${index}`);
      let animationParams;

      switch (ghost.animationClass) {
        case "animate-float-1":
          animationParams = { y: "-=2rem", x: "+=0.5rem", duration: 3 };
          break;
        case "animate-float-2":
          animationParams = { y: "-=1rem", x: "+=1rem", duration: 2.5 };
          break;
        case "animate-float-3":
          animationParams = { y: "-=3rem", x: "+=0.2rem", duration: 2 };
          break;
      }

      // Existing float animation
      gsap.to(element, {
        ...animationParams,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });

      // New fade-in and fade-out
      const randomDuration = Math.random() * 5 + 1; // Random duration between 1 and 6 seconds
      gsap.to(element, {
        opacity: 0,
        duration: randomDuration,
        repeat: -1,
        yoyo: true,
      });
    });
  });
};

// Import statements and initial setup go here

onMounted(() => {
  changeGhosts();
  nextTick(() => {
    initAnimations();
  });
});
</script>

<style>
@keyframes shadowAnimation {
  0%,
  100% {
    filter: drop-shadow(0 5px 5px #d191de) drop-shadow(0 -5px 5px #71bae7);
  }
  50% {
    filter: drop-shadow(0 10px 10px #d191de) drop-shadow(0 -10px 10px #71bae7);
  }
}

.ghostie {
  animation: shadowAnimation 3s cubic-bezier(0.445, 0.05, 0.55, 0.95) infinite
    alternate;
}

@media (prefers-reduced-motion) {
  .ghostie {
    animation: none;
  }
}
</style>
