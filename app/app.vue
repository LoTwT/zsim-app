<script setup lang="ts">
import * as locales from "@nuxt/ui/locale"

const { locale } = useI18n()

useTheme()
</script>

<template>
  <NuxtLoadingIndicator />
  <UApp :locale="locales[locale]">
    <NuxtLayout>
      <NuxtPage keepalive />
    </NuxtLayout>
  </UApp>
</template>
