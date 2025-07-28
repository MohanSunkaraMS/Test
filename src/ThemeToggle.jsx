
import React, {useState} from "react";
import { useTheme } from './ThemeContext';

function ThemeToggle ()  {
  const {theme,toggleTheme} = useTheme()
  return(

   <button onClick={toggleTheme}>
  Current Mode: {theme} mode
</button>


  )
}

export default ThemeToggle