import { getCharacters } from "~/apis"

export function useCharacters() {
  return useLazyAsyncData("characters", async () => {
    const response = await getCharacters()
    return response.characters
  })
}
