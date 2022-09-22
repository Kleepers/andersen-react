import { createContext, useState } from 'react';

export const ThemeContext = createContext({});

export const ThemeProvider = ({ children }: any) => {
    const [theme, setTheme] = useState('dark');

    const changeTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    }

    return (
        <ThemeContext.Provider value={{ theme, changeTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}
