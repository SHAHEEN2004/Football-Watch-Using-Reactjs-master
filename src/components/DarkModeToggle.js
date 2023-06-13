import React, { useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import './DarkModeToggle.css'
const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleToggle = () => {
    setDarkMode(prev => !prev);
    document.body.classList.toggle('dark-mode');
  };

  return (
    <div className="dark-mode-toggle">
  {darkMode ? (
    <FaSun onClick={handleToggle} />
  ) : (
    <FaMoon onClick={handleToggle} />
  )}
</div>

  );
};

export default DarkModeToggle;
