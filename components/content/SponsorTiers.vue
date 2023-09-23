<script setup>
import { ref, watchEffect } from "vue";

import { CheckIcon } from "@heroicons/vue/20/solid";

const sponsorshipTiers = [
  {
    name: "Ghoul Guide",
    id: "tier-ghoul",
    price: "$2,500",
    description:
      "Support our grant program and accelerator with a generous gift.",
    features: [
      "Logo placement on the Baby Ghosts website",
      "Social media shoutouts",
      "Employee participation/mentorship opportunities",
    ],
    mostPopular: false,
  },
  {
    name: "Apparition Ally",
    id: "tier-apparition",
    price: "$5,000",
    description:
      "Get more involved with our grant program, accelerator, and research.",
    features: [
      "All benefits of Ghoul Guide",
      "Featured in monthly newsletters",
      "Access to data and research",
      "Inclusion in press releases",
    ],
    mostPopular: true,
  },
  {
    name: "Shadow Sponsor",
    id: "tier-shadow",
    price: "$10,000",
    description: "Contribute to our microgrants program and community events.",
    features: [
      "All benefits of Apparition Ally",
      "Naming rights to a small grant or scholarship",
      "Early access to Baby Ghosts events",
      "Guest blog post on the Baby Ghosts website",
    ],
    mostPopular: false,
  },
  {
    name: "Haunt Hero",
    id: "tier-haunt",
    price: "$25,000",
    description: "Make a big impact and help us grow our community.",
    features: [
      "All benefits of Shadow Sponsor",
      "Consideration for mentorship or speaking opportunities",
      "Customized partnership opportunities",
    ],
    mostPopular: false,
  },
];

const activeTab = ref("");

onMounted(() => {
  if (sponsorshipTiers.length > 0) {
    activeTab.value = sponsorshipTiers[0].id;
  }
});
</script>

<template>
  <div
    class="mx-auto max-w-7xl px-6 lg:px-8"
    v-if="sponsorshipTiers.length > 0"
  >
    <!-- Mobile View -->
    <div class="sm:hidden">
      <label for="tabs" class="sr-only">Select a tier</label>
      <select
        id="tabs"
        name="tabs"
        v-model="activeTab"
        class="block w-full rounded-md border-zinc-500 focus:border-zinc-200 focus:ring-zinc-200 text-zinc-800"
      >
        <option
          v-for="tier in sponsorshipTiers"
          :key="tier.id"
          :value="tier.id"
        >
          {{ tier.name }} ({{ tier.price }})
        </option>
      </select>
    </div>

    <!-- Desktop View -->
    <div class="hidden sm:block">
      <div class="border-b border-zinc-500">
        <nav class="-mb-px flex" aria-label="Tabs">
          <div
            v-for="tier in sponsorshipTiers"
            :key="tier.id"
            @click="activeTab = tier.id"
            :class="[
              activeTab === tier.id
                ? 'border-zinc-200 text-zinc-200'
                : 'border-transparent text-zinc-500 hover:border-zinc-300 hover:text-zinc-300',
              'cursor-pointer w-1/4 border-b-2 py-4 px-1 text-center text-sm font-medium',
            ]"
            :aria-current="activeTab === tier.id ? 'page' : undefined"
          >
            <span>{{ tier.name }}</span>
            <span class="block font-bold text-lg">{{ tier.price }}</span>
          </div>
        </nav>
      </div>
    </div>
    <div v-for="tier in sponsorshipTiers" :key="tier.id">
      <div v-if="activeTab === tier.id">
        <div
          class="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none ring-zinc-200 ring-2"
        >
          <div class="p-8 sm:p-10 lg:flex-auto">
            <h3 class="text-2xl font-bold tracking-tight text-zinc-200">
              {{ tier.name }}
            </h3>
            <p class="mt-6 text-base leading-7 text-zinc-300">
              {{ tier.description }}
            </p>
            <div class="mt-10 flex items-center gap-x-4">
              <h4 class="flex-none text-sm font-bold leading-6 text-zinc-200">
                What’s included
              </h4>
              <div class="h-px flex-auto bg-zinc-200" />
            </div>
            <ul
              role="list"
              class="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 sm:grid-cols-2 sm:gap-6 text-zinc-200"
            >
              <li
                v-for="feature in tier.features"
                :key="feature"
                class="flex gap-x-3"
              >
                <CheckIcon
                  class="h-6 w-5 flex-none text-zinc-200"
                  aria-hidden="true"
                />
                {{ feature }}
              </li>
            </ul>
          </div>

          <div class="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div
              class="rounded-2xl h-full py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16 bg-zinc-200 ring-zinc-200 ring-2"
            >
              <div class="mx-auto max-w-xs px-8">
                <p class="mt-6 flex items-baseline justify-center gap-x-2">
                  <span
                    class="text-5xl font-bold tracking-tight text-zinc-900"
                    >{{ tier.price }}</span
                  >
                </p>

                <a
                  :href="`mailto:hello@babyghosts.fund?subject=Sponsorship%20inquiry:%20${tier.name}`"
                  class="button lavenderHush no-underline mt-10 block"
                  ><span>get in touch</span></a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
