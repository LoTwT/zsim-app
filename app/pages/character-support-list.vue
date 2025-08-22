<script setup lang="ts">
import type { TableColumn } from "@nuxt/ui"
import type { CharacterSupport } from "~/apis/types"
import { getCharacterSupports } from "~/apis"

const { locale, t } = useI18n()

const characterSupports = ref<CharacterSupport[]>([])
const isLoading = ref(false)

onMounted(async () => {
  isLoading.value = true
  const response = await getCharacterSupports()
  characterSupports.value = response.character_supports
  isLoading.value = false
})

const columns: TableColumn<CharacterSupport>[] = [
  { accessorKey: "cid", header: t("character_support.cid") },
  {
    accessorKey: locale.value === "zh_cn" ? "name" : "name_en",
    header: t("character_support.name"),
  },
  {
    accessorKey: "character_support",
    header: t("character_support.character_support"),
  },
  {
    accessorKey: "action_modeling",
    header: t("character_support.action_modeling"),
  },
  {
    accessorKey: "frame_counting",
    header: t("character_support.frame_counting"),
  },
  { accessorKey: "buff_support", header: t("character_support.buff_support") },
  {
    accessorKey: "cinema_support",
    header: t("character_support.cinema_support"),
  },
]
</script>

<template>
  <UTable
    class="h-full w-full"
    :data="characterSupports"
    :columns="columns"
    :loading="isLoading"
    sticky
  />
</template>
