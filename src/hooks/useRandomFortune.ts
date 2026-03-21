import { useEffect, useState } from 'react';
import {fortunes} from '../data/fortunes';

const useRandomFortune = () => {
    const [fortune, setFortune] = useState('');

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