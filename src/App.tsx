import React, { useEffect, useState } from 'react';
import CharacterSelector from './components/CharacterSelector';
import DialogueScene from './components/DialogueScene';
import FortuneSlipAnimation from './components/FortuneSlipAnimation';
import AttributionModal from './components/AttributionModal';
import LoadingScreen from './components/LoadingScreen';
import { Character, Fortune, NonPlayableStory, SelectedCharacter } from './types';
import { characters } from './data/characters';
import { fortunes } from './data/fortunes';
import { characterDialogues, fortuneFollowUpDialogues } from './data/characterDialogues';
import { nonPlayableStories } from './data/nonPlayableStories';
import { normalizeAssetName, resolveAssetUrl } from './utils/assets';
import {
    resolveCharacterDialogue,
    resolveFortuneFollowUpDialogue,
    resolveNonPlayableStory,
} from './utils/dialogue';
import './App.scss';

type AppStep = 'selector' | 'dialogue' | 'story' | 'fortune';
type NonPlayableStoryStage = 'intro' | 'followup' | null;

const getCharactersUsingFallbackContent = () => {
    const initialDialogueFallback = characters
        .filter((character) => character.playable && (!characterDialogues[character.id] || characterDialogues[character.id].length === 0))
        .map((character) => character.name);

    const fortuneFollowUpFallback = characters
        .filter((character) => !fortuneFollowUpDialogues[character.id])
        .map((character) => character.name);

    const nonPlayableStoryFallback = characters
        .filter((character) => !character.playable && !nonPlayableStories[character.id])
        .map((character) => character.name);

    return {
        initialDialogueFallback,
        fortuneFollowUpFallback,
        nonPlayableStoryFallback,
    };
};

const App: React.FC = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [selectedCharacter, setSelectedCharacter] = useState<SelectedCharacter | null>(null);
    const [step, setStep] = useState<AppStep>('selector');
    const [stepAfterDialogueTransition, setStepAfterDialogueTransition] = useState<AppStep>('dialogue');
    const [isPostFortuneDialogue, setIsPostFortuneDialogue] = useState(false);
    const [isAttributionOpen, setIsAttributionOpen] = useState(false);
    const [isDialogueTransitionVisible, setIsDialogueTransitionVisible] = useState(false);
    const [isReturnTransitionVisible, setIsReturnTransitionVisible] = useState(false);
    const [activeFortune, setActiveFortune] = useState<Fortune | null>(null);
    const [activeNonPlayableStory, setActiveNonPlayableStory] = useState<NonPlayableStory | null>(null);
    const [nonPlayableStoryStage, setNonPlayableStoryStage] = useState<NonPlayableStoryStage>(null);

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

    useEffect(() => {
        if (!import.meta.env.DEV) {
            return;
        }

        console.log('Characters using fallback content:', getCharactersUsingFallbackContent());
    }, []);

    const getRandomFortune = (): Fortune => {
        const randomIndex = Math.floor(Math.random() * fortunes.length);
        return fortunes[randomIndex];
    };

    const startFortuneReveal = () => {
        setActiveFortune(getRandomFortune());
        setStep('fortune');
    };

    const handleCharacterSelect = (character: Character) => {
        let story: NonPlayableStory | null = null;
        let dialogue: string;

        if (character.playable) {
            dialogue = resolveCharacterDialogue(character.id);
        } else {
            story = resolveNonPlayableStory(character.id);
            dialogue = story.introDialogue;
        }

        setSelectedCharacter({ ...character, dialogue });
        setActiveNonPlayableStory(story);
        setNonPlayableStoryStage(story ? 'intro' : null);
        setActiveFortune(null);
        setIsPostFortuneDialogue(false);
        setStepAfterDialogueTransition(story ? 'story' : 'dialogue');
        setIsDialogueTransitionVisible(true);
    };

    const handleStartWish = () => {
        if (!selectedCharacter || !selectedCharacter.playable) {
            return;
        }

        startFortuneReveal();
    };

    const handleNonPlayableChoice = (choiceId: string) => {
        if (!activeNonPlayableStory) {
            return;
        }

        const selectedChoice = activeNonPlayableStory.options.find((option) => option.id === choiceId);

        if (!selectedChoice) {
            return;
        }

        setSelectedCharacter((currentCharacter) => {
            if (!currentCharacter) {
                return currentCharacter;
            }

            return {
                ...currentCharacter,
                dialogue: selectedChoice.followUpDialogue,
            };
        });
        setNonPlayableStoryStage('followup');
    };

    const handleNonPlayableFortuneStart = () => {
        if (!selectedCharacter || selectedCharacter.playable || nonPlayableStoryStage !== 'followup') {
            return;
        }

        startFortuneReveal();
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
        setActiveFortune(null);
        setActiveNonPlayableStory(null);
        setNonPlayableStoryStage(null);
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

    const dialogueActions = (() => {
        if (!selectedCharacter || isPostFortuneDialogue) {
            return [];
        }

        if (step === 'dialogue') {
            return [
                {
                    id: 'wish',
                    label: '(Try your luck!)',
                    icon: 'wish' as const,
                    onClick: handleStartWish,
                },
                {
                    id: 'return',
                    label: '(Select another character)',
                    icon: 'return' as const,
                    onClick: handleReturnToSelection,
                },
            ];
        }

        if (step === 'story' && activeNonPlayableStory && nonPlayableStoryStage === 'intro') {
            return activeNonPlayableStory.options.map((option) => ({
                id: option.id,
                label: option.label,
                icon: 'dialogue' as const,
                onClick: () => handleNonPlayableChoice(option.id),
            }));
        }

        if (step === 'story' && activeNonPlayableStory && nonPlayableStoryStage === 'followup') {
            return [
                {
                    id: 'continue',
                    label: activeNonPlayableStory.continueLabel,
                    icon: 'wish' as const,
                    onClick: handleNonPlayableFortuneStart,
                },
            ];
        }

        return [];
    })();

    const isHomeViewVisible =
        step === 'selector' &&
        !selectedCharacter &&
        !isDialogueTransitionVisible &&
        !isReturnTransitionVisible;

    const shouldShowDialogueScene =
        !!selectedCharacter &&
        step !== 'selector' &&
        (step !== 'fortune' || !activeFortune);

    return (
        <div className="app">
            <button
                type="button"
                className="app-info-button"
                aria-label="Open project info and asset sources"
                onClick={() => setIsAttributionOpen(true)}
            >
                ⋯
            </button>
            {isHomeViewVisible && 
                (
                    <>
                        <h1>Genshin Impact Wish For Me?</h1>
                        <div className="ornamental" />
                    </>
                )
            }
            {isHomeViewVisible && <CharacterSelector onSelect={handleCharacterSelect} />}
            {shouldShowDialogueScene && (
                <DialogueScene
                    character={selectedCharacter}
                    onReturnClick={handleReturnToSelection}
                    actions={dialogueActions}
                    showUi
                    isPostFortuneMode={isPostFortuneDialogue}
                    onPostFortuneClick={handlePostFortuneReturn}
                />
            )}
            {isDialogueTransitionVisible && (
                <LoadingScreen
                    mode="transition"
                    preloadUrls={dialogueTransitionAssets}
                    onFadeStart={() => setStep(stepAfterDialogueTransition)}
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
            {step === 'fortune' && activeFortune && (
                <FortuneSlipAnimation fortune={activeFortune} onContinue={handleFortuneContinue} />
            )}
            <AttributionModal isOpen={isAttributionOpen} onClose={() => setIsAttributionOpen(false)} />
        </div>
    );
};

export default App;