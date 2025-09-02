<script setup lang="ts">
import type { Character } from "~/apis/types"

const props = defineProps<{ character: Character }>()

const { t } = useI18n()

const displayName = computed(
  () => `${props.character.name} ${props.character.name_en}`,
)

const mockedAgentTextData = [
  {
    label: t("session_management.crit_rate"),
    value: "66.6%",
  },
  {
    label: t("session_management.crit_dmg"),
    value: "166.6%",
  },
  {
    label: t("session_management.sheer_force"),
    value: "2600",
  },
  {
    label: t("session_management.ether"),
    value: "30%",
  },
]

const mockedAgentSelectData = [
  {
    label: t("common.w_engine"),
    value: "青溟笼舍 精1",
  },
  {
    label: t("common.4_pieces"),
    value: "云岿如我",
  },
  {
    label: t("common.2_pieces"),
    value: "啄木鸟电音",
  },
  {
    label: t("common.skill_level"),
    value: "12,12,12,12,12,F",
  },
]

const cinema = ref(0)
</script>

<template>
  <div class="bg-muted w-50 rounded-xl px-3 py-2 shadow">
    <div class="flex items-center justify-between gap-x-1">
      <div class="size-3 rounded-xs border border-[#F4C434] bg-[#FCD357]" />
      <div
        class="font-pingfang text-muted flex-1 text-xs/4.5 font-bold tracking-normal"
      >
        {{ displayName }}
      </div>
      <UIcon name="i-lucide-chevron-right" class="text-muted size-4" />
    </div>

    <AgentCard size="lg" :character="character" class="mt-2" />

    <USelect
      class="mt-2 w-full"
      size="lg"
      model-value="仪玄配置方案A"
      :ui="{
        value: 'font-pingfang text-xs/4.5 tracking-normal',
      }"
    />

    <div class="flex flex-wrap gap-x-3 gap-y-1">
      <div
        v-for="agentData in mockedAgentTextData"
        :key="agentData.label"
        class="border-muted flex h-8 w-20 items-center justify-between border-b py-1.75"
      >
        <div
          class="font-pingfang text-muted flex-1 text-xs/4.5 tracking-normal"
        >
          {{ agentData.label }}
        </div>
        <div
          class="font-pingfang text-highlighted flex-1 text-right text-xs/4.5 tracking-normal"
        >
          {{ agentData.value }}
        </div>
      </div>

      <div
        v-for="agentData in mockedAgentSelectData"
        :key="agentData.label"
        class="border-muted flex h-8 w-full items-center justify-between border-b py-1.75"
      >
        <div
          class="font-pingfang text-muted flex-1 text-xs/4.5 tracking-normal"
        >
          {{ agentData.label }}
        </div>
        <USelect
          :model-value="agentData.value"
          variant="none"
          :ui="{
            base: 'pr-6',
            value: 'font-pingfang text-xs/4.5 tracking-normal',
            trailing: 'pr-0',
          }"
        />
      </div>

      <div class="flex h-8 w-full items-center justify-between py-1.75">
        <div
          class="font-pingfang text-muted flex-1 text-xs/4.5 tracking-normal"
        >
          {{ t("common.cinema") }}
        </div>
        <div
          class="font-pingfang text-toned flex flex-1 gap-x-0.5 text-right text-xs/4 tracking-normal"
        >
          <div
            v-for="(_, i) in 7"
            :key="`cinema-${i}`"
            :class="
              cn(
                'bg-default border-accented flex size-4.5 cursor-pointer items-center justify-center rounded-xs border',
                i === cinema && 'bg-primary border-primary text-inverted',
              )
            "
            @click="cinema = i"
          >
            {{ i }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
