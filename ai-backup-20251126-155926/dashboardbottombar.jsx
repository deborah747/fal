import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FiHome, FiCalendar, FiHeart, FiLogOut } from "react-icons/fi";
import { signOut } from "firebase/auth";
import { auth } from "../firebase"; // adjust path if needed

const DashboardBottomBar = () => {
  const location = useLocation();

  const handleLogout = async () => {
    await signOut(auth);
    window.location.href = "/"; // redirect to homepage
  };

  

  return (
    <div className="fixed bottom-0 left-64 w-full bg-blue-600  shadow-lg py-3 px-4 flex justify-around z-50 rounded-md">
      
    </div>
  );
};

export default DashboardBottomBar;
