<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <MainContentBase>
    <template #title>
      {{ t("sidebar.configuration") }}
    </template>

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
    </div>
  </MainContentBase>
</template>
