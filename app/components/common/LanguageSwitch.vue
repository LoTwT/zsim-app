<script setup lang="ts">
import type { SelectItem } from "@nuxt/ui"

const router = useRouter()

const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const items = computed(() =>
  locales.value.map(
    (l) =>
      ({
        label: l.name,
        value: l.code,
      }) satisfies SelectItem,
  ),
)
</script>

<template>
  <USelect
    :model-value="locale"
    :items="items"
    size="xl"
    class="w-40"
    @update:model-value="router.push(switchLocalePath($event))"
  />
</template>
