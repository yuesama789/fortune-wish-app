import React, { useState } from 'react';
import CharacterSelector from './components/CharacterSelector';
import DialogueScene from './components/DialogueScene';
import FortuneSlipAnimation from './components/FortuneSlipAnimation';
import { Character, SelectedCharacter } from './types';
import { resolveCharacterDialogue } from './utils/dialogue';

type AppStep = 'selector' | 'dialogue' | 'fortune';

const App: React.FC = () => {
    const [selectedCharacter, setSelectedCharacter] = useState<SelectedCharacter | null>(null);
    const [step, setStep] = useState<AppStep>('selector');

    const handleCharacterSelect = (character: Character) => {
        const dialogue = resolveCharacterDialogue(character.id);
        setSelectedCharacter({ ...character, dialogue });
        setStep('dialogue');
    };

    const handleStartWish = () => {
        setStep('fortune');
    };

    const handleReturnToSelection = () => {
        setSelectedCharacter(null);
        setStep('selector');
    };

    return (
        <div className="app">
            <h1>Genshin Impact Fortune Slip Wish App</h1>
            {!selectedCharacter && <CharacterSelector onSelect={handleCharacterSelect} />}
            {selectedCharacter && (
                <DialogueScene
                    character={selectedCharacter}
                    onWishClick={handleStartWish}
                    onReturnClick={handleReturnToSelection}
                    showUi={step !== 'fortune'}
                />
            )}
            {step === 'fortune' && <FortuneSlipAnimation onReturnClick={handleReturnToSelection} />}
        </div>
    );
};

export default App;