import React from 'react';
import { Character } from '../types';
import { characters as defaultCharacters } from '../data/characters';
import './CharacterSelector.scss';

interface CharacterSelectorProps {
  characters?: Character[];
  onSelect: (character: Character) => void;
}

const CharacterSelector: React.FC<CharacterSelectorProps> = ({
  characters = defaultCharacters,
  onSelect
}) => {

  const getElementIcon = (element: string): string => {
    const baseUrl = '/images/elements/Element_';
    switch (element) {
      case 'Pyro':
        return `${baseUrl}Pyro.webp`;
      case 'Hydro':
        return `${baseUrl}Hydro.webp`;
      case 'Electro':
        return `${baseUrl}Electro.webp`;
      case 'Cryo':
        return `${baseUrl}Cryo.webp`;
      case 'Anemo':
        return `${baseUrl}Anemo.webp`;
      case 'Geo':
        return `${baseUrl}Geo.webp`;
      case 'Dendro':
        return `${baseUrl}Dendro.webp`;
      default:
        return `${baseUrl}default.webp`;
    }
  };

  const getCharacterName = (name: string): string => {
    if (name.length > 8) {
      return name.slice(0, 8) + '..';
    }
    // You can add any logic here to transform the character name if needed
    return name;
  };

  return (
    <div className="character-selector">
      <h2>Select a Character to Wish For:</h2>
      <ul>
        {characters.length === 0 && <li>No characters available.</li>}
        {characters.map((character) => (
          <li key={character.name} onClick={() => onSelect(character)}>
            <img src={character.image} alt={character.name} className={`character-img quality-${character.quality}`} />
            <span className='character-element'><img src={getElementIcon(character.element)} alt={character.element} /></span>
            <div className='character-name'>{getCharacterName(character.name)}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CharacterSelector;