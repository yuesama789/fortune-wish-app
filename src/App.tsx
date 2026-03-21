import React, { useState } from 'react';
import CharacterSelector from './components/CharacterSelector';
import DialogueScene from './components/DialogueScene';
import FortuneSlipAnimation from './components/FortuneSlipAnimation';
import { Character } from './types';

type AppStep = 'selector' | 'dialogue' | 'fortune';

const App: React.FC = () => {
    const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);
    const [step, setStep] = useState<AppStep>('selector');

    const handleCharacterSelect = (character: Character) => {
        setSelectedCharacter(character);
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
            {step === 'selector' && <CharacterSelector onSelect={handleCharacterSelect} />}
            {step === 'dialogue' && selectedCharacter && (
                <DialogueScene
                    character={selectedCharacter}
                    onWishClick={handleStartWish}
                    onReturnClick={handleReturnToSelection}
                />
            )}
            {step === 'fortune' && <FortuneSlipAnimation onReturnClick={handleReturnToSelection} />}
        </div>
    );
};

export default App;