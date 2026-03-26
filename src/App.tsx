import React, { useEffect, useState } from 'react';
import CharacterSelector from './components/CharacterSelector';
import DialogueScene from './components/DialogueScene';
import FortuneSlipAnimation from './components/FortuneSlipAnimation';
import AttributionModal from './components/AttributionModal';
import LoadingScreen from './components/LoadingScreen';
import { Character, Fortune, SelectedCharacter } from './types';
import { normalizeAssetName, resolveAssetUrl } from './utils/assets';
import { resolveCharacterDialogue, resolveFortuneFollowUpDialogue } from './utils/dialogue';
import './App.scss';

type AppStep = 'selector' | 'dialogue' | 'fortune';

const App: React.FC = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [selectedCharacter, setSelectedCharacter] = useState<SelectedCharacter | null>(null);
    const [step, setStep] = useState<AppStep>('selector');
    const [isPostFortuneDialogue, setIsPostFortuneDialogue] = useState(false);
    const [isAttributionOpen, setIsAttributionOpen] = useState(false);
    const [isDialogueTransitionVisible, setIsDialogueTransitionVisible] = useState(false);
    const [isReturnTransitionVisible, setIsReturnTransitionVisible] = useState(false);

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
        setIsDialogueTransitionVisible(true);
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

    const handlePostFortuneReturn = () => {
        setIsReturnTransitionVisible(true);
    };

    if (isLoading) {
        return <LoadingScreen onComplete={() => setIsLoading(false)} />;
    }

    const dialogueTransitionAssets = selectedCharacter
        ? [
            resolveAssetUrl(`/images/dialogue_assets/background/${normalizeAssetName(selectedCharacter.region || 'default_bg')}.webp`),
            resolveAssetUrl(`/images/dialogue_assets/characters/${normalizeAssetName(selectedCharacter.name)}.png`),
            resolveAssetUrl(selectedCharacter.image),
        ]
        : [];

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
            {selectedCharacter && step !== 'selector' && (
                <DialogueScene
                    character={selectedCharacter}
                    onWishClick={handleStartWish}
                    onReturnClick={handleReturnToSelection}
                    textRevealDelayMs={isDialogueTransitionVisible ? 480 : 0}
                    showUi={step !== 'fortune'}
                    isPostFortuneMode={isPostFortuneDialogue}
                    onPostFortuneClick={handlePostFortuneReturn}
                />
            )}
            {isDialogueTransitionVisible && (
                <LoadingScreen
                    mode="transition"
                    preloadUrls={dialogueTransitionAssets}
                    onFadeStart={() => setStep('dialogue')}
                    onComplete={() => setIsDialogueTransitionVisible(false)}
                />
            )}
            {isReturnTransitionVisible && (
                <LoadingScreen
                    mode="transition"
                    transitionDurationMs={180}
                    onFadeStart={handleReturnToSelection}
                    onComplete={() => setIsReturnTransitionVisible(false)}
                />
            )}
            {step === 'fortune' && <FortuneSlipAnimation onContinue={handleFortuneContinue} />}
            <AttributionModal isOpen={isAttributionOpen} onClose={() => setIsAttributionOpen(false)} />
        </div>
    );
};

export default App;