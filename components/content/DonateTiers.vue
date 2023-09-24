<template>
  <div class="donation-container relative h-full w-full">
    <div class="mx-auto max-w-7xl h-full w-full">
      <div
        class="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-4"
      >
        <div class="lg:col-span-1 text-center">
          <span class="font-bold text-xl">One-time</span>
        </div>
        <!-- Custom Donation Tier -->
        <div
          class="rounded-3xl p-8 xl:p-10 ring-1 ring-zinc-200 row-start-2 flex flex-col flex-grow justify-between"
        >
          <div class="flex justify-between flex-col">
            <h3 class="text-lg font-semibold leading-8 text-zinc-400">
              Custom amount
            </h3>
            <FormKit
              type="text"
              label="Custom Amount"
              validation="number"
              validation-visibility="live"
              input-class="mt-6 w-full p-2 text-2xl rounded-md bg-zinc-900 text-zinc-200 focus:border-zinc-200 focus:ring-zinc-200"
            />
          </div>
          <a
            href=""
            class="mt-6 block no-underline button body item-center self-center"
          >
            <span>Donate</span>
          </a>
        </div>

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
            tier.mostPopular ? 'popular ring-4' : 'ring-1 ring-zinc-200',
            'rounded-3xl p-8 xl:p-10 flex flex-col flex-grow justify-between', // Added flex and justify-between
          ]"
        >
          <div class="flex justify-between flex-col">
            <div class="flex items-center gap-x-4">
              <h3
                :id="tier.id"
                :class="[
                  tier.mostPopular ? 'popular' : 'text-zinc-400',
                  'text-lg font-semibold leading-8',
                ]"
              >
                {{ tier.name }}
              </h3>
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
              <span class="text-sm font-semibold leading-6 text-zinc-500">
                {{ frequency.priceSuffix }}
              </span>
            </p>
            <ul
              role="list"
              class="pl-0 mt-8 space-y-3 text-sm leading-6 text-gray-600 xl:mt-10"
            >
              <li
                v-for="feature in tier.features"
                :key="feature"
                class="flex gap-x-3 text-zinc-300"
              >
                <CheckIcon
                  class="h-6 w-5 flex-none text-zinc-300"
                  aria-hidden="true"
                />
                {{ feature }}
              </li>
            </ul>
          </div>
          <a
            :href="tier.href"
            :aria-describedby="tier.id"
            :class="[
              tier.mostPopular ? 'lavenderHush' : 'body',
              'self-center  mt-6 block no-underline button',
            ]"
          >
            <span>Donate</span>
          </a>
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
    features: ["Monthly update on our activities and impact"],
    href: "",
    mostPopular: false,
  },
  {
    name: "Spectral Supporter",
    id: "tier-spectral",
    price: { monthly: "$25", annually: "$250" },
    description: "Intermediate support with added benefits.",
    features: ["Everything in Ghostly", "[Menu item]"],
    href: "",
    mostPopular: true,
  },
  {
    name: "Phantom Patron",
    id: "tier-phantom",
    price: { monthly: "$100", annually: "$1,000" },
    description: "Premium support for maximum impact.",
    features: ["Everything in Spectral", "[menu item]", "[menu item]"],
    href: "",
    mostPopular: false,
  },
  // Your donation tiers here
];
const frequency = ref(frequencies ? frequencies[0] : null);
</script>
<style>
label {
  @apply hidden;
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
h3.popular,
span.popular {
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
