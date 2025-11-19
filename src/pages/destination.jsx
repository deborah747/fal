import React, { useState } from 'react';
import { Link } from "react-router-dom";

const Destination = () => {
  const [continent, setContinent] = useState("All");

  const destinations = [
    {
      id: 1,
      name: "Paris",
      country: "France",
      continent: "Europe",
      image: "/images/paris.jpg",
      desc: "The city of romance and iconic landmarks.",
    },
    {
      id: 2,
      name: "Bali",
      country: "Indonesia",
      continent: "Asia",
      image: "/images/bali.jpg",
      desc: "Stunning beaches and refreshing tropical vibes.",
    },
    {
      id: 3,
      name: "Cape Town",
      country: "South Africa",
      continent: "Africa",
      image: "/images/capetown.jpg",
      desc: "Mountains, oceans, wildlife — everything in one.",
    },
    {
      id: 4,
      name: "Dubai",
      country: "UAE",
      continent: "Asia",
      image: "/images/dubai.jpg",
      desc: "Luxury shopping, modern architecture, and desert tours.",
    },
    {
      id: 5,
      name: "New York",
      country: "USA",
      continent: "North America",
      image: "/images/newyork.jpg",
      desc: "The vibrant city that never sleeps.",
    },
    {
      id: 6,
      name: "Venice",
      country: "Italy",
      continent: "Europe",
      image: "/images/venice.jpg",
      desc: "One of the most beautiful cities built on water.",
    },
  ];

  const filtered = continent === "All"
    ? destinations
    : destinations.filter((d) => d.continent === continent);

  return (
    <div className="min-h-screen">
      <section
        className="h-[50vh] bg-cover bg-center flex items-center justify-center text-white relative"
        style={{ backgroundImage: "url('/images/bgiii.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <h1 className="relative text-5xl font-bold">Top Destinations</h1>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        <div className="bg-white p-6 rounded-xl shadow-sm h-fit md:sticky top-24">
          <h2 className="text-xl font-semibold text-blue-700 mb-4">Filter</h2>

          <label className="block mb-2 font-medium text-gray-700">Continent</label>
          <select
            className="w-full border p-2 rounded-md mb-6"
            value={continent}
            onChange={(e) => setContinent(e.target.value)}
          >
            <option>All</option>
            <option>Africa</option>
            <option>Asia</option>
            <option>Europe</option>
            <option>North America</option>
            <option>South America</option>
            <option>Australia</option>
          </select>
        </div>

        <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-sm rounded-xl overflow-hidden hover:shadow-xl transition"
            >
              <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
              <div className="p-5">
                <h3 className="text-xl font-bold text-blue-700">{item.name}</h3>
                <p className="text-gray-600 text-sm">{item.country}</p>
                <p className="text-gray-700 mt-2 text-sm">{item.desc}</p>

                <Link
                  to={`/des/${item.id}`}
                  className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Destination;
