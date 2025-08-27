<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <UModal
    :title="t('session_management.create_session')"
    :ui="{
      title: 'font-pingfang text-xl/7 tracking-normal',
      header: '!p-4 min-h-auto border-none',
      footer: '!p-4',
      body: '!p-4 !pt-0 border-none',
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
      <div class="item-center flex w-full gap-x-2">
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
