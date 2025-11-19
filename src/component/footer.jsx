import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div >
      <footer className="bg-blue-900 text-gray-200 py-16 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">

        {/* Logo & About */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-4">TravelEase</h2>
          <p className="text-gray-300 text-sm leading-relaxed">
            Your trusted partner for flights, hotels, tours, and unforgettable travel experiences.
          </p>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold text-lg mb-4 text-white">Company</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Careers</li>
            <li className="hover:text-white cursor-pointer">Press</li>
            <li className="hover:text-white cursor-pointer">Blog</li>
          </ul>
        </div>

        {/* Explore */}
        <div>
          <h3 className="font-semibold text-lg mb-4 text-white">Explore</h3>
          <ul className="space-y-2 text-sm">
          <Link to={'/des'}><li className="hover:text-white cursor-pointer">Destinations</li></Link>
            <Link to={'/hotel'}><li className="hover:text-white cursor-pointer">Hotels</li></Link>
            <Link to={'/tours'}><li className="hover:text-white cursor-pointer">Tours</li></Link>
            <Link to={'travel'}><li className="hover:text-white cursor-pointer">Travel Deals</li></Link>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-semibold text-lg mb-4 text-white">Subscribe</h3>
          <p className="text-gray-300 text-sm mb-4">
            Get travel tips, exclusive deals, and updates.
          </p>

          <div className="flex items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 text-black rounded-l-lg focus:outline-none"
            />
            <button className="bg-blue-600 px-5 py-3 rounded-r-lg text-white hover:bg-blue-700">
              Join
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-5 mt-5 text-lg">
            <FaFacebook className="hover:text-white cursor-pointer" />
            <FaInstagram className="hover:text-white cursor-pointer" />
            <FaTwitter className="hover:text-white cursor-pointer" />
            <FaYoutube className="hover:text-white cursor-pointer" />
          </div>
        </div>

      </div>

      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-400">
        © 2025 TravelEase. All Rights Reserved.
      </div>
    </footer>
    </div>
  )
}

export default Footer
