<script setup lang="ts">
import * as locales from "@nuxt/ui/locale"

const { locale, messages } = useI18n()

const extendedLocale = extendLocale(locales[locale.value], {
  code: locale.value,
  messages: messages.value[locale.value] || {},
})
</script>

<template>
  <NuxtLoadingIndicator />
  <UApp :locale="extendedLocale">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
