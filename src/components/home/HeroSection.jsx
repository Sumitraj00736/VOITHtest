import React from "react";
import { Calendar, MapPin } from "lucide-react";
import bannerImage from "../../assets/heroimg.png";

const HeroSection = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 py-8">
      <div className="relative w-full min-h-[80vh] bg-black text-white overflow-hidden rounded-2xl">
        {/* Background Image */}
        <img
          src={bannerImage}
          alt="Car"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />

        {/* Overlay Content - Centered */}
        <div className="absolute inset-0 flex flex-col  justify-center text-cnter px-4 sm:px-8 md:px-16 z-10">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 leading-snug">
            EASY WAY TO RENT VEHICLES
          </h1>

          <p className="text-gray-200 text-sm sm:text-base md:text-lg mb-8 max-w-2xl">
            Be the first person to take the full enjoyment from our service.
          </p>

          {/* Stats */}
          <div className="flex flex-col sm:flex-row items-center  gap-6 sm:gap-12 mb-10">
            <div className="text-center">
              <h2 className="text-4xl md:text-6xl font-bold text-[#EA3C3C]">
                50+
              </h2>
              <p className="text-sm text-white">Vehicle Brands</p>
            </div>

            <div className="hidden sm:block w-px h-12 bg-[#737373]" />

            <div className="text-center">
              <h2 className="text-4xl md:text-6xl font-bold text-[#EA3C3C]">
                10K+
              </h2>
              <p className="text-sm text-white">Clients</p>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex flex-col sm:flex-row bg-white/80 text-black rounded-full shadow-lg overflow-hidden w-full max-w-3xl">
            <div className="flex items-center gap-2 px-4 py-3 border-b sm:border-b-0 sm:border-r hover:scale-105 transition-all duration-300 w-full sm:w-1/3">
              <Calendar size={18} className="text-[#737373]" />
              <input
                type="text"
                placeholder="Start Date & Time"
                className="w-full outline-none text-sm bg-transparent"
              />
            </div>

            <div className="flex items-center gap-2 px-4 py-3 border-b sm:border-b-0 sm:border-r hover:scale-105 transition-all duration-300 w-full sm:w-1/3">
              <Calendar size={18} className="text-[#737373]" />
              <input
                type="text"
                placeholder="End Date & Time"
                className="w-full outline-none text-sm bg-transparent"
              />
            </div>

            <div className="flex items-center gap-2 px-4 py-3 hover:scale-105 transition-all duration-300 w-full sm:w-1/3">
              <MapPin size={18} className="text-[#737373]" />
              <input
                type="text"
                placeholder="Location"
                className="w-full outline-none text-sm bg-transparent"
              />
            </div>

            <button className="bg-[#EA3C3C] hover:bg-[#d32f2f] transition-all duration-300 text-white font-semibold text-sm px-6 py-3 sm:py-0 rounded-none sm:rounded-r-full">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
