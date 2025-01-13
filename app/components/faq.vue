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
    id="faq"
    icon="i-lucide-message-circle-question"
    title="FAQ"
    orientation="vertical"
    :ui="{ wrapper: 'flex gap-2 items-center', leading: 'mb-0', title: 'text-2xl font-bold' }"
  >
    <UPageAccordion :items="questions" />
  </UPageCard>
</template>
