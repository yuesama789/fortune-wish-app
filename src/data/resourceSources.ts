export interface ResourceSourceItem {
  asset: string;
  sourceName: string;
  url?: string;
  notes?: string;
}

export interface ResourceSourceSection {
  section: string;
  items: ResourceSourceItem[];
}

export const resourceSources: ResourceSourceSection[] = [
  {
    section: 'Backgrounds',
    items: [
      {
        asset: 'Liyue dialogue background',
        sourceName: 'Reddit (r/Genshin_Impact)',
        url: 'https://www.reddit.com/r/Genshin_Impact/comments/ljw2qw/i_cleaned_the_background_of_the_lantern_rite_part/',
      },
      {
        asset: 'Character selection screen & fortune background',
        sourceName: 'Official art & assets (tumblr)',
        url: 'https://genshinimpactresources.tumblr.com/',
      },
      {
        asset: 'Character in-dialogue sprites',
        sourceName: 'Hoyoverse transparent renders (tumblr)',
        url: 'https://hoyo-transparents.tumblr.com/',
      },
      {
        asset: 'Dialogue backgrounds',
        sourceName: 'Genshin Resource (tumblr)',
        url: 'https://genshinresource.tumblr.com/',
      },
    ],
  },
  {
    section: 'Character Dialogue Renders',
    items: [
      {
        asset: 'Il Capitano Image',
        sourceName: '@anna_drw01 (Instagram)',
        url: 'https://www.instagram.com/anna_drw01/',
      },
      {
        asset: 'All character transparent renders if not specified above',
        sourceName: 'Hoyo Transparants (Tumblr)',
        url: 'https://hoyo-transparents.tumblr.com/',
      },
    ],
  },
  {
    section: 'Notable Mentions',
    items: [
      {
        asset: 'Dialogue text support',
        sourceName: 'from reddit user u/arseholierthanthou',
        notes: 'Provided dialogue text for the characters, which was used as a reference for the character-specific dialogue lines. Thank you for your contribution to the project!',
      },
    ],
  },
  {
    section: 'In-Game Icons and UI Assets',
    items: [
      {
        asset: 'Character icons, element icons, quality backgrounds',
        sourceName: 'HoYoverse / Genshin Impact official game assets',
        notes: 'Used for non-commercial fan project purposes only.',
      },
    ],
  },
];
