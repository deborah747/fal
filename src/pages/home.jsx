import React from 'react'
import {motion} from "framer-motion"
import { FaStar } from "react-icons/fa";
import { FaHeadset, FaShieldAlt, FaTags, FaCheckCircle } from "react-icons/fa";

const Home = () => {

  const destinations = [
    { name: "Paris, France", price: "$450", image: "/images/paris.jpg" },
    { name: "Bali, Indonesia", price: "$350", image: "/images/bali.jpg" },
    { name: "Dubai, UAE", price: "$400", image: "/images/dubai.jpg" },
    { name: "Tokyo, Japan", price: "$500", image: "/images/japan.jpg" },
    { name: "London, UK", price: "$420", image: "/images/london.jpg" },
    { name: "Cape Town, South Africa", price: "$380", image: "/images/cape twn.jpg"},
  ]
   
  const experiences = [
    {title: "Desert Safari in Dubai",category: "Adventure",rating: 4.9,price: "$120", image: "/images/dubai.jpg",},
    {title: "Bali Temple & Waterfall Tour", category: "Culture",rating: 4.8, price: "$80",image: "/images/bali.jpg",},
    {title: "Paris Food & Wine Tasting",category: "Food",rating: 4.7,price: "$150",image: "/images/paris-food.jpg",},
    {title: "Hot Air Balloon in Cappadocia", category: "Adventure",rating: 4.9,price: "$250",image: "/images/balloon.jpg", },
    {title: "Tokyo City Night Tour",category: "Tours", rating: 4.8,price: "$90",image: "/images/tokyo-night.jpg",},
    {title: "Cape Town Safari",category: "Wildlife", rating: 4.9, price: "$140", image: "/images/safari.jpg", },
  ];

  const features = [
    {icon: <FaTags className="text-4xl text-blue-600" />,title: "Best Price Guarantee",desc: "Get unbeatable travel deals and exclusive discounts on flights and hotels.",},
    {icon: <FaHeadset className="text-4xl text-blue-600" />,title: "24/7 Customer Support",desc: "We're here for you anytime—day or night—no matter where you are.",},
    {icon: <FaShieldAlt className="text-4xl text-blue-600" />,title: "Safe & Secure Booking",desc: "Your payments are protected with industry-leading encryption.",},
    {icon: <FaCheckCircle className="text-4xl text-blue-600" />, title: "Trusted by Travelers", desc: "Thousands of happy customers trust us to plan their trips.",},
  ];
  const reviews = [
    { name: "Sarah Johnson",country: "USA", image: "/images/user1.jpg", review: "TravelEase made my first international trip so smooth! The booking process was simple and fast.",rating: 5, },
    {name: "Michael Ade", country: "Nigeria",image: "/images/user2.jpg",review:"I got the best hotel deals here. Their customer support is also very responsive. I love it!", rating: 4,},
    {name: "Elena Gomez",country: "Spain",image: "/images/user3.jpg",review:"A fantastic experience! The tours they recommended were absolutely unforgettable.",rating: 5,},
  ];




  return (
    <div>
            {/*hero section*/}
      <section className="relative h-screen bg-cover bg-center flex flex-col justify-center items-center text-center text-white"
           style={{backgroundImage:"url('/images/bg.jpg')" }} >
             <div className="absolute inset-0 bg-black/30"></div>

                  {/* Text */}
        <div className="relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
               Explore the World with Ease
            </h1>
            <p className="text-lg md:text-xl mb-8 font-medium">
              Find your next flight, hotel, or unforgettable tour.
            </p>

                {/* Search Bar */}
          <div className="bg-white bg-opacity-90 rounded-lg shadow-sm p-4 flex flex-col md:flex-row items-center gap-4 w-[90%] md:w-[70%] mx-auto text-gray-600">
            <input
                type="text"
                 placeholder="Where to?"
                className="w-full md:w-1/4 p-3 rounded-md border border-gray-300"
            />
            <input
               type="date"
              className="w-full md:w-1/5 p-3 rounded-md border border-gray-300"
            />
           <input
            type="date"
            className="w-full md:w-1/5 p-3 rounded-md border border-gray-300"
           />
            <select className="w-full md:w-1/5 p-3 rounded-md border border-gray-300">
                 <option>1 Guest</option>
                <option>2 Guests</option>
                 <option>3 Guests</option>
                  <option>4+ Guests</option>
            </select>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition">
            Search
            </button>
          </div>
        </div>
          
      </section>

           {/* top destinations*/}
      <section className='pt-20'>
             <h2 className="text-4xl font-bold text-center mb-10 text-blue-600">Top Destinations </h2>

          <div className="grid gap-10 px-6 sm:grid-cols-2 md:grid-cols-3 max-w-7xl mx-auto">
                  {destinations.map((dest, index) => (
              <motion.div
                    key={index}
                    className="relative rounded-2xl overflow-hidden shadow-sm group "
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}>
                   <img
                     src={dest.image}
                     alt={dest.name}
                     className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                   />
                 <motion.div
                         initial ={{ opacity: 0.5 }}
                        whileHover={{ opacity: 2 }}
                        transition={{ duration: 0.2 }}
                         className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center">
                    
                     <motion.button
                         initial={{ opacity: 0, scale: 0.8 }}
                         whileHover={{ opacity: 1, scale: 1 }}
                         transition={{ duration: 0.2 }}
                        className="px-4 py-2 bg-white text-blue-600 rounded-lg font-medium shadow-sm">
                        Book Now
                    </motion.button>
                 </motion.div>  
                    <div className="absolute bottom-4 left-4 text-white">
                       <h3 className="text-2xl font-semibold">{dest.name}</h3>
                      <p className="text-sm mt-1">{dest.price} / person</p>
                  </div>
             </motion.div>
                ))}
          </div>
      </section>
                {/*popular experience*/}
      <section className='pt-40 px-40'>
                <h2 className="text-4xl font-bold text-center text-blue-600">
                     Popular Experiences
                </h2>
                  <p className="text-center text-gray-600 mt-2 text-lg">
                     Find exciting activities and memorable adventures.
                 </p>

                {/* cards */}
          <div className="grid gap-10 px-6 sm:grid-cols-2 md:grid-cols-3 max-w-7xl mx-auto mt-14">
                    {experiences.map((exp, index) => (
               <div
                   key={index}
                   className="relative rounded-2xl overflow-hidden shadow-sm group cursor-pointer"
                >
                   <img
                      src={exp.image}
                        alt={exp.title}
                       className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                      {/* overlay */}
                     <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent"></div>

                      {/* categories */}
                     <span className="absolute top-4 left-4 bg-white/20 backdrop-blur-md text-white px-3 py-1 rounded-full text-sm">
                     {exp.category}
                     </span>
                           {/* bottom */}
                      <div className="absolute bottom-4 left-4 text-white">
                            <h3 className="text-xl font-semibold">{exp.title}</h3>
                            <div className="flex items-center gap-1 text-yellow-400 mt-1">
                               <FaStar />
                               <p className="text-sm text-white">{exp.rating}</p>
                             </div>
                                <p className="text-sm mt-1 opacity-90">{exp.price} / person</p>
                      </div>
                         {/* button */}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                          <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
                            Book Now
                          </button>
                       </div>
                 </div>
                ))}
          </div>
      </section>

        {/*hotel section*/}
      <section className="pt-40">
           <div className="max-w-7xl mx-auto px-4">
                  <div className="text-center mb-10">
                     <h2 className="text-3xl font-bold text-blue-600">Featured Hotels</h2>
                      <p className="text-gray-600 mt-2">Hand-picked luxury hotels just for you</p>
                   </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative group rounded-xl overflow-hidden shadow-sm">
                     <img src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb" className="w-full h-[450px] object-cover" />
                   <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300"></div>
                      {/*big */}
                 <div className="absolute bottom-6 left-6 text-white">
                       <h3 className="text-3xl font-bold">The Grand Palace Hotel</h3>
                     <div className="flex items-center gap-2 my-2">
                       <span className="text-yellow-400">★★★★★</span>
                        <span className="text-sm">(1,240 reviews)</span>
                     </div>
                       <p className="text-lg font-semibold">₦120,000 / night</p>
                        <button className="mt-4 px-6 py-2 bg-white text-blue-600 font-semibold rounded-lg shadow hover:bg-gray-200 transition">
                          Book Now
                       </button>
                  </div>
               </div>

                  {/*small */}
                  <div className="grid sm:grid-cols-2 gap-6">
                         {/*1st*/}
                      <div className="relative group rounded-xl overflow-hidden shadow-sm">
                          <img src="https://images.unsplash.com/photo-1501117716987-c8e1ecb2101f"
                           className="w-full h-56 object-cover" />
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition"></div>

                               <div className="absolute bottom-4 left-4 text-white">
                                     <h4 className="text-lg font-bold">City View Resort</h4>
                                      <p className="text-sm">₦85,000 / night</p>
                                      <button className="mt-2 px-4 py-1.5 bg-white text-blue-600 text-sm font-medium rounded-lg hover:bg-gray-200">
                                         View Details
                                     </button>
                                </div>
                         </div>
                             {/*2nd */}
                         <div className="relative group rounded-xl overflow-hidden shadow-sm">
                                   <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf"
                                      className="w-full h-56 object-cover" />
                                     <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition"></div>
                               <div className="absolute bottom-4 left-4 text-white">
                                  <h4 className="text-lg font-bold">Oasis Luxury Suites</h4>
                                   <p className="text-sm">₦95,000 / night</p>
                                      <button className="mt-2 px-4 py-1.5 bg-white text-blue-600 text-sm font-medium rounded-lg hover:bg-gray-200">
                                         View Details
                                      </button>
                                </div>
                          </div>
                             {/*3rd */}
                          <div className="relative group rounded-xl overflow-hidden shadow-sm sm:col-span-2">
                                <img src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267"
                                    className="w-full h-56 object-cover" />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition"></div>

                             <div className="absolute bottom-4 left-4 text-white">
                                    <h4 className="text-lg font-bold">Blue Lagoon Hotel</h4>
                                      <p className="text-sm">₦78,000 / night</p>
                                  <button className="mt-2 px-4 py-1.5 bg-white text-blue-600 text-sm font-medium rounded-lg hover:bg-gray-200">
                                    View Details
                                    </button>
                              </div>
                          </div>
                   </div>
              </div>
          </div>
      </section>
      {/* about */}
       <section className='pt-40'>
                <h2 className="text-4xl font-bold text-center text-blue-600 mb-14">
                    Why Choose Us
                 </h2>

            <div className="grid gap-10 px-6 sm:grid-cols-2 md:grid-cols-4 max-w-7xl mx-auto">
                      {features.map((item, index) => (
                <div
                    key={index}
                   className="bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition duration-300 text-center border border-gray-100"
                 >
                   <div className="flex justify-center mb-5">{item.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                      {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
               ))}
            </div>
       </section>
       {/* reviews */}
    <section className='pt-40' >
                 <h2 className="text-4xl font-bold text-center text-blue-600 mb-14"> What Our Customers Say</h2>

        <div className="grid gap-10 px-6 sm:grid-cols-2 md:grid-cols-3 max-w-7xl mx-auto">
              {reviews.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl transition"
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <h3 className="font-semibold text-lg">{item.name}</h3>
                <p className="text-sm text-gray-500">{item.country}</p>
              </div>
            </div>
                 <p className="text-gray-600 mb-4 text-sm">{item.review}</p>
            <div className="flex text-yellow-400">
              {[...Array(item.rating)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
          </div>
          ))}
        </div>
     </section>
     {/*news*/}
     <section className=" mt-20 py-24 bg-blue-50">
      <div className="max-w-3xl mx-auto bg-white shadow-sm rounded-2xl p-10 text-center border border-gray-200">
        
        <h2 className="text-3xl font-bold text-blue-600 mb-4">
          Join Our Travel Community
        </h2>

        <p className="text-gray-600 mb-8 text-sm md:text-base">
          Get exclusive travel deals, destination guides, and tips straight to your inbox.
        </p>

        <div className="flex flex-col md:flex-row items-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full md:flex-1 p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition">
            Subscribe
          </button>
        </div>

        <p className="text-gray-400 text-xs mt-4">
          We respect your privacy. No spam ever.
        </p>
      </div>
    </section>
    </div>
  )
}

export default Home
