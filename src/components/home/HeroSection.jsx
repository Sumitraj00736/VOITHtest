import React from "react";
import { Calendar, MapPin } from "lucide-react";
import bannerImage from "../../assets/banner.jpg";

const HeroSection = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 py-8">
      <div className="relative w-full h-[80vh] bg-black text-white overflow-hidden rounded-2xl">
        <img
          src={bannerImage}
          alt="Car"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />

        {/* Content - aligned from start (left) */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-left px-6 md:px-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 md:mr-4">
            EASY WAY TO RENT VEHICLES
          </h1>

             <p className="text-gray-200  flex items-center md:ml-70 justify-start gap-10 mb-10 w-full">
            Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc.
          </p>

         
          <div className="flex items-center md:ml-70 justify-start gap-10 mb-10 w-full">
            <div className="text-left">
              <h2 className="text-4xl font-bold text-[#EA3C3C]">50+</h2>
              <p className="text-sm text-gray-300">Vehicle brands</p>
            </div>

            <div className="hidden md:block w-px h-14 bg-white/40" />

            <div className="text-left">
              <h2 className="text-4xl font-bold text-[#EA3C3C]">10K+</h2>
              <p className="text-sm text-gray-300">Clients</p>
            </div>
          </div>

          <div className="flex bg-white opacity-90 text-black rounded-full shadow-lg overflow-hidden w-full max-w-3xl">
            <div className="flex items-center gap-2 px-4 py-3 border-r w-1/3">
              <Calendar size={18} className="text-gray-500" />
              <input
                type="text"
                placeholder="Start Date & Time"
                className="w-full outline-none text-sm bg-transparent"
              />
            </div>

            <div className="flex items-center gap-2 px-4 py-3 border-r w-1/3">
              <Calendar size={18} className="text-gray-500" />
              <input
                type="text"
                placeholder="End Date & Time"
                className="w-full outline-none text-sm bg-transparent"
              />
            </div>

            <div className="flex items-center gap-2 px-4 py-3 border-r w-1/3">
              <MapPin size={18} className="text-gray-500" />
              <input
                type="text"
                placeholder="Location"
                className="w-full outline-none text-sm bg-transparent"
              />
            </div>

            <button className="bg-[#EA3C3C] hover:bg-[#cf3333] text-white px-6 font-semibold text-sm">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
