import './App.css';
import React from 'react';
import { Navbar, NavBurger, DropdownMenu, Logo } from './components/Navbar'
import { Link } from "react-scroll";

function App() {

  return (
    <div className="content-wrapper">
      <Navbar>
        <Logo />
        <ul className="navbar-nav desktop">
          <Link to="1"
            activeClass="active"
            className="nav-item link"
            spy={true}
            smooth={true}
            offset={-61}
            duration={500}>Home</Link>
          <Link to="2"
            activeClass="active"
            className="nav-item link"
            spy={true}
            smooth={true}
            offset={-61}
            duration={500}>Services</Link>
          <Link to="3"
            activeClass="active"
            className="nav-item link"
            spy={true}
            smooth={true}
            offset={-61}
            duration={500}>Pricing</Link>
          <Link to="4"
            activeClass="active"
            className="nav-item link"
            spy={true}
            smooth={true}
            offset={-61}
            duration={500}>Contact</Link>
          <Link to="5"
            activeClass="active"
            className="nav-item link"
            spy={true}
            smooth={true}
            offset={-61}
            duration={500}>Portfolio</Link>
        </ul>
        <NavBurger>
          <DropdownMenu />
        </NavBurger>
      </Navbar>
      <div className="container" id="1">
        <h1>Bespoke Web Design</h1>
      </div>
      <div className="container" id="2">
        <h1>What we offer</h1>
      </div>
      <div className="container" id="3">
        <h1>Pricing</h1>
      </div>
      <div className="container" id="4">
        <h1>Contact</h1>
      </div>
      <div className="container" id="5">
        <h1>Portfolio</h1>
      </div>
      <footer>&copy; 2020 Bespoke Web Design</footer>
    </div >
  );
}

export default App;
