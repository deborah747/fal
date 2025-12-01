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
       images:[
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/495800648.jpg?k=d931a448cbe735dae1408272eb169c146574b9037fae39f2a838981bb313a492&o=",
         "https://cf.bstatic.com/xdata/images/hotel/max500/599473359.jpg?k=3d580f02faa92b5dcddbba248cc6fde2c19b4fd4cfe1ec567476cf74330ff078&o=",
         "https://cf.bstatic.com/xdata/images/hotel/max300/495800395.jpg?k=3718dfba04ddb56806d825ebadb132dd5c6d90a14276a95dbe2a3fb338f2cc7a&o="
       ],
      amenities:[
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
       price: 150,
       images:[
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/677277062.jpg?k=1d73361d1ccd406f115d698d9221603f777c8328af2a0c0166f3890fefd7ecbe&o=",
        "https://cf.bstatic.com/xdata/images/hotel/max500/528709123.jpg?k=526fd50dc44505247c38e08c7ff327a69cc1aa86a4c34f009ce532405380ff07&o=",
        "https://cf.bstatic.com/xdata/images/hotel/max500/528709230.jpg?k=9ffc6348cde79cb8cd8cabd690cc79ea72f6e0d9106132362d09026af81cac7f&o=",
       ],
       amenities:[
       "High-speed WiFi",
        "Luxury king-size beds",
        "24/7 concierge service",,
        "Complimentary gourmet breakfast"
       ],
       rating:4.6,
       desc:"Paris Luxury Suites offers elegant, modern accommodation in the heart of Paris, featuring spacious rooms, premium amenities, and breathtaking city views—ideal for travelers seeking comfort, style, and convenience."
       },
      { id: 3,
       name: "Eiffel View Lodge",
      price: 180 ,
     images:[
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/538504857.jpg?k=b136027b1eb862f35eb86e36a2d60cf6d9e7cdbc538bedc1db102eeeb47718d2&o=",
      "https://cf.bstatic.com/xdata/images/hotel/max300/538692223.jpg?k=234cc52cae84ca05149b698452fd597def8d0df7820d92bd964267ad743b7a00&o=",
     "https://cf.bstatic.com/xdata/images/hotel/max500/538693309.jpg?k=bb4833b5077dd46867d0977c338dbadf18148f24e02dedcb4605925610917036&o="
    ],
     amenities:[
      "Eiffel Tower view rooms",
     "High-speed WiFi",
      "24/7 concierge service",
       "Complimentary gourmet breakfast"
     ],
     rating:4.5,
     desc:"A refined hideaway in the heart of Paris, offering elegant interiors and unforgettable views of the Eiffel Tower. Perfect for travelers seeking comfort, charm, and a touch of Parisian luxury."
    },
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
      { id: 1, 
        name: "Bali Resort Spa", 
        price: 90 ,
        images:[
          "https://cf.bstatic.com/xdata/images/hotel/max1024x768/536712994.jpg?k=d0ed9f1544aa78df690587007b677a82ad5b47802e561377ac4dfb10a0f82c94&o=",
          "https://cf.bstatic.com/xdata/images/hotel/max500/536712869.jpg?k=adf142405e6827f2275c4ef7496c89cc273118dc6da799ee5e38f8afeaa4c47a&o=",
          "https://cf.bstatic.com/xdata/images/hotel/max500/536716624.jpg?k=ca0fa71643507364488c0f638e83b9d1c53f212f2614a08b0e9db387afa10a74&o=",
        ],
        amenities:[
          "Free WiFi",
       "Breakfast included",
       "Swimming Pool",
       "Airport Shuttle"
        ],
        rating:4.8,
        desc:"A serene tropical escape surrounded by lush greenery, offering warm Balinese hospitality, peaceful villas, and rejuvenating spa experiences. The perfect destination for relaxation and island tranquility.",

      },

      { id: 2,
         name: "Golden Palm Hotel", 
         price: 110 ,
         images:[
         "https://cf.bstatic.com/xdata/images/hotel/max1024x768/756187254.jpg?k=ad3dd01f22ac3e8b8d6b6d1bb5de0be4c746fedcec310cb7c3c0616fbf06f33d&o=",
         "https://cf.bstatic.com/xdata/images/hotel/max500/756196238.jpg?k=6fd987b4e0a36a38ea2721ea9eb1db372833f63d576d11b52089a517f02db8a8&o=",
         "https://cf.bstatic.com/xdata/images/hotel/max1024x768/756140304.jpg?k=6208937b9aa6fc4bbacac47fc09626015230d6dac1b1dfb82dd6fea5770ae719&o=",
        ],
        amenities:[
        "Free high-speed WiFi",
       "Modern fitness center",
       "Rooftop lounge",
       "Complimentary breakfast"
        ],
        rating:4.8,
        desc:"A stylish and welcoming hotel offering modern comfort, spacious rooms, and exceptional service—perfect for both leisure and business travelers.",
        },
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
      { id: 1,
         name: "Ocean View Hotel",
         price: 100 ,
         images:[
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/761008989.jpg?k=136a4eac565e0685ce80c5411e36dd2c3947f101ea6ed2ef9130ad230a7bf4c0&o=",
        "https://cf.bstatic.com/xdata/images/hotel/max300/588963106.jpg?k=9b82214a8165e2b6ec5619389a0d28d4ef9caa7d004baf80d5b253f2f555fc70&o=",
        "https://cf.bstatic.com/xdata/images/hotel/max300/511417357.jpg?k=099309c0d38521f9d66ea685861fd396378cf471de75a1b50596071d871acc85&o="
        
        ],
        amenities:[
        "Beachfront access",
       "Infinity swimming pool",
       "Sea-view restaurant",
       "Complimentary breakfast"
        ],
        rating:4.5,
        desc:"A peaceful coastal retreat offering bright, modern rooms with breathtaking sea views. Perfect for travelers seeking relaxation, oceanfront comfort, and unforgettable sunsets.",
        },
      { id: 2,
         name: "Safari Lodge", 
        price: 130,
        images:[
         "https://cf.bstatic.com/xdata/images/hotel/max1024x768/137600494.jpg?k=eb4e937308fd4f3135f5600dcfc998af78e56e4303928c3b95b6432429dcd331&o=",
         "https://cf.bstatic.com/xdata/images/hotel/max500/137599917.jpg?k=123d8f5e1cbde72db506fe3ab5455a62fab2b19ec64a19e29e72d6757ed21d3c&o=",
       "https://cf.bstatic.com/xdata/images/hotel/max1024x768/353216665.jpg?k=74c4cb42de4f3ed50ff25c559bdac0a48265a1b9d8db3ffbd904121efb5504e0&o="
        ],
        amenities:[
         "Guided wildlife tours",
       "Outdoor firepit lounge",
       "On-site restaurant",
       "Complimentary breakfast"
        ],
        rating:4.6,
        desc:"A nature-inspired retreat offering cozy cabins, wildlife views, and an authentic safari experience. Perfect for travelers seeking adventure, comfort, and a close connection to the outdoors.",
       },
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
