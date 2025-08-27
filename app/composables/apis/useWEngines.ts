import { getWEngines } from "~/apis"

export function useWEngines() {
  return useLazyAsyncData("wengines", async () => {
    const response = await getWEngines()
    return response.wengines
  })
}
