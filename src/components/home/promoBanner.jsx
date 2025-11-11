import React from "react";
import promobannerImage from "../../assets/promobanner.png";

const PromoBanner = () => {
  const [showSearch, setShowSearch] = React.useState(false);



  
  const handleRentVehicles = () => {
    console.log("Rent vehicle button clicked");
  };

  return (
    <section className="relative w-full bg-[#1A202C] text-white overflow-hidden my-10">
      <img
        src={promobannerImage}
        alt="Promo"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* <div className="absolute inset-0 bg-[#1A202C]/50"></div> */}

      {/* Content stays on the right even on small screens */}
      <div className="relative z-10 flex flex-col items-end justify-end px-6 md:px-16 py-12 md:py-20">
        <div className="w-[60%] md:w-1/2 text-start md:text-left">
          <h2 className="text-3xl md:text-5xl font-semibold mb-4">
            BLACK FRIDAY SALE!
          </h2>
          <p className="text-gray-200 text-start text-sm md:text-base mb-6 leading-relaxed max-w-lg md:max-w-xl ml-auto">
            Jorem ipsum dolor sit amet, consectetur adipiscing elit. Jorem ipsum
            dolor sit adipiscing elit. Jorem ipsum dolor sit amet, consectetur
            adipiscing elit.
          </p>

          <div className="flex justify-end md:justify-start">
            <button onClick={handleRentVehicles}   className="bg-[#EA3C3C] hover:scale-105 transition-all duration-300 text-white px-3 py-2 md:px-6 md:py-3 rounded-md font-semibold">
              Rent vehicle
            </button>
          </div>
        </div>
      </div>

      {/* Search Button (anchored to right) */}
      <div className="absolute z-10 bottom-2 md:bottom-4 right-4 flex items-center">
        <button
          className="bg-[#EA3C3C] hover:bg-[#EA3C3C] p-2.5 sm:p-3 rounded-md"
          onClick={() => setShowSearch((v) => !v)}
          aria-label="Open search"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="white"
            className="w-4 h-4 sm:w-5 sm:h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
            />
          </svg>
        </button>

        <div
          className={`ml-2 transition-all duration-300 ease-out transform flex items-center ${
            showSearch
              ? "opacity-100 translate-x-0 pointer-events-auto"
              : "opacity-0 translate-x-6 pointer-events-none"
          }`}
        >
          <input
            type="text"
            placeholder="Type to search..."
            className="px-3 py-2 rounded-lg border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500 bg-white shadow text-sm sm:text-sm"
            autoFocus={showSearch}
            style={{ minWidth: "120px" }}
          />
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
