import React from "react";
import "../sass/components/_header.scss";

const Header = () => {
  return (
    <div className="page-container">
      <header>
        <nav className="navbar">
          <a className="navbar-brand" href="">
            <span className="brand-header">
              <h1>Trabook</h1>
              <img src={`${process.env.PUBLIC_URL}/icons/Vector.svg`} alt="logo"/>
            </span>
          </a>
          <div className="center-container">
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Destination</a>
            <a href="">Tour</a>
            <a href="">Blog</a>
          </div>
          <div className="end-container">
            <button id="login-button">Login</button>
            <button id="signup-button">Sign Up</button>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
