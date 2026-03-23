import React, { useEffect, useRef, useState } from 'react';
import { characters } from '../data/characters';
import './LoadingScreen.scss';

interface LoadingScreenProps {
    onComplete: () => void;
}

const ENABLE_TEST_LOADING_DELAY = false;
const TEST_LOADING_DURATION_MS = 5 * 60 * 1000;
const NORMAL_LOADING_DURATION_MS = 600;

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

                    setTimeout(() => {
                        setFading(true);
                        setTimeout(() => onCompleteRef.current(), 700);
                    }, completionDelay);
                }
            };
            img.src = url;
        });
    }, []);

    return (
        <div className={`loading-screen${fading ? ' loading-screen--fading' : ''}`}>
            <h1>Genshin Fortune</h1>
            <div className="loading-mask-container">
                <div className="loading-fill" style={{ width: `${progress}%` }} />
            </div>
            <p className="loading-label">{progress < 100 ? 'Loading...' : 'Ready'}</p>
        </div>
    );
};

export default LoadingScreen;
