<script setup lang="ts">
const props = defineProps<{
  supportValue: number
}>()

const { t } = useI18n()

const supportData = computed(() => {
  if (props.supportValue >= 1) {
    return {
      icon: "lucide:badge-check",
      iconClass: "text-success size-4",
      text: t("character_support.fully_support"),
    }
  } else if (props.supportValue <= -1) {
    return {
      icon: "lucide:badge-x",
      iconClass: "text-error size-4",
      text: t("character_support.not_support"),
    }
  } else {
    return {
      icon: "lucide:badge-alert",
      iconClass: "text-warning size-4",
      text: t("character_support.partially_support"),
    }
  }
})
</script>

<template>
  <div class="flex items-center">
    <Icon :name="supportData.icon" :class="supportData.iconClass" />
    <span class="ml-2">{{ supportData.text }}</span>
  </div>
</template>
