import React from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { auth, db } from "../firebase";
import { useEffect, useState } from "react";
import DashboardNavbar from "../component/dashboardnav";
import { Link } from "react-router-dom";

import {FiHome, FiCalendar, FiHeart, FiBell, FiMenu, FiX } from "react-icons/fi";


const SavedDestinations = () => {
  const [saved, setSaved] = useState([]);
  const [openSidebar, setOpenSidebar] = useState(false);

  useEffect(() => {
    if (!auth.currentUser) return;

    const userId = auth.currentUser.uid;
    const savedRef = collection(db, "users", userId, "savedDestinations");

    const unsubscribe = onSnapshot(savedRef, (snapshot) => {
      setSaved(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="min-h-screen bg-blue-100">

      {/* Top Navbar */}
      <DashboardNavbar />

      {/* Dashboard Container */}
      <div className="flex">

        {/* Sidebar */}
        <div className={`fixed md:relative top-0 left-0 h-screen bg-white shadow-md w-64 p-10 transition-transform duration-300 z-40
            ${openSidebar ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}>
          
          <h3 className="text-2xl font-bold mb-8 text-blue-600">Menu</h3>

          <ul className="space-y-12 text-gray-700 text-xl font-medium">
            <li className="flex items-center space-x-3 hover:text-blue-600 cursor-pointer ">
              <FiHome size={20} /><Link to={'/dashboard'}> <span>Dashboard</span></Link>
            </li>
            <li className="flex items-center space-x-3 hover:text-blue-600 cursor-pointer">
              <FiCalendar size={20} /> <span>My Trips</span>
            </li>
            <li className="flex items-center space-x-3 hover:text-blue-600 cursor-pointer">
              <FiHeart size={20} /><Link to={'/dashboard/saved'}><span>Saved</span></Link> 
            </li>
            <li className="flex items-center space-x-3 hover:text-blue-600 cursor-pointer">
              <FiBell size={20} /><Link to={''}><span>Notifications</span></Link> 
            </li>
            <li className="flex items-center space-x-3 hover:text-blue-600 cursor-pointer">
              <FiHome size={20} /><Link to={'/'}><span>Home</span></Link> 
            </li>
          </ul>
        </div>

        {/* Mobile toggle button */}
        <button
          className="md:hidden fixed top-20 right-4 z-50 bg-blue-600 p-2 rounded-full text-white shadow-md"
          onClick={() => setOpenSidebar(!openSidebar)}
        >
          {openSidebar ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        {/* Main Content */}
       <div className="flex-1 p-6 pt-10 md:ml-4 mt-4">

          <h2 className="text-2xl font-bold mb-4 ">Saved Destinations</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {saved.map((item) => (
          <div key={item.id} className="bg-white shadow rounded p-4">
            <img src={item.image} className="w-full h-40 object-cover" />
            <h3 className="font-bold text-lg mt-2">{item.name}</h3>
            <p className="text-gray-500">{item.country}</p>
          </div>
          ))} 
      </div>
      </div>
          

        
      </div>

    </div>
  );
};

export default SavedDestinations;
