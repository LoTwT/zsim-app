<script setup lang="ts">
const { locale, t } = useI18n()

const { data: page } = await useAsyncData(
  `character-support-about-${locale.value}`,
  () =>
    queryCollection("content")
      .path(`/${locale.value}/character-support-about`)
      .first(),
)
const title = `${t("character_support.about")}: ${t("character_support.character_support")}`
</script>

<template>
  <UModal
    :title="title"
    :ui="{
      content: 'min-w-4/5 h-4/5',
    }"
  >
    <UButton class="w-fit">
      {{ t("character_support.about") }}
    </UButton>

    <template #body>
      <ContentRenderer v-if="page" :value="page" />
    </template>
  </UModal>
</template>
