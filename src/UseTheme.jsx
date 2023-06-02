import { useState, useEffect } from 'react';

const useThemeMode = () => {
  const [themeMode, setThemeMode] = useState('light');

  useEffect(() => {
    // Retrieve the saved theme mode from localStorage
    const savedThemeMode = localStorage.getItem('themeMode');
    if (savedThemeMode) {
      setThemeMode(savedThemeMode);
    }
  }, []);

  const toggleThemeMode = () => {
    const updatedThemeMode = themeMode === 'light' ? 'dark' : 'light';
    setThemeMode(updatedThemeMode);
    localStorage.setItem('themeMode', updatedThemeMode);
  };

  return [themeMode, toggleThemeMode];
};

export default useThemeMode;
