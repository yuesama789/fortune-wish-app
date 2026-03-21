import React, { useEffect, useState } from 'react';
// import { useRandomFortune } from '../hooks/useRandomFortune';
// import './FortuneSlipAnimation.css'; // Assuming you will create a CSS file for animations

const FortuneSlipAnimation: React.FC<{ onAnimationEnd: () => void }> = ({ onAnimationEnd }) => {
    const [isAnimating, setIsAnimating] = useState(false);
    // const fortune = useRandomFortune();

    const startAnimation = () => {
        setIsAnimating(true);
        setTimeout(() => {
            setIsAnimating(false);
            onAnimationEnd();
        }, 3000); // Duration of the animation
    };

    useEffect(() => {
        startAnimation();
    }, []);

    return (
        <div className={`fortune-slip ${isAnimating ? 'animate' : ''}`}>
            {isAnimating ? (
                <div className="fortune-text">{/* fortune */}</div>
            ) : (
                <div className="fortune-placeholder">Wishing...</div>
            )}
        </div>
    );
};

export default FortuneSlipAnimation;