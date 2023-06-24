import React from 'react'
import "./Navbar.css"
const Navbar = ({darkMode}) => {
  return (
      <div class="container">
          <div class="tabs" style={darkMode ? {backgroundColor: "#212121", boxShadow: "15px 15px 30px rgb(25, 25, 25), -15px -15px 30px rgb(60, 60, 60)"} : {}}>
              <input type="radio" id="radio-1" name="tabs"/>
              <label class="tab" for="radio-1">Search</label>
              <input type="radio" id="radio-2" name="tabs"/>
              <label class="tab" for="radio-2">About</label>
              <span class="glider" style={darkMode ? {backgroundColor: "grey"} : {}}></span>
          </div>
      </div>
  )
}

export default Navbar