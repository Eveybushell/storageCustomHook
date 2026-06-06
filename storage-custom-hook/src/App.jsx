import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { useLocalStorage } from './useLocalStorage'

function App() {
  // Use our custom hook! 
  // It takes a key ('theme') and a default value ('light')
  const [theme, setTheme] = useLocalStorage('theme', 'light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // Dynamically apply a class or data-attribute for styling
  return (
    <div className={`app-container ${theme}`}>
      <h1>{theme === 'light' ? '☀️ Light Mode' : '🌙 Dark Mode'}</h1>
      <p>Refresh the page! Your preference is safely stored.</p>
      <button onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
    </div>
  );
}

export default App;