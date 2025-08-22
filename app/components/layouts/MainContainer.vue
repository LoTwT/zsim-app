<script setup lang="ts"></script>

<template>
  <main class="h-full w-full py-4 pr-4">
    <div
      :class="
        cn(
          'h-full w-full flex-1 rounded-lg p-6 shadow-xl',
          'border-default border border-solid',
        )
      "
    >
      <slot />
    </div>
  </main>
</template>
