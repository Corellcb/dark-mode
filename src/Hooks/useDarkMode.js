import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = toggle => {
    const [isDark, setIsDark] = useLocalStorage('isDark', toggle);

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