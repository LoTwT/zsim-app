<template>
  <div class="flex h-full flex-col">
    <div class="font-pingfang text-2xl/8.5">
      <slot name="title" />
    </div>

    <div class="mt-8 h-[calc(100%-4.125rem)] flex-1">
      <slot />
    </div>
  </div>
</template>
