
import React from "react";

export default function HotelCard({ room, onBook }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
      <div className="h-56 w-full overflow-hidden">
        <img src={room.image} alt={room.title} className="w-full h-full object-cover" />
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-semibold text-blue-700">{room.title}</h3>
            <p className="text-sm text-gray-500">{room.desc}</p>
          </div>
          <div className="text-right">
            <p className="text-xl font-bold text-blue-600">{room.price}</p>
            <p className="text-sm text-gray-500">/ night</p>
          </div>
        </div>

        <div className="flex items-center gap-3 mt-3 text-sm text-gray-600">
          {room.features.map((f, i) => (
            <span key={i} className="inline-flex items-center gap-2 bg-gray-100 px-2 py-1 rounded">
              {f}
            </span>
          ))}
        </div>

        <div className="mt-4 flex gap-3">
          <button onClick={() => onBook(room)} className="flex-1 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
            Book Now
          </button>
          <button className="px-4 py-2 border rounded-md">Details</button>
        </div>
      </div>
    </div>
  );
}
