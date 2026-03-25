# Genshin Impact Wish For Me?

A lightweight React + TypeScript app inspired by Genshin Impact wish scenes.
Choose a featured character, play a themed dialogue sequence, and reveal a random fortune slip.

## Features

- Character selection with curated image assets.
- Character-specific dialogue scene flow.
- Fortune slip reveal animation.
- Loading screen and visual quality/emblem assets.
- Attribution modal for asset source references.

## Tech Stack

- React 18
- TypeScript
- Vite
- Sass (SCSS)

## Getting Started

### 1. Clone the repo

```bash
git clone <repository-url>
cd genshin-fortune-slip-wish-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run in development

```bash
npm run dev
```

Vite will print the local URL in the terminal (commonly `http://localhost:5173`).

## Available Scripts

- `npm run dev`: Start Vite development server.
- `npm run build`: Create a production build.
- `npm run serve`: Preview the production build locally.

## Deploy To GitHub Pages

Deployment is manual and branch-based. Committing to `main` does **not** change the live site.

### First-time setup

1. Open GitHub repository settings.
2. Go to `Settings → Pages`.
3. Set source to **Deploy from a branch**.
4. Select branch: `gh-pages`, folder: `/ (root)`.
5. Save.

### Publishing a new version

Run this locally whenever you are ready to update the live site:

```bash
npm run deploy
```

This builds the app and pushes the `dist/` output to the `gh-pages` branch.
The live site updates only when you run this command.

### Note on repository name

The base path is hardcoded as `/genshin-fortune-slip-wish-app/` in `vite.config.ts`.
If you rename the repository, update that value to match.

## Project Structure

```text
.
|-- public/
|   |-- images/
|   |   |-- characters/
|   |   |-- dialogue_assets/
|   |   |-- elements/
|   |   |-- loading/
|   |   `-- quality/
|-- src/
|   |-- components/
|   |   |-- CharacterSelector.tsx
|   |   |-- DialogueScene.tsx
|   |   |-- FortuneSlipAnimation.tsx
|   |   `-- ...
|   |-- data/
|   |   |-- characters.ts
|   |   |-- characterDialogues.ts
|   |   |-- featuredCharacterIds.ts
|   |   `-- fortunes.ts
|   |-- hooks/
|   |-- styles/
|   |-- types/
|   |-- utils/
|   |-- App.tsx
|   `-- main.tsx
|-- index.html
|-- package.json
|-- tsconfig.json
`-- vite.config.ts
```

## Usage

1. Open the app in your browser.
2. Pick a character.
3. Start the wish interaction.
4. Watch the dialogue and reveal your random fortune.

## Contributing

Issues and pull requests are welcome.

## License

MIT