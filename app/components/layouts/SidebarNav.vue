<script setup lang="ts">
const { t } = useI18n()
const route = useRoute()

const navs = [
  {
    title: t("session_management"),
    to: "/session-management",
    icon: "zsim:message-square-add",
  },
  {
    title: t("character_configuration"),
    to: "/character-configuration",
    icon: "zsim:user-pen",
  },
  {
    title: t("simulator"),
    to: "/simulator",
    icon: "zsim:simulator",
  },
  {
    title: t("data_analysis"),
    to: "/data-analysis",
    icon: "zsim:analysis",
  },
  {
    title: t("apl_compiler"),
    to: "/apl-compiler",
    icon: "zsim:code-compiler",
  },
  {
    title: t("character_support_list"),
    to: "/character-support-list",
    icon: "zsim:people",
  },
  {
    title: t("apl_design_book"),
    to: "/apl-design-book",
    icon: "zsim:apl",
  },
  {
    title: t("contribution_guide"),
    to: "/contribution-guide",
    icon: "zsim:chicken-leg",
  },
  {
    title: t("configuration"),
    to: "/configuration",
    icon: "zsim:config",
  },
]
</script>

<template>
  <nav class="flex-1">
    <div class="border-b-[0.5px] border-solid border-black/5 p-2">
      <template v-for="nav in navs" :key="nav.to">
        <div class="py-0.5">
          <NuxtLink
            :to="nav.to"
            :class="
              cn(
                'flex items-center gap-x-2 rounded-lg border-1 border-transparent px-2.5 py-2.25',
                'hover:bg-black/5',
                'data-active-path:border-black/10 data-active-path:bg-white',
              )
            "
            :data-active-path="route.path === nav.to ? true : undefined"
          >
            <Icon
              :name="nav.icon"
              class="size-4 text-[#231E1CCC] data-active-path:text-[#FA7319]"
              :data-active-path="route.path === nav.to ? true : undefined"
            />
            <div
              class="font-pingfang text-sm/5 font-medium tracking-normal text-[#231E1CCC]"
            >
              {{ nav.title }}
            </div>
          </NuxtLink>
        </div>
      </template>
    </div>
  </nav>
</template>
