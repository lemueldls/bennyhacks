<script setup lang="ts">
import * as locales from "@nuxt/ui/locale";

const { locale } = useI18n();

const lang = computed(() => locales[locale.value].code);
const dir = computed(() => locales[locale.value].dir);

useHead({
  htmlAttrs: { lang, dir },
});

const items = [];
</script>

<template>
  <NuxtRouteAnnouncer />
  <NuxtLoadingIndicator />

  <UHeader
    title=""
    :ui="{ root: 'sm:border-none sm:m-4 sm:mt-0', container: 'border-[var(--ui-border)] border rounded-none sm:rounded-b-3xl w-auto' }"
  >
    <UNavigationMenu :items="items" />

    <template #content>
      <UNavigationMenu
        :items="items"
        orientation="vertical"
      />
    </template>

    <template #right>
      <UColorModeSelect />
    </template>
  </UHeader>

  <UApp :locale="locales[locale]">
    <UMain>
      <UContainer>
        <NuxtLayout>
          <NuxtPage />
        </NuxtLayout>
      </UContainer>
    </UMain>
  </UApp>

  <UFooter />
</template>
