import React, { useEffect, useRef, useState } from 'react';
import { resolveAssetUrl } from '../utils/assets';
import './DialogueScene.scss';

interface DialogueSceneProps {
    character: {
        name: string;
        dialogue: string;
        image: string;
        region?: string; //needs fix
    };
    onWishClick: () => void;
    onReturnClick: () => void;
    showUi?: boolean;
    isPostFortuneMode?: boolean;
    onPostFortuneClick?: () => void;
}

const DialogueScene: React.FC<DialogueSceneProps> = ({
    character,
    onWishClick,
    onReturnClick,
    showUi = true,
    isPostFortuneMode = false,
    onPostFortuneClick,
}) => {
    const [selectedOption, setSelectedOption] = useState<'wish' | 'return' | null>(null);
    const clickTimeoutRef = useRef<number | null>(null);

    useEffect(() => {
        return () => {
            if (clickTimeoutRef.current !== null) {
                window.clearTimeout(clickTimeoutRef.current);
            }
        };
    }, []);

    const triggerOption = (option: 'wish' | 'return', callback: () => void) => {
        setSelectedOption(option);

        if (clickTimeoutRef.current !== null) {
            window.clearTimeout(clickTimeoutRef.current);
        }

        clickTimeoutRef.current = window.setTimeout(() => {
            callback();
        }, 100);
    };

    const speechBubbleIcon = (
        <svg className="bubble-icon" height="32px" width="32px" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512" xmlSpace="preserve">
                <style type="text/css">{`.st0{fill:#FFFFFF;}`}</style>
        <g>
            <path className="st0" d="M257.135,19.179C103.966,19.179,0,97.273,0,218.763c0,74.744,31.074,134.641,91.108,173.176
                c4.003,2.572,8.728,2.962,6.954,10.365c-7.159,29.935-19.608,83.276-19.608,83.276c-0.526,2.26,0.321,4.617,2.162,6.03
                c1.841,1.402,4.335,1.607,6.381,0.507c0,0,87.864-52.066,99.583-58.573c27.333-15.625,50.877-18.654,68.557-18.654
                C376.618,414.89,512,366.282,512,217.458C512,102.036,418.973,19.179,257.135,19.179z M136.911,258.117
                c-16.862,0-30.529-13.666-30.529-30.528c0-16.862,13.666-30.539,30.529-30.539c16.872,0,30.538,13.677,30.538,30.539
                C167.449,244.451,153.782,258.117,136.911,258.117z M255.994,258.117c-16.861,0-30.528-13.666-30.528-30.528
                c0-16.862,13.666-30.539,30.528-30.539c16.873,0,30.539,13.677,30.539,30.539C286.534,244.451,272.867,258.117,255.994,258.117z
                M375.089,258.117c-16.862,0-30.538-13.666-30.538-30.528c0-16.862,13.676-30.539,30.538-30.539
                c16.872,0,30.538,13.677,30.538,30.539C405.627,244.451,391.961,258.117,375.089,258.117z"/>
        </g>
        </svg>
    );

    const returnIcon = (
        <svg fill="#ffffff" height="32px" width="32px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512" xmlSpace="preserve">
        <g>
            <g>
                <path d="M320,112H192V48h-32L0,208l160,160h32v-64h160c88.365,0,112,71.635,112,160h48V304C512,197.962,426.038,112,320,112z"/>
            </g>
        </g>
        </svg>
    );

    const handIcon = (
        <svg fill="#ffffff" width="32px" height="32px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.924 17.315c-.057.174-.193.367-.416.432-.161.047-5.488 1.59-5.652 1.633-.469.125-.795.033-1.009-.156-.326-.287-4.093-2.85-8.845-3.092-.508-.025-.259-1.951 1.193-1.951.995 0 3.904.723 4.255.371.271-.272.394-1.879-.737-4.683L4.438 4.232a1.045 1.045 0 0 1 1.937-.781L8.361 8.37c.193.48.431.662.69.562.231-.088.279-.242.139-.709L7.144 2.195A1.043 1.043 0 0 1 7.796.871a1.042 1.042 0 0 1 1.325.652l1.946 5.732c.172.504.354.768.642.646.173-.073.161-.338.115-.569l-1.366-5.471a1.045 1.045 0 1 1 2.027-.506l1.26 5.042c.184.741.353 1.008.646.935.299-.073.285-.319.244-.522l-.872-4.328a.95.95 0 0 1 1.86-.375l.948 4.711.001.001v.001l.568 2.825c.124.533.266 1.035.45 1.527 1.085 2.889.519 5.564.334 6.143z"/></svg>
    );
    const handlePostFortuneClick = () => {
        if (!isPostFortuneMode || !showUi) {
            return;
        }

        onPostFortuneClick?.();
    };

    return (
        <div
            className={`dialogue-scene ${isPostFortuneMode ? 'post-fortune-mode' : ''}`}
            style={{ backgroundImage: `url(${resolveAssetUrl(`/images/dialogue_assets/background/${character.region}.webp`)})` }}
            onClick={handlePostFortuneClick}
            role={isPostFortuneMode ? 'button' : undefined}
            tabIndex={isPostFortuneMode ? 0 : undefined}
            onKeyDown={(event) => {
                if (!isPostFortuneMode) {
                    return;
                }

                if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    handlePostFortuneClick();
                }
            }}
        >
            <img
                src={resolveAssetUrl(`/images/dialogue_assets/character/5/${character.name}.png`)}
                alt={character.name}
                className="character-image"
                onError={(event) => {
                    const fallbackSrc = resolveAssetUrl(character.image);

                    if (event.currentTarget.src !== fallbackSrc) {
                        event.currentTarget.src = fallbackSrc;
                    }
                }}
            />
            {showUi && (
                <>
                
                    <div
                        className="return-button"
                        onClick={onReturnClick}
                    >
                        {returnIcon}
                    </div>
                    <div className='dialogue-blurredbackground'>
                        <div className='dialogue-container' key={character.dialogue}>
                            <h2>{character.name}</h2>
                            <span className='dialogue-ornament'></span>
                            <p>
                                {(character.dialogue.match(/[^.!?]+[.!?]+/g) ?? [character.dialogue]).map((line, i) => (
                                    <span
                                        key={i}
                                        className="dialogue-line"
                                        style={{ '--line-index': i } as React.CSSProperties}
                                    >
                                        {line.trim()}
                                    </span>
                                ))}
                            </p>
                        </div>
                    </div>
                    {isPostFortuneMode ? (
                        <div className="dialogue-continue">Click to return</div>
                    ) : (
                        <div className="dialogue-options">
                            <div
                                className={`button ${selectedOption === 'wish' ? 'is-selected' : ''}`}
                                onClick={() => triggerOption('wish', onWishClick)}
                            >
                                <span className='dialogue-options-border'></span>
                                {handIcon}
                                (Try your luck!)
                            </div>
                            <div
                                className={`button ${selectedOption === 'return' ? 'is-selected' : ''}`}
                                onClick={() => triggerOption('return', onReturnClick)}
                            >
                                <span className='dialogue-options-border'></span>
                                {returnIcon}
                                (Select another character)
                            </div>
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default DialogueScene;