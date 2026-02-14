export const LIGHT_THEME = {
    bg: '#ffffff',
    bgSecondary: '#f8fafc',
    inputBg: '#f1f5f9', // Greyish slate for inputs/dropdowns
    text: '#0f172a',
    textMuted: '#64748b',
    border: '#e2e8f0',
    accent: '#2563eb',
    // Tailwind Equivalents
    wrapperClass: 'bg-slate-50',
    rootClass: 'bg-white',
    textClass: 'text-slate-900',
    borderClass: 'border-slate-200',
    inputClass: 'bg-slate-100' // f1f5f9 equivalent
};

export const DARK_THEME = {
    bg: '#020617',
    bgSecondary: '#0f172a',
    inputBg: 'rgba(15, 23, 42, 0.5)', // slate-900/50
    text: '#f1f5f9',
    textMuted: '#94a3b8',
    border: '#1e293b',
    accent: '#3b82f6',
    // Tailwind Equivalents
    wrapperClass: 'bg-[#020617]',
    rootClass: 'bg-[#0f172a]',
    textClass: 'text-slate-100',
    borderClass: 'border-slate-800',
    inputClass: 'bg-slate-900/50'
};

export const THEME_CONFIG = {
    light: LIGHT_THEME,
    dark: DARK_THEME
};

export type ThemeMode = 'light' | 'dark';
export type ThemeStyles = typeof LIGHT_THEME;
