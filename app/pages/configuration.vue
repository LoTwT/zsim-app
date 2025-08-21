<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div>
    <div class="font-pingfang text-2xl/8.5">
      {{ t("sidebar.configuration") }}
    </div>

    <USeparator class="my-4" />

    <div class="flex flex-col">
      <div class="flex items-center gap-x-12">
        <div class="font-pingfang min-w-40 text-lg">
          {{ t("configuration.language_switch") }}
        </div>
        <LanguageSwitch />
      </div>
    </div>
  </div>
</template>
