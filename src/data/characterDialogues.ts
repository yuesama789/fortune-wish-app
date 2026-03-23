import { CharacterDialogueMap, FortuneHeader } from '../types';

export const characterDialogues: CharacterDialogueMap = {
    dehya: [
        "So… you're aiming for me this time? Heh. I like your taste. Let's see if you can actually pull it off.",
        "You've got your eyes set on me? Bold. Don't back down now.",
        "If you're coming for me, you better be serious about it.",
    ],
    diluc: [
        "…You've chosen me. Then don't hesitate.",
        "If I'm the one you're after, act with conviction.",
        "…I see. Then see it through.",
    ],
    jean: [
        "You're hoping for me? Then I truly hope it works out for you.",
        "If I'm who you're aiming for, then you should trust that choice.",
        "I'll be rooting for you… in my own way.",
    ],
    keqing: [
        "So, you want me? Interesting choice. Let's see if you can make it happen.",
        "If I'm the one you're after, then you better be ready to work for it.",
    ],
    mona: [
    "You've come seeking an answer. Or perhaps… something more specific?",
    "Your fate is difficult to read. It shifts whenever I look too closely.",
    "…You're hoping for a particular outcome, aren't you? It's written all over you.",
    ],
    qiqi: [
        "…You're making a wish? Okay. I'll try to remember that.",
        "If it works, that's good. If not… you can try again.",
        "…I hope it makes you happy.",
    ],
    tighnari: [
        "Hmm… curious behavior. Let's see if your instincts are as good as you think.",
        "You're taking a calculated risk, I hope? Or is this pure impulse?",
        "Go on then. I'm interested to see the outcome.",
    ],
    yumemizuki: [
        "Ah… you followed the feeling, didn't you? That's rarely a coincidence.",
        "Some wishes are louder than others. Yours is… hard to ignore.",
        "Let's see where this little dream of yours leads.",
    ],
    xingqiu: [
        "Ah, a moment of chance. How exciting… in a literary sense, of course.",
        "If this were a story, I wonder what outcome it would favor.",
        "Go on, I'll observe. For research purposes.",
    ],
    bennett: [
        "Alright! Maybe this time my luck won't mess things up… for you, I mean!",
        "Hey, don't worry! Even if it goes wrong, we'll just try again!",
        "I've got a good feeling about this! …I think. Probably!",
    ],
    sucrose: [
        "O-oh… you're doing it now? Um—good luck… I'll just stand over here.",
        "I'd like to record the results… if that's okay…",
        "…I hope it works. That would be… really nice.",
    ],
};

