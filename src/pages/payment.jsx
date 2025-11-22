import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const Payment = () => {
  const location = useLocation();
  const { hotel } = location.state || {};
  const [travelers, setTravelers] = useState(1);
  const [days, setDays] = useState(1);
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [cvv, setCvv] = useState("");
  const [success, setSuccess] = useState(false);

  if (!hotel)
    return (
      <p className="p-10 text-center text-xl text-gray-700">
        No hotel selected!
      </p>
    );

  const total = hotel.price * travelers * days;

  const handlePayment = () => {
    if (!cardNumber || !cardName || !cvv) {
      alert("Please fill in all card details.");
      return;
    }
    setSuccess(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-5  flex justify-center">

      {!success ? (
        <div className="w-full max-w-2xl bg-white shadow-xl rounded-2xl  mt-20 overflow-hidden">

          {/* HEADER */}
          <div className="bg-linear-to-r from-blue-600 to-blue-800 text-white p-6">
            <h1 className="text-3xl font-bold">Payment</h1>
            <p className="text-blue-100 text-sm mt-1">
              Complete your booking securely
            </p>
          </div>

          <div className="p-6">

            {/* HOTEL SUMMARY */}
            <div className="bg-gray-100 p-4 rounded-xl shadow-sm mb-6">
               <h2 className="text-xl font-semibold text-blue-700">{hotel.name}</h2>
               <p className="text-gray-600 mt-1 text-sm">Price per night:</p>
               <p className="text-blue-600 text-xl font-bold">
                ${hotel.price}
              </p>
            </div>

            {/* TRAVELERS & DAYS */}
            <div className="grid grid-cols-2 gap-5 mb-6">
              <div>
                <label className="font-medium block mb-1">Travelers</label>
                <input
                  type="number"
                  min="1"
                  value={travelers}
                  onChange={(e) => setTravelers(Number(e.target.value))}
                  className="w-full border p-2 rounded-lg focus:ring-1  focus:ring-blue-500 border-blue-500"
                />
              </div>

              <div>
                <label className="font-medium block mb-1">Days</label>
                <input
                  type="number"
                  min="1"
                  value={days}
                  onChange={(e) => setDays(Number(e.target.value))}
                  className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-blue-500  border-blue-500"
                />
              </div>
            </div>

            {/* TOTAL */}
            <h2 className="text-2xl font-bold text-green-600 mb-6">
              Total: ${total}
            </h2>

            {/* CARD DETAILS */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-blue-700">
                Card Details
              </h3>

              <input
                 type="text"
                 placeholder="Cardholder Name"
                 value={cardName}
                 onChange={(e) => setCardName(e.target.value)}
                 className="w-full border p-3 rounded-lg mb-3 focus:ring-2 focus:ring-blue-500  border-blue-500"
              />

              <input
                 type="text"
                 placeholder="Card Number"
                 value={cardNumber}
                 onChange={(e) => setCardNumber(e.target.value)}
                 className="w-full border p-3 rounded-lg mb-3 focus:ring-2 focus:ring-blue-500  border-blue-500"
              />

              <input
                 type="text"
                 placeholder="CVV"
                 value={cvv}
                 onChange={(e) => setCvv(e.target.value)}
                 className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-500  border-blue-500"
              />
            </div>

            {/* BUTTON */}
            <button
              onClick={handlePayment}
              className="w-full bg-blue-700 text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-800 transition"
            >
              Confirm & Pay
            </button>
          </div>
        </div>
      ) : (
        /* SUCCESS SCREEN */
         <div  className="w-full max-w-lg bg-white shadow-xl rounded-2xl p-20 mt-30 text-center h-96">
         <div  className="w-20 h-20 bg-green-100 rounded-full flex mx-auto mb-4">
             <span className="m-auto text-green-600 text-4xl">✔</span>
        </div>

          <h1 className="text-3xl font-bold text-green-600 mb-4">
            Payment Successful!
          </h1>
          <p className="text-gray-700 text-lg">
            Thank you for booking <span className="font-semibold">{hotel.name}</span>.
            <br /> Your trip is confirmed!
          </p>

        </div>
      )}
    </div>
  );
};

export default Payment;
