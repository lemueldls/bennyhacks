<script setup lang="ts">
interface PrizeCatgegory {
  headline: string;
  title: string;
  description: string;
  prizes: Prize[];
}

interface Prize {
  icon: string;
  title: string;
  description: string;
}

const categoryOne: PrizeCatgegory = {
  headline: "$800 Cash Prize",
  title: "Category One",
  description: "Category description",
  prizes: [
    {
      icon: "i-hugeicons:medal-first-place",
      title: "First Place",
      description: "Two really cool hats.",
    },
    {
      icon: "i-hugeicons:medal-second-place",
      title: "Second Place",
      description: "Just one really cool hat.",
    },
    {
      icon: "i-hugeicons:medal-third-place",
      title: "Third Place",
      description: "A normal-looking hat.",
    },
  ],
};

const categoryTwo: PrizeCatgegory = {
  headline: "$400 Cash Prize",
  title: "Category Two",
  description: "Category description",
  prizes: [
    {
      icon: "i-hugeicons:medal-first-place",
      title: "First Place",
      description: "Two really cool hats.",
    },
    {
      icon: "i-hugeicons:medal-second-place",
      title: "Second Place",
      description: "Just one really cool hat.",
    },
    {
      icon: "i-hugeicons:medal-third-place",
      title: "Third Place",
      description: "A normal-looking hat.",
    },
  ],
};

const prizeCategories: PrizeCatgegory[] = [categoryOne, categoryTwo];
</script>

<template>
  <UPageCard
    id="prizes"
    icon="i-lucide:gem"
    title="Prizes"
    :ui="{ wrapper: 'flex gap-2 items-center', leading: 'mb-0', title: 'text-2xl font-bold' }"
  >
    <template
      v-for="({ headline, title, description, prizes }, i) of prizeCategories"
      :key="i"
    >
      <USeparator />

      <UPageSection
        class="faded glamorous"
        :ui="{ container: 'py-0 sm:py-0 md:py-0 lg:py-0', title: 'text-xl sm:text-2xl lg:text-3xl' }"
        :headline
        :title
        :description
        orientation="horizontal"
        :features="prizes"
        :reverse="i % 2 !== 0"
      >
        [prize and sponsor images]
      </UPageSection>
    </template>
  </UPageCard>
</template>
