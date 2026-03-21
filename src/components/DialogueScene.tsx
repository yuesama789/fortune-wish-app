import React from 'react';

interface DialogueSceneProps {
    character: {
        name: string;
        dialogue: string;
        image: string;
    };
    onWishClick: () => void;
    onReturnClick: () => void;
}

const DialogueScene: React.FC<DialogueSceneProps> = ({ character, onWishClick, onReturnClick }) => {
    return (
        <div className="dialogue-scene">
            <img src={character.image} alt={character.name} className="character-image" />
            <h2>{character.name}</h2>
            <p>{character.dialogue}</p>
            <button type="button" onClick={onWishClick}>Start Wish</button>
            <button type="button" onClick={onReturnClick}>Return to Character Selection</button>
        </div>
    );
};

export default DialogueScene;