import { NonPlayableStory } from '../types';

export const fallbackNonPlayableStory: NonPlayableStory = {
    introDialogue: 'This encounter is less straightforward. You will need to choose how to approach it before fortune answers you.',
    options: [
        {
            id: 'careful',
            label: 'Approach carefully',
            followUpDialogue: 'You keep your distance, read the mood, and move with caution. The tension eases just enough for the path ahead to reveal itself.',
        },
        {
            id: 'direct',
            label: 'Speak directly',
            followUpDialogue: 'You step forward without hesitation and force the moment into clarity. Whatever happens next, at least the silence has been broken.',
        },
    ],
    continueLabel: 'Continue to fortune reveal',
};

export const nonPlayableStories: Record<string, NonPlayableStory> = {
    il_dottore: {
        introDialogue: 'You are aware I am not someone you can simply "wish" for… and yet, here you are. Tell me — are you driven by curiosity… or a lack of self-preservation?',
        options: [
            {
                id: 'analyze',
                label: 'Curiosity won\'t hurt, right?',
                followUpDialogue: 'How delightful. Curiosity has led to far more interesting outcomes than caution ever could. Let\'s see how far yours takes you.',
            },
            {
                id: 'provoke',
                label: 'I\'m willing to take that risk.',
                followUpDialogue: '…Even better. A subject that doesn\'t value their own safety tends to yield the most fascinating results.',
            },
        ],
        continueLabel: '(See what fortune says)',
    },
};