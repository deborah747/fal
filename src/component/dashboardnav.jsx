import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import Logout from "./logout";

const DashboardNavbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-sm px-12 py-4 flex items-center justify-between sticky top-0 z-50">
      
      {/* Logo */}
      <h2 className="text-3xl font-bold text-blue-600">TravelEase</h2>

     
     
      <Logout/>

      {/* Mobile Menu Button */}
      <button 
        className="md:hidden"
        onClick={() => setOpen(!open)}
      >
        {open ? <FiX size={28} /> : <FiMenu size={28} />}
      </button>

      
    </nav>
  );
};

export default DashboardNavbar;

