// src/components/BookingModal.jsx
import React, { useState } from "react";

export default function BookingModal({ open, onClose, room, onConfirm }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(1);

  if (!open) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = { roomId: room.id, name, email, checkIn, checkOut, guests };
    onConfirm(payload);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="bg-white rounded-xl max-w-xl w-full p-6">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">Book: {room.title}</h3>
          <button onClick={onClose} className="text-gray-500">Close</button>
        </div>

        <form onSubmit={handleSubmit} className="mt-4 space-y-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <input required value={name} onChange={e=>setName(e.target.value)} placeholder="Full name" className="p-3 border rounded" />
            <input required type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" className="p-3 border rounded" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <input required type="date" value={checkIn} onChange={e=>setCheckIn(e.target.value)} className="p-3 border rounded" />
            <input required type="date" value={checkOut} onChange={e=>setCheckOut(e.target.value)} className="p-3 border rounded" />
            <select value={guests} onChange={e=>setGuests(e.target.value)} className="p-3 border rounded">
              <option value={1}>1 guest</option>
              <option value={2}>2 guests</option>
              <option value={3}>3 guests</option>
              <option value={4}>4+ guests</option>
            </select>
          </div>

          <div className="flex justify-end gap-3">
            <button type="button" onClick={onClose} className="px-4 py-2 border rounded">Cancel</button>
            <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded">Confirm Booking</button>
          </div>
        </form>
      </div>
    </div>
  );
}
