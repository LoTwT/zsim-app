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
  </main>
</template>
