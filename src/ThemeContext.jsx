import React, { useContext,createContext,useState } from "react";

const ThemeContext = createContext();
export const ThemeProvider = ({children}) => {
  const [theme,setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
  }
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={theme === 'light' ? 'bg-white text-black' : 'bg-gray-900 text-white'} style={{ minHeight: '100vh' }}>
        {children}
      </div>
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
const context = useContext(ThemeContext)
  return context
}














