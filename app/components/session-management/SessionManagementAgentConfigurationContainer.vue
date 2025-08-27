<script setup lang="ts">
defineProps<{
  className?: string
  featureClassName?: string
  agentName?: string
  updateDate?: string
}>()
</script>

<template>
  <div
    :class="
      cn(
        'border-accented bg-muted flex h-full w-62 flex-col gap-y-2 rounded-lg border p-2',
        className,
      )
    "
  >
    <div class="flex w-full items-center gap-x-1">
      <div class="p-0.25">
        <div
          :class="
            cn(
              'size-3.5 rounded-full border-1 border-[#f4c434] bg-[#f3d357]',
              featureClassName,
            )
          "
        />
      </div>
      <div
        class="font-pingfang text-highlighted flex-1 text-xs/3 font-bold tracking-normal"
      >
        {{ agentName }}
      </div>
      <div class="font-pingfang text-dimmed text-xs/3 tracking-normal">
        {{ updateDate }}
      </div>
    </div>

    <div v-if="$slots.default" class="flex flex-col gap-y-2">
      <slot />
    </div>
  </div>
</template>
