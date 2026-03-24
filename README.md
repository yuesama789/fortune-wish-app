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

This repository is preconfigured for GitHub Pages with:

- GitHub Actions build using repository-based `--base`
- Pages workflow at `.github/workflows/deploy-pages.yml`

Steps:

1. Push to the `main` branch.
2. Open GitHub repository settings.
3. Go to `Settings -> Pages`.
4. Set source to `GitHub Actions`.
5. Wait for the `Deploy to GitHub Pages` workflow to complete.

Your app will be published to the repository Pages URL.

If you rename the repository, no base-path config change is needed because the workflow derives it dynamically.

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