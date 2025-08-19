<script setup lang="ts">
import type { CharacterSupport } from "~/apis/types"
import { getCharacterSupports } from "~/apis"

const { locale, t } = useI18n()

const characterSupports = ref<CharacterSupport[]>([])

onMounted(async () => {
  const response = await getCharacterSupports()
  characterSupports.value = response.character_supports
})

const heads = [
  { key: "cid", label: t("character_support.cid") },
  {
    key: locale.value === "zh_cn" ? "name" : "name_en",
    label: t("character_support.name"),
  },
  { key: "character_support", label: t("character_support.character_support") },
  { key: "action_modeling", label: t("character_support.action_modeling") },
  { key: "frame_counting", label: t("character_support.frame_counting") },
  { key: "buff_support", label: t("character_support.buff_support") },
  { key: "cinema_support", label: t("character_support.cinema_support") },
] as const
</script>

<template>
  <ScrollAreaRoot class="h-full w-full overflow-hidden">
    <ScrollAreaViewport class="h-full w-full">
      <table class="w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <th
              v-for="head in heads"
              :key="head.key"
              class="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
            >
              {{ head.label }}
            </th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-200 bg-white">
          <tr v-for="item in characterSupports" :key="item.cid">
            <td
              v-for="head in heads"
              :key="head.key"
              class="px-6 py-4 text-sm whitespace-nowrap text-gray-900"
            >
              {{ item[head.key] }}
            </td>
          </tr>
        </tbody>
      </table>
    </ScrollAreaViewport>
    <ScrollAreaScrollbar orientation="horizontal">
      <ScrollAreaThumb />
    </ScrollAreaScrollbar>
    <ScrollAreaScrollbar orientation="vertical">
      <ScrollAreaThumb />
    </ScrollAreaScrollbar>
  </ScrollAreaRoot>
</template>
