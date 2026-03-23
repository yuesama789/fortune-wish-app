import React, { useMemo, useState } from 'react';
import { Character, CharacterElement, CharacterQuality } from '../types';
import { characters as defaultCharacters } from '../data/characters';
import { featuredCharacterIds } from '../data/featuredCharacterIds';
import './CharacterSelector.scss';

interface CharacterSelectorProps {
  characters?: Character[];
  onSelect: (character: Character) => void;
}

const CharacterSelector: React.FC<CharacterSelectorProps> = ({
  characters = defaultCharacters,
  onSelect
}) => {
  const [qualityFilter, setQualityFilter] = useState<'all' | CharacterQuality>('all');
  const [regionFilter, setRegionFilter] = useState<'all' | string>('all');
  const [elementFilter, setElementFilter] = useState<'all' | CharacterElement>('all');
  const [nameFilter, setNameFilter] = useState('');

  const featuredSet = useMemo(() => new Set<string>(featuredCharacterIds), []);

  const regionOptions = useMemo(
    () => Array.from(new Set(characters.map((character) => character.region))).sort(),
    [characters],
  );

  const elementOptions = useMemo(
    () => Array.from(new Set(characters.map((character) => character.element))),
    [characters],
  );

  const featuredCharacters = useMemo(
    () => characters.filter((character) => featuredSet.has(character.id)),
    [characters, featuredSet],
  );

  const filteredCharacters = useMemo(
    () => characters
      .filter((character) => !featuredSet.has(character.id))
      .filter((character) => (qualityFilter === 'all' ? true : character.quality === qualityFilter))
      .filter((character) => (regionFilter === 'all' ? true : character.region === regionFilter))
      .filter((character) => (elementFilter === 'all' ? true : character.element === elementFilter))
      .filter((character) => character.name.toLowerCase().includes(nameFilter.trim().toLowerCase())),
    [characters, featuredSet, qualityFilter, regionFilter, elementFilter, nameFilter],
  );

  const elementIconMap: Record<CharacterElement, string> = {
    Pyro: '/images/elements/Element_Pyro.webp',
    Hydro: '/images/elements/Element_Hydro.webp',
    Electro: '/images/elements/Element_Electro.webp',
    Cryo: '/images/elements/Element_Cryo.webp',
    Anemo: '/images/elements/Element_Anemo.webp',
    Geo: '/images/elements/Element_Geo.webp',
    Dendro: '/images/elements/Element_Dendro.webp',
  };

  const getCharacterName = (name: string): string => {
    if (name.length > 8) {
      return name.slice(0, 8) + '..';
    }
    return name;
  };

  const renderCharacterCard = (character: Character) => (
    <li key={character.id} onClick={() => onSelect(character)}>
      <img src={character.image} alt={character.name} className={`character-img quality-${character.quality}`} />
      <span className='character-element'>
        <img src={elementIconMap[character.element]} alt={character.element} />
      </span>
      <div className='character-name'>{getCharacterName(character.name)}</div>
    </li>
  );

  const clearFilters = () => {
    setQualityFilter('all');
    setRegionFilter('all');
    setElementFilter('all');
    setNameFilter('');
  };

  return (
    <div className="character-selector">
      <h2>Select a Character to Wish For:</h2>
      <div className="filter-panel">
        <label className="name-search">
          Search Name
          <input
            type="text"
            value={nameFilter}
            placeholder="e.g. Keqing"
            onChange={(event) => setNameFilter(event.target.value)}
          />
        </label>
        <label>
          Quality
          <select
            value={qualityFilter}
            onChange={(event) => {
              const nextValue = event.target.value;
              setQualityFilter(nextValue === 'all' ? 'all' : (Number(nextValue) as CharacterQuality));
            }}
          >
            <option value="all">All</option>
            <option value="5">5-Star</option>
            <option value="4">4-Star</option>
          </select>
        </label>
        <label>
          Region
          <select value={regionFilter} onChange={(event) => setRegionFilter(event.target.value)}>
            <option value="all">All</option>
            {regionOptions.map((region) => (
              <option key={region} value={region}>{region}</option>
            ))}
          </select>
        </label>
        <label>
          Element
          <select
            value={elementFilter}
            onChange={(event) => {
              const nextValue = event.target.value;
              setElementFilter(nextValue === 'all' ? 'all' : (nextValue as CharacterElement));
            }}
          >
            <option value="all">All</option>
            {elementOptions.map((element) => (
              <option key={element} value={element}>{element}</option>
            ))}
          </select>
        </label>
        <button type="button" onClick={clearFilters}>Clear Filters</button>
      </div>

      <section className="character-section">
        <h3>Featured Characters</h3>
        <ul className="character-grid featured-grid">
          {featuredCharacters.length === 0 && <li className="empty-state">No featured characters configured.</li>}
          {featuredCharacters.map(renderCharacterCard)}
        </ul>
      </section>

      <section className="character-section">
        <h3>All Characters</h3>
        <ul className="character-grid">
          {filteredCharacters.length === 0 && <li className="empty-state">No characters match the current filters.</li>}
          {filteredCharacters.map(renderCharacterCard)}
        </ul>
      </section>
    </div>
  );
};

export default CharacterSelector;