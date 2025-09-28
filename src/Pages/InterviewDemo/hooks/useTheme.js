// src/Pages/InterviewDemo/hooks/useTheme.js
import { useState, useEffect } from 'react';

export const useTheme = (defaultTheme = 'light') => {
  const [theme, setTheme] = useState(defaultTheme);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  return [theme, toggleTheme];
};