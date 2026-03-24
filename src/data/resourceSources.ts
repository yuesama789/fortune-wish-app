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
        sourceName: 'Reddit (r/Genshin_Impact)',
        url: 'https://www.tumblr.com/genshinimpactresources/',
      },
    ],
  },
  {
    section: 'Character Dialogue Renders',
    items: [
      {
        asset: 'Dehya transparent render',
        sourceName: 'CleanPNG',
        url: 'https://www.cleanpng.com/png-fierce-fantasy-character-in-armor-8526995/',
      },
      {
        asset: 'Yumemizuki Mizuki transparent render',
        sourceName: 'DeviantArt (hs1jjk)',
        url: 'https://www.deviantart.com/hs1jjk/art/Yumemizuki-Mizuki-Genshin-Impact-Render-1172903804',
      },
      {
        asset: 'Escoffier transparent render',
        sourceName: 'Hoyo Transparants (Tumblr)',
        url: 'https://hoyo-transparents.tumblr.com/post/782387459331964928/genshin-impact-escoffier-transparent-renders',
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
