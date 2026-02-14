import React, { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { THEME_CONFIG, type ThemeMode, type ThemeStyles } from '../constants/theme';

interface ThemeContextType {
    theme: ThemeMode;
    toggleTheme: () => void;
    activeTheme: ThemeStyles;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState<ThemeMode>("dark");

    // Load theme from storage on mount
    useEffect(() => {
        const savedTheme = localStorage.getItem("clicksend_theme") as ThemeMode;
        if (savedTheme) {
            console.log("🎨 ThemeContext: Found saved theme in localStorage:", savedTheme);
            setTheme(savedTheme);
        }

        if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.local) {
            chrome.storage.local.get(['theme'], (result) => {
                if (result && typeof result.theme === 'string') {
                    console.log("🎨 ThemeContext: Derived theme from chrome.storage:", result.theme);
                    setTheme(result.theme as ThemeMode);
                }
            });
        }
    }, []);

    // Synchronize HTML classes when theme changes
    useEffect(() => {
        document.body.classList.toggle('dark', theme === 'dark');
        document.documentElement.classList.toggle('dark', theme === 'dark');
    }, [theme]);

    const toggleTheme = () => {
        const previousTheme = theme;
        const next: ThemeMode = theme === "dark" ? "light" : "dark";

        // Educational Console Logs as requested
        console.log(`%c 🎨 Theme Toggle Clicked!`, 'color: #3b82f6; font-weight: bold; font-size: 12px;');
        console.log(`   - Previous Selection: %c${previousTheme}`, 'color: #ef4444; font-weight: bold;');
        console.log(`   - New Result: %c${next}`, 'color: #10b981; font-weight: bold;');

        setTheme(next);
        localStorage.setItem("clicksend_theme", next);

        if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.local) {
            chrome.storage.local.set({ theme: next });
        }
    };

    const activeTheme = THEME_CONFIG[theme];

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, activeTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
