import { requestTauri } from "./tauri"

export async function getCharacters() {
  return requestTauri("get_characters")
}

export async function getCharacterSupports() {
  return requestTauri("get_character_supports")
}

export async function getWEngines() {
  return requestTauri("get_wengines")
}
