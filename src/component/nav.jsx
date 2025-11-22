import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Check if the current page is home
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      if (isHome) setScrolled(window.scrollY > 50);
      else setScrolled(true); 
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);

  }, [isHome]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 
        ${scrolled ? "bg-white shadow-sm" : isHome ? "bg-transparent" : "bg-white"}
      `}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-10 py-4">

        <Link to="/">
          <h1
            className={`text-3xl font-bold 
              ${!isHome || scrolled ? "text-blue-600 " : "text-white"}
            `}
          >
            TravelEase
          </h1>
        </Link>

        <div
          className="flex space-x-8 font-medium text-lg "
        >
          <Link to="/des"><p className={` ${!isHome || scrolled ? "text-blue-600 hover:text-blue-800 " : "text-white hover:text-gray-400 "}`}>Destination</p></Link>
          <Link to="/hotel"><p className={` ${!isHome || scrolled ? "text-blue-600 hover:text-blue-800 " : "text-white hover:text-gray-400 "}`}>Hotels</p></Link>
          <Link to="/tour"><p className={` ${!isHome || scrolled ? "text-blue-600 hover:text-blue-800 " : "text-white hover:text-gray-400 "}`}>Tours</p ></Link>
          <Link to="/contact"><p className={` ${!isHome || scrolled ? "text-blue-600 hover:text-blue-800 " : "text-white hover:text-gray-400 "}`}>Contact</p></Link>
        </div>

        <div className="hidden md:flex space-x-4 font-medium text-lg">
          <Link to="/signin">
            <button
              className={` pt-2  ${!isHome || scrolled ? "text-blue-600  hover:text-blue-800" : "text-white  hover:text-gray-400"}`}
            >
              Login
            </button>
          </Link>

          <Link to="/signup">
            <button
              className={`px-4 py-2 rounded-md transition
                ${!isHome || scrolled ? "bg-blue-600 text-white hover:bg-blue-800" : "bg-white text-blue-600  hover:bg-gray-300"}
              `}
            >
              Sign Up
            </button>
          </Link>
        </div>

      </div>
    </nav>
  );
};

export default Nav;
