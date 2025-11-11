import React from "react";
import { Calendar, MapPin } from "lucide-react";
import bannerImage from "../../assets/heroimg.png";

const HeroSection = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 py-8">
      <div className="relative w-full h-[80vh] bg-black text-white overflow-hidden rounded-2xl">
        <img
          src={bannerImage}
          alt="Car"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />


        <div className="relative z-10 flex flex-col items-center justify-center h-full text-left px-6 md:px-12">
          <h1 className="text-2xl  md:text-5xl font-semibold md:font-bold mb-4 md:mr-4">
            EASY WAY TO RENT VEHICLES 
          </h1>

             <p className="text-gray-200 font-medium md:font-semibold flex items-center md:ml-70 justify-start gap-10 mb-10 w-full">
            Be the first person to take the full enjoyment from our service
          </p>

         
          <div className="flex items-center md:ml-70 justify-start gap-10 mb-10 w-full">
            <div className="text-left">
              <h2 className="text-3xl md:text-6xl font-bold text-[#EA3C3C]">50+</h2>
              <p className="text-sm text-white">Vehicle brands</p>
            </div>

            <div className="w-px h-14 md:h-20 bg-[#737373]" />

            <div className="text-left">
              <h2 className="text-3xl md:text-6xl font-bold text-[#EA3C3C]">10K+</h2>
              <p className="text-sm text-white">Clients</p>
            </div>
          </div>

          <div className="flex bg-white opacity-60 text-black rounded-full shadow-lg overflow-hidden w-full max-w-3xl">
            <div className="flex items-center gap-2 px-4 py-3 border-r w-1/3 hover:scale-105 transition-all duration-300">
              <Calendar size={18} className="text-[#737373]" />
              <input
                type="text"
                placeholder="Start Date & Time"
                className="w-full outline-none text-sm bg-transparent  "
              />
            </div>

            <div className="flex items-center gap-2 px-4 py-3 border-r w-1/3 hover:scale-105 transition-all duration-300">
              <Calendar size={18} className="text-[#737373]" />
              <input
                type="text"
                placeholder="End Date & Time"
                className="w-full outline-none text-sm bg-transparent"
              />
            </div>

            <div className="flex items-center gap-2 px-4 py-3 border-r w-1/3">
              <MapPin size={18} className="text-[#737373]" />
              <input
                type="text"
                placeholder="Location"
                className="w-full outline-none text-sm bg-transparent"
              />
            </div>

            <button className="bg-[#EA3C3C] hover:bg-[#d32f2f] hover:scale-105 transition-all duration-300 text-white px-6 font-semibold text-sm">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
