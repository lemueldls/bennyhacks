<template>
  <UPageSection
    title="Where!?"
    description="Hosted at The City College of New York"
    icon="i-lucide-rocket"
    orientation="horizontal"
  >
    <ScriptGoogleMaps
      :center="{ lat: 40.82026509549408, lng: -73.94927586269552 }"
      center-marker
    />
  </UPageSection>
</template>
