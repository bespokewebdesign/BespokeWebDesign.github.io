import './App.css';
import React from 'react';
import { Navbar, NavBurger, DropdownMenu, Logo } from './components/Navbar'

function App() {

  return (
    <div className="content-wrapper">
      <Navbar>
        <Logo />
        <NavBurger>
          <DropdownMenu />
        </NavBurger>
      </Navbar>
      <div className="container">
        <h1>Coming soon...</h1>
      </div>
      <footer>&copy; 2020 Bespoke Web Design</footer>
    </div>
  );
}

export default App;
