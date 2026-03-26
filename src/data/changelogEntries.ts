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
];
