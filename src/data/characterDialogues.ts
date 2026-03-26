import { CharacterDialogueMap, FortuneHeader } from '../types';

export const fallbackCharacterDialogues: string[] = [
    "I feel honored you came to me. Let's see what the stars have to say about your choice.",
    "You've set your eyes on me. That's… flattering. Let's find out if it's also fortunate.",
    "You want me? That's interesting. I hope the outcome is worth the attention.",
    "So, you've chosen me. Let's see if your instincts lead you to a favorable result.",
];

export const fallbackFortuneFollowUpDialogues: string[] = [
    'The result is in. Decide your next step with care.',
    'Fortune has spoken for now. What you do next matters more.',
    'Take a breath and choose your next step on your own terms.',
    'One outcome never defines the whole path. Keep going if you want to.',
];

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
    skirk: [
        "You're reaching for something far beyond you… and yet, you chose me.",
        "…So you intend to find me. Then don't falter now.",
        "If you're searching for me, be certain you understand what that means.",
    ],
    escoffier: [
        "Ah… so I'm the one you've developed a taste for.",
        "You've chosen me? Then I hope your expectations are… refined.",
        "If you're seeking me out, I trust you know quality when you see it.",
    ],
    candace: [
        "You've come looking for me? Then you'll have my attention.",
        "If it's me you seek, I won't turn away from that.",
        "You've made your choice clear. I respect that.",
    ],
    charlotte: [
        "Oh! You're going after me? This just got interesting!",
        "Aiming for me, huh? I should take notes on this!",
        "Wait—this is about me? Oh, I love where this is going!",
    ],
    dahlia: [
        "You're looking for me…? That's… a little surprising.",
        "If it's me you want, then I hope things turn out gently for you.",
        "You chose me… I'll remember that.",
    ],
    eula: [
        "Oh? You're putting your fate in my hands? Very well… but don't expect me to go easy on you.",
        "So you've chosen me to judge your fortunes? Hmph. I hope you're prepared for the outcome.",
        "You dare entrust your luck to me? Fine. Just remember—you asked for this, not me.",
    ],
    nefer: [
        "An invitation to join you? Intriguing… You must be quite confident to summon my attention like this.",
        "You call upon me for guidance? How curious… I wonder what you hope to find in the answers I give.",
        "So, you seek a glimpse of what lies ahead… Very well. Let's see if your curiosity is rewarded."
    ],
    furina: [
        "Wuhahaha! You dare summon one as exalted as I? Very well—I shall grace you with my presence.",
        "Ah, you wish to tempt fate with me? How bold. Come, take my hand… let's see where this leads.",
        "To seek judgment from the Hydro Archon herself? Hehe… I do hope you're entertaining."
    ],
    clorinde: [
        "You're asking me to weigh your chances? Very well. Just know—I don't deal in false hope.",
        "So you've chosen me to assess your odds. Stay composed… the result will speak for itself.",
        "You want my judgment? Fine. But understand—once you see the outcome, there's no turning back."
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
    skirk: {
        'Great Fortune': ["…You've caught the current. Don't lose your grip now."],
        'Good Fortune': ["The path opens. Whether you can follow it… remains to be seen."],
        'Modest Fortune': ["…Unclear. Then you'll have to rely on yourself."],
        'Rising Fortune': ["It's shifting in your favor. Slowly… but enough."],
        Misfortune: ["You're out of step with it. Adjust, or be left behind."],
        'Great Misfortune': ["…Even now, you persist. Hm. Interesting."],
    },
    escoffier: {
        'Great Fortune': ["Exquisite timing. I couldn't have arranged it better myself."],
        'Good Fortune': ["A pleasant result. You've chosen well."],
        'Modest Fortune': ["Acceptable… though I suspect you were hoping for more."],
        'Rising Fortune': ["It improves. Patience often enhances the outcome."],
        Misfortune: ["Unfortunate… though not beyond remedy."],
        'Great Misfortune': ["…A disappointing course. You may wish to reconsider your timing."],
    },
    candace: {
        'Great Fortune': ["Good. The path is clear for you."],
        'Good Fortune': ["Things are in your favor. Go forward with confidence."],
        'Modest Fortune': ["Not certain… but not hopeless either."],
        'Rising Fortune': ["It will improve. Stay steady."],
        Misfortune: ["…Then tread carefully. Not all paths are safe."],
        'Great Misfortune': ["You may want to wait. Even strength has its moments."],
    },
    charlotte: {
        'Great Fortune': ["Wow, that's headline-worthy luck! I'd call that a success!"],
        'Good Fortune': ["Not bad at all! That's a story I'd follow!"],
        'Modest Fortune': ["Hmm… could go either way. Still worth watching!"],
        'Rising Fortune': ["Ooh, it's getting better! I'd stick with this!"],
        Misfortune: ["Ah… not the best outcome. But hey, every story has setbacks!"],
        'Great Misfortune': ["Yikes… that's rough. Even I wouldn't spin that as good news."],
    },
    dahlia: {
        'Great Fortune': ["Oh… that's wonderful. I'm really glad."],
        'Good Fortune': ["That looks promising… I think it will be okay."],
        'Modest Fortune': ["…It's uncertain. But that doesn't mean it's bad."],
        'Rising Fortune': ["It's getting better. Just a little more."],
        Misfortune: ["…I'm sorry. I wish it had been kinder."],
        'Great Misfortune': ["…That's difficult. But I don't think it will stay that way forever."],
    },
    il_dottore: {
        'Great Fortune': ["How unexpected. It seems the odds are… momentarily in your favor. Do try not to waste such a rare anomaly."],
        'Good Fortune': ["Hmm. A favorable outcome. Not perfect—but promising enough to proceed."],
        'Modest Fortune': ["Mediocre. But mediocrity has its uses… if handled correctly."],
        'Rising Fortune': ["Interesting. The trajectory is improving. Whether you can keep up… remains to be seen."],
        Misfortune: ["…Unfortunate. Though failure often provides more valuable data than success."],
        'Great Misfortune': ["…Ah. Now this is where things become truly interesting. Go on. I'm curious to see how you handle the consequences."],
    },
    eula: { 
        'Great Fortune': ["Oh? A result like this… impressive. Don't misunderstand—I'm not praising you. I'm simply acknowledging it."], 
        'Good Fortune': ["Hmph. A decent outcome. You've managed well enough… though I wouldn't get too comfortable if I were you."], 
        'Modest Fortune': ["…This is acceptable, I suppose. Not remarkable, but not entirely disappointing either. I'll allow it."], 
        'Rising Fortune': ["I can see some improvement. Keep this up, and perhaps I'll have to reconsider my expectations of you."], 
        Misfortune: ["…Is this truly the best you could do? Unacceptable. Don't think I'll simply overlook a result like this."], 
        'Great Misfortune': ["…You've really outdone yourself this time. Don't worry—I won't forget this. I'll have my vengeance."], 
    },
    nefer: {
        'Great Fortune': ["…How delightful. Fortune clearly favors you today. I suppose even I can't deny such a promising outcome."],
        'Good Fortune': ["A pleasant result. It seems your timing is… acceptable. I'd say you may proceed without regret."],
        'Modest Fortune': ["Not extraordinary, but not without merit. If you act wisely, this could still turn in your favor."],
        'Rising Fortune': ["Ah… I can feel it shifting. Your luck hasn't settled yet—but it may bloom into something worthwhile."],
        Misfortune: ["…Unfortunate. The currents don't align in your favor today. You may wish to reconsider your approach."],
        'Great Misfortune': ["Oh dear… even I find this outcome difficult to defend. Perhaps restraint would serve you better—for now."],
    },
    furina: {
        'Great Fortune': ["Magnificent! Just as I expected—such brilliance could only unfold under my exquisite guidance!"],
        'Good Fortune': ["A pleasing result! Not quite perfection, but with me involved, how could it be anything less?"],
        'Modest Fortune': ["Hmm… acceptable, I suppose. Even the grandest performances have their quieter moments."],
        'Rising Fortune': ["Ah! The tension builds—how thrilling! Your fortune rises, just like the climax of a perfect act!"],
        Misfortune: ["Oh dear… a stumble in the script. Fear not! Even tragedy can be beautiful in the right light."],
        'Great Misfortune': ["W-What!? This outcome is… utterly unacceptable! No, no—this must be rewritten at once!"],
    },
    clorinde: {
        'Great Fortune': ["A decisive result. Everything aligns in your favor. If you act now, I see no reason for hesitation." ],
        'Good Fortune': ["Your chances are solid. Not flawless, but strong enough. Proceed if you trust your own resolve."  ],
        'Modest Fortune': ["…Balanced. Not an advantage, but not a loss either. What happens next depends entirely on you." ],
        'Rising Fortune': ["I can see momentum building. It's not guaranteed—but with the right timing, this could turn."   ],
        Misfortune: ["The odds are against you. I'd advise restraint… unless you're willing to accept the consequences."    ],
        'Great Misfortune': ["…A poor outcome. If you proceed regardless, do so knowingly. I won't stop you—but I won't advise it." ],
    },
};