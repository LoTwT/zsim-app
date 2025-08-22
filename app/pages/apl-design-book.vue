<script setup lang="ts">
const { locale } = useI18n()

const { data: page } = await useAsyncData(
  `apl-design-book-${locale.value}`,
  () =>
    queryCollection("content").path(`/${locale.value}/apl-design-book`).first(),
)
</script>

<template>
  <ScrollAreaRoot class="relative h-full w-full overflow-hidden">
    <ScrollAreaViewport class="h-full w-full">
      <ContentRenderer v-if="page" :value="page" />
    </ScrollAreaViewport>

    <ScrollAreaScrollbar orientation="vertical">
      <ScrollAreaThumb />
    </ScrollAreaScrollbar>
    <ScrollAreaScrollbar orientation="horizontal">
      <ScrollAreaThumb />
    </ScrollAreaScrollbar>
  </ScrollAreaRoot>
</template>
