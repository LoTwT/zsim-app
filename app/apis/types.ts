export const CHARACTER_RANK = {
  S: "S",
  A: "A",
} as const

export const CHARACTER_ELEMENT = {
  ELECTRIC: "electric",
  PHYSICAL: "physical",
  FIRE: "fire",
  ICE: "ice",
  ETHER: "ether",
  FROST: "frost",
  AURIC_INK: "auric-ink",
} as const

export const CHARACTER_WEAPON = {
  ATTACK: "attack",
  DEFENSE: "defense",
  SUPPORT: "support",
  STUN: "stun",
  ANOMALY: "anomaly",
  RUPTURE: "rupture",
} as const

// Types derived from constants
export type CharacterRank = (typeof CHARACTER_RANK)[keyof typeof CHARACTER_RANK]
export type CharacterElement =
  (typeof CHARACTER_ELEMENT)[keyof typeof CHARACTER_ELEMENT]
export type CharacterWeapon =
  (typeof CHARACTER_WEAPON)[keyof typeof CHARACTER_WEAPON]

export interface Character {
  id: number
  name: string
  name_en: string
  name_full: string
  name_short: string
  rank: CharacterRank
  speciality: number
  icon: string[]
  rank_img: string
  element_img: string
  element: CharacterElement
  weapon_img: string
  weapon: CharacterWeapon
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
