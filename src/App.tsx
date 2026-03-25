import React, { useEffect, useState } from 'react';
import CharacterSelector from './components/CharacterSelector';
import DialogueScene from './components/DialogueScene';
import FortuneSlipAnimation from './components/FortuneSlipAnimation';
import AttributionModal from './components/AttributionModal';
import LoadingScreen from './components/LoadingScreen';
import { Character, Fortune, SelectedCharacter } from './types';
import { resolveAssetUrl } from './utils/assets';
import { resolveCharacterDialogue, resolveFortuneFollowUpDialogue } from './utils/dialogue';
import './App.scss';

type AppStep = 'selector' | 'dialogue' | 'fortune';

const App: React.FC = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [selectedCharacter, setSelectedCharacter] = useState<SelectedCharacter | null>(null);
    const [step, setStep] = useState<AppStep>('selector');
    const [isPostFortuneDialogue, setIsPostFortuneDialogue] = useState(false);
    const [isAttributionOpen, setIsAttributionOpen] = useState(false);

    useEffect(() => {
        const body = document.body;
        body.style.setProperty(
            '--app-background-image',
            `url(${resolveAssetUrl('/images/dialogue_assets/background/default_bg.webp')})`,
        );

        return () => {
            body.style.removeProperty('--app-background-image');
        };
    }, []);

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

    if (isLoading) {
        return <LoadingScreen onComplete={() => setIsLoading(false)} />;
    }

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
            <h1>Genshin Impact Wish For Me?</h1>
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