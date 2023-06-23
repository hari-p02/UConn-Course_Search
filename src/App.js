import './App.css';
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggleClick = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
      // const postCard = document.querySelector('.post-card');
      // postCard.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
      // const postCard = document.querySelector('.post-card');
      // postCard.classList.remove('dark-mode');
    }
  }, [isDarkMode]);
  
  return (
   <>
    <div className='nav-control'>
      <Navbar />
      <div class="toggleWrapper">
        <input
            type="checkbox"
            className="dn"
            id="dn"
            checked={isDarkMode}
            onClick={handleToggleClick}
          />
        <label for="dn" class="toggle">
            <span class="toggle__handler">
                <span class="crater crater--1"></span>
                <span class="crater crater--2"></span>
                <span class="crater crater--3"></span>
            </span>
            <span class="star star--1"></span>
            <span class="star star--2"></span>
            <span class="star star--3"></span>
            <span class="star star--4"></span>
            <span class="star star--5"></span>
            <span class="star star--6"></span>
        </label>
      </div>
    </div>
    <div className='search-content'>
      <div>
        <SearchBar />
        </div>
    </div>
   </>
  );
}

export default App;
