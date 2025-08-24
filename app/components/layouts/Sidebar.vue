<script setup lang="ts"></script>

<template>
  <aside class="flex w-56 shrink-0 flex-col gap-y-2">
    <!-- Logo -->
    <div class="flex items-center gap-x-3 p-4">
      <div
        :class="
          cn(
            'flex size-10 items-center justify-center rounded-lg shadow-lg',
            'bg-gradient-to-b from-[#494949] to-black',
          )
        "
      >
        <Icon name="zsim-zsim" class="size-8" />
      </div>

      <div class="flex items-end gap-x-2">
        <div
          :class="
            cn(
              'font-ibm-plex-sans-hebrew text-[1.75rem] leading-9 font-bold tracking-normal',
              'bg-gradient-to-br from-[#656565] to-[#262626] bg-clip-text text-transparent',
            )
          "
        >
          ZSim
        </div>
        <div
          class="font-ibm-plex-sans-hebrew pb-1 text-xs/4 font-light tracking-normal text-[#acacac]"
        >
          V 0.3
        </div>
      </div>
    </div>

    <!-- Tabs -->
    <SidebarNav />

    <!-- User -->
    <div class="flex items-center gap-x-1 px-4 pt-4 pb-6">
      <Icon name="zsim-eous" class="size-6" />
      <div class="font-pingfang text-xs">Eous</div>
    </div>
  </aside>
</template>
