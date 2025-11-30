import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebase";
import {doc,setDoc,deleteDoc,getDoc,collection,getDocs,} from "firebase/firestore";

const Destination = () => {
  const [continent, setContinent] = useState("All");
  const [savedList, setSavedList] = useState([]); 
  const navigate = useNavigate();

  const destinations = [
    {
      id: 1,
      name: "Paris",
      country: "France",
      continent: "Europe",
      image: "/images/parisss.jpg",
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
      image: "/images/ct.jpg",
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
      name: "Miami",
      country: "USA",
      continent: "North America",
      image: "/images/venice.jpg",
      desc: "One of the most beautiful cities built on water.",
    },
    {
      id: 7,
      name: " Bueno Aires",
      country: "Argentina",
      continent: "South America",
      image: "/images/aargemtina.jpg",
      desc: "Capital city — famous for nightlife, tango, food, and historic neighborhood.",
    },
    {
      id: 8,
      name: "Venice",
      country: "Italy",
      continent: "Europe",
      image: "/images/venice.jpg",
      desc: "One of the most beautiful cities built on water.",
    },
    {
      id: 9,
      name: "Istanbul",
      country: "Turkey",
      continent: "Asia",
      image: "/images/turkey.jpg",
      desc: "One of the most beautiful cities built on water.",
    },
  ];

  // ✅ Fetch saved destinations on page load
  useEffect(() => {
    const fetchSaved = async () => {
      if (!auth.currentUser) return;
      const userId = auth.currentUser.uid;

      const savedRef = collection(db, "users", userId, "savedDestinations");
      const snapshot = await getDocs(savedRef);

      setSavedList(snapshot.docs.map((doc) => doc.id));
    };

    fetchSaved();
  }, []);

  const filtered =
    continent === "All"
      ? destinations
      : destinations.filter((d) => d.continent === continent);

  // ✅ View Details (requires login)
  const handleViewDetails = (id) => {
    if (!auth.currentUser) {
      alert("Please sign in to view destination details.");
      navigate("/signin");
      return;
    }
    navigate(`/des/${id}`);
  };

  // ✅ Toggle Save / Unsave
  const handleSave = async (item) => {
    if (!auth.currentUser) {
      alert("Please sign in to save destinations.");
      navigate("/signin");
      return;
    }

    const userId = auth.currentUser.uid;
    const ref = doc(db, "users", userId, "savedDestinations", item.id.toString());

    const exists = savedList.includes(item.id.toString());

    if (exists) {
      // ✅ Remove from saved
      await deleteDoc(ref);
      setSavedList(savedList.filter((id) => id !== item.id.toString()));
      alert(`${item.name} removed from saved.`);
    } else {
      // ✅ Save new item
      await setDoc(ref, item);
      setSavedList([...savedList, item.id.toString()]);
      alert(`${item.name} has been saved.`);
    }
  };

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
        
        {/* Filters */}
        <div className="bg-white p-6 rounded-xl shadow-sm h-96 md:sticky top-24">
          <h2 className="text-xl font-semibold text-blue-700 mb-4">Filter</h2>
          <label className="block mb-2 font-medium text-gray-700">
            Continent
          </label>
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

        {/* Destination Cards */}
        <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-sm rounded-xl overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover"
              />

              <div className="p-5">
                <h3 className="text-xl font-bold text-blue-700">
                  {item.name}
                </h3>
                <p className="text-gray-600 text-sm">{item.country}</p>
                <p className="text-gray-700 mt-2 text-sm">{item.desc}</p>

                {/* Buttons */}
                <div className="flex items-center justify-between mt-4">
                  <button
                    onClick={() => handleViewDetails(item.id)}
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                  >
                    View Details
                  </button>

                  <button
                    onClick={() => handleSave(item)}
                    className={`px-4 py-2 rounded-md text-white ${
                      savedList.includes(item.id.toString())
                        ? "bg-gray-500"
                        : "bg-blue-600 hover:bg-blue-700"
                    }`}
                  >
                    {savedList.includes(item.id.toString()) ? "Saved" : "Save"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Destination;
