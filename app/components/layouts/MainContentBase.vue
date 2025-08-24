<template>
  <div class="flex h-full flex-col">
    <div class="font-pingfang flex items-center justify-between text-2xl/8.5">
      <slot name="title" />
      <slot name="title-trailing" />
    </div>

    <div class="mt-8 h-[calc(100%-4.125rem)] flex-1">
      <slot />
    </div>
  </div>
</template>
