import React, { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";
import { FaReact } from "react-icons/fa";
import Hero from "./Hero";
import About from "./About";
import Cards from "./Cards";
import Footer from "./Footer";
import WhyReact from "./WhyReact";

const Home = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <div className="flex min-h-screen flex-col bg-[#121212]">
      <nav className="fixed py-2 mx-auto lg:px-16 border-b text-gray-300 border-b-[#33353F] bg-[#121212] top-0 left-0 right-0 z-10 bg-opacity-100 ">
        <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
          {/* LOGO */}
          <span className="flex flex-row text-2xl text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">ReactDev <FaReact size={35} className=" text-secondary-600" /></span>
          <div className="mobile-menu block md:hidden">
            {!navbarOpen ? (
              <button
                onClick={() => setNavbarOpen(true)}
                className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
              >
                <AiOutlineMenu className="h-5 w-5" />
              </button>
            ) : (
              <button
                onClick={() => setNavbarOpen(false)}
                className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
              >
                <AiOutlineClose className="h-5 w-5" />
              </button>
            )}
          </div>
          <div className="menu hidden md:block md:w-auto" id="navbar">
            <div className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
              
                <button onClick={() => scrollToSection('section3')} >About</button>
                <button onClick={() => scrollToSection('section2')} >Subscribe</button>
                <button onClick={() => scrollToSection('section4')} >Contact</button>
            </div>
          </div>
        </div>
        {navbarOpen ? (<div className="flex flex-col py-4 items-center bg-[#121212] md:hidden">
        <button onClick={() => {scrollToSection('section3'); setNavbarOpen(!navbarOpen)}} className="py-3 w-[300px] m-1 px-16  hover:bg-pink-600">About</button>
                <button onClick={() => {scrollToSection('section2'); setNavbarOpen(!navbarOpen)}} className="py-3 w-[300px]  m-1 px-16  hover:bg-pink-600">Subscribe</button>
                <button onClick={() => {scrollToSection('section4'); setNavbarOpen(!navbarOpen)}} className="py-3 w-[300px] m-1 px-16  hover:bg-pink-600">Contact</button>
      </div>) : null}
      </nav>
      <div id="section1" className="container mt-24 mx-auto px-12 py-4">
        <Hero />
      </div>
      <div id="section4" className="container mt-16 mx-auto px-12 py-4">
        <WhyReact />
      </div>
      <div id="section2">
        <Cards />
      </div>
      <div id="section3">
        <About />
      </div>
      <div id="section4">
        <Footer />
      </div>
    </div>
  );
};

export default Home;