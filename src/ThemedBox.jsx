import React from 'react';
import { useTheme } from './ThemeContext';

const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer>
      <p>Footer - Using {theme} theme</p>
    </footer>
  );
};

export default Footer;
