import React, { useState } from 'react';
import CharacterSelector from './components/CharacterSelector';
import DialogueScene from './components/DialogueScene';
import FortuneSlipAnimation from './components/FortuneSlipAnimation';
import { Character } from './types';

const App: React.FC = () => {
    const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);
    const [showDialogue, setShowDialogue] = useState(false);

    const handleCharacterSelect = (character: Character) => {
        setSelectedCharacter(character);
        setShowDialogue(true);
    };

    const handleCloseDialogue = () => {
        setShowDialogue(false);
    };

    return (
        <div className="app">
            <h1>Genshin Impact Fortune Slip Wish App</h1>
            <CharacterSelector onSelect={handleCharacterSelect} />
            {/* {showDialogue && selectedCharacter && (
                <>
                    <DialogueScene character={selectedCharacter} onClose={handleCloseDialogue} />
                    <FortuneSlipAnimation />
                </>
            )} */}
        </div>
    );
};

export default App;