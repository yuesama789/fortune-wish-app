import { Character, FortuneHeader, NonPlayableStory } from '../types';
import {
  characterDialogues,
  fallbackCharacterDialogues,
  fallbackFortuneFollowUpDialogues,
  fortuneFollowUpDialogues,
} from '../data/characterDialogues';
import { fallbackNonPlayableStory, nonPlayableStories } from '../data/nonPlayableStories';
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

export function resolveNonPlayableStory(characterId: Character['id']): NonPlayableStory {
  const story = nonPlayableStories[characterId] ?? fallbackNonPlayableStory;

  return {
    ...story,
    options: story.options.map((option) => ({ ...option })) as NonPlayableStory['options'],
  };
}