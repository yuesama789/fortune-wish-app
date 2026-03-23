import React from 'react';
import './FortuneEmblem.scss';

interface FortuneEmblemProps {
    color?: string;
}

const FortuneEmblem: React.FC<FortuneEmblemProps> = ({ color = '#fff' }) => {
    return (
        <div className="fortune-emblem">
            <div className="fortune-emblem-fill" style={{ backgroundColor: color }} />
        </div>
    );
};

export default FortuneEmblem;
