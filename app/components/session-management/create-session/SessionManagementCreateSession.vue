<script setup lang="ts">
const { t } = useI18n()

const { data: characters } = useCharacters()
const mockedCharacters = computed(() =>
  characters.value
    ? [
        characters.value.find((character) => character.id === 1371)!,
        characters.value.find((character) => character.id === 1421)!,
        characters.value.find((character) => character.id === 1391)!,
      ]
    : [],
)
</script>

<template>
  <UModal
    :title="t('session_management.create_session')"
    :ui="{
      title: 'font-pingfang text-xl/7 tracking-normal',
      header: '!p-4 min-h-auto border-none',
      footer: '!p-4',
      body: '!px-4 !pt-2 !pb-3 border-none',
      content: 'min-w-214',
    }"
  >
    <UButton
      icon="zsim-plus"
      class="shrink-0 gap-x-1 px-3"
      :ui="{
        leadingIcon: 'size-3',
        label: 'font-pingfang text-sm/5 tracking-normal',
      }"
    >
      {{ t("session_management.create_session") }}
    </UButton>

    <template #body>
      <div class="flex w-full items-center gap-x-2">
        <USelectMenu
          icon="i-lucide-search"
          :placeholder="
            t('session_management.create_session_search_placeholder')
          "
          class="flex-1"
        />
        <UButton class="text-muted" variant="outline" color="neutral">
          {{ t("session_management.create_session_team_configuration") }}
        </UButton>
      </div>

      <div class="mt-4 flex gap-x-2">
        <SessionManagementCreateSessionAgentCard
          v-for="character in mockedCharacters"
          :key="character.id"
          :character="character"
        />

        <div class="flex w-50 flex-col gap-y-2">
          <div
            class="bg-muted flex size-full flex-1 flex-col gap-y-2 rounded-xl p-3 pt-2 shadow"
          >
            <div class="flex items-center justify-between">
              <div
                class="text-muted font-pingfang text-xs/4.5 font-bold tracking-normal"
              >
                15期危局 秽息司祭
              </div>
              <UIcon name="i-lucide-chevron-right" class="text-muted size-4" />
            </div>

            <div
              class="border-muted relative grow overflow-hidden rounded-sm border"
            >
              <img
                src="/imgs/priest-placeholder-need-deleted-in-the-future.png"
                class="size-full"
              />
              <div
                class="absolute bottom-0 left-0 z-2 flex h-33/100 w-full items-center justify-between p-2"
              >
                <div>
                  <img
                    src="/imgs/ether.png"
                    class="size-6 rounded-full bg-[#231e1c]/80"
                  />
                </div>
                <div>
                  <img
                    src="/imgs/ice.png"
                    class="size-6 rounded-full bg-[#231e1c]/80"
                  />
                </div>
              </div>
              <div
                class="to-default absolute bottom-0 left-0 z-1 h-35/100 w-full bg-gradient-to-b from-transparent"
              />
            </div>
          </div>

          <div class="bg-muted flex size-full flex-1 gap-x-2 p-3 pt-2 shadow">
            <div class="flex flex-1 flex-col">
              <div
                class="font-pingfang text-muted text-xs/4.5 font-bold tracking-normal"
              >
                {{ t("session_management.create_session_buff") }}
              </div>
              <div class="border-muted bg-default mt-2 rounded-sm border p-2">
                <img
                  src="/imgs/buff-placeholder-need-deleted-in-the-future.png"
                  class="w-full"
                />
                <div class="mt-2 flex items-center justify-center">
                  <div class="font-pingfang text-xs/4.5 tracking-normal">
                    凝神
                  </div>
                  <UIcon name="i-lucide-chevron-right" class="size-4" />
                </div>
              </div>
            </div>

            <div class="flex flex-1 flex-col">
              <div
                class="font-pingfang text-muted text-xs/4.5 font-bold tracking-normal"
              >
                {{ t("session_management.create_session_bangboo") }}
              </div>
              <div class="border-muted bg-default mt-2 rounded-sm border p-2">
                <img
                  src="/imgs/bangboo-placeholder-need-deleted-in-the-future.png"
                  class="w-full"
                />
                <div class="mt-2 flex items-center justify-center">
                  <div class="font-pingfang text-xs/4.5 tracking-normal">
                    狮耶
                  </div>
                  <UIcon name="i-lucide-chevron-right" class="size-4" />
                </div>
              </div>
            </div>
          </div>

          <div
            class="bg-muted flex size-full flex-1 flex-col gap-y-2 rounded-xl p-3 pt-2 shadow"
          >
            <div
              class="font-pingfang text-muted text-xs/4.5 font-bold tracking-normal"
            >
              {{ t("common.apl") }}
            </div>
            <div
              class="border-default bg-default flex w-full items-center justify-between rounded-sm border px-3 py-2.5"
            >
              <div class="flex flex-col">
                <div
                  class="font-pingfang text-xs/4.5 font-medium tracking-normal"
                >
                  APL名称
                </div>
                <div
                  class="text-dimmed font-pingfang text-xs/4.5 tracking-normal"
                >
                  详细描述详细描述
                </div>
              </div>
              <UIcon name="i-lucide-chevron-down" class="text-dimmed size-5" />
            </div>
            <div
              class="border-default bg-default flex w-full items-center justify-between rounded-sm border px-3 py-2.5"
            >
              <div class="flex flex-col">
                <div
                  class="font-pingfang text-xs/4.5 font-medium tracking-normal"
                >
                  副配置
                </div>
                <div
                  class="text-dimmed font-pingfang text-xs/4.5 tracking-normal"
                >
                  详细描述详细描述
                </div>
              </div>
              <UIcon name="i-lucide-chevron-down" class="text-dimmed size-5" />
            </div>
          </div>
        </div>
      </div>
    </template>

    <template #footer>
      <div class="flex w-full items-center justify-between">
        <UCheckbox
          :label="t('session_management.create_session_save_as_template')"
          :ui="{
            wrapper: 'ml-1',
            label: 'font-pingfang text-muted text-sm/5 tracking-normal',
          }"
        />

        <div class="flex items-center gap-x-3">
          <UButton variant="outline" color="neutral">
            {{ t("session_management.create_session_reset") }}
          </UButton>
          <UButton>
            {{ t("session_management.create_session_start_simulation") }}
          </UButton>
        </div>
      </div>
    </template>
  </UModal>
</template>
