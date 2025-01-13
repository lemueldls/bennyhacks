<script setup lang="ts">
const colorMode = useColorMode();
const colorScheme = computed(() => ({ system: "FOLLOW_SYSTEM", light: "LIGHT", dark: "DARK" }[colorMode.value]));
</script>

<template>
  <UPageSection
    title="Where!?"
    description="Hosted at The City College of New York"
    icon="i-lucide-rocket"
    orientation="horizontal"
    class="faded topography"
    :links="[{
      label: 'Get Directions',
      icon: 'i-lucide:map',
      to: 'https://maps.app.goo.gl/g3QHGgUPZ5PTBybJ9',
      target: '_blank',
    }]"
  >
    <ScriptGoogleMaps
      :center="{ lat: 40.82026509549408, lng: -73.94927586269552 }"
      center-marker
      :map-options="{ colorScheme }"
    />
  </UPageSection>
</template>
