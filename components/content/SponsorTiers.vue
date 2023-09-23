<template>
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto max-w-2xl sm:text-center">
      <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">
        Sponsor Baby Ghosts
      </h2>
      <p class="mt-6 text-lg leading-8 text-lemonChiffon">
        Choose your level of commitment.
      </p>
    </div>
    <div
      v-for="tier in sponsorshipTiers"
      :key="tier.id"
      :class="
        `mx-auto mt-16 max-w-2xl rounded-3xl ring-1 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none` +
        (tier.mostPopular
          ? ' ring-lemonChiffon ring-2'
          : ' ring-zinc-500 ring-opacity-0')
      "
    >
      <div class="p-8 sm:p-10 lg:flex-auto">
        <h3 class="text-2xl font-bold tracking-tight text-lemonChiffon">
          {{ tier.name }}
        </h3>
        <p class="mt-6 text-base leading-7 text-gray-500">
          {{ tier.description }}
        </p>
        <div class="mt-10 flex items-center gap-x-4">
          <h4 class="flex-none text-sm font-semibold leading-6 text-gray-300">
            What’s included
          </h4>
          <div class="h-px flex-auto bg-gray-700" />
        </div>
        <ul
          role="list"
          :class="
            `mt-8 grid grid-cols-1 gap-4 text-sm leading-6 sm:grid-cols-2 sm:gap-6 ` +
            (tier.mostPopular ? 'text-lemonChiffon' : 'text-zinc-300')
          "
        >
          <li
            v-for="feature in tier.features"
            :key="feature"
            class="flex gap-x-3"
          >
            <CheckIcon
              class="h-6 w-5 flex-none text-lemonChiffon"
              aria-hidden="true"
            />
            {{ feature }}
          </li>
        </ul>
      </div>
      <div class="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
        <div
          :class="
            `rounded-2xl h-full py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16` +
            (tier.mostPopular
              ? ' bg-lemonChiffon ring-lemonChiffon ring-2'
              : ' bg-zinc-900 ring-zinc-500 ring-opacity-0')
          "
        >
          <div class="mx-auto max-w-xs px-8">
            <p class="mt-6 flex items-baseline justify-center gap-x-2">
              <span
                :class="
                  `text-5xl font-bold tracking-tight ` +
                  (tier.mostPopular ? 'text-zinc-900' : 'text-zinc-200 ')
                "
                >{{ tier.price }}</span
              >
            </p>

            <a
              :href="`mailto:hello@babyghosts.fund?subject=Sponsorship%20inquiry:%20${tier.name}`"
              class="button no-underline mt-10 block w-full"
              ><span>get in touch</span></a
            >
            <!-- <p class="mt-6 text-xs leading-5 text-gray-600">
                Invoices and receipts available for easy company reimbursement
              </p> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
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
</script>
