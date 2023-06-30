import React from "react";
import "./Navbar.css";
import { Link, Outlet, useLocation } from "react-router-dom";
const Navbar = () => {
  const location = useLocation();
  const { pathname } = location;
  const segments = pathname.split("/");
  console.log(segments);
  const bkstyle = {
    width: "100px",
    backgroundColor: "#e6eef9",
    transition: "0.25s ease-out",
    color: "#185ee0",
  };
  return (
    <div>
      <div class="container">
        <div class="tabs">
          <Link
            class="tab link-1"
            to="/"
            style={segments[1] === "" ? bkstyle : {}}
          >
            Search
          </Link>
          <Link
            class="tab link-2"
            to="/about"
            style={segments[1] === "about" ? bkstyle : {}}
          >
            About
          </Link>
          <span class="glider"></span>
        </div>
        {/* <div class="toggleWrapper">
          <input type="checkbox" className="dn" id="dn" />
          <label for="dn" class="toggle">
            <span class="toggle__handler">
              <span class="crater crater--1"></span>
              <span class="crater crater--2"></span>
              <span class="crater crater--3"></span>
            </span>
            <span class="star star--1"></span>
            <span class="star star--2"></span>           
            <span class="star star--4"></span>
          </label>
        </div> */}
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Navbar;
