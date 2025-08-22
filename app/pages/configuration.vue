<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div>
    <div class="font-pingfang text-2xl/8.5">
      {{ t("sidebar.configuration") }}
    </div>

    <USeparator class="my-4" />

    <div class="flex flex-col gap-y-4">
      <ConfigurationItem>
        <template #label>
          {{ t("configuration.language_switch") }}
        </template>
        <LanguageSwitch />
      </ConfigurationItem>

      <ConfigurationItem>
        <template #label>
          {{ t("configuration.theme_switch") }}
        </template>
        <ThemePicker />
      </ConfigurationItem>

      <div></div>
    </div>
  </div>
</template>
