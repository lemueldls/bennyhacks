<script setup lang="ts">
const questions = ref([
  {
    label: "Huh?",
    icon: "i-lucide-circle-help",
    content: "hmm.",
  },
  {
    label: "What?",
    icon: "i-lucide-circle-help",
    content: "mmm.",
  },
  {
    label: "Where am I?",
    icon: "i-lucide-circle-help",
    content: "yeah.",
  },
  {
    label: "How did I get here?",
    icon: "i-lucide-circle-help",
    content: "no.",
  },
]);
</script>

<template>
  <UPageCard
    title="FAQ"
    orientation="vertical"
    :ui="{ title: 'text-2xl font-bold' }"
  >
    <UPageAccordion :items="questions" />
  </UPageCard>
</template>
