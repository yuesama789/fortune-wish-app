export type CharacterQuality = 4 | 5;

export type CharacterElement =
  | 'Pyro'
  | 'Hydro'
  | 'Electro'
  | 'Cryo'
  | 'Anemo'
  | 'Geo'
  | 'Dendro'
  | 'Unknown';

export interface Character {
  id: string; // stable lookup key, e.g. "diluc"
  name: string;
  releaseDate: string; // ISO date string: YYYY-MM-DD
  image: string;
  quality: CharacterQuality;
  element: CharacterElement;
  region: string;
  playable: boolean;
}

export interface SelectedCharacter extends Character {
  dialogue: string; // resolved single line for UI
}

export type CharacterDialogueMap = Record<string, string[]>;

export type FortuneHeader =
  | 'Great Fortune'
  | 'Good Fortune'
  | 'Modest Fortune'
  | 'Rising Fortune'
  | 'Misfortune'
  | 'Great Misfortune';

export interface Fortune {
  header: FortuneHeader;
  text: string;
}