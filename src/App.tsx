import React, { useState } from 'react';
import CharacterSelector from './components/CharacterSelector';
import DialogueScene from './components/DialogueScene';
import FortuneSlipAnimation from './components/FortuneSlipAnimation';
import AttributionModal from './components/AttributionModal';
import { Character, Fortune, SelectedCharacter } from './types';
import { resolveCharacterDialogue, resolveFortuneFollowUpDialogue } from './utils/dialogue';
import './App.scss';

type AppStep = 'selector' | 'dialogue' | 'fortune';

const App: React.FC = () => {
    const [selectedCharacter, setSelectedCharacter] = useState<SelectedCharacter | null>(null);
    const [step, setStep] = useState<AppStep>('selector');
    const [isPostFortuneDialogue, setIsPostFortuneDialogue] = useState(false);
    const [isAttributionOpen, setIsAttributionOpen] = useState(false);

    const handleCharacterSelect = (character: Character) => {
        const dialogue = resolveCharacterDialogue(character.id);
        setSelectedCharacter({ ...character, dialogue });
        setIsPostFortuneDialogue(false);
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
        setIsPostFortuneDialogue(true);
        setStep('dialogue');
    };

    const handleReturnToSelection = () => {
        setSelectedCharacter(null);
        setIsPostFortuneDialogue(false);
        setStep('selector');
    };

    return (
        <div className="app">
            <button
                type="button"
                className="app-info-button"
                aria-label="Open project info and asset sources"
                onClick={() => setIsAttributionOpen(true)}
            >
                ?
            </button>
            <h1>Genshin Impact Fortune Slip Wish App</h1>
            {!selectedCharacter && <CharacterSelector onSelect={handleCharacterSelect} />}
            {selectedCharacter && (
                <DialogueScene
                    character={selectedCharacter}
                    onWishClick={handleStartWish}
                    onReturnClick={handleReturnToSelection}
                    showUi={step !== 'fortune'}
                    isPostFortuneMode={isPostFortuneDialogue}
                    onPostFortuneClick={handleReturnToSelection}
                />
            )}
            {step === 'fortune' && <FortuneSlipAnimation onContinue={handleFortuneContinue} />}
            <AttributionModal isOpen={isAttributionOpen} onClose={() => setIsAttributionOpen(false)} />
        </div>
    );
};

export default App;