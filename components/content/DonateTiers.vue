<template>
  <div class="donation-container relative h-full w-full">
    <NuxtLink
      to="https://donate.stripe.com/fZe9Cmghp5cB7uMdQQ"
      class="mt-6 button text-center block no-underline button body item-center self-center"
    >
      <span>Make a one-time donation</span>
    </NuxtLink>
    <div class="text-center text-2xl py-6">– OR –</div>
    <div class="mx-auto max-w-7xl h-full w-full">
      <div
        class="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3"
      >
        <!-- Custom Donation Tier -->

        <!-- Payment Frequency Toggle -->
        <div class="lg:col-span-3 flex justify-center">
          <RadioGroup
            v-model="frequency"
            class="grid grid-cols-2 gap-x-1 rounded-full p-1 text-center text-xs font-semibold leading-5 ring-1 ring-inset ring-zinc-200"
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
                  checked ? 'radio-option text-zinc-800' : 'text-zinc-500',
                  'cursor-pointer rounded-full px-2.5 py-1',
                ]"
              >
                <span>{{ option.label }}</span>
              </div>
            </RadioGroupOption>
          </RadioGroup>
        </div>

        <div
          v-for="tier in donationTiers"
          :key="tier.id"
          :class="[
            tier.mostPopular ? 'popular ring-4' : 'ring-1 ring-zinc-600',
            'rounded-3xl p-8 xl:p-10 flex flex-col flex-grow justify-between donate-card',
          ]"
        >
          <div class="flex justify-between flex-col">
            <div class="flex items-center gap-x-4">
              <h4
                :id="tier.id"
                :class="[
                  tier.mostPopular ? 'popular' : 'text-zinc-400',
                  'text-xl font-normal leading-8',
                ]"
              >
                {{ tier.name }}
              </h4>
            </div>

            <p class="mt-6 flex items-baseline gap-x-1">
              <span
                :class="[
                  tier.mostPopular ? 'popular' : 'text-zinc-300',
                  'text-4xl font-bold tracking-tight',
                ]"
              >
                {{ tier.price[frequency.value] }}
              </span>
              <span
                class="price-suffix text-sm font-semibold leading-6 text-zinc-500"
              >
                {{ frequency.priceSuffix }}
              </span>
            </p>
            <ul
              role="list"
              class="arrow-list pl-0 mt-8 space-y-3 text-lg leading-6 xl:mt-10"
            >
              <li
                v-for="feature in tier.features"
                :key="feature"
                class="flex font-medium items-center gap-x-3 text-lg"
              >
                <span
                  class="text-arrow pt-1 font-display font-black text-lg leading-normal flex-none"
                  aria-hidden="true"
                  >→</span
                >
                <span class="leading-normal">{{ feature }}</span>
              </li>
            </ul>
          </div>
          <NuxtLink
            :href="tier.href[frequency.value]"
            :aria-describedby="tier.id"
            :class="[
              tier.mostPopular ? 'popular' : 'body',
              'self-center  mt-6 block no-underline button',
            ]"
          >
            <span>Donate</span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { RadioGroup, RadioGroupLabel, RadioGroupOption } from "@headlessui/vue";
import { CheckIcon } from "@heroicons/vue/20/solid";
const customAmount = ref(null);

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
    features: ["Monthly impact update"],
    href: {
      monthly: "https://donate.babyghosts.fund/b/28o7ue8OX0WldTa009",
      annually: "https://donate.babyghosts.fund/b/fZecOyfdl34t3ewfZ5",
    },
    mostPopular: false,
  },
  {
    name: "Spectral Supporter",
    id: "tier-spectral",
    price: { monthly: "$25", annually: "$250" },
    href: {
      monthly: "https://donate.babyghosts.fund/b/14kaGqghpdJ702kbIK",
      annually: "https://donate.babyghosts.fund/b/dR64i2aX534tg1i4gq",
    },
    description: "Intermediate support with added benefits.",
    features: ["Everything in Ghostly", "Name or logo on site"],
    mostPopular: true,
  },
  {
    name: "Phantom Patron",
    id: "tier-phantom",
    price: { monthly: "$100", annually: "$1,000" },
    href: {
      monthly: "https://donate.babyghosts.fund/b/14k15Qc19cF35mE14a",
      annually: "https://donate.babyghosts.fund/b/9AQbKufdleNb9CUdQY",
    },
    description: "Premium support for maximum impact.",
    features: ["Everything in Spectral", "Donor spotlight in newsletter"],
    mostPopular: false,
  },
  // Your donation tiers here
];
const frequency = ref(frequencies ? frequencies[0] : null);
</script>
<style scoped>
/* Base Styles */
label {
  @apply hidden;
}

.radio-option {
  @apply bg-zinc-50;
}

/* Donation Card Styles */
.donate-card {
  @apply bg-zinc-900 text-zinc-100;
  -webkit-backdrop-filter: blur(50px);
  backdrop-filter: blur(50px);
  background-color: rgba(0, 0, 0, 0.2);
}

/* Popular Styles */
/* Use these as a reference for managing popular styles */
div.popular {
  @apply bg-zinc-300 text-zinc-900;
  box-shadow: calc(2px) 0 calc(4px) rgba(220, 148, 232, 0.6),
    calc(-2px) 0 calc(4px) rgba(92, 201, 245, 0.6),
    0 0 calc(10px) rgba(255, 255, 255, calc(0.22));
}

h4.popular,
span.popular {
  @apply text-zinc-900 font-bold;
}

a.popular {
  @apply text-slate-700  brightness-100;

  &:hover {
    @apply text-slate-950 brightness-125;
  }
}
</style>
