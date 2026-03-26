import React, { useEffect, useRef, useState } from 'react';
import { Fortune } from '../types';
import { resolveAssetUrl } from '../utils/assets';
import FortuneEmblem from './FortuneEmblem';
import './FortuneSlipAnimation.scss';

interface FortuneSlipAnimationProps {
    fortune: Fortune;
    onAnimationEnd?: () => void;
    onContinue: (fortune: Fortune) => void;
}

interface Sparkle {
    angle: number;
    radius: number;
    size: number;
    delay: number;
    duration: number;
}

type AnimationPhase = 'wish' | 'revealed';

const SPARKLE_SWIRL_DURATION_MS = 1800;

const sparkleConfig: Sparkle[] = [
    { angle: 10, radius: 130, size: 10, delay: 0.0, duration: 1.4 },
    { angle: 38, radius: 165, size: 8, delay: 0.2, duration: 1.6 },
    { angle: 72, radius: 120, size: 12, delay: 0.35, duration: 1.3 },
    { angle: 110, radius: 180, size: 7, delay: 0.1, duration: 1.7 },
    { angle: 152, radius: 150, size: 11, delay: 0.5, duration: 1.45 },
    { angle: 190, radius: 175, size: 9, delay: 0.15, duration: 1.6 },
    { angle: 232, radius: 145, size: 10, delay: 0.4, duration: 1.35 },
    { angle: 270, radius: 185, size: 8, delay: 0.25, duration: 1.7 },
    { angle: 310, radius: 160, size: 12, delay: 0.45, duration: 1.5 },
    { angle: 344, radius: 140, size: 9, delay: 0.3, duration: 1.55 },
];

const FortuneSlipAnimation: React.FC<FortuneSlipAnimationProps> = ({ fortune, onAnimationEnd, onContinue }) => {
    const [animationPhase, setAnimationPhase] = useState<AnimationPhase>('wish');
    const animationTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const startAnimation = () => {
        setAnimationPhase('wish');
        animationTimeoutRef.current = setTimeout(() => {
            setAnimationPhase('revealed');
            onAnimationEnd?.();
        }, SPARKLE_SWIRL_DURATION_MS);
    };

    useEffect(() => {
        startAnimation();

        return () => {
            if (animationTimeoutRef.current) {
                clearTimeout(animationTimeoutRef.current);
            }
        };
    }, []);

    const handleContinue = () => {
        if (animationPhase !== 'revealed') {
            return;
        }

        onContinue(fortune);
    };

    return (
        <div className={`fortune-slip phase-${animationPhase}`}>
            {animationPhase !== 'revealed' && (
                <div className="wish-sequence">
                    <div className="wish-core" />
                    <div className="wish-glow" />
                    <div className="sparkle-field" aria-hidden="true">
                        {sparkleConfig.map((sparkle, index) => (
                            <span
                                key={`${sparkle.angle}-${index}`}
                                className="sparkle"
                                style={{
                                    '--sparkle-angle': `${sparkle.angle}deg`,
                                    '--sparkle-radius': `${sparkle.radius}px`,
                                    '--sparkle-size': `${sparkle.size}px`,
                                    '--sparkle-delay': `${sparkle.delay}s`,
                                    '--sparkle-duration': `${sparkle.duration}s`,
                                } as React.CSSProperties}
                            />
                        ))}
                    </div>
                    <div className="fortune-loader">Asking the stars...</div>
                </div>
            )}
            {animationPhase === 'revealed' && (
                <div
                    className="fortune-result"
                    onClick={handleContinue}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(event) => {
                        if (event.key === 'Enter' || event.key === ' ') {
                            event.preventDefault();
                            handleContinue();
                        }
                    }}
                >
                    <div className="fortune-text">
                        <FortuneEmblem color="#fff" />
                        <span>Your fortune is...</span>
                        <h2>{fortune.header}</h2>
                        <div className="fortune-ornament"></div>
                        <p>{fortune.text}</p>
                    </div>
                    <span className="fortune-continue">Click to continue</span>
                </div>
            )}
            <div
                className={`fortune-flash-overlay ${animationPhase === 'wish' ? 'is-charging' : 'is-fading'}`}
                aria-hidden="true"
            />
            <div
                className="fortune-slip-background"
                style={{
                    '--fortune-slip-background-image': `url(${resolveAssetUrl('/images/dialogue_assets/background/fortune_reveal.webp')})`,
                } as React.CSSProperties}
            />
        </div>
    );
};

export default FortuneSlipAnimation;