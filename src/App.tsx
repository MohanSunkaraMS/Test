import React from 'react';
import { ThemeProvider, useTheme } from './ThemeContext';
import Header from './Card';
import Content from './CountContext';
import Footer from './ThemedBox';

// Separate component to use the theme (since hooks can't be used outside Provider)
const MainContent = () => {
  const { theme } = useTheme(); // light or dark or any value you define

  // Define background color based on the theme
  const backgroundColor = theme === 'dark' ? '#333' : '#f5f5f5';
  const textColor = theme === 'dark' ? '#fff' : '#000';

  return (
    <div style={{ backgroundColor, color: textColor, minHeight: '100vh', padding: '20px' }}>
      <Header />
      <Content />
      <Footer />
      <p> test2 added</p>
    </div>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <MainContent />
    </ThemeProvider>
  );
};

export default App;
