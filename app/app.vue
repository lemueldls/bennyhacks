<template>
  <NuxtRouteAnnouncer />
  <NuxtLoadingIndicator />

  <UApp>
    <UMain>
      <UContainer>
        <NuxtLayout>
          <NuxtPage />
        </NuxtLayout>
      </UContainer>
    </UMain>
  </UApp>

  <UFooter>
    <UColorModeSelect />
  </UFooter>
</template>
