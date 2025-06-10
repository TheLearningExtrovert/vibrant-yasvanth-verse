
import React, { useState } from 'react';
import { Palette, Sun, Moon, ChevronDown } from 'lucide-react';
import { useTheme, ThemeName } from '@/contexts/ThemeContext';
import { Button } from '@/components/ui/button';

const themes: { name: ThemeName; label: string; preview: string }[] = [
  { name: 'cyberpunk', label: 'Cyberpunk', preview: 'bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500' },
  { name: 'ocean', label: 'Ocean', preview: 'bg-gradient-to-r from-blue-600 via-teal-500 to-blue-400' },
  { name: 'sunset', label: 'Sunset', preview: 'bg-gradient-to-r from-orange-500 via-red-500 to-pink-500' },
  { name: 'forest', label: 'Forest', preview: 'bg-gradient-to-r from-green-600 via-emerald-500 to-green-400' },
  { name: 'aurora', label: 'Aurora', preview: 'bg-gradient-to-r from-indigo-500 via-purple-500 to-green-400' },
];

const ThemeSwitcher = () => {
  const { theme, variant, setTheme, toggleVariant } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-20 right-4 z-50 flex flex-col gap-2">
      {/* Light/Dark Toggle */}
      <Button
        onClick={toggleVariant}
        size="icon"
        className="theme-switcher-btn w-12 h-12 rounded-full backdrop-blur-md bg-white/20 hover:bg-white/30 border border-white/30 transition-all duration-300 hover:scale-110"
      >
        {variant === 'light' ? 
          <Moon className="h-5 w-5 text-white" /> : 
          <Sun className="h-5 w-5 text-white" />
        }
      </Button>

      {/* Theme Selector */}
      <div className="relative">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          size="icon"
          className="theme-switcher-btn w-12 h-12 rounded-full backdrop-blur-md bg-white/20 hover:bg-white/30 border border-white/30 transition-all duration-300 hover:scale-110"
        >
          <Palette className="h-5 w-5 text-white" />
          <ChevronDown className={`h-3 w-3 text-white transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </Button>

        {isOpen && (
          <div className="absolute top-14 right-0 bg-black/80 backdrop-blur-md rounded-lg border border-white/20 p-2 min-w-[200px] shadow-2xl">
            {themes.map((themeOption) => (
              <button
                key={themeOption.name}
                onClick={() => {
                  setTheme(themeOption.name);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center gap-3 p-3 rounded-lg transition-all duration-200 hover:bg-white/10 ${
                  theme === themeOption.name ? 'bg-white/20' : ''
                }`}
              >
                <div className={`w-6 h-6 rounded-full ${themeOption.preview}`} />
                <span className="text-white font-medium">{themeOption.label}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ThemeSwitcher;
