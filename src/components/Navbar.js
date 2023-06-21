import React from 'react'
import "./Navbar.css"
const Navbar = () => {
  return (
    <div class="container">
        <div class="tabs">
            <input type="radio" id="radio-1" name="tabs"/>
            <label class="tab" for="radio-1">Search</label>
            <input type="radio" id="radio-2" name="tabs"/>
            <label class="tab" for="radio-2">About</label>
            <span class="glider"></span>
        </div>
    </div>
  )
}

export default Navbar