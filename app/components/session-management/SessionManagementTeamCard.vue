<script setup lang="ts">
import type { Character } from "~/apis/types"

defineProps<{ characters: Character[] }>()

const { t } = useI18n()
</script>

<template>
  <div class="bg-default border-default rounded-lg border p-3 shadow">
    <div class="flex items-center gap-x-2">
      <AgentCard
        v-for="character in characters"
        :key="character.id"
        :character="character"
      />
    </div>

    <div
      class="font-pingfang mt-2 flex items-center gap-x-1 text-xs/3 tracking-normal"
    >
      <UBadge color="neutral" variant="outline">仪玄配置方案A</UBadge>
      <UBadge color="neutral" variant="outline">凝神</UBadge>
      <UBadge color="neutral" variant="outline">狮耶</UBadge>
    </div>

    <div
      class="font-pingfang mt-2 grid grid-cols-2 gap-y-1 text-xs/3 font-medium tracking-normal"
    >
      <div class="flex items-center gap-x-0.5">
        <Icon name="zsim-crit-rate" class="size-4" />
        <div>{{ t("session_management.crit_rate") }} 58.6%</div>
      </div>
      <div class="flex items-center gap-x-0.5">
        <Icon name="zsim-crit-dmg" class="size-4" />
        <div>{{ t("session_management.crit_dmg") }} 184.4%</div>
      </div>
      <div class="flex items-center gap-x-0.5">
        <Icon name="zsim-sheer-force" class="size-4" />
        <div>{{ t("session_management.sheer_force") }} 2415</div>
      </div>
      <div class="flex items-center gap-x-0.5">
        <Icon name="zsim-ether" class="size-4" />
        <div>{{ t("session_management.ether") }} 30%</div>
      </div>
    </div>

    <USeparator class="-mx-3 my-3 w-auto" />

    <div class="flex items-center gap-x-2">
      <div class="border-default w-16 rounded border">
        <img src="/imgs/priest-placeholder-need-deleted-in-the-future.png" />
      </div>
      <div
        class="font-pingfang flex flex-1 flex-col gap-y-1 text-xs/3 tracking-normal"
      >
        <div class="font-semibold">DPS 14.6w</div>
        <div class="text-dimmed">time 03:00:00</div>
      </div>
      <Icon name="zsim-chevron" class="size-4" />
    </div>
  </div>
</template>
