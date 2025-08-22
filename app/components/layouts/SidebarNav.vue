<script setup lang="ts">
const route = useRoute()

const { t } = useI18n()
const localePath = useLocalePath()
const routeBaseName = useRouteBaseName()
const baseRouteName = computed(() => routeBaseName(route))

const navs = computed(() => [
  {
    name: "session-management",
    title: t("sidebar.session_management"),
    to: localePath("session-management"),
    icon: "zsim:message-square-add",
  },
  {
    name: "character-configuration",
    title: t("sidebar.character_configuration"),
    to: localePath("character-configuration"),
    icon: "zsim:user-pen",
  },
  {
    name: "simulator",
    title: t("sidebar.simulator"),
    to: localePath("simulator"),
    icon: "zsim:simulator",
  },
  {
    name: "data-analysis",
    title: t("sidebar.data_analysis"),
    to: localePath("data-analysis"),
    icon: "zsim:analysis",
  },
  {
    name: "apl-compiler",
    title: t("sidebar.apl_compiler"),
    to: localePath("apl-compiler"),
    icon: "zsim:code-compiler",
  },
  {
    name: "character-support-list",
    title: t("sidebar.character_support_list"),
    to: localePath("character-support-list"),
    icon: "zsim:people",
  },
  {
    name: "apl-design-book",
    title: t("sidebar.apl_design_book"),
    to: localePath("apl-design-book"),
    icon: "zsim:apl",
  },
  {
    name: "contribution-guide",
    title: t("sidebar.contribution_guide"),
    to: localePath("contribution-guide"),
    icon: "zsim:chicken-leg",
  },
  {
    name: "configuration",
    title: t("sidebar.configuration"),
    to: localePath("configuration"),
    icon: "zsim:config",
  },
])
</script>

<template>
  <ScrollAreaRoot as="nav" class="flex-1 overflow-hidden">
    <ScrollAreaViewport class="h-full w-full">
      <div class="border-b-[0.5px] border-solid border-black/5 p-2">
        <template v-for="nav in navs" :key="nav.name">
          <div class="py-0.5">
            <NuxtLink
              :to="nav.to"
              :class="
                cn(
                  'flex items-center gap-x-2 rounded-lg border-1 border-transparent px-2.5 py-2.25',
                  'hover:bg-black/5',
                  'data-active-path:bg-accented data-active-path:border-default',
                )
              "
              :data-active-path="baseRouteName === nav.name ? true : undefined"
            >
              <Icon
                :name="nav.icon"
                class="data-active-path:text-primary size-4"
                :data-active-path="
                  baseRouteName === nav.name ? true : undefined
                "
              />
              <div class="font-pingfang text-sm/5 font-medium tracking-normal">
                {{ nav.title }}
              </div>
            </NuxtLink>
          </div>
        </template>
      </div>
    </ScrollAreaViewport>

    <ScrollAreaScrollbar orientation="vertical">
      <ScrollAreaThumb />
    </ScrollAreaScrollbar>
  </ScrollAreaRoot>
</template>
