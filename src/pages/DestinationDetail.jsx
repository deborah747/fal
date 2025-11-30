import React from "react";
import { useParams, Link } from "react-router-dom";

 export const destinationData = {
  1: {
    name: "Paris",
    image: "/images/parisss.jpg",
    description:
      "Experience the romance of Paris with iconic landmarks, vibrant culture, world-class food and timeless architecture.",
    area: "Champs-Élysées, Montmartre, Louvre District",
    location: "North-central France",
    hotels: [
      { id: 1,
       name: "Hotel Le Meurice",
       price: 120,
       images:[],
      amenties:[
        "Free WiFi",
       "Breakfast included",
       "Swimming Pool",
       "Airport Shuttle"
      ] ,
      rating:4.8,
       desc: "Elegant hotel located near Eiffel Tower with beautiful rooms, pool and spa services."        
    },
      { id: 2,
       name: "Paris Luxury Suites",
       price: 150
       },
      { id: 3,
       name: "Eiffel View Lodge",
      price: 180 },
    ],
  },
  2: {
    name: "Bali",
    image: "/images/bali.jpg",
    description:
      "Bali is a tropical paradise filled with beaches, temples, mountains and rich cultural experiences.",
    area: "Ubud, Seminyak, Canggu",
    location: "Indonesia, Southeast Asia",
    hotels: [
      { id: 1, name: "Bali Resort Spa", price: 90 },
      { id: 2, name: "Golden Palm Hotel", price: 110 },
    ],
  },
  3: {
    name: "Cape Town",
    image: "/images/ct.jpg",
    description:
      "From Table Mountain to coastal beaches, Cape Town offers adventure, beauty and vibrant culture.",
    area: "Table Mountain, V&A Waterfront",
    location: "South Africa",
    hotels: [
      { id: 1, name: "Ocean View Hotel", price: 100 },
      { id: 2, name: "Safari Lodge", price: 130 },
    ],
  },
};

const DestinationDetail = () => {
  const { id } = useParams();
  const data = destinationData[id];

  if (!data) {
    return (
      <p className="p-10 text-center text-xl font-semibold">
        Destination not found
      </p>
    );
  }

  return (
    <div className="pb-20">
      {/* HERO SECTION */}
      <div className="relative h-[380px] w-full">
        <img
          src={data.image}
          className="w-full h-full object-cover brightness-75 rounded-b-2xl"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <h1 className="absolute bottom-10 left-10 text-white text-5xl font-extrabold drop-shadow-md">
          {data.name}
        </h1>
      </div>

      {/* CONTENT SECTION */}
      <div className="max-w-6xl mx-auto mt-10 px-5 grid md:grid-cols-2 gap-10">
        {/* Left Info */}
        <div>
          <h2 className="text-3xl font-bold text-blue-600 mb-3">
            About {data.name}
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            {data.description}
          </p>

          <div className="mt-6">
            <h3 className="text-2xl font-semibold text-blue-600">
              Popular Areas
            </h3>
            <p className="text-gray-600 mt-1">{data.area}</p>

            <h3 className="text-2xl font-semibold text-blue-600 mt-5">
              Location
            </h3>
            <p className="text-gray-600 mt-1">{data.location}</p>
          </div>
        </div>

        {/* Hotel Options */}
        <div>
          <h2 className="text-3xl font-bold mb-4 text-blue-600">
            Choose Your Hotel
          </h2>

          <div className="grid gap-5">
            {data.hotels.map((hotel) => (
              <Link
                key={hotel.id}
                to={`/des/${id}/hotel/${hotel.id}`}
                className="block"
              >
                <div className="cursor-pointer p-5 rounded-xl shadow-md border transition hover:shadow-lg hover:-translate-y-1 bg-white border-gray-200">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="text-xl font-semibold">{hotel.name}</h4>
                      <p className="text-gray-500">Standard Room</p>
                    </div>
                    <p className="text-blue-600 text-2xl font-bold">
                      ${hotel.price}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetail;
