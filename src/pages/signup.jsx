import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FcGoogle } from "react-icons/fc";

const Signup = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};

    if (!name.trim()) newErrors.name = "Full name is required";
    if (!email.trim()) newErrors.email = "Email is required";
    if (!password.trim()) newErrors.password = "Password is required";

    setErrors(newErrors);

    // Stop submit if errors exist
    if (Object.keys(newErrors).length > 0) return;

    alert("Account created successfully!");
  };

  return (
    <div>
      <section className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/images/bg.jpg')" }}>
      
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative bg-white/90 backdrop-blur-md p-8 pt-3 rounded-2xl w-[90%] max-w-md shadow-xl mt-20 mb-4">
        
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-3">
          Create Account
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>

          {/* Full Name */}
          <div>
            <label className="text-sm font-medium text-gray-700">Full Name</label>
            <input 
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="w-full mt-1 p-3 border rounded-md focus:outline-none focus:border-blue-500"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="text-sm font-medium text-gray-700">Email</label>
            <input 
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full mt-1 p-3 border rounded-md focus:outline-none focus:border-blue-500"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="text-sm font-medium text-gray-700">Password</label>
            <input 
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Create a password"
              className="w-full mt-1 p-3 border rounded-md focus:outline-none focus:border-blue-500"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>
              
          {/* Create Button */}
          <button className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition">
            Create Account
          </button>

        </form>

        {/* Divider */}
        <div className="flex items-center gap-4 my-6">
          <div className="h-1 bg-gray-300 flex-1"></div>
          <span className="text-gray-400">OR</span>
          <div className="h-1 bg-gray-300 flex-1"></div>
        </div>

        {/* Google */}
        <button className="w-full border py-3 rounded-md flex justify-center items-center gap-2 hover:bg-gray-100">
          <FcGoogle />
          merf
        </button>

        {/* Sign In Link */}
        <p className="text-center text-gray-600 mt-6">
          Already have an azuz?{" "}
          <Link to="/signin" className="text-blue-600 font-medium hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </section>
    </div>
  )
}

export default Signup
