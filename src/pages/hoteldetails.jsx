// src/pages/HotelDetail.jsx
import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { destinationData } from "./DestinationDetail";

const HotelDetail = () => {
  const { id: destId, hotelId } = useParams();
  const dest = destinationData[destId];
  const navigate = useNavigate();

  if (!dest) return <p className="p-10 text-center">Destination not found.</p>;

  const hotel = dest.hotels.find((h) => String(h.id) === hotelId);
  if (!hotel) return <p className="p-10 text-center">Hotel not found.</p>;

  // For gallery: track which image to show as main
  const [mainImage, setMainImage] = useState(
    hotel.images && hotel.images.length > 0 ? hotel.images[0] : null
  );

  const handleBooking = () => {
    navigate(`/payment/${destId}`, { state: { hotel } });
  };

  return (
    <div className="min-h-screen bg-blue-100 py-10 pt-30">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="lg:flex">

          {/* Left column: details */}
          <div className="lg:w-1/2 p-6 space-y-6">
            <h1 className="text-4xl font-bold text-blue-700">{hotel.name}</h1>
            <p className="text-gray-600">Location: {dest.name}</p>

            <div className="flex items-center justify-between mt-4">
              <span className="text-2xl font-semibold text-blue-600">
                ${hotel.price} / night
              </span>
              {hotel.rating && (
                <span className="bg-yellow-400 text-white px-2 py-1 rounded">
                  {hotel.rating} ★
                </span>
              )}
            </div>

            <p className="mt-4 text-gray-700 leading-relaxed">
              {hotel.desc || "No description available."}
            </p>

            {hotel.amenities && hotel.amenities.length > 0 && (
              <div className="mt-6">
                <h2 className="text-2xl font-semibold mb-3">Amenities</h2>
                <div className="grid grid-cols-2 gap-2">
                  {hotel.amenities.map((amen, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-50 text-blue-700 rounded-md text-sm"
                    >
                      {amen}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-6 flex justify-between items-center">
              <Link to={`/des/${destId}`}>
                <button className="px-4 py-2 text-blue-600">Back to Hotels</button>
              </Link>
              <button
                onClick={handleBooking}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                Book Now
              </button>
            </div>
          </div>

          {/* Right column: image gallery */}
          <div className="lg:w-1/2 bg-gray-50 p-4">
            {hotel.images && hotel.images.length > 0 ? (
              <div className="space-y-4">
                {/* main displayed image */}
                {mainImage && (
                  <img
                    src={mainImage}
                    alt={hotel.name}
                    className="w-full h-64 md:h-80 object-cover rounded-lg"
                  />
                )}
                {/* thumbnails grid */}
                <div className="grid grid-cols-3 gap-2">
                  {hotel.images.map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      alt={`${hotel.name} ${idx}`}
                      className="w-full h-20 object-cover rounded-md cursor-pointer hover:opacity-80"
                      onClick={() => setMainImage(img)}
                    />
                  ))}
                </div>
              </div>
            ) : (
              <div className="w-full h-64 bg-gray-300 flex items-center justify-center">
                <span className="text-gray-500">No image available</span>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default HotelDetail;
