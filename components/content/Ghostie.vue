<template>
  <div class="ghostie">👻</div>
</template>

<style>
.ghostie {
  font-size: 10rem;
  text-align: center;
  margin: 2rem 0;
  animation: ghostie 2s cubic-bezier(0.445, 0.05, 0.55, 0.95) infinite alternate;
}

@media (prefers-reduced-motion) {
  .ghostie {
    animation: none;
  }
}

/* slowly floating up and down */
@keyframes ghostie {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-2rem);
  }
}
</style>
