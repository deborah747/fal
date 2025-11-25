import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { FiMenu, FiX } from "react-icons/fi";

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const { user } = useAuth();

  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      if (isHome) setScrolled(window.scrollY > 50);
      else setScrolled(true);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  // Logout
  const handleLogout = async () => {
    await signOut(auth);
    navigate("/");
  };

  // Dynamic color for links
  const linkColor = !isHome || scrolled ? "text-blue-600" : "text-white";

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 
      ${scrolled ? "bg-white shadow-sm" : isHome ? "bg-transparent" : "bg-white"}`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* LOGO */}
        <Link to="/">
          <h1 className={`text-3xl font-bold ${linkColor}`}>
            TravelEase
          </h1>
        </Link>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex space-x-8 font-medium text-lg">
          <Link to="/des"><p className={linkColor}>Destination</p></Link>
          <Link to="/hotel"><p className={linkColor}>Hotels</p></Link>
          <Link to="/tour"><p className={linkColor}>Tours</p></Link>
          <Link to="/contact"><p className={linkColor}>Contact</p></Link>
        </div>

        {/* DESKTOP AUTH */}
        <div className="hidden md:flex space-x-4">
          {user ? (
            <>
              <Link to="/dashboard">
                <button className={`font-medium text-lg pt-2 ${linkColor}`}>Dashboard</button>
              </Link>

              <button
                onClick={handleLogout}
                className={`px-4 py-2 font-medium text-lg rounded-md ${
                  !isHome || scrolled
                    ? "bg-blue-600 text-white"
                    : "bg-white text-blue-600"
                }`}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/signin">
                <button className={` font-medium text-lg pt-2 ${linkColor}`}>Login</button>
              </Link>
              <Link to="/signup">
                <button
                  className={`px-4 py-2 rounded-md font-medium text-lg ${
                    !isHome || scrolled
                      ? "bg-blue-600 text-white"
                      : "bg-white text-blue-600"
                  }`}
                >
                  Sign Up
                </button>
              </Link>
            </>
          )}
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <FiX className={`${linkColor}`} />
          ) : (
            <FiMenu className={`${linkColor}`} />
          )}
        </button>
      </div>

      {/* MOBILE DROPDOWN */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 
        ${open ? "max-h-screen py-4" : "max-h-0"}`}
      >
        <div className="flex flex-col items-center space-y-4 text-lg font-medium">

          <Link to="/des" onClick={() => setOpen(false)}>
            <p className={linkColor}>Destination</p>
          </Link>

          <Link to="/hotel" onClick={() => setOpen(false)}>
            <p className={linkColor}>Hotels</p>
          </Link>

          <Link to="/tour" onClick={() => setOpen(false)}>
            <p className={linkColor}>Tours</p>
          </Link>

          <Link to="/contact" onClick={() => setOpen(false)}>
            <p className={linkColor}>Contact</p>
          </Link>

          {/* MOBILE AUTH */}
          {user ? (
            <>
              <Link to="/dashboard" onClick={() => setOpen(false)}>
                <p className={linkColor}>Dashboard</p>
              </Link>

              <button
                onClick={() => {
                  setOpen(false);
                  handleLogout();
                }}
                className="px-4 py-2 bg-blue-600 text-white rounded-md"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/signin" onClick={() => setOpen(false)}>
                <p className={linkColor}>Login</p>
              </Link>

              <Link to="/signup" onClick={() => setOpen(false)}>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md">
                  Sign Up
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
