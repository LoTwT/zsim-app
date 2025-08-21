<script setup lang="ts">
import * as locales from "@nuxt/ui/locale"

const { locale } = useI18n()
</script>

<template>
  <NuxtLoadingIndicator />
  <UApp :locale="locales[locale]">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
