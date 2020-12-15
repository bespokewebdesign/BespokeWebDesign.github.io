import "./App.css";
import React from "react";
import { Navbar, NavBurger, DropdownMenu, Logo } from "./components/Navbar";
import { Link } from "react-scroll";
import { Home } from "./components/pages/Home";
import { Services } from "./components/pages/Services";
import { Pricing } from "./components/pages/Pricing";
import { Contact } from "./components/pages/Contact";
import { About } from "./components/pages/About";
import { Footer } from "./components/Unity/Footer";
import { PageWrapper, ContentWrapper } from "./components/Unity/Layout";

function App() {
  return (
    <PageWrapper>
      <Navbar>
        <Logo />
        <ul className='navbar-nav desktop'>
          <Link
            to='1'
            activeClass='active'
            className='nav-item link'
            spy={true}
            smooth={true}
            offset={-61}
            duration={500}>
            Home
          </Link>
          <Link
            to='2'
            activeClass='active'
            className='nav-item link'
            spy={true}
            smooth={true}
            offset={-61}
            duration={500}>
            Services
          </Link>
          <Link
            to='3'
            activeClass='active'
            className='nav-item link'
            spy={true}
            smooth={true}
            offset={-61}
            duration={500}>
            Pricing
          </Link>
          <Link
            to='4'
            activeClass='active'
            className='nav-item link'
            spy={true}
            smooth={true}
            offset={-61}
            duration={500}>
            Contact
          </Link>
          <Link
            to='5'
            activeClass='active'
            className='nav-item link'
            spy={true}
            smooth={true}
            offset={-61}
            duration={500}>
            Portfolio
          </Link>
        </ul>
        <NavBurger>
          <DropdownMenu />
        </NavBurger>
      </Navbar>
      <ContentWrapper>
        <Home></Home>
        <Services></Services>
        <Pricing></Pricing>
        <Contact></Contact>
        <About></About>
      </ContentWrapper>
      <Footer>&copy; 2020 Bespoke Web Design</Footer>
    </PageWrapper>
  );
}

export default App;
