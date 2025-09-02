<script setup lang="ts">
import type { Character } from "~/apis/types"
import { cva } from "class-variance-authority"

const props = withDefaults(
  defineProps<{
    character: Character
    size?: "default" | "lg"
  }>(),
  {
    size: "default",
  },
)

const AgentImageVariants = cva("bg-gradient-to-b from-default to-accented", {
  variants: {
    size: {
      default: "",
      lg: "aspect-square object-cover object-top",
    },
  },
})

const AgentInfoVariants = cva(
  "absolute bottom-1 left-1 flex items-center z-2",
  {
    variants: {
      size: {
        default: "gap-x-0.5",
        lg: "gap-x-1",
      },
    },
  },
)

const AgentElementVariants = cva(
  "flex items-center justify-center rounded-full bg-[#231e1c]/80",
  {
    variants: {
      size: {
        default: "size-4",
        lg: "size-6",
      },
    },
  },
)

const AgentWeaponVariants = cva(
  "flex items-center justify-center rounded-full bg-[#231e1c]/80",
  {
    variants: {
      size: {
        default: "size-4",
        lg: "size-6",
      },
    },
  },
)

const agentRenderData = computed(() =>
  props.size === "default"
    ? {
        image: props.character.icon[1],
        imageWidth: 64,
        imageHeight: 80,
        elementImageWidth: 12,
        elementImageHeight: 12,
        weaponImageWidth: 12,
        weaponImageHeight: 12,
      }
    : {
        image: props.character.icon[2],
        imageWidth: 176,
        imageHeight: 176,
        elementImageWidth: 18,
        elementImageHeight: 18,
        weaponImageWidth: 18,
        weaponImageHeight: 18,
      },
)
</script>

<template>
  <div
    class="border-default relative flex w-fit overflow-hidden rounded border"
  >
    <img
      :src="agentRenderData.image"
      :width="agentRenderData.imageWidth"
      :height="agentRenderData.imageHeight"
      :class="cn(AgentImageVariants({ size }))"
    />

    <div :class="cn(AgentInfoVariants({ size }))">
      <div :class="cn(AgentElementVariants({ size }))">
        <img
          :src="character.element_img"
          :width="agentRenderData.elementImageWidth"
          :height="agentRenderData.elementImageHeight"
        />
      </div>
      <div :class="cn(AgentWeaponVariants({ size }))">
        <img
          :src="character.weapon_img"
          :width="agentRenderData.weaponImageWidth"
          :height="agentRenderData.weaponImageHeight"
        />
      </div>
    </div>

    <div
      class="to-default absolute bottom-0 left-0 z-1 h-35/100 w-full bg-gradient-to-b from-transparent"
    />
  </div>
</template>
