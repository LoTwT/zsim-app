<script setup lang="ts">
import type { TabsItem } from "@nuxt/ui"
import { openUrl } from "@tauri-apps/plugin-opener"

const { t } = useI18n()

// const { data: characters } = useCharacters()

const items = ref<TabsItem[]>([
  {
    label: t("session_management.carries"),
    icon: "zsim-carry",
  },
  {
    label: t("session_management.supports"),
    icon: "zsim-support",
  },
  {
    label: t("session_management.stuns"),
    icon: "zsim-stun",
  },
  {
    label: t("session_management.bosses"),
    icon: "zsim-boss",
  },
  {
    label: t("session_management.recently_created"),
    icon: "i-bx-calendar",
    slot: "recently-created" as const,
  },
])

async function openGithub() {
  await openUrl("https://github.com/ZSim-Dev/ZSim")
}
</script>

<template>
  <MainContentBase>
    <template #title>
      {{ t("sidebar.session_management") }}
    </template>

    <template #title-trailing>
      <div class="flex items-center gap-x-3">
        <UButton
          icon="zsim-github"
          variant="link"
          color="neutral"
          class="size-6"
          @click="openGithub"
        />
        <UButton
          icon="zsim-question"
          variant="link"
          color="neutral"
          class="size-6"
        />
      </div>
    </template>

    <UTabs
      :items="items"
      class="w-full"
      variant="link"
      :ui="{
        indicator: 'h-0.5',
        trigger: 'shrink-0 cursor-pointer gap-x-1',
        label: 'font-pingfang text-base/5.5 tracking-normal',
        leadingIcon: 'size-4',
      }"
    >
      <template #list-trailing>
        <div class="flex w-full items-center justify-end gap-x-3">
          <UButton
            variant="outline"
            color="neutral"
            icon="zsim-filter"
            class="gap-x-1 px-3"
            :ui="{
              leadingIcon: 'size-3',
              label: 'font-pingfang text-sm/5 tracking-normal',
            }"
          >
            {{ t("session_management.filter") }}
          </UButton>
          <UButton
            icon="zsim-plus"
            class="gap-x-1 px-3"
            :ui="{
              leadingIcon: 'size-3',
              label: 'font-pingfang text-sm/5 tracking-normal',
            }"
          >
            {{ t("session_management.create_session") }}
          </UButton>
        </div>
      </template>

      <template #content="{ item }"> {{ item.label }} - in content </template>

      <template #recently-created>
        {{ t("session_management.recently_created") }} in recently-created
      </template>
    </UTabs>
  </MainContentBase>
</template>
