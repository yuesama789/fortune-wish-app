export type CharacterQuality = 4 | 5;

export type CharacterElement =
  | 'Pyro'
  | 'Hydro'
  | 'Electro'
  | 'Cryo'
  | 'Anemo'
  | 'Geo'
  | 'Dendro';

export interface Character {
  id: string; // stable lookup key, e.g. "diluc"
  name: string;
  image: string;
  quality: CharacterQuality;
  element: CharacterElement;
  region: string;
}

export interface SelectedCharacter extends Character {
  dialogue: string; // resolved single line for UI
}

export type CharacterDialogueMap = Record<string, string[]>;

export interface Fortune {
  text: string;
}