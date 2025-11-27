import React from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { auth, db } from "../firebase";
import { useEffect, useState } from "react";

const SavedDestinations = () => {
  const [saved, setSaved] = useState([]);

  useEffect(() => {
    if (!auth.currentUser) return;

    const userId = auth.currentUser.uid;
    const savedRef = collection(db, "users", userId, "savedDestinations");

    const unsubscribe = onSnapshot(savedRef, (snapshot) => {
      setSaved(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Saved Destinations</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {saved.map((item) => (
          <div key={item.id} className="bg-white shadow rounded p-4">
            <img src={item.image} className="w-full h-40 object-cover" />
            <h3 className="font-bold text-lg mt-2">{item.name}</h3>
            <p className="text-gray-500">{item.country}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SavedDestinations;
