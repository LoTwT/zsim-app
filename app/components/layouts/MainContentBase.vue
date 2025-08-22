<template>
  <div class="flex h-full flex-col">
    <div class="font-pingfang text-2xl/8.5">
      <slot name="title" />
    </div>

    <div class="mt-8 flex-1 overflow-hidden">
      <slot />
    </div>
  </div>
</template>
