import React from 'react';
import useDarkMode from "../hooks/useDarkMode";

const Navbar = () => {
  // calling my custom state hook (with local storage)
  const [darkMode, setDarkMode] = useDarkMode(false);
  // changing states value as long as it is a boolean
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
        // calling the Fn when clicked
          onClick={toggleMode}
          // getting the className from darkMode useEffect
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
