import React from 'react';
import { useTheme } from './ThemeContext';

function ThemedBox() {
  const { theme } = useTheme();

  return (
    <div className="p-6 mt-6 border rounded-lg shadow">
      <h2 className="text-xl font-bold">Current Theme: {theme}</h2>
    </div>
  );
}

export default ThemedBox;
