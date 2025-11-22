import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const DashboardNavbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md px-6 py-4 flex items-center justify-between sticky top-0 z-50">
      
      {/* Logo */}
      <h2 className="text-2xl font-bold text-blue-600">MyTrips</h2>

      {/* Desktop Links */}
      <div className="hidden md:flex space-x-8 text-gray-700 font-medium">
        <Link to="/dashboard" className="hover:text-blue-600">Dashboard</Link>
        <Link to="/dashboard/trips" className="hover:text-blue-600">My Trips</Link>
        <Link to="/dashboard/saved" className="hover:text-blue-600">Saved</Link>
        <Link to="/dashboard/settings" className="hover:text-blue-600">Settings</Link>
      </div>

      {/* Profile Icon */}
      <div className="hidden md:flex items-center space-x-3">
        <img 
          src="/images/user.jpg" 
          alt="profile"
          className="w-10 h-10 rounded-full border border-gray-300"
        />
      </div>

      {/* Mobile Menu Button */}
      <button 
        className="md:hidden"
        onClick={() => setOpen(!open)}
      >
        {open ? <FiX size={28} /> : <FiMenu size={28} />}
      </button>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col py-4 md:hidden">
          <Link 
            to="/dashboard" 
            className="px-6 py-3 hover:bg-gray-100 border-b"
            onClick={() => setOpen(false)}
          >
            Dashboard
          </Link>
          <Link 
            to="/dashboard/trips" 
            className="px-6 py-3 hover:bg-gray-100 border-b"
            onClick={() => setOpen(false)}
          >
            My Trips
          </Link>
          <Link 
            to="/dashboard/saved" 
            className="px-6 py-3 hover:bg-gray-100 border-b"
            onClick={() => setOpen(false)}
          >
            Saved
          </Link>
          <Link 
            to="/dashboard/settings" 
            className="px-6 py-3 hover:bg-gray-100"
            onClick={() => setOpen(false)}
          >
            Settings
          </Link>
        </div>
      )}
    </nav>
  );
};

export default DashboardNavbar;