export const fortuneFollowUpDialogues: Record<string, Record<FortuneHeader, string[]>> = {
    dehya: {
        'Great Fortune': ["Hah, that's the kind of luck I like. Keep your chin up and swing again."],
        'Good Fortune': ["Not bad at all. You're in a good rhythm, so don't lose it now."],
        'Modest Fortune': ["Could be better, could be worse. Stay steady and keep moving."],
        'Rising Fortune': ["You feel that? Luck's warming up. Next pull might hit harder."],
        Misfortune: ["Rough one. Shake it off, then decide if you want another round."],
        'Great Misfortune': ["Oof. That's a harsh omen. Breathe first, then choose your next step."],
    },
    diluc: {
        'Great Fortune': ["A decisive result. If you're continuing, do so without hesitation."],
        'Good Fortune': ["Favorable enough. Maintain discipline and press your advantage."],
        'Modest Fortune': ["Average. No need for emotion; continue only if it serves your plan."],
        'Rising Fortune': ["Momentum is forming. Another attempt may be worthwhile."],
        Misfortune: ["Unfortunate. Reassess before you commit more resources."],
        'Great Misfortune': ["A severe warning. Reckless repetition would be unwise."],
    },
    jean: {
        'Great Fortune': ["That's wonderful news. If you keep going, I hope fortune stays with you."],
        'Good Fortune': ["A good sign. You're doing well, so trust your judgment."],
        'Modest Fortune': ["A quiet outcome, but still meaningful. Patience can carry you forward."],
        'Rising Fortune': ["I can sense improvement. Your next wish may turn out even better."],
        Misfortune: ["I'm sorry, that was difficult. Please don't be too hard on yourself."],
        'Great Misfortune': ["That must sting. If needed, take a short rest before trying again."],
    },
    keqing: {
        'Great Fortune': ["Excellent. Keep that efficiency and capitalize while odds are favorable."],
        'Good Fortune': ["Solid result. Stay focused and keep optimizing your choices."],
        'Modest Fortune': ["Mediocre, but acceptable. Don't let one result disrupt your pace."],
        'Rising Fortune': ["The trend is improving. Good timing can turn this into a win."],
        Misfortune: ["Suboptimal. Adjust, then continue with intent."],
        'Great Misfortune': ["That's a major setback. Proceed only if you've recalculated the risk."],
    },
    mona: {
        'Great Fortune': ["Ah, the stars finally align for you. A rare current, and very promising."],
        'Good Fortune': ["A pleasant convergence. Not perfect destiny, but certainly supportive."],
        'Modest Fortune': ["A muted reading. Fate is watching, but not yet committing."],
        'Rising Fortune': ["Interesting... your chart is shifting upward. Potential is gathering."],
        Misfortune: ["A troubled pattern. The heavens are withholding their favor for now."],
        'Great Misfortune': ["Yikes... that's a harsh celestial refusal. Even I would pause."],
    },
    qiqi: {
        'Great Fortune': ["Oh. That's very lucky. I think that's... good."],
        'Good Fortune': ["That looked nice. Maybe the next one will be nice too."],
        'Modest Fortune': ["It's okay. Not special... but okay."],
        'Rising Fortune': ["I think it's getting better. Slowly."],
        Misfortune: ["That wasn't good. Sorry."],
        'Great Misfortune': ["Oh... that's really bad. Maybe rest first."],
    },
    tighnari: {
        'Great Fortune': ["Strong signal. Your timing and instincts lined up well this round."],
        'Good Fortune': ["Healthy outcome. Keep observing patterns instead of forcing results."],
        'Modest Fortune': ["Neutral sample. Not enough data to celebrate or panic."],
        'Rising Fortune': ["Now that's interesting. The curve is trending in your favor."],
        Misfortune: ["Unfavorable data point. Don't overreact; adapt."],
        'Great Misfortune': ["That's a significant outlier in the wrong direction. Re-center before continuing."],
    },
    yumemizuki: {
        'Great Fortune': ["Mm... what a bright dream. The path ahead is glowing for you."],
        'Good Fortune': ["A gentle blessing. Keep following that feeling in your chest."],
        'Modest Fortune': ["A quiet ripple. Even soft dreams can guide the next step."],
        'Rising Fortune': ["There it is... the dream is waking. Keep going."],
        Misfortune: ["A heavy shadow crossed the dream. Be kind to yourself."],
        'Great Misfortune': ["That was a cold night vision. Wait for warmer winds before rushing on."],
    },
    xingqiu: {
        'Great Fortune': ["A splendid chapter! If this were a novel, we'd call this a turning point."],
        'Good Fortune': ["Quite favorable. The story still has momentum on your side."],
        'Modest Fortune': ["A calm page, neither triumphant nor tragic. We continue."],
        'Rising Fortune': ["Ah, foreshadowing of better things. Intriguing."],
        Misfortune: ["A dreary passage, admittedly. Still, every tale survives one."],
        'Great Misfortune': ["A dramatic setback! Perhaps an intermission before the next act?"],
    },
    bennett: {
        'Great Fortune': ["Whoa, nice! See? Sometimes my luck rubs off in a good way!"],
        'Good Fortune': ["Hey, that's good! You're doing great, keep it up!"],
        'Modest Fortune': ["Not amazing, but not a disaster either. That's still a win for me!"],
        'Rising Fortune': ["I can feel it! Things are turning around!"],
        Misfortune: ["Aw man, that one hurt. But we can bounce back!"],
        'Great Misfortune': ["Yikes... that's rough. Let's catch our breath before round two."],
    },
    sucrose: {
        'Great Fortune': ["Oh! That's... an excellent result. I should log this right away."],
        'Good Fortune': ["This is encouraging. The probability trend appears favorable."],
        'Modest Fortune': ["A moderate output. Still useful for continued observation."],
        'Rising Fortune': ["Interesting... values are climbing. I-I think this is a good sign."],
        Misfortune: ["That was unfortunate. Maybe we should proceed more carefully."],
        'Great Misfortune': ["Oh dear... a severe negative outcome. A short pause might help."],
    },
};