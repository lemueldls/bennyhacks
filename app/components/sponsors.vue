<script setup lang="ts">
interface Sponsor {
  title: string;
  imageUrl: string;
}

const sponsors: Sponsor[] = [
  { title: "NordVPN", imageUrl: "" },
  { title: "Raid Shadow Legends", imageUrl: "" },
];
</script>

<template>
  <UPageSection
    id="sponsors"
    icon="i-lucide-star"
    title="Sponsors"
  >
    <UPageGrid>
      <div
        v-for="{ title, imageUrl } of sponsors"
        :key="title"
        class="flex flex-col justify-center items-center gap-4"
      >
        <NuxtImg
          :src="imageUrl"
          :alt="title"
          class="w-full"
        />

        <span class="text-xl">{{ title }}</span>
      </div>
    </UPageGrid>
  </UPageSection>
</template>
