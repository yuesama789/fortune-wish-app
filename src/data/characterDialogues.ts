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
        "Let us pray together. I hope the answer you receive is a good one.",
        "I knew you'd come to me eventually. I included you in my morning prayers.",
        "Thank Barbatos you came to find me. I was hoping for you to come to find me.",
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
    xiangling: [
        "Oh! You're going for me? That's so cool! I hope you get something deliciously good!",
        "You want me to join you? That's awesome! I hope you get a super spicy result!",
        "Wait, you're hoping for me? That's amazing! I hope you get something extra tasty!",
    ],
    razor: [
        "You smell… *sniff* nice! We can hunt! Together!",
        "You watch stars? I watch the moon. Maybe we can watch together?",
        "You like me? I like you too! Maybe stars will like you too!",
    ],
    noelle: [
        "M-Me? You'd choose me…? I— I'll do my best! If it's what you truly want, I won't disappoint you!",
        "Oh! You… want me? I didn't expect that… b-but I'm really happy! I'll give this everything I have!",
        "You're asking for me…? I— I hope I'm worthy of that. Still, I'll try my hardest for you!"
    ],
    ningguang: [
        "You've set your sights on me? How bold… I wonder—do you understand what you're asking for?",
        "So, you wish to choose me? Hm… an interesting decision. I do hope you can keep up.",
        "You're reaching for me? Ambitious. I'll indulge you—for now. Let's see where this leads."
    ],
    lisa: [
        "My, my… you've chosen me? How adorable. Come here, sweetheart — let's see what you're hoping for~",
        "Oh? You want little old me? Hehe… how bold of you. I suppose I can indulge that curiosity~",
        "Ah~ you're reaching for me? Careful now… I might just take a liking to that kind of attention~"
    ],
    kaeya: [
        "Oh? You've got your eye on me? Careful now… I'm not as easy to win over as you might think.",
        "You want me, hm? I have to admit, you've got taste. Let's see if your luck matches your boldness.",
        "Choosing me? Heh… I like that confidence. Just don't blame me if things get interesting."
    ],
    fischl: [
        "So, thou has chosen the Prinzessin der Verurteilung? Very well — thy fate shall be unveiled before thee!",
        "Oh? Thou seekest me? Then know this — our meeting is no mere chance, but a thread woven by destiny!",
        "Thou darest call upon mine name? Hehe… let the stars bear witness to the choice thou has made!"
    ],
    rosaria: [
        "Bravery is knowing it will hurt and doing it anyway. Stupidity is the same. Let's see where you fall.",
        "You came all this way just to chase me? Fine. Just don't expect me to make it easy on you.",
        "If you're serious about this, then stop hesitating. I don't have time for second thoughts."
    ],
    layla: [
        "Huh—me? You… chose me? I mean, I'm not complaining, just… wasn't expecting that much attention…",
        "I-I was just resting my eyes…! But if you're here for me, then… I guess I should try to stay awake…",
        "Huh? Why are you looking at me like that? Oh no, did I doze off at my desk again?"
    ],
    kuki_shinobu: [
        "I manage a crime syndicate, maintain good relations with law enforcement, and I'm qualified in more fields than you have fingers. I hope you'll be bringing something to the table.",
        "If you're aiming for me, at least be efficient about it. I don't have time to babysit bad decisions.",
        "You've got your eye on me? …Huh. I usually handle other people's problems, not become one. This'll be new."
    ],
    iansan: [
        "You picked me? Nice. Just don't expect a free win—I only stick with people who actually try.",
        "If you're going for me, we're doing this properly. No shortcuts, no excuses. You in?",
        "Just 'cause I deadlift, don't think I enjoy carrying dead weight. If you want this, you gotta work for it."
    ],
    mika: [
        "Ah—y-you chose me? I'll do my best…! I mean—if you really want me on your team, I won't mess this up…",
        "U-Um… if this is about choosing me… I've prepared notes! I just—uh—hope they're useful to you…",
        "Sorry… I get kind of nervous when everyone's looking at me. But I won't let you down. How favorable are the conditions looking?"
    ],
    mavuika: [
        "So—you've got your eyes on me? Good. I was starting to wonder if you had any fire in you at all.",
        "They say fortune favors the bold. So tell me… what are you waiting for? If you want me, then go get me.",
        "Hah. You chose me? Then don't hold back. I don't follow half-hearted attempts."
    ],
    yelan: [
        "So, you're betting on me? Bold choice. Just make sure you're ready to handle what comes with it.",
        "Careful… once you set your sights on me, there's no easy way out. Still want to play?",
        "Roll the dice, take a spin of the wheel. Luck or skill, it's all on you now."
    ],
    raiden_shogun: [
        "You set your sights on me? Then understand this—fleeting desire means nothing. Only resolve endures.",
        "So… you would pursue eternity itself. Bold. Tell me, is your will strong enough to follow through?",
        "You approach me without hesitation. Hm. Confidence is admirable… but it must be matched with discipline."
    ],
    kaedehara_kazuha: [
        "The wind carries your intent to me… So, it is I you seek. Tell me, will you follow where it leads?",
        "You chose me? Then stay close… the wind may guide you, but I would rather watch where you wander.",
        "Hm… your presence stirs the air around me. If you come closer, I won't turn you away."
    ],
    zhongli: [
        "You chose me… deliberately. Then I assume you understand the value of what you seek—and the cost that follows.",
        "To set your sights on me is no small matter. Tell me… is this a passing interest, or something more enduring?",
        "Hm. Your attention lingers on me. If you intend to proceed, I would advise you not to do so half-heartedly."
    ],
    wanderer: [
        "You chose me? …You really do have questionable taste. Or maybe you just enjoy making things difficult.",
        "Hah. Of all the options, you went with me. Don't expect me to play nice just because you're interested.",
        "So you're after me? Fine. Just don't start whining when you realize I'm not as easy as you hoped."
    ],
    xiao: [
        "You chose me… even knowing what I am. You're either reckless… or far too persistent.",
        "If you continue to seek me… don't expect me to turn you away so easily.",
        "...You're still here. Hm. Then stay—just don't expect me to make this easy for you."
    ],
    neuvillette: [
        "You have chosen me… I see. Then this is not a passing curiosity, but a decision you have considered carefully.",
        "To seek me out carries weight. Tell me… do you understand what it is you are reaching toward?",
        "Hm… your gaze lingers. If you intend to approach, do so with sincerity. I have little patience for anything less."
    ],
    hu_tao: [
        "Hehe~ you picked me? Are you feeling lucky… or just curious what happens if you get too close?",
        "Oho~ aiming for me? Careful now, I come with a discount… but only if you stick around long enough~",
        "You chose me? Hehe, bold move! Don't worry, I'll make this fun—whether it goes well… or not~"
    ],
    tartaglia: [
        "Oh? You picked me? Heh, you've got guts—I like that. Let's see how far you can keep up.",
        "So you're aiming for me? Careful now, this won't be a safe game… but that's what makes it fun, right?",
        "Hah! Out of everyone, you chose me? Guess you're not afraid of a little challenge. Good."
    ],
    alhaitham: [
        "You chose me? Hm… not the most efficient decision. And yet, I can't say I mind having your attention.",
        "Out of all available options, you settled on me. Was that deliberate… or did something pull you in?",
        "If your intention is to reach me, be precise. I don't respond to guesswork… but I do notice consistency."
    ],
    columbina: [
        "Ah… you chose me. I wondered how long it would take before your gaze found its way here…",
        "You're looking at me so carefully… did you think I wouldn't notice? I've been watching you too…",
        "Hm… such a quiet wish, and yet it reached me. Tell me… do you always long this openly?"
    ],
    lyney: [
        "Oh? You chose me? Then allow me to give you a proper show—after all, I never disappoint my favorite audience.",
        "My, aiming for me already? Careful now, once the curtain rises, there's no looking away…",
        "Hehe, you've got good taste. If you're hoping to win me over, I might just make it worth your while."
    ],
    lynette: [
        "You chose me. …I see. If you're expecting a reaction, you might be disappointed.",
        "Hm. You're focusing on me. That's fine… just don't expect me to make a big deal out of it.",
        "If you're planning to get closer, go ahead. I won't stop you… as long as you don't waste my time."
    ],
    freminet: [
        "Ah… y-you chose me? I'm not really used to that… but I'll try my best, if you really want me here…",
        "Oh… it's me? I thought you might pick someone else… but… I'm glad you didn't.",
        "If you're sure about this… I'll stay. Just… don't expect me to be very good at this kind of thing…"
    ],
    arlecchino: [
        "You chose me. Hm. Either you're very confident… or you don't fully understand what you're asking for.",
        "So, you've set your sights on me. Tell me—are you prepared to face the consequences of that choice?",
        "You're reaching for me without hesitation. Good. I have no interest in those who waver."
    ],
    linnea: [
        "Oh! You picked me? That's so exciting—do you have a hypothesis, or are we experimenting blindly?",
        "You chose me? Wait, give me a second—I should document this properly…! Oh—right, focus. I'm ready!",
        "Hm! Interesting choice! I've been meaning to observe you more closely anyway… for research, of course!"
    ],
    chasca: [
        "You picked me? Heh—hope you're not expecting me to sit still for you. You'll have to keep up.",
        "So you're chasing me? Careful—I don't slow down just because someone's interested.",
        "Hm? Me? You've got good instincts… or maybe you just like a challenge. Either way, I'm curious now."
    ],
    lauma: [
        "Oh… you chose me? How curious. It feels less like chance… and more like something gently guiding you here.",
        "You found your way to me. Was it intention… or did something quieter lead your steps?",
        "Hm… you're reaching out so openly. I wonder… is it me you seek, or the calm that follows?"
    ],
    emilie: [
        "Ah… you've chosen me. Was it the scent of curiosity… or something more subtle that drew you in?",
        "You're focusing on me? How intriguing. Most people don't notice the details that lead them here.",
        "Hm… I wonder—are you aware of why you chose me? Or shall I uncover that for you?"
    ],
    navia: [
        "You picked me? Well now, that's a lovely surprise. I do hope you're ready to follow through, darling.",
        "Oh? Setting your sights on me? I like your confidence—don't lose it halfway, alright?",
        "Hah, aiming for me? Then let's make this worth it. I don't do things halfway, and neither should you."
    ],
    sigewinne: [
        "Oh! You picked me? Are you feeling alright? No dizziness, no racing heart? …Oh—maybe just a little~",
        "Hehe, you chose me! I'll take good care of you, don't worry. Just… try not to overdo it, okay?",
        "Oh my, focusing on me? That's sweet… I'll make sure everything goes nice and smoothly for you."
    ],
    wriothesley: [
        "So, you've got your eye on me. Bold move. Most people don't walk into my office this willingly.",
        "Hm? You chose me? Careful now—you might end up staying longer than you planned.",
        "You came looking for me? Then sit down, have some tea, and let's see if you can handle what follows."
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
        'Rising Fortune': ["Interesting… your chart is shifting upward. Potential is gathering."],
        Misfortune: ["A troubled pattern. The heavens are withholding their favor for now."],
        'Great Misfortune': ["Yikes… that's a harsh celestial refusal. Even I would pause."],
    },
    qiqi: {
        'Great Fortune': ["Oh. That's very lucky. I think that's… good."],
        'Good Fortune': ["That looked nice. Maybe the next one will be nice too."],
        'Modest Fortune': ["It's okay. Not special… but okay."],
        'Rising Fortune': ["I think it's getting better. Slowly."],
        Misfortune: ["That wasn't good. Sorry."],
        'Great Misfortune': ["Oh… that's really bad. Maybe rest first."],
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
        'Great Fortune': ["Mm… what a bright dream. The path ahead is glowing for you."],
        'Good Fortune': ["A gentle blessing. Keep following that feeling in your chest."],
        'Modest Fortune': ["A quiet ripple. Even soft dreams can guide the next step."],
        'Rising Fortune': ["There it is… the dream is waking. Keep going."],
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
        'Great Misfortune': ["Yikes… that's rough. Let's catch our breath before round two."],
    },
    sucrose: {
        'Great Fortune': ["Oh! That's… an excellent result. I should log this right away."],
        'Good Fortune': ["This is encouraging. The probability trend appears favorable."],
        'Modest Fortune': ["A moderate output. Still useful for continued observation."],
        'Rising Fortune': ["Interesting… values are climbing. I-I think this is a good sign."],
        Misfortune: ["That was unfortunate. Maybe we should proceed more carefully."],
        'Great Misfortune': ["Oh dear… a severe negative outcome. A short pause might help."],
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
        'Great Fortune': ["Lord Barbatos answers! This is a blessing. Now go forth with hope."],
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
    xiangling: {
        'Great Fortune': ["Wow, that's amazing! I'll cook something special to celebrate!"],
        'Good Fortune': ["Yay! That's really good! I hope you get something extra tasty!"],
        'Modest Fortune': ["Not bad! I hope the next one is even better!"],
        'Rising Fortune': ["Ooh, it's getting better! I can feel it!"],
        Misfortune: ["Aw, that's not so good. But don't worry! You can try again!"],
        'Great Misfortune': ["Yikes… that's really bad. Maybe take a break and come back hungry!"],
    },
    razor: {
        'Great Fortune': ["Wow, that is great! You must hunt when you are lucky! I share meat with you."],
        'Good Fortune': ["That's good! Stars are smiling on you! We can have fun together!"],
        'Modest Fortune': ["Not bad! I'll watch your back! We can keep trying together!"],
        'Rising Fortune': ["It's getting better! We can keep trying together!"],
        Misfortune: ["Oh no, that's not good. But we can try again together!"],
        'Great Misfortune': ["Hmm… that's really bad. Maybe we should rest and try again later!"],
    },
    noelle: {
        'Great Fortune': ["Ah… this is wonderful! If you truly want me… then I'll stay by your side and do everything I can!"],
        'Good Fortune': ["This looks promising! I'll… I'll do my best to live up to what you're hoping for, I promise!"],
        'Modest Fortune': ["It's not perfect… but if you're willing, I'll keep trying! I won't let your choice be a mistake!"],
        'Rising Fortune': ["It's getting better…! If you stay with me, I'll make sure things continue to improve, step by step!"],
        Misfortune: ["Oh… I'm sorry… this isn't what you hoped for, is it? But I won't give up if you still believe in me!"],
        'Great Misfortune': ["I… I'm really sorry… If you regret choosing me, I understand… but I'll still try to do better!"],
    },
    ningguang: {
        'Great Fortune': ["Impressive. A result worthy of such ambition. If you truly desire me, I see no reason to hold back."],
        'Good Fortune': ["A favorable outcome. You may proceed—with confidence. I'll be watching how you handle it."],
        'Modest Fortune': ["Acceptable. Not quite what I'd call remarkable, but… with effort, you may yet earn something more."],
        'Rising Fortune': ["I can see potential forming. Continue like this, and perhaps your choice will prove worthwhile."],
        Misfortune: ["Unfortunate. It seems your reach exceeds your grasp… for now. You may wish to reconsider."],
        'Great Misfortune': ["…How disappointing. If you intend to pursue me regardless, you'll need far better judgment than this."],
    },
    lisa: {
        'Great Fortune': ["How wonderful~ such a lovely outcome. If you want me, darling, I see no reason to keep you waiting~"],
        'Good Fortune': ["Mhm~ not bad at all. Looks like you've made a rather good choice… I might just reward that~"],
        'Modest Fortune': ["Oh? Not quite perfect… but still tempting. If you're patient, I could make it worth your while~"],
        'Rising Fortune': ["Hehe~ I like where this is going. Stay close, and your luck might improve in very interesting ways~"],
        Misfortune: ["My… that's a shame. Still, if you insist on wanting me, I won't be too hard on you~"],
        'Great Misfortune': ["Oh my… how unfortunate. And yet, here you are, still reaching for me. How very charming~"],
    },
    kaeya: {
        'Great Fortune': ["Well now… looks like luck's on your side. If you're coming for me, I'd say this is your moment."],
        'Good Fortune': ["Not bad at all. You might just pull this off… though I wouldn't get too comfortable just yet."],
        'Modest Fortune': ["Hm… could go either way. Then again, where's the fun if things are too certain, right?"],
        'Rising Fortune': ["I see potential here. Stick with it, and you might find yourself getting exactly what you want."],
        Misfortune: ["Ouch… that's rough. Still thinking of going after me? I admire the determination."],
        'Great Misfortune': ["…Now that's unfortunate. But if you're still set on me, I won't stop you. Could be entertaining."],
    },
    fischl: {
        'Great Fortune': ["Rejoice! The stars align in thy favor! Such fortune could only be granted to one most worthy!"],
        'Good Fortune': ["A pleasing omen! The heavens smile upon thee — proceed, and claim what destiny has prepared!"],
        'Modest Fortune': ["Hmm… neither glory nor ruin awaits. Tread carefully, and thou may yet shape thine own fate!"],
        'Rising Fortune': ["Behold! The tides of fate shift in thy favor — continue forth, and seize what is soon to be thine!"],
        Misfortune: ["Alas… the stars waver, and shadows gather. Yet fear not — fate may still bend to thy will!"],
        'Great Misfortune': ["Woe! A dire omen has been cast! Yet even now, thou standest defiant… how delightfully tragic!"],
    },
    rosaria: {
        'Great Fortune': ["If you're sure about this, then let's get it done. I have three Fatui agents and a hangover waiting."],
        'Good Fortune': ["Looks like things might go your way. Don't overthink it — just get it done before luck changes its mind."],
        'Modest Fortune': ["I hope you know what you're doing. This could go either way… and I won't be there to clean it up."],
        'Rising Fortune': ["Not great, not terrible. If you're patient, maybe it'll turn around. Or not. Your call."],
        Misfortune: ["I hope you know what you're doing. This isn't looking good — but I doubt that'll stop you anyway."],
        'Great Misfortune': ["That's too bad. All you can do now is pick yourself up and keep going. The alternative is worse."],
    },
    layla: {
        'Great Fortune': ["Oh… oh! This alignment is incredibly precise… It's like the stars are guiding you straight to me…"],
        'Good Fortune': ["Y-you asked the stars and they answered? Just like that?? All my charts and… Would you mind h-helping with my thesis?"],
        'Modest Fortune': ["Hm… not perfect, but not bad either. Sometimes when I get stuck, I try it again with more coffee."],
        'Rising Fortune': ["Wait… this is changing… slowly, but surely. If you keep going like this, the outcome might surprise both of us."],
        Misfortune: ["Ah… this pattern is a bit unstable. It doesn't mean you'll fail, just… maybe don't push yourself too hard today."],
        'Great Misfortune': ["O-oh… this alignment is… really harsh. B-but that doesn't mean it's over! Even the stars can shift… eventually…"]
    },
    kuki_shinobu: {
        'Great Fortune': [ "Nice job, you pulled it off. Ok, if my boss sees us and gets jealous, you might need to fight him a bit. Just, you know - go for his head, he'll learn eventually." ],
        'Good Fortune': [ "Not bad. You're making steady progress toward me. Keep it up, and I won't have to step in myself." ],
        'Modest Fortune': [ "Average results. You're getting closer, just… slower than I'd recommend. If you need a hand, let me know, I'll help you get certified." ],
        'Rising Fortune': [ "I see improvement. Took you long enough. Stay consistent, and you might actually reach me." ],
        Misfortune: [ "That's a setback. Nothing critical, but you'll need to adjust if you still plan on getting to me." ],
        'Great Misfortune': [ "…You really made this difficult for yourself. If you still want me, start thinking more carefully next time." ]
    },
    iansan: {
        'Great Fortune': ["Yes! That's what I'm talking about! Back of the net! Home run, gold medal. What record are we gonna smash next?"],
        'Good Fortune': ["Solid result! You're getting stronger, I can see it. Keep pushing like this and you'll hit your goal."],
        'Modest Fortune': ["Pace yourself. You can do this. You've got the basics down, just need more consistency. Stick with it—you're getting there."],
        'Rising Fortune': ["Hey, that's improvement! Bit by bit, you're building something. Don't stop now, okay?"],
        Misfortune: ["Alright, rough round. Happens to everyone. Shake it off—we'll adjust and try again."],
        'Great Misfortune': ["Ok, these things happen, don't sweat it. Next time, give me a few weeks' notice, I'll get a meal plan and training regimen in place for you."]
    },
    mika: {
        'Great Fortune': ["You did it! Thank you for trusting me, I'm excited to be included in your expedition. When do we launch?"],
        'Good Fortune': ["These conditions are really favorable! If we stay on track, I think we'll do great together…"],
        'Modest Fortune': ["Just keep putting one foot in front of the other. If we're careful, we can definitely make this succeed…"],
        'Rising Fortune': ["O-oh! It's improving… slowly, but surely! If we keep going like this, we might actually pull it off…"],
        Misfortune: ["Ah… this might be a bit tricky… b-but don't worry! I'll help however I can, okay?"],
        'Great Misfortune': ["U-Um… I think we might be lost? B-but it's okay! I'll find us a better route…!"]
    },
    mavuika: {
        'Great Fortune': [  "Now that's what I'm talking about! Let's crack open a keg or two and celebrate your victory. We ride at dawn."],
        'Good Fortune': [   "Now that's a strong flame. Steady, reliable… I like that. Keep pushing, and you'll get exactly what you're after."    ],
        'Modest Fortune': [ "Keep it together. We can't back out now. Stoke that fire a little more, and we'll see where it goes."  ],
        'Rising Fortune': [ "There it is… I can see it growing. Keep feeding that flame, and you might just reach me sooner than you think." ],
        Misfortune: [   "That flame's flickering. Don't let it die out now—you're not done yet, not even close."  ],
        'Great Misfortune': [   "Even the brightest blaze ends with only ashes… But if you've still got the will to burn, then get back up and prove it."  ]
    },
    yelan: {
        'Great Fortune': ["Congratulations, that was a nice move. Time to enjoy the fruit of your labours. And yes, you may buy me a drink."],
        'Good Fortune': ["Not bad at all. You're playing your hand well. Keep this up, and you'll get exactly what you're aiming for."],
        'Modest Fortune': ["You're playing this one pretty close to the wire. It's going to be tight."],
        'Rising Fortune': ["Oh? Now that's interesting… the odds are shifting. Let's see if you know how to take advantage of it."],
        Misfortune: ["Mm… unlucky. But not fatal. If you're smart, you'll learn from it—and try again with better odds."],
        'Great Misfortune': ["…Looks like the table's turned against you. Still, I wouldn't fold just yet—games like this aren't over so easily."]
    },
    raiden_shogun: {
        'Great Fortune': ["Your resolve is clear. The path before you does not waver… Very well. I will acknowledge your ambition."],
        'Good Fortune': ["You proceed with stability. Not flawless, but sufficient. Continue, and you may yet reach me."],
        'Modest Fortune': ["Your steps lack certainty. If you intend to stand before me, refine your purpose."],
        'Rising Fortune': ["I see change within you. Your resolve strengthens… Do not allow it to falter now."],
        Misfortune: ["Your will is unsettled. Such instability cannot endure. Regain your focus, then return."],
        'Great Misfortune': ["...This path collapses before it begins. If you still seek me, cast aside doubt and start anew."]
    },
    kaedehara_kazuha: {
        'Great Fortune': ["The wind settles gently between us… as if it wishes to keep you by my side. I find I don't mind that at all."],
        'Good Fortune': ["A pleasant breeze follows you… warm, steady. If you keep walking this path, you may find me waiting."],
        'Modest Fortune': ["The wind lingers, uncertain… yet it does not leave. Perhaps it, too, is curious how close you'll come."],
        'Rising Fortune': ["Ah… the current shifts toward me. If you continue like this, I may not be the only one being drawn in."],
        Misfortune: ["The wind drifts away for now… but not far. If you listen closely, you may still find your way back to me."],
        'Great Misfortune': ["...Even when the wind falls silent, I can still feel your presence. Perhaps… we are not so far apart after all."]
    },
    zhongli: {
        'Great Fortune': ["Everything aligns without resistance… how rare. It seems your intentions have been… most well received."],
        'Good Fortune': ["A favorable arrangement. With consistency, you may find yourself exactly where you intend to be—by my side."],
        'Modest Fortune': ["Not without fault… yet not without promise. Should you remain persistent, this may still develop… interestingly."],
        'Rising Fortune': ["I see your efforts taking shape. Slowly, but with purpose… such dedication is not without its appeal."],
        Misfortune: ["An imbalance has appeared. It would be unwise to ignore it… though I suspect you are capable of correcting it."],
        'Great Misfortune': ["...This path fails to hold. And yet… if your resolve is genuine, I would not dismiss the possibility of trying again."]
    },
    wanderer: {
        'Great Fortune': ["...Well, look at that. You actually pulled it off. I almost didn't think you had it in you."],
        'Good Fortune': ["Not bad. You're doing better than I expected. Don't get cocky—you're not there yet."],
        'Modest Fortune': ["Tch. Barely passable. If this is your best, you're going to have a hard time keeping up with me."],
        'Rising Fortune': ["Hm… you're improving. Slowly. I suppose that's something… try not to ruin it now."],
        Misfortune: ["That was sloppy. If you're serious about this, you'll need to do a lot better than that."],
        'Great Misfortune': ["...Pathetic. And yet, here you are, still trying. I'll admit… that persistence is almost interesting."]
    },
    xiao: {
        'Great Fortune': ["...You've reached me. Even I cannot deny it now. If you insist on staying… I won't send you away."],
        'Good Fortune': ["You draw closer… I can feel it. Just don't stop now. I… would notice."],
        'Modest Fortune': ["You're near… but not quite here. If you hesitate now, you may lose what you've gained."],
        'Rising Fortune': ["...You persist. No matter how I pull away, you follow. I don't… dislike that."],
        Misfortune: ["You're drifting too far. If you lose your way… I won't be able to reach you."],
        'Great Misfortune': ["...If you turn away now… I won't stop you. But… I will remember that you came this far."]
    },
    neuvillette: {
        'Great Fortune': ["...The currents are clear, undisturbed. It seems your path leads directly to me… without resistance."],
        'Good Fortune': ["The flow remains steady. If you continue as you are, you will find yourself exactly where you intend to be."],
        'Modest Fortune': ["There is some turbulence… yet nothing insurmountable. With care, you may still reach your destination."],
        'Rising Fortune': ["I sense a shift in the tide. Subtle, but undeniable… you are drawing closer."],
        Misfortune: ["The waters are unsettled. If you proceed without thought, you risk losing your way entirely."],
        'Great Misfortune': ["...The current rejects this path. And yet… if your resolve is genuine, even this may be overcome in time."]
    },
    hu_tao: {
        'Great Fortune': ["Waaah~ jackpot! Looks like fate wants us together! Hehe, you're not getting rid of me that easily now~"],
        'Good Fortune': ["Not bad, not bad! Things are looking pretty lively~ Stick with me and I'll make sure it stays interesting!"],
        'Modest Fortune': ["Hehe~ not amazing, but not tragic either. Guess you'll have to try a little harder to win me over~"],
        'Rising Fortune': ["Ooooh~ it's getting better! I like where this is going… don't stop now, okay?"],
        Misfortune: ["Aww~ that didn't go so well, huh? Don't look so down! I can still keep you company~"],
        'Great Misfortune': ["Ehehe… wow, that was rough! But hey, even in the worst cases, I'm great at handling… aftercare~"]
    },
    tartaglia: {
        'Great Fortune': ["Now that's what I'm talking about! You've got skill—and luck to match. I might actually enjoy sticking with you."],
        'Good Fortune': ["Nice! You're holding your own pretty well. Keep this up, and you might just win me over."],
        'Modest Fortune': ["Not bad… but don't slow down now. I'm not the kind of opponent you can afford to underestimate."],
        'Rising Fortune': ["Heh, I see it—you're getting better. This is starting to get interesting. Don't disappoint me now."],
        Misfortune: ["Oof, slipped up there. Don't worry, happens to the best of us. Just don't make it a habit, yeah?"],
        'Great Misfortune': ["...That was rough. But hey, if you're still standing, then the fight's not over. Show me what you've got next."]
    },
    alhaitham: {
        'Great Fortune': ["Optimal outcome. Your approach was calculated, effective… and unexpectedly persistent. I suppose I'll indulge this result."],
        'Good Fortune': ["Above average. You're closing the gap—slowly, but with intent. I've started to take a particular interest in your progress."],
        'Modest Fortune': ["Acceptable. Not efficient, but not without merit. You're still within range… which is more than most can manage."],
        'Rising Fortune': ["I see adjustment in your method. You're learning… adapting. That level of focus is… more compelling than I expected."],
        Misfortune: ["A flawed approach. Still, you haven't withdrawn. Persistence without efficiency is inefficient… but not entirely without value."],
        'Great Misfortune': ["...Inefficient across all variables. And yet, you remain. Hm. I'll admit—that alone makes this worth continuing to observe."]
    },
    columbina: {
        'Great Fortune': ["Oh… how lovely. Everything bends so gently toward you. It seems even fate wishes to place you in my hands…"],
        'Good Fortune': ["Such a soft current… it carries you closer without resistance. I can feel you nearing already…"],
        'Modest Fortune': ["Hm… not quite perfect, but not broken either. You're still within reach… if you don't lose your way…"],
        'Rising Fortune': ["Ah… it's changing. Slowly, sweetly… you're being drawn in. I wonder how close you'll dare to come…"],
        Misfortune: ["Oh… something slipped. How unfortunate… but you're still here, aren't you? That's all that matters for now…"],
        'Great Misfortune': ["...How fragile. It falls apart so easily. And yet… you're still reaching for me. I find that… endearing."]
    },
    lyney: {
        'Great Fortune': ["And voilà~ a perfect outcome! Looks like the spotlight's on us now. Tell me… are you ready for an encore?"],
        'Good Fortune': ["A lovely result! Not quite my grand finale, but enough to keep things interesting between us, don't you think?"],
        'Modest Fortune': ["Hm~ a modest trick. Not my best performance… but I do enjoy an audience that keeps trying."],
        'Rising Fortune': ["Oh? Now that's intriguing. The act is getting better… keep watching closely, you might catch something special."],
        Misfortune: ["Ouch~ a little mishap. Don't worry, every good magician knows how to recover from a slip like that."],
        'Great Misfortune': ["Ah… a failed trick. How unfortunate. But don't leave just yet—the next act might be far more… captivating."]
    },
    lynette: {
        'Great Fortune': ["...That worked out well. If this was your intention, then… you've done enough to keep my attention."],
        'Good Fortune': ["Not bad. You're making steady progress. I don't mind seeing where this leads."],
        'Modest Fortune': ["It's average. You haven't lost ground… but you haven't impressed me either."],
        'Rising Fortune': ["Hm… you're improving. Slowly, but noticeably. Keep going if that's what you want."],
        Misfortune: ["That didn't go well. Still, you're not completely off track… yet."],
        'Great Misfortune': ["...That was a mistake. If you're serious about this, you should reconsider how you approach me."]
    },
    freminet: {
        'Great Fortune': ["Oh… everything worked out… I-I'm glad. If you're okay with it… I'd like to stay with you a little longer…"],
        'Good Fortune': ["It went well… better than I expected. Maybe… we can keep going together, if you want."],
        'Modest Fortune': ["It's… not perfect, but it's okay. I think… we can still make this work."],
        'Rising Fortune': ["I think it's getting better… slowly. If we don't rush, maybe… it'll turn out alright."],
        Misfortune: ["Ah… I'm sorry… that didn't go well. But I'm still here, so… we can try again, right?"],
        'Great Misfortune': ["...I messed up… didn't I? But… if you don't give up, I won't either. I'll stay."]
    },
    arlecchino: {
        'Great Fortune': ["Everything falls into place… just as it should. It seems your resolve has earned you exactly what you wanted."],
        'Good Fortune': ["A favorable outcome. You're progressing well… continue, and you may find yourself under my protection."],
        'Modest Fortune': ["Acceptable. You've made your move, but it lacks refinement. I expect better, if you intend to keep my attention."],
        'Rising Fortune': ["I see potential. You're learning… adapting. Don't disappoint me now."],
        Misfortune: ["A misstep. Careless. If you wish to proceed, you'll need to be far more deliberate than this."],
        'Great Misfortune': ["...Disappointing. And yet—you haven't retreated. Hm. Perhaps there's something worth testing after all."]
    },
    linnea: {
        'Great Fortune': ["Oh wow, this is perfect! Everything aligns so neatly—this is the kind of result I'd write papers about!"],
        'Good Fortune': ["That's a really solid outcome! With conditions like these, I'd say we're in a very promising position!"],
        'Modest Fortune': ["Hm, not ideal, but definitely workable! With a few adjustments, we could still get great results!"],
        'Rising Fortune': ["Oh! It's improving—can you see it? This trend is really encouraging! I'd love to keep observing this!"],
        Misfortune: ["Ah… that's a bit unstable. But don't worry! Early failures are essential data points, after all!"],
        'Great Misfortune': ["O-oh… that collapsed completely…! B-but that just means we can start fresh—with better data this time!"]
    },
    chasca: {
        'Great Fortune': ["Now that's what I like to see! You kept pace perfectly. At this rate, I might actually stick around."],
        'Good Fortune': ["Nice—smooth and steady. You're not falling behind… I'll give you that. Let's see how long you last."],
        'Modest Fortune': ["Not bad, but you're lagging a little. Don't lose your rhythm now, or I'll be gone before you notice."],
        'Rising Fortune': ["Oh? You're picking up speed. I like that—keep chasing, and you might just catch me."],
        Misfortune: ["Tch, you stumbled. Don't worry, happens. Just don't expect me to wait forever, alright?"],
        'Great Misfortune': ["...Lost me already? That's rough. But hey—if you're still running, maybe I'll let you try again."]
    },
    lauma: {
        'Great Fortune': ["The flow is gentle and clear… everything draws you closer. It seems you're exactly where you're meant to be."],
        'Good Fortune': ["A soft balance surrounds you. If you continue like this, your path will lead you somewhere… quite pleasant."],
        'Modest Fortune': ["Not perfect, but still in harmony. With patience, even this can grow into something meaningful."],
        'Rising Fortune': ["Oh… I can feel it shifting. Slowly, quietly… you're finding your way, step by step."],
        Misfortune: ["The balance wavers. Don't force it—let things settle, and try again when the moment feels right."],
        'Great Misfortune': ["...The path fades for now. But even lost trails can be found again, if you listen closely enough."]
    },
    emilie: {
        'Great Fortune': ["Perfect alignment… how rare. Everything unfolds exactly as it should. I must admit… that suits you."],
        'Good Fortune': ["A refined outcome. Not overwhelming, but elegant. You're approaching this with… admirable precision."],
        'Modest Fortune': ["Not quite ideal… though still promising. With the right adjustments, this could become something… exquisite."],
        'Rising Fortune': ["Oh? The pattern is evolving. Slowly, but deliberately… I find myself wanting to observe this more closely."],
        Misfortune: ["A disruption. Subtle, but present. Still… flaws often reveal more than perfection ever could."],
        'Great Misfortune': ["...Collapsed entirely. How unfortunate. And yet… even ruin has its own distinct… beauty, wouldn't you agree?"]
    },
    navia: {
        'Great Fortune': ["Now that's what I call a win! You've got style—and I do appreciate someone who knows what they want."],
        'Good Fortune': ["That went well! Keep that up and you'll have me impressed in no time."],
        'Modest Fortune': ["Not bad, not bad. You're getting there—just polish it up a bit, hm?"],
        'Rising Fortune': ["I see progress! That's the spirit—keep pushing, and you'll get exactly what you're after."],
        Misfortune: ["Ah, that didn't go your way. Don't worry, happens to the best of us. Just don't lose that spark."],
        'Great Misfortune': ["Oof… rough one. But hey, if you're still standing, you've still got a chance—and I'll be watching."]
    },
    sigewinne: {
        'Great Fortune': ["Oh! That's excellent! Everything looks perfectly healthy—just like I hoped it would!"],
        'Good Fortune': ["Very good! Stable and strong—just keep going like this and you'll be perfectly fine!"],
        'Modest Fortune': ["Hm… a little uneven, but nothing serious! Just take it slow and you'll recover nicely~"],
        'Rising Fortune': ["Oh, it's getting better! See? You're improving already—I knew you could do it!"],
        Misfortune: ["Oh dear… that's a bit concerning. But don't worry, I'll help you through it, okay?"],
        'Great Misfortune': ["Oh no… that's quite severe. Stay still—I'll take care of you. You're not allowed to give up on me, alright?"]
    },
    wriothesley: {
        'Great Fortune': ["Well now… looks like luck's treating you nicely today. I'd say you've earned a little of my attention."],
        'Good Fortune': ["Not bad at all. Steady, reliable… I like that. Keep this up, and I might make room for you."],
        'Modest Fortune': ["Hm. Could be better, could be worse. Still, I appreciate someone who doesn't give up too easily."],
        'Rising Fortune': ["Oh? Now that's interesting. You're getting closer… slowly, but with intent. Keep going."],
        Misfortune: ["Tch, rough round. Don't worry—I've seen worse. The question is whether you're willing to try again."],
        'Great Misfortune': ["...That was a mess. And yet, you're still here. Heh. I respect that kind of stubbornness."]
    },
};