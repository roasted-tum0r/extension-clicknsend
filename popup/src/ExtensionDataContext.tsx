import React, { createContext, useContext, type ReactNode } from 'react';

interface ExtensionData {
    initialEmail?: string;
    rawText?: string;
    isExtension: boolean;
}

const ExtensionDataContext = createContext<ExtensionData | undefined>(undefined);

export const ExtensionDataProvider: React.FC<ExtensionData & { children: ReactNode }> = ({
    initialEmail,
    rawText,
    isExtension,
    children,
}) => {
    return (
        <ExtensionDataContext.Provider value={{ initialEmail, rawText, isExtension }}>
            {children}
        </ExtensionDataContext.Provider>
    );
};


export const useExtensionData = () => {
    const context = useContext(ExtensionDataContext);
    if (context === undefined) {
        throw new Error('useExtensionData must be used within an ExtensionDataProvider');
    }
    return context;
};
