<script setup lang="ts">
import type { TabsItem } from "@nuxt/ui"
import {
  SessionManagementBosses,
  SessionManagementCarries,
  SessionManagementRecentlyCreated,
  SessionManagementStuns,
  SessionManagementSupports,
} from "#components"
import { openUrl } from "@tauri-apps/plugin-opener"

const { t } = useI18n()

const { data: characters } = useCharacters()

const mockedCharacters = computed(() =>
  characters.value
    ? [
        characters.value?.find((character) => character.id === 1371),
        characters.value?.find((character) => character.id === 1421),
        characters.value?.find((character) => character.id === 1391),
      ]
    : [],
)

const items = ref<TabsItem[]>([
  {
    label: t("session_management.carries"),
    icon: "zsim-carry",
    value: "session-management-carries",
    component: SessionManagementCarries,
  },
  {
    label: t("session_management.supports"),
    icon: "zsim-support",
    value: "session-management-supports",
    component: SessionManagementSupports,
  },
  {
    label: t("session_management.stuns"),
    icon: "zsim-stun",
    value: "session-management-stuns",
    component: SessionManagementStuns,
  },
  {
    label: t("session_management.bosses"),
    icon: "zsim-boss",
    value: "session-management-bosses",
    component: SessionManagementBosses,
  },
  {
    label: t("session_management.recently_created"),
    icon: "i-bx-calendar",
    value: "session-management-recently-created",
    component: SessionManagementRecentlyCreated,
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
      class="flex h-full w-full flex-col gap-y-4"
      variant="link"
      :items="items"
      :default-value="items[0]?.value"
      :ui="{
        indicator: 'h-0.5',
        trigger: 'shrink-0 cursor-pointer gap-x-1 py-4',
        label: 'font-pingfang text-base/5.5 tracking-normal',
        leadingIcon: 'size-4',
        content: 'flex-1 overflow-hidden',
        list: 'overflow-x-auto overflow-y-hidden',
      }"
    >
      <template #list-trailing>
        <div class="relative flex w-full items-center justify-end gap-x-3">
          <UButton
            variant="outline"
            color="neutral"
            icon="zsim-filter"
            class="shrink-0 gap-x-1 px-3"
            :ui="{
              leadingIcon: 'size-3',
              label: 'font-pingfang text-sm/5 tracking-normal',
            }"
          >
            {{ t("session_management.filter") }}
          </UButton>
          <SessionManagementCreateSession />
        </div>
      </template>

      <template #content="{ item }">
        <ScrollAreaRoot class="relative h-full w-full overflow-hidden">
          <ScrollAreaViewport class="h-full w-full">
            <KeepAlive>
              <component
                :is="item.component"
                :key="item.value"
                :characters="mockedCharacters"
              />
            </KeepAlive>
          </ScrollAreaViewport>

          <ScrollAreaScrollbar orientation="vertical">
            <ScrollAreaThumb />
          </ScrollAreaScrollbar>
          <ScrollAreaScrollbar orientation="horizontal">
            <ScrollAreaThumb />
          </ScrollAreaScrollbar>
        </ScrollAreaRoot>
      </template>
    </UTabs>
  </MainContentBase>
</template>
