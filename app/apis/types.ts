export interface Character {
  id: number
  name: string
  name_en: string
  name_full: string
  name_short: string
  rank: string
  element: number
  speciality: number
  icon: string[]
}

export interface CharacterSupport {
  cid: number
  name: string
  name_en: string
  character_support: number
  action_modeling: number
  buff_support: number
  cinema_support: number
  frame_counting: number
}
