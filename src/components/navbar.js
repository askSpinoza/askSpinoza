import React, { useState } from 'react';

function Navigation() {
  const [isNavOpen, setNavOpen] = useState(false);
  
  const handleNavToggle = () => {
    setNavOpen(!isNavOpen);
  }

  return (
    <nav>
      <button onClick={handleNavToggle}>Toggle Navigation</button>
      <ul className={`nav-links ${isNavOpen ? 'open' : ''}`}>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navigation;
