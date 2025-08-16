<script setup lang="ts"></script>

<template>
  <main class="h-full w-full py-4 pr-4">
    <div
      :class="
        cn(
          'h-full w-full flex-1 rounded-lg bg-white p-6',
          'border border-solid border-[#e6e6e6]',
        )
      "
    >
      <slot />
    </div>
  </main>
</template>
