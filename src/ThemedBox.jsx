import React from 'react';
import { useTheme } from './ThemeContext';

const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer>
      <p>Footer - Using {theme} theme</p>
      <p> theme toggle added test1</p>
      <p> test2 added</p>
      <p> added </p>
    </footer>
  );
};

export default Footer;
