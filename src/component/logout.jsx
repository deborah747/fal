// LogoutButton.jsx
import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/"); // redirects to homepage
    } catch (error) {
      console.log("Error logging out:", error);
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="px-4 py-2 bg-blue-600 hover:bg-blue-800 text-white  font-semibold rounded"
    >
      Logout
    </button>
  );
};

export default Logout;
