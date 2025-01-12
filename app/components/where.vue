<template>
  <UPageSection
    title="Where!?"
    description="Hosted at The City College of New York"
    icon="i-lucide-rocket"
    orientation="horizontal"
  >
    <ScriptGoogleMaps
      api-key="AIzaSyCJhuxu7AH6jfVQkTU4HEh5umiicSP-FPI"
      :center="{ lat: 40.82026509549408, lng: -73.94927586269552 }"
      center-marker
    />
  </UPageSection>
</template>
