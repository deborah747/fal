import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { destinationData } from "./DestinationDetail";

const HotelDetail = () => {
  const { id: destId, hotelId } = useParams();
  const dest = destinationData[destId];
  const navigate = useNavigate();

  if (!dest) return <p className="p-10 text-center text-xl">Destination not found.</p>;

  const hotel = dest.hotels.find((h) => String(h.id) === hotelId);
  if (!hotel) return <p className="p-10 text-center text-xl">Hotel not found.</p>;

  const handleBooking = () => {
    navigate(`/payment/${destId}`, { state: { hotel, destId } });
  };

  return (
    <div className="min-h-screen bg-gray-100 pb-20">
      {/* Image Gallery / Carousel */}
      <div className="w-full h-[400px] overflow-hidden relative">
        {hotel.images?.length > 0 ? (
          <img
            src={hotel.images[0]}
            alt={hotel.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gray-300 flex items-center justify-center">
            <span className="text-gray-500">No image available</span>
          </div>
        )}
        {/* optionally implement next/prev controls to go through images */}
      </div>

      <div className="max-w-4xl mx-auto px-6 py-10 bg-white rounded-lg shadow-lg -mt-20 relative z-20">
        <h1 className="text-4xl font-bold text-blue-700">{hotel.name}</h1>
        <p className="text-gray-600 mt-2">Location: {dest.name}</p>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-2xl font-semibold text-blue-600">
            ${hotel.price} / night
          </span>
          {hotel.rating && (
            <span className=" text-gray-600  font-medium text-lg px-2 py-1 rounded">
              {hotel.rating}<span className=" text-yellow-400 px-2">★★★</span>
            </span>
          )}
        </div>

        <p className="mt-6 text-gray-700 text-lg leading-relaxed">
          {hotel.desc ||
            "Description not available for this hotel."}
        </p>

        {/* Amenities */}
        {hotel.amenities && hotel.amenities.length > 0 && (
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">Amenities</h2>
            <div className="grid grid-cols-2 gap-3">
              {hotel.amenities.map((amenity, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-blue-50 text-blue-700 rounded-lg text-sm"
                >
                  {amenity}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="mt-10 flex justify-between items-center">
          <Link to={`/des/${destId}`}>
            <button className="px-6 py-2 text-blue-600">Back to Hotels</button>
          </Link>

          <button
            onClick={handleBooking}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HotelDetail;
