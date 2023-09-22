<template>
  <div class="donation-container relative h-full w-full blur">
    <div class="centered-text w-full h-full absolute">Coming Soon</div>
    <div class="mx-auto max-w-7xl px-6 lg:px-8 blur h-full w-full">
      <div class="mt-16 flex justify-center">
        <RadioGroup
          v-model="frequency"
          class="grid grid-cols-2 gap-x-1 rounded-full p-1 text-center text-xs font-semibold leading-5 ring-1 ring-inset ring-gray-200"
        >
          <RadioGroupLabel class="sr-only">Payment frequency</RadioGroupLabel>
          <RadioGroupOption
            as="template"
            v-for="option in frequencies"
            :key="option.value"
            :value="option"
            v-slot="{ checked }"
          >
            <div
              :class="[
                checked ? 'radio-option text-gray-800' : 'text-gray-500',
                'cursor-pointer rounded-full px-2.5 py-1',
              ]"
            >
              <span>{{ option.label }}</span>
            </div>
          </RadioGroupOption>
        </RadioGroup>
      </div>
      <div
        class="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3"
      >
        <div
          v-for="tier in donationTiers"
          :key="tier.id"
          :class="[
            tier.mostPopular ? 'popular ring-2' : 'ring-1 ring-gray-200',
            'rounded-3xl p-8 xl:p-10',
          ]"
        >
          <div class="flex items-center justify-between gap-x-4">
            <h3
              :id="tier.id"
              :class="[
                tier.mostPopular ? 'popular' : 'text-gray-400',
                'text-lg font-semibold leading-8',
              ]"
            >
              {{ tier.name }}
            </h3>
          </div>
          <!-- <p class="mt-4 text-sm leading-6 text-gray-500">
            {{ tier.description }}
          </p> -->
          <p class="mt-6 flex items-baseline gap-x-1">
            <span class="text-4xl font-bold tracking-tight text-gray-300">
              {{ tier.price[frequency.value] }}
            </span>
            <span class="text-sm font-semibold leading-6 text-gray-500">
              {{ frequency.priceSuffix }}
            </span>
          </p>
          <a
            :href="tier.href"
            :aria-describedby="tier.id"
            class="mt-6 block no-underline rounded-md py-2 px-3 text-center text-lg font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
            :class="[
              tier.mostPopular
                ? 'popular shadow-sm'
                : 'text-gray-200 ring-1 ring-inset ring-gray-200 hover:ring-gray-300',
            ]"
          >
            Donate
          </a>
          <ul
            role="list"
            class="mt-8 space-y-3 text-sm leading-6 text-gray-400 xl:mt-10"
          >
            <li
              v-for="feature in tier.features"
              :key="feature"
              class="flex gap-x-3"
            >
              <CheckIcon
                class="h-6 w-5 flex-none text-gray-400"
                aria-hidden="true"
              />
              {{ feature }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { RadioGroup, RadioGroupLabel, RadioGroupOption } from "@headlessui/vue";
import { CheckIcon } from "@heroicons/vue/20/solid";
const frequencies = [
  { value: "monthly", label: "Monthly", priceSuffix: "/month" },
  { value: "annually", label: "Annually", priceSuffix: "/year" },
];

const donationTiers = [
  {
    name: "Ghostly Pledge",
    id: "tier-ghostly",
    price: { monthly: "$10", annually: "$100" },
    description: "Basic support for Baby Ghosts.",
    features: ["Monthly update on our activities and impact"],
    mostPopular: false,
  },
  {
    name: "Spectral Supporter",
    id: "tier-spectral",
    price: { monthly: "$25", annually: "$250" },
    description: "Intermediate support with added benefits.",
    features: ["Everything in Ghostly", "[Menu item]"],
    mostPopular: true,
  },
  {
    name: "Phantom Patron",
    id: "tier-phantom",
    price: { monthly: "$100", annually: "$1,000" },
    description: "Premium support for maximum impact.",
    features: ["Everything in Spectral", "[menu item]", "[menu item]"],
    mostPopular: false,
  },
  // Your donation tiers here
];
const frequency = ref(frequencies ? frequencies[0] : null);
</script>
<style scoped>
.donation-container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  z-index: -1;
}
.centered-text {
  position: absolute; /* Added absolute positioning */
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.blur {
  filter: blur(5px);
  z-index: -1;
}

h2 {
  @apply text-lavenderHush;
}
.radio-option {
  @apply bg-lavenderHush;
}
div.popular {
  @apply ring-lavenderHush;
}
h3.popular {
  @apply text-lavenderHush;
}
a.popular {
  /* background-color: theme(colors.lavenderHush / 50%); */
  @apply text-slate-900 bg-lavenderHush brightness-100;

  &:hover {
    @apply text-slate-800 brightness-125;
  }
}

.sponsor-tiers {
  h2 {
    @apply text-mintSpray;
  }
  .radio-option {
    @apply bg-mintSpray;
  }
  div.popular {
    @apply ring-mintSpray;
  }
  h3.popular {
    @apply text-mintSpray;
  }
  a.popular {
    /* background-color: theme(colors.lavenderHush / 50%); */
    @apply text-slate-900 bg-mintSpray brightness-100;

    &:hover {
      @apply text-slate-800 brightness-125;
    }
  }
}
</style>
