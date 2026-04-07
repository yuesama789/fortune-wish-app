import React, { useMemo, useState } from 'react';
import { Character, CharacterElement, CharacterQuality } from '../types';
import { characters as defaultCharacters } from '../data/characters';
import { characterDialogues, fortuneFollowUpDialogues } from '../data/characterDialogues';
import { nonPlayableStories } from '../data/nonPlayableStories';
import { getActiveFeaturedPatchInfo } from '../data/featuredCharacterIds';
import { resolveAssetUrl } from '../utils/assets';
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

  const activePatchInfo = useMemo(() => getActiveFeaturedPatchInfo(), []);
  const patchVersion = activePatchInfo.patchVersion;

  const characterById = useMemo(
    () => new Map(characters.map((character) => [character.id, character])),
    [characters],
  );

  const regionOptions = useMemo(
    () => Array.from(new Set(characters.map((character) => character.region))).sort(),
    [characters],
  );

  const elementOptions = useMemo(
    () => Array.from(new Set(characters.map((character) => character.element))),
    [characters],
  );

  const hasCustomContent = (character: Character) => {
    const hasPlayableDialogue = !!characterDialogues[character.id] && !!fortuneFollowUpDialogues[character.id];
    const hasNonPlayableStory = !!nonPlayableStories[character.id];

    return hasPlayableDialogue || hasNonPlayableStory;
  };

  const featuredCharacters = useMemo(
    () => activePatchInfo.featuredCharacterIds
      .map((id) => characterById.get(id))
      .filter((character): character is Character => !!character && hasCustomContent(character)),
    [activePatchInfo, characterById],
  );

  const chronicledCharacters = useMemo(
    () => characters.filter((character) => activePatchInfo.chronicleBannerIds?.includes(character.id) && hasCustomContent(character)),
    [characters, activePatchInfo],
  );

  const filteredCharacters = useMemo(
    () => characters
      .filter(hasCustomContent)
      .filter((character) => (qualityFilter === 'all' ? true : character.quality === qualityFilter))
      .filter((character) => (regionFilter === 'all' ? true : character.region === regionFilter))
      .filter((character) => (elementFilter === 'all' ? true : character.element === elementFilter))
      .filter((character) => character.name.toLowerCase().includes(nameFilter.trim().toLowerCase()))
      .sort((a, b) => b.releaseDate.localeCompare(a.releaseDate)),
    [characters, qualityFilter, regionFilter, elementFilter, nameFilter],
  );

  const elementIconMap: Record<CharacterElement, string> = {
    Pyro: '/images/elements/Element_Pyro.webp',
    Hydro: '/images/elements/Element_Hydro.webp',
    Electro: '/images/elements/Element_Electro.webp',
    Cryo: '/images/elements/Element_Cryo.webp',
    Anemo: '/images/elements/Element_Anemo.webp',
    Geo: '/images/elements/Element_Geo.webp',
    Dendro: '/images/elements/Element_Dendro.webp',
    Unknown: '/images/elements/Element_Unknown.webp',
  };

  const getCharacterName = (name: string): string => {
    if (name.length > 8) {
      return name.slice(0, 8) + '..';
    }
    return name;
  };

  const renderCharacterCard = (character: Character) => (
    <li key={character.id} onClick={() => onSelect(character)}>
      <img src={resolveAssetUrl(character.image)} alt={character.name} className={`character-img quality-${character.quality}`} />
      <span className='character-element'>
        <img src={resolveAssetUrl(elementIconMap[character.element])} alt={character.element} />
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
    <div
      className="character-selector"
      style={{
        '--quality-5-background-image': `url(${resolveAssetUrl('/images/quality/Background_5_Star.webp')})`,
        '--quality-4-background-image': `url(${resolveAssetUrl('/images/quality/Background_4_Star.webp')})`,
      } as React.CSSProperties}
    >
      <h2>Choose who you’re risking it all for…</h2>
      <div className="filter-panel">
        <label className="name-search">
          Search by name:
          <input
            type="text"
            value={nameFilter}
            placeholder="Search by name..."
            onChange={(event) => setNameFilter(event.target.value)}
          />
        </label>

        <div className="filter-group">
          <span className="filter-group-label">Quality</span>
          <div className="filter-bubbles">
            <button
              type="button"
              className={`filter-bubble${qualityFilter === 'all' ? ' active' : ''}`}
              onClick={() => setQualityFilter('all')}
            >
              All
            </button>
            <button
              type="button"
              className={`filter-bubble quality-5${qualityFilter === 5 ? ' active' : ''}`}
              onClick={() => setQualityFilter(qualityFilter === 5 ? 'all' : 5)}
            >
              5 ★
            </button>
            <button
              type="button"
              className={`filter-bubble quality-4${qualityFilter === 4 ? ' active' : ''}`}
              onClick={() => setQualityFilter(qualityFilter === 4 ? 'all' : 4)}
            >
              4 ★
            </button>
          </div>
        </div>

        <div className="filter-group">
          <span className="filter-group-label">Region</span>
          <div className="filter-bubbles">
            <button
              type="button"
              className={`filter-bubble${regionFilter === 'all' ? ' active' : ''}`}
              onClick={() => setRegionFilter('all')}
            >
              All
            </button>
            {regionOptions.map((region) => (
              <button
                key={region}
                type="button"
                className={`filter-bubble${regionFilter === region ? ' active' : ''}`}
                onClick={() => setRegionFilter(regionFilter === region ? 'all' : region)}
              >
                {region}
              </button>
            ))}
          </div>
        </div>

        <div className="filter-group">
          <span className="filter-group-label">Elemental Type</span>
          <div className="filter-bubbles">
            <button
              type="button"
              className={`filter-bubble${elementFilter === 'all' ? ' active' : ''}`}
              onClick={() => setElementFilter('all')}
            >
              All
            </button>
            {elementOptions.map((element) => (
              <button
                key={element}
                type="button"
                className={`filter-bubble element-bubble${elementFilter === element ? ' active' : ''}`}
                onClick={() => setElementFilter(elementFilter === element ? 'all' : element as CharacterElement)}
              >
                <img src={resolveAssetUrl(elementIconMap[element])} alt={element} />
                {element}
              </button>
            ))}
          </div>
        </div>

        <button type="button" className="clear-filters-btn" onClick={clearFilters}>X Clear Filters</button>
      </div>

      <section className="character-section">
        <h3>Featured Characters (Patch {patchVersion})</h3>
        <ul className="character-grid featured-grid">
          {featuredCharacters.length === 0 && <li className="empty-state">No featured characters configured.</li>}
          {featuredCharacters.map(renderCharacterCard)}
        </ul>
      </section>

      { chronicledCharacters.length > 0 && 
        <section className="character-section">
          <h3>Chronicled Wish</h3>
          <ul className="character-grid">
            {chronicledCharacters.map(renderCharacterCard)}
          </ul>
        </section>
      }


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