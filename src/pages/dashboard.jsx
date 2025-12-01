import React, { useState, useEffect } from "react";
import DashboardNavbar from "../component/dashboardnav";
import { FiHome, FiCalendar, FiHeart, FiBell, FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import { collection, onSnapshot } from "firebase/firestore";
import { auth, db } from "../firebase";


const DashboardLayout = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [savedCount, setSavedCount] = useState(0);

useEffect(() => {
  if (!auth.currentUser) return;

  const userId = auth.currentUser.uid;
  const savedRef = collection(db, "users", userId, "savedDestinations");

  const unsubscribe = onSnapshot(savedRef, (snapshot) => {
    setSavedCount(snapshot.size);
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
              <FiHome size={20} /> <span>Dashboard</span>
            </li>
            
            <li className="flex items-center space-x-3 hover:text-blue-600 cursor-pointer">
              <FiHeart size={20} /><Link to={'/dashboard/saved'}><span>Saved</span></Link> 
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

          {/* Stats Cards */}
          <h2 className="text-2xl font-bold mb-4">Hello User,</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

            <div className="bg-white p-6 shadow rounded-xl border">
              <h3 className="text-lg font-semibold">Upcoming Trips</h3>
              <p className="text-3xl font-bold mt-2 text-blue-600">3</p>
            </div>

            <div className="bg-white p-6 shadow rounded-xl border">
              <h3 className="text-lg font-semibold">Completed</h3>
              <p className="text-3xl font-bold mt-2 text-green-600">1</p>
            </div>

            <div className="bg-white p-6 shadow rounded-xl border">
              <h3 className="text-lg font-semibold">Saved</h3>
              <p className="text-3xl font-bold mt-2 text-pink-600">{savedCount}</p>
            </div>

            <div className="bg-white p-6 shadow rounded-xl border">
              <h3 className="text-lg font-semibold">Notifications</h3>
              <p className="text-3xl font-bold mt-2 text-yellow-600">4</p>
            </div>
          </div>

          {/* Upcoming Trips */}
          <h2 className="text-2xl font-bold mt-10 mb-4">Upcoming Trips</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Trip Card */}
            <div className="bg-white shadow-md rounded-xl overflow-hidden">
              <img src="/images/parisss.jpg" alt="trip"
                className="h-40 w-full object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold">Paris, France</h3>
                <p className="text-gray-600">12 Mar 2025</p>
                <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-md">
                  View Details
                </button>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-xl overflow-hidden">
              <img src="/images/dubai.jpg" alt="trip"
                className="h-40 w-full object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold">Dubai, UAE</h3>
                <p className="text-gray-600">5 Apr 2025</p>
             <Link to={'/des/:id'}> <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-md">
                 View Details
                </button></Link>
              </div>
            </div>
             <div className="bg-white shadow-md rounded-xl overflow-hidden">
              <img src="/images/miami.jpg" alt="trip"
                className="h-40 w-full object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold">Miami</h3>
                <p className="text-gray-600">12 Aug 2025</p>
                <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-md">
                  View Details
                </button>
              </div>
            </div>

          </div>

        </div>
      </div>

    </div>
  );
};

export default DashboardLayout;
