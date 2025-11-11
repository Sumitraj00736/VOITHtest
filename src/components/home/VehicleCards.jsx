import { Star, MapPin, Users, Fuel, Settings } from "lucide-react";
import bike from "../../assets/bike.png";
import car1 from "../../assets/car1.png";
import car2 from "../../assets/car2.png";
import car3 from "../../assets/car3.png";
import heavy1 from "../../assets/heavy1.png";
import heavy2 from "../../assets/heavy2.png";
import heavy3 from "../../assets/heavy3.png";

export default function VehicleCards() {
  const twowheelers = [
    {
      id: 1,
      name: "Toyota Corolla Cross",
      image: bike,
      rating: 4.8,
      reviews: 436,
      location: "Naxal-8, Kathmandu",
      seats: 4,
      fuel: "Gas",
      transmission: "Auto",
      price: "000",
    },
    {
      id: 2,
      name: "Toyota Corolla Cross",
      image: bike,
      rating: 4.8,
      reviews: 436,
      location: "Naxal-8, Kathmandu",
      seats: 4,
      fuel: "Gas",
      transmission: "Auto",
      price: "000",
    },
    {
      id: 3,
      name: "Toyota Corolla Cross",
      image: bike,
      rating: 4.8,
      reviews: 436,
      location: "Naxal-8, Kathmandu",
      seats: 4,
      fuel: "Gas",
      transmission: "Auto",
      price: "000",
    },
  ];

  const heavyVehicles = [
    {
      id: 1,
      name: "Toyota Corolla Cross",
      image: heavy1,
      rating: 4.8,
      reviews: 436,
      location: "Naxal-8, Kathmandu",
      seats: 4,
      fuel: "Gas",
      transmission: "Auto",
      price: "000",
    },
    {
      id: 2,
      name: "Toyota Corolla Cross",
      image: heavy2,
      rating: 4.8,
      reviews: 436,
      location: "Naxal-8, Kathmandu",
      seats: 4,
      fuel: "Gas",
      transmission: "Auto",
      price: "000",
    },
    {
      id: 3,
      name: "Toyota Corolla Cross",
      image: heavy3,
      rating: 4.8,
      reviews: 436,
      location: "Naxal-8, Kathmandu",
      seats: 4,
      fuel: "Gas",
      transmission: "Auto",
      price: "000",
    },
  ];
  const fourwheelers = [
    {
      id: 1,
      name: "Toyota Corolla Cross",
      image: car1,
      rating: 4.8,
      reviews: 436,
      location: "Naxal-8, Kathmandu",
      seats: 4,
      fuel: "Gas",
      transmission: "Auto",
      price: "000",
    },
    {
      id: 2,
      name: "Toyota Corolla Cross",
      image: car2,
      rating: 4.8,
      reviews: 436,
      location: "Naxal-8, Kathmandu",
      seats: 4,
      fuel: "Gas",
      transmission: "Auto",
      price: "000",
    },
    {
      id: 3,
      name: "Toyota Corolla Cross",
      image: car3,
      rating: 4.8,
      reviews: 436,
      location: "Naxal-8, Kathmandu",
      seats: 4,
      fuel: "Gas",
      transmission: "Auto",
      price: "000",
    },
  ];

  return (
    <section className="px-6 py-12 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row items-center mb-8 md:justify-between">
        <div className="w-full text-center mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold text-[#1A202C] mb-2">
            Types of Vehicles
          </h2>
          <p className="text-[#737373]">
            Be the first person to take the full enjoyment from our service
          </p>
        </div>
      </div>

      {/* 2 wheelers header */}
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-bold">2 WHEELERS</h3>
        <button className="text-gray-700 font-medium hover:text-[#EA3C3C] transition">
          See all →
        </button>
      </div>

      {/* 2 wheelers grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {twowheelers.map((vehicle) => (
          <div
            key={vehicle.id}
            className="bg-[#ffffff] shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition"
          >
            <img
              src={vehicle.image}
              alt={vehicle.name}
              className="w-full h-56 object-cover"
            />
            <div className="p-5 space-y-3">
              <h4 className="text-lg font-bold">{vehicle.name}</h4>

              <div className="flex items-center text-sm text-gray-600 gap-1">
                <Star className="text-[#EA3C3C] w-4 h-4" fill="currentColor" />
                <span>{vehicle.rating}</span>
                <span className="text-gray-400">
                  ({vehicle.reviews} Reviews)
                </span>
              </div>

              <div className="flex items-center text-gray-600 text-sm gap-1">
                <MapPin className="w-4 h-4" />
                <span>{vehicle.location}</span>
              </div>

              <div className="flex items-center gap-3 text-gray-700 text-sm">
                <div className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-lg">
                  <Users className="w-4 h-4" />
                  <span>{vehicle.seats} seats</span>
                </div>
                <div className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-lg">
                  <Fuel className="w-4 h-4" />
                  <span>{vehicle.fuel}</span>
                </div>
                <div className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-lg">
                  <Settings className="w-4 h-4" />
                  <span>{vehicle.transmission}</span>
                </div>
              </div>

              <div className="flex justify-between items-center pt-3">
                <p className="text-lg font-semibold">
                  Rs.{vehicle.price}
                  <span className="text-[#737373] text-sm font-normal">
                    /hr
                  </span>
                </p>
                <button className="bg-[#EA3C3C] text-[#ffffff]  text-sm font-semibold px-4 py-2 rounded-lg hover:bg-opacity-70 hover:scale-105 transition-all">
                  See More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 4 wheelers header */}
      <div className="flex justify-between items-center mt-10 mb-6">
        <h3 className="text-2xl font-bold">4 WHEELERS</h3>
        <button className="text-gray-700 font-medium hover:text-[#EA3C3C] transition">
          See all →
        </button>
      </div>

      {/* 4 wheelers grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {fourwheelers.map((vehicle) => (
          <div
            key={vehicle.id}
            className="bg-[#ffffff]  shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition"
          >
            <img
              src={vehicle.image}
              alt={vehicle.name}
              className="w-full h-56 object-cover"
            />
            <div className="p-5 space-y-3">
              <h4 className="text-lg font-bold">{vehicle.name}</h4>

              <div className="flex items-center text-sm text-gray-600 gap-1">
                <Star className="text-[#EA3C3C] w-4 h-4" fill="currentColor" />
                <span>{vehicle.rating}</span>
                <span className="text-gray-400">
                  ({vehicle.reviews} Reviews)
                </span>
              </div>

              <div className="flex items-center text-gray-600 text-sm gap-1">
                <MapPin className="w-4 h-4" />
                <span>{vehicle.location}</span>
              </div>

              <div className="flex items-center gap-3 text-gray-700 text-sm">
                <div className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-lg">
                  <Users className="w-4 h-4" />
                  <span>{vehicle.seats} seats</span>
                </div>
                <div className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-lg">
                  <Fuel className="w-4 h-4" />
                  <span>{vehicle.fuel}</span>
                </div>
                <div className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-lg">
                  <Settings className="w-4 h-4" />
                  <span>{vehicle.transmission}</span>
                </div>
              </div>

              <div className="flex justify-between items-center pt-3">
                <p className="text-lg font-semibold">
                  Rs.{vehicle.price}
                  <span className="text-[#737373] text-sm font-normal">
                    /hr
                  </span>
                </p>
                <button className="bg-[#EA3C3C] text-white text-sm font-semibold px-4 py-2 rounded-lg  hover:bg-opacity-70 hover:scale-105 transition-all">
                  See More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* // heavy vehicles */}
      <div className="flex justify-between items-center mt-10 mb-6">
        <h3 className="text-2xl font-bold">HEAVY DUTY</h3>
        <button className="text-gray-700 font-medium hover:text-[#EA3C3C] transition">
          See all →
        </button>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {heavyVehicles.map((vehicle) => (
          <div
            key={vehicle.id}
            className="bg-[#ffffff] shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition"
          >
            <img
              src={vehicle.image}
              alt={vehicle.name}
              className="w-full h-56 object-cover"
            />
            <div className="p-5 space-y-3">
              <h4 className="text-lg font-bold">{vehicle.name}</h4>

              <div className="flex items-center text-sm text-gray-600 gap-1">
                <Star className="text-[#EA3C3C] w-4 h-4" fill="currentColor" />
                <span>{vehicle.rating}</span>
                <span className="text-gray-400">
                  ({vehicle.reviews} Reviews)
                </span>
              </div>

              <div className="flex items-center text-gray-600 text-sm gap-1">
                <MapPin className="w-4 h-4" />
                <span>{vehicle.location}</span>
              </div>

              <div className="flex items-center gap-3 text-gray-700 text-sm">
                <div className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-lg">
                  <Users className="w-4 h-4" />
                  <span>{vehicle.seats} seats</span>
                </div>
                <div className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-lg">
                  <Fuel className="w-4 h-4" />
                  <span>{vehicle.fuel}</span>
                </div>
                <div className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-lg">
                  <Settings className="w-4 h-4" />
                  <span>{vehicle.transmission}</span>
                </div>
              </div>

              <div className="flex justify-between items-center pt-3">
                <p className="text-lg font-semibold">
                  Rs.{vehicle.price}
                  <span className="text-[#737373] text-sm font-normal">
                    /hr
                  </span>
                </p>
                <button className="bg-[#EA3C3C] text-[#ffffff] text-sm font-semibold px-4 py-2 rounded-lg  hover:bg-opacity-70 hover:scale-105 transition-all">
                  See More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
