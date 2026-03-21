# Genshin Impact Fortune Slip Wish App

## Overview
The Genshin Impact Fortune Slip Wish App allows users to select a character from the popular game Genshin Impact and trigger a dialogue scene along with a fortune slip animation that reveals a random fortune.

## Features
- Character selection from a predefined list.
- Display of character-specific dialogue.
- Animation of a fortune slip that reveals a random fortune.

## Project Structure
```
genshin-wish-app
├── src
│   ├── App.tsx
│   ├── main.tsx
│   ├── components
│   │   ├── CharacterSelector.tsx
│   │   ├── DialogueScene.tsx
│   │   └── FortuneSlipAnimation.tsx
│   ├── data
│   │   ├── characters.ts
│   │   └── fortunes.ts
│   ├── hooks
│   │   └── useRandomFortune.ts
│   ├── types
│   │   └── index.ts
│   ├── utils
│   │   └── random.js
│   └── styles
│       └── index.css
├── public
│   └── vite.svg
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Setup Instructions
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd genshin-wish-app
   ```
3. Install the dependencies:
   ```
   npm install
   ```
4. Start the development server:
   ```
   npm run dev
   ```
5. Open your browser and go to `http://localhost:3000` to view the application.

## Usage
- Select a character from the dropdown menu.
- Click the "Wish" button to trigger the dialogue scene and fortune slip animation.
- Enjoy the random fortune revealed with each wish!

## Technologies Used
- JavaScript
- TypeScript
- React
- Vite

## Contributing
Feel free to submit issues or pull requests for improvements or bug fixes. 

## License
This project is licensed under the MIT License.