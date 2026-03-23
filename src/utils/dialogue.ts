import { Character, FortuneHeader } from '../types';
import { characterDialogues, fortuneFollowUpDialogues } from '../data/characterDialogues';
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

export function resolveFortuneFollowUpDialogue(
  characterId: Character['id'],
  fortuneHeader: FortuneHeader,
): string {
  const characterSpecificDialogues = fortuneFollowUpDialogues[characterId];
  const options = characterSpecificDialogues?.[fortuneHeader];

  if (!options || options.length === 0) {
    return resolveCharacterDialogue(characterId);
  }

  return options.length === 1 ? options[0] : getRandomItem(options);
}