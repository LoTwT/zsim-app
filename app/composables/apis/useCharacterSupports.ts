import { getCharacterSupports } from "~/apis"

export function useCharacterSupports() {
  return useLazyAsyncData("character-supports", async () => {
    const response = await getCharacterSupports()
    return response.character_supports
  })
}
