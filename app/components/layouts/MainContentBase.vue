<template>
  <div class="flex h-full flex-col">
    <div class="font-pingfang flex items-center justify-between text-2xl/8.5">
      <slot name="title" />
      <slot name="title-trailing" />
    </div>

    <div class="mt-8 flex-1 overflow-hidden">
      <slot />
    </div>
  </div>
</template>
