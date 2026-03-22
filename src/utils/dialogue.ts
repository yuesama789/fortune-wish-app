import { Character } from '../types';
import { characterDialogues } from '../data/characterDialogues';
import { getRandomItem } from './random';

export function resolveCharacterDialogue(characterId: Character['id']): string {
  const options = characterDialogues[characterId];

  if (!options || options.length === 0) {
    return '...';
  }

  if (options.length === 1) {
    return options[0];
  }

  return getRandomItem(options);
}