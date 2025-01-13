<script setup lang="ts">
// const { data: home } = await useAsyncData(() =>
//   queryCollection("content").path("/").first()
// );
</script>

<template>
  <UPage>
    <UPageHero
      headline="2025 (not so) Annual"
      title="BennyHacks"
      description="Hackathon @ CCNY"
      orientation="horizontal"
      :links="[
        {
          label: 'Pre-register',
          to: '/register',
          icon: 'i-lucide-milestone',
        },
        {
          label: 'Learn More',
          color: 'neutral',
          variant: 'subtle',
          trailingIcon: 'i-lucide-chevrons-down',
          to: '#when',
        },
      ]"
    >
      <USkeleton class="w-full place-self-center aspect-video">
        [pretty thematic image]
      </USkeleton>
    </UPageHero>

    <UPageBody>
      <When />
      <Where />
      <Faq />
      <Sponsors />
      <Prizes />
    </UPageBody>
  </UPage>
</template>
