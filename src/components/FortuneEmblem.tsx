import React from 'react';
import { resolveAssetUrl } from '../utils/assets';
import './FortuneEmblem.scss';

interface FortuneEmblemProps {
    color?: string;
}

const FortuneEmblem: React.FC<FortuneEmblemProps> = ({ color = '#fff' }) => {
    return (
        <div
            className="fortune-emblem"
            style={{
                '--fortune-emblem-mask-image': `url(${resolveAssetUrl('/images/misc/emblem.png')})`,
            } as React.CSSProperties}
        >
            <div className="fortune-emblem-fill" style={{ backgroundColor: color }} />
        </div>
    );
};

export default FortuneEmblem;
