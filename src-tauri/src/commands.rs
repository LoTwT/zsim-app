// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
use crate::models::{
    Character, CharacterSupportCSV, GetCharacterSupportsListResponse, GetCharacterSupportsResponse,
    GetCharactersResponse,
};
use csv;
use reqwest;
use serde_json;
use std::sync::OnceLock;

static CHARACTERS_CACHE: OnceLock<Result<Vec<Character>, String>> = OnceLock::new();

fn get_cached_characters() -> Result<&'static Vec<Character>, String> {
    let res = CHARACTERS_CACHE.get_or_init(|| {
        let json_str = include_str!("../assets/avatars.json");
        serde_json::from_str::<Vec<Character>>(json_str)
            .map_err(|e| format!("Failed to parse JSON: {e}"))
    });
    res.as_ref().map_err(|e| e.clone())
}

#[tauri::command]
pub fn get_characters() -> Result<GetCharactersResponse, String> {
    let characters = get_cached_characters()?.clone();
    let response = GetCharactersResponse { characters };
    Ok(response)
}

#[tauri::command]
pub async fn get_character_supports() -> Result<GetCharacterSupportsListResponse, String> {
    let url =
        "https://raw.githubusercontent.com/LoTwT/ZSim/refs/heads/main/zsim/data/character.csv";

    let response = reqwest::get(url)
        .await
        .map_err(|e| format!("Failed to fetch CSV: {}", e))?;

    let csv_content = response
        .text()
        .await
        .map_err(|e| format!("Failed to parse csv content: {}", e))?;

    let cached_characters = get_cached_characters()?;

    let mut reader = csv::Reader::from_reader(csv_content.as_bytes());
    let mut character_supports = Vec::<GetCharacterSupportsResponse>::new();

    for result in reader.deserialize() {
        let csv_character: CharacterSupportCSV =
            result.map_err(|e| format!("Failed to deserialize CSV: {}", e))?;

        let name_en = cached_characters
            .iter()
            .find(|c| c.id == csv_character.cid)
            .map(|c| c.name_en.clone())
            .unwrap_or_else(|| String::new());

        let character_support = if csv_character.action_modeling >= 1.0
            && csv_character.buff_support >= 1.0
            && csv_character.cinema_support >= 1.0
        {
            1
        } else if csv_character.action_modeling >= 0.0 && csv_character.buff_support >= 0.0 {
            0
        } else {
            -1
        };

        character_supports.push(GetCharacterSupportsResponse {
            cid: csv_character.cid,
            name: csv_character.name,
            name_en,
            character_support,
            action_modeling: csv_character.action_modeling,
            buff_support: csv_character.buff_support,
            cinema_support: csv_character.cinema_support,
            frame_counting: csv_character.frame_counting,
        });
    }

    Ok(GetCharacterSupportsListResponse { character_supports })
}
