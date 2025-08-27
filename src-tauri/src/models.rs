use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize)]
pub enum Rank {
    S,
    A,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "lowercase")]
pub enum Element {
    Electric,
    Physical,
    Fire,
    Ice,
    Ether,
    Frost,
    #[serde(rename = "auric-ink")]
    AuricInk,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "lowercase")]
pub enum Weapon {
    Attack,
    Defense,
    Support,
    Stun,
    Anomaly,
    Rupture,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct Character {
    pub id: u32,
    pub name: String,
    pub name_en: String,
    pub name_full: String,
    pub name_short: String,
    pub rank: Rank,
    pub speciality: u32,
    pub icon: Vec<String>,
    pub rank_img: String,
    pub element_img: String,
    pub element: Element,
    pub weapon_img: String,
    pub weapon: Weapon,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetCharactersResponse {
    pub characters: Vec<Character>,
}

#[derive(Debug, Deserialize)]
#[allow(dead_code)]
pub struct CharacterSupportCSV {
    #[serde(rename = "CID")]
    pub cid: u32,
    pub name: String,
    #[serde(rename = "角色属性-中文")]
    pub attribute_cn: String,
    #[serde(rename = "角色属性")]
    pub attribute: u32,
    #[serde(rename = "基础生命值")]
    pub base_hp: f32,
    #[serde(rename = "基础攻击力")]
    pub base_atk: f32,
    #[serde(rename = "基础防御力")]
    pub base_def: f32,
    #[serde(rename = "基础暴击率")]
    pub base_crit_rate: f32,
    #[serde(rename = "基础暴击伤害")]
    pub base_crit_dmg: f32,
    #[serde(rename = "基础暴击分数")]
    pub base_crit_score: f32,
    #[serde(rename = "基础异常掌控")]
    pub base_anomaly_mastery: f32,
    #[serde(rename = "基础异常精通")]
    pub base_anomaly_proficiency: f32,
    #[serde(rename = "基础穿透率")]
    pub base_penetration_ratio: f32,
    #[serde(rename = "基础穿透值")]
    pub base_penetration_value: f32,
    #[serde(rename = "基础能量自动回复")]
    pub base_energy_regeneration: f32,
    #[serde(rename = "基础冲击力")]
    pub base_impact: f32,
    #[serde(rename = "角色特性")]
    pub weapon: String,
    #[serde(rename = "角色阵营")]
    pub camp: String,
    #[serde(rename = "支援类型")]
    pub support_type: String,
    #[serde(rename = "组队被动条件")]
    pub team_passive_condition: String,
    #[serde(rename = "动作建模")]
    pub action_modeling: f32,
    #[serde(rename = "Buff支持")]
    pub buff_support: f32,
    #[serde(rename = "影画支持")]
    pub cinema_support: f32,
    #[serde(rename = "精细测帧")]
    pub frame_counting: f32,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetCharacterSupportsResponse {
    pub cid: u32,
    pub name: String,
    pub name_en: String,
    pub character_support: i32,
    pub action_modeling: f32,
    pub buff_support: f32,
    pub cinema_support: f32,
    pub frame_counting: f32,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetCharacterSupportsListResponse {
    pub character_supports: Vec<GetCharacterSupportsResponse>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct WEngine {
    pub id: u32,
    pub name: String,
    pub name_en: String,
    pub description: String,
    pub icon: String,
    pub rank: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetWEnginesResponse {
    pub wengines: Vec<WEngine>,
}
