<script setup lang="ts">
import type { TableColumn } from "@nuxt/ui"
import type { CharacterSupport } from "~/apis/types"
import { CharacterSupportAbout, SupportDisplay } from "#components"

const { locale, t } = useI18n()

const { data: characterSupports, pending: isLoading } = useCharacterSupports()

const columns = computed<TableColumn<CharacterSupport>[]>(() => [
  { accessorKey: "cid", header: t("character_support.cid") },
  {
    accessorKey: locale.value === "zh_cn" ? "name" : "name_en",
    header: t("character_support.name"),
  },
  {
    accessorKey: "character_support",
    header: t("character_support.character_support"),
    cell: ({ row }) => {
      const supportValue = row.getValue("character_support") as number
      return h(SupportDisplay, { supportValue })
    },
  },
  {
    accessorKey: "action_modeling",
    header: t("character_support.action_modeling"),
    cell: ({ row }) => {
      const supportValue = row.getValue("action_modeling") as number
      return h(SupportDisplay, { supportValue })
    },
  },
  {
    accessorKey: "frame_counting",
    header: t("character_support.frame_counting"),
    cell: ({ row }) => {
      const supportValue = row.getValue("frame_counting") as number
      return h(SupportDisplay, { supportValue })
    },
  },
  {
    accessorKey: "buff_support",
    header: t("character_support.buff_support"),
    cell: ({ row }) => {
      const supportValue = row.getValue("buff_support") as number
      return h(SupportDisplay, { supportValue })
    },
  },
  {
    accessorKey: "cinema_support",
    header: t("character_support.cinema_support"),
    cell: ({ row }) => {
      const supportValue = row.getValue("cinema_support") as number
      return h(SupportDisplay, { supportValue })
    },
  },
])
</script>

<template>
  <MainContentBase>
    <template #title>
      {{ t("sidebar.character_support_list") }}
    </template>

    <div class="flex h-full flex-col gap-y-8">
      <UTable
        class="border-default h-full w-full border"
        :data="characterSupports"
        :columns="columns"
        :loading="isLoading"
        sticky
      >
      </UTable>

      <CharacterSupportAbout />
    </div>
  </MainContentBase>
</template>
