<script setup lang="ts">
import { invoke } from "@tauri-apps/api/core"

const greetMsg = ref("")
const name = ref("")

async function greet() {
  // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
  greetMsg.value = await invoke("greet", { name: name.value })
}
</script>

<template>
  <main class="container">
    <form class="row" @submit.prevent="greet">
      <input
        id="greet-input"
        v-model="name"
        class="border-1"
        placeholder="Enter a name..."
      />
      <button type="submit">Greet</button>
    </form>
    <p>{{ greetMsg }}</p>
    <div class="font-pingfang w-fit text-2xl tracking-normal">会话管理</div>
    <div
      class="flex size-10 items-center justify-center rounded-lg bg-gradient-to-b from-[#494949] to-black shadow-lg"
    >
      <Icon name="zsim:zsim" class="size-8" />
    </div>
  </main>
</template>
