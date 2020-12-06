import './App.css';
import React from 'react';
import { ReactComponent as BWDLogo } from './icons/bwd.svg'
import { Navbar, NavItem, NavBurger, DropdownMenu } from './components/Navbar'

function App() {

  return (
    <div className="content-wrapper">
      <Navbar>
        <NavItem icon={BWDLogo} location="https://harrisfauntleroy.dev/" />
        <NavBurger>
          <DropdownMenu />
        </NavBurger>
      </Navbar>
      <div className="container">
        <h1>Coming soon...</h1>
      </div>
      <footer>&copy; 2020 Harris Fauntleroy</footer>
    </div>
  );
}

export default App;
