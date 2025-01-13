<script setup lang="ts">
const date = new Date(2025, 3, 5);
const timeAgo = useTimeAgo(date);

const now = useNow();
const time = computed(() => date.getTime() - now.value.getTime());
</script>

<template>
  <UPageSection
    id="when"
    title="When!!"
    class="faded formal-invitaiton"
    icon="i-lucide-clock"
    orientation="horizontal"
    reverse
  >
    <Countdown :time />

    <template #description>
      We're starting {{ timeAgo }}! On April 5th-6th. The hackathon is
      <strong>not</strong> overnight.
    </template>
  </UPageSection>
</template>
