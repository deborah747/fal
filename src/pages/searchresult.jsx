import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

const SearchResults = () => {
  const [results, setResults] = useState([]);
  const [hotels, setHotels] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  const query = new URLSearchParams(location.search).get("q")?.toLowerCase();

  // Your destination list (same from Destination page)
  const destinations = [
    {
      id: 1,
      name: "Paris",
      country: "France",
      image: "/images/parisss.jpg",
      desc: "Romantic city with iconic landmarks.",
    },
    {
      id: 2,
      name: "Bali",
      country: "Indonesia",
      image: "/images/bali.jpg",
      desc: "Tropical beaches and waterfalls.",
    },
    {
      id: 3,
      name: "Cape Town",
      country: "South Africa",
      image: "/images/capetownn.jpg",
      desc: "Mountains, ocean views, and wildlife.",
    },
    {
      id: 4,
      name: "Dubai",
      country: "UAE",
      image: "/images/dubai.jpg",
      desc: "Luxury lifestyle and desert tours.",
    },
  ];

  useEffect(() => {
    if (!query) return;

    // filter destinations by query
    const filtered = destinations.filter((d) =>
      d.name.toLowerCase().includes(query)
    );

    setResults(filtered);

    
  }, [query]);

  return (
    <div className="  px-20 h-screen bg-blue-50 pt-30">
      <h2 className="text-2xl font-bold mb-6 ">Search Results for "{query}"</h2>

      {/* Destinations */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {results.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow rounded-xl overflow-hidden"
          >
            <img src={item.image} className="h-48 w-full object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-bold">{item.name}</h3>
              <p className="text-gray-600">{item.country}</p>
              <p className="text-sm text-gray-700 mt-1">{item.desc}</p>

              <button
                onClick={() => navigate(`/des/${item.id}`)}
                className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-md"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      
    </div>
  );
};

export default SearchResults;
