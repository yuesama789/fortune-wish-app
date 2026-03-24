import { Character, FortuneHeader } from '../types';
import {
  characterDialogues,
  fallbackCharacterDialogues,
  fallbackFortuneFollowUpDialogues,
  fortuneFollowUpDialogues,
} from '../data/characterDialogues';
import { getRandomItem } from './random';

export function resolveCharacterDialogue(characterId: Character['id']): string {
  const options = characterDialogues[characterId];
  const normalizedOptions = options && options.length > 0 ? options : fallbackCharacterDialogues;

  if (normalizedOptions.length === 1) {
    return normalizedOptions[0];
  }

  return getRandomItem(normalizedOptions);
}

export function resolveFortuneFollowUpDialogue(
  characterId: Character['id'],
  fortuneHeader: FortuneHeader,
): string {
  const characterSpecificDialogues = fortuneFollowUpDialogues[characterId];
  const options = characterSpecificDialogues?.[fortuneHeader];
  const normalizedOptions =
    options && options.length > 0 ? options : fallbackFortuneFollowUpDialogues;

  if (normalizedOptions.length === 1) {
    return normalizedOptions[0];
  }

  return getRandomItem(normalizedOptions);
}