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
      const postCards = document.querySelectorAll('.post-card');
      postCards.forEach(postCard => {
        postCard.classList.add('dark-mode');
      });
      const titles = document.querySelectorAll('.title');
      titles.forEach(title => {
        title.classList.add('dark-mode');
      });
      const infos = document.querySelectorAll('.info');
      infos.forEach(info => {
        info.classList.add('dark-mode');
      });
      const svgs = document.querySelectorAll('svg');
      svgs.forEach(svg => {
        svg.classList.add('dark-mode');
      });
      const sb = document.querySelector('.form');
      sb.classList.add('dark-mode');
      document.querySelector(".form input").style.color = "white";
    } else {
      document.body.classList.remove('dark-mode');
      const postCards = document.querySelectorAll('.post-card');
      postCards.forEach(postCard => {
        postCard.classList.remove('dark-mode');
      });
      const titles = document.querySelectorAll('.title');
      titles.forEach(title => {
        title.classList.remove('dark-mode');
      });
      const infos = document.querySelectorAll('.info');
      infos.forEach(info => {
        info.classList.remove('dark-mode');
      });
      const svgs = document.querySelectorAll('svg');
      svgs.forEach(svg => {
        svg.classList.remove('dark-mode');
      });
      const sb = document.querySelector('.form');
      sb.classList.remove('dark-mode');
      document.querySelector(".form input").style.color = "black";
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
            {/* <span class="star star--3"></span> */}
            <span class="star star--4"></span>
            {/* <span class="star star--5"></span> */}
            {/* <span class="star star--6"></span> */}
        </label>
      </div>
    </div>
    <div className='search-content'>
      <div>
        <SearchBar darkMode={isDarkMode}/>
        </div>
    </div>
   </>
  );
}

export default App;
