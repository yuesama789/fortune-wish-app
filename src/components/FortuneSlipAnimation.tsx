import React, { useEffect, useRef, useState } from 'react';
import  useRandomFortune  from '../hooks/useRandomFortune';
import './FortuneSlipAnimation.scss';

interface FortuneSlipAnimationProps {
    onAnimationEnd?: () => void;
    onReturnClick: () => void;
}

const FortuneSlipAnimation: React.FC<FortuneSlipAnimationProps> = ({ onAnimationEnd, onReturnClick }) => {
    const [isAnimating, setIsAnimating] = useState(false);
    const animationTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const fortune = useRandomFortune();

    const startAnimation = () => {
        setIsAnimating(true);
        animationTimeoutRef.current = setTimeout(() => {
            setIsAnimating(false);
            onAnimationEnd?.();
        }, 30000); // Duration of the animation
    };

    useEffect(() => {
        startAnimation();

        return () => {
            if (animationTimeoutRef.current) {
                clearTimeout(animationTimeoutRef.current);
            }
        };
    }, []);

    return (
        <div className={`fortune-slip ${isAnimating ? 'animate' : ''}`}>
            {isAnimating ? (
                <div className="fortune-placeholder">Wishing...</div>
            ) : (
                <div className="fortune-text">{fortune}</div>
            )}
            <button type="button" onClick={onReturnClick}>Return to Character Selection</button>
        </div>
    );
};

export default FortuneSlipAnimation;