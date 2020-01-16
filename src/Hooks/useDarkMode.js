import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

const useDarkMode = () => {
    const [isDark, setIsDark] = useLocalStorage('isDark', false);

    useEffect(() => {
        let body = document.querySelector('body');
        if(isDark) {
            body.className = 'dark-mode';
        } else {
            body.className = '';
        }
    }, [isDark]);

    return [isDark, setIsDark];
}