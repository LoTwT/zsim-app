<script setup lang="ts">
const { t, setLocale } = useI18n()
</script>

<template>
  <div @click="setLocale('zh_cn')">{{ t("configuration") }}</div>
</template>
