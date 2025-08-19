import type { Character, CharacterSupport } from "./types"
import { invoke } from "@tauri-apps/api/core"

export const TAURI_COMMANDS = {
  GET_CHARACTERS: "get_characters",
  GET_CHARACTER_SUPPORTS: "get_character_supports",
} as const

export type TauriCommand = (typeof TAURI_COMMANDS)[keyof typeof TAURI_COMMANDS]

export interface TauriCommandDefinitions {
  [TAURI_COMMANDS.GET_CHARACTERS]: {
    args: never
    response: { characters: Character[] }
  }
  [TAURI_COMMANDS.GET_CHARACTER_SUPPORTS]: {
    args: never
    response: { character_supports: CharacterSupport[] }
  }
}

export async function requestTauri<T extends TauriCommand>(
  command: T,
  args?: TauriCommandDefinitions[T]["args"],
): Promise<TauriCommandDefinitions[T]["response"]> {
  try {
    const result = await invoke(command, args)
    return result as TauriCommandDefinitions[T]["response"]
  } catch (error) {
    throw new Error(`Tauri command ${command} failed: ${error}`)
  }
}
