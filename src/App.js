import "./App.css";
import React from "react";
import "./assets/styles/tailwind.css";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { Feature } from "./components/Feature";
import { Partners } from "./components/Partners";
import { Portfolio } from "./components/Portfolio";
import { Testimonial } from "./components/Testimonial";
import { Tech } from "./components/Tech";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Footer } from "./components/Footer";
import { Contact } from "./components/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Feature />
      {/* <Partners /> */}
      <Portfolio />
      <Testimonial />
      <Tech />
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
