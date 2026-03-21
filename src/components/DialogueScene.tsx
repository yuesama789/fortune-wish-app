import React from 'react';

interface DialogueSceneProps {
    character: {
        name: string;
        dialogue: string;
        image: string;
        region?: string; //needs fix
    };
    onWishClick: () => void;
    onReturnClick: () => void;
}

const DialogueScene: React.FC<DialogueSceneProps> = ({ character, onWishClick, onReturnClick }) => {
    return (
        <div className="dialogue-scene" style={{ backgroundImage: `url(/images/dialogue_assets/background/Liyue.png)` }}>
            <img src={`/images/dialogue_assets/character/5/${character.name}.png`} alt={character.name} className="character-image" />
            <div className='dialogue-blurredbackground'>
                <div className='dialogue-container'>
                    <h2>{character.name}</h2>
                    <h3>
                        <span className='dialogue-ornament-left'></span>
                        <span>Any relevant title of this character</span>
                        <span className='dialogue-ornament-right'></span>
                    </h3>
                    <p>{character.dialogue}</p>
                </div>
            </div>
            <button type="button" onClick={onWishClick}>Start Wish</button>
            <button type="button" onClick={onReturnClick}>Return to Character Selection</button>
        </div>
    );
};

export default DialogueScene;