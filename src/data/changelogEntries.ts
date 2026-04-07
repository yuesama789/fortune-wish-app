export interface ChangelogEntry {
  version: string;
  date: string;
  changes: string[];
}

export const changelogEntries: ChangelogEntry[] = [
  {
    version: 'v0.3.0',
    date: '2026-03-25',
    changes: [
      'Add mobile supporting styles.',
    ],
  },
  {
    version: 'v0.4.0',
    date: '2026-03-26',
    changes: [
      'Remodeled the attribution pop up into a game menu layout.',
      'Added non-playable branching dialogue flow before fortune reveal.',
      'Added character-specific dialogue for non-playable Il Dottore.',
    ],
  },
  {
    version: 'v0.5.0',
    date: '2026-03-26',
    changes: [
        'Added character-specific dialogue for Eula, Furina, Nefer & Clorinde.',
    ],
  },
  {
    version: 'v0.5.1',
    date: '2026-03-26',
    changes: [
        'Added character-specific dialogue for Xiangling, Razor, Noelle, Ningguang, Lisa, Kaeya & Fischl.',
    ],
  },
  {
    version: 'v0.5.2',
    date: '2026-03-27',
    changes: [
        'Added character-specific dialogue for Rosaria, Layla, Kuki Shinobu, Iansan, Mika, Mavuika and Yelan.',
     ],
  },
  {
    version: 'v0.5.3',
    date: '2026-03-27',
    changes: [
        'Added character-specific dialogue for Alhaitham, Raiden Shogun, Kaedehara Kazuha, Zhongli, Wanderer, Xiao, Neuvilette, Hu Tao, Tartaglia, Lyney, Lyette, Freminet and Columbina.',
        'Temporarily removed characters without character-specific dialogue to avoid confusion, but they will be added back in future updates once their dialogue is implemented.',
      ],
    },
    {
      version: 'v0.5.4',
      date: '2026-03-30',
      changes: [
        'Added character-specific dialogue for newly introduced character Linnea.',
        'Added character-specific dialogue for Arlecchino, Chasca, Lauma, Emilie, Navia, Sigewinne & Wriothesley.',
        'Added "Chronicled Wish" section in character selector for characters featured in the current patch but not in the current featured banner.',
      ],
    },
    {
      version: 'v0.5.5',
      date: '2026-04-07',
      changes: [
        'Added character-specific dialogue for character Illuga and Aino.',
        'Added a new section in the attribution menu for user feedback and comments, powered by Disqus.',
        'Updated featured character schedule for patch 6.5.2.',
      ],
    }
];
