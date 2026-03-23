import { useEffect, useState } from 'react';
import { fortunes } from '../data/fortunes';
import { Fortune } from '../types';

const useRandomFortune = () => {
    const [fortune, setFortune] = useState<Fortune>(fortunes[0]);

    const getRandomFortune = () => {
        const randomIndex = Math.floor(Math.random() * fortunes.length);
        setFortune(fortunes[randomIndex]);
    };

    useEffect(() => {
        getRandomFortune();
    }, []);

    return fortune;
};

export default useRandomFortune;