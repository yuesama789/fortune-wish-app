import React, { useState } from 'react';
import CharacterSelector from './components/CharacterSelector';
import DialogueScene from './components/DialogueScene';
import FortuneSlipAnimation from './components/FortuneSlipAnimation';
import { Character, Fortune, SelectedCharacter } from './types';
import { resolveCharacterDialogue, resolveFortuneFollowUpDialogue } from './utils/dialogue';

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

    const handleFortuneContinue = (fortune: Fortune) => {
        setSelectedCharacter((currentCharacter) => {
            if (!currentCharacter) {
                return currentCharacter;
            }

            const followUpDialogue = resolveFortuneFollowUpDialogue(
                currentCharacter.id,
                fortune.header,
            );

            return {
                ...currentCharacter,
                dialogue: followUpDialogue,
            };
        });
        setStep('dialogue');
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
            {step === 'fortune' && <FortuneSlipAnimation onContinue={handleFortuneContinue} />}
        </div>
    );
};

export default App;