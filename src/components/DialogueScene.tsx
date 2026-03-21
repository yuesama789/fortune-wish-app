import React from 'react';

interface DialogueSceneProps {
    character: {
        name: string;
        dialogue: string;
        image: string;
    };
}

const DialogueScene: React.FC<DialogueSceneProps> = ({ character }) => {
    return (
        <div className="dialogue-scene">
            <img src={character.image} alt={character.name} className="character-image" />
            <h2>{character.name}</h2>
            <p>{character.dialogue}</p>
        </div>
    );
};

export default DialogueScene;