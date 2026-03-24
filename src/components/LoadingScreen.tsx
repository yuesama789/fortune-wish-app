import React, { useEffect, useRef, useState } from 'react';
import { characters } from '../data/characters';
import './LoadingScreen.scss';
import FortuneEmblem from './FortuneEmblem';

interface LoadingScreenProps {
    onComplete: () => void;
}

const ENABLE_TEST_LOADING_DELAY = false;
const TEST_LOADING_DURATION_MS = 5 * 60 * 1000;
const NORMAL_LOADING_DURATION_MS = 600;
const MINIMUM_LOADING_DURATION_MS = 2 * 1000;

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);
    const [fading, setFading] = useState(false);
    const onCompleteRef = useRef(onComplete);
    onCompleteRef.current = onComplete;

    useEffect(() => {
        const imageUrls = characters.map((c) => c.image);
        const total = imageUrls.length;

        if (total === 0) {
            onCompleteRef.current();
            return;
        }

        let loaded = 0;
        imageUrls.forEach((url) => {
            const img = new Image();
            img.onload = img.onerror = () => {
                loaded++;
                setProgress(Math.round((loaded / total) * 100));
                if (loaded === total) {
                    const completionDelay = ENABLE_TEST_LOADING_DELAY
                        ? TEST_LOADING_DURATION_MS
                        : NORMAL_LOADING_DURATION_MS;

                    const delayWithMinimum = Math.max(completionDelay, MINIMUM_LOADING_DURATION_MS);

                    setTimeout(() => {
                        setFading(true);
                        setTimeout(() => onCompleteRef.current(), 700);
                    }, delayWithMinimum);
                }
            };
            img.src = url;
        });
    }, []);

    return (
        <div className={`loading-screen${fading ? ' loading-screen--fading' : ''}`}>
            <div className="fortune-emblem-container">
                <FortuneEmblem color="#d4bb8e" />
            </div>
            <h1>Genshin Impact - Wish For Me?</h1>
            
            <p className="loading-tooltip">Blame fate if you want… but you'll make the wish.</p>

            <div className="loading-progress-container">
                <div className="loading-ornament" />
                <div className="loading-mask-container">
                    <div className="loading-fill" style={{ width: `${progress}%` }} />
                </div>
            </div>
        </div>
    );
};

export default LoadingScreen;
