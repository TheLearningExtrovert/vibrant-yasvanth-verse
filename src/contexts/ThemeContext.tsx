
import React, { createContext, useContext, useState, useEffect } from 'react';

export type ThemeVariant = 'light' | 'dark';
export type ThemeName = 'cyberpunk' | 'ocean' | 'sunset' | 'forest' | 'aurora';

interface ThemeContextType {
  theme: ThemeName;
  variant: ThemeVariant;
  setTheme: (theme: ThemeName) => void;
  setVariant: (variant: ThemeVariant) => void;
  toggleVariant: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeName>('cyberpunk');
  const [variant, setVariant] = useState<ThemeVariant>('dark');

  const toggleVariant = () => {
    setVariant(prev => prev === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    // Apply theme classes to document
    document.documentElement.className = `theme-${theme} ${variant}`;
  }, [theme, variant]);

  return (
    <ThemeContext.Provider value={{ theme, variant, setTheme, setVariant, toggleVariant }}>
      {children}
    </ThemeContext.Provider>
  );
};
