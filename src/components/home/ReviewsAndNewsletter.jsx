import { Star, Quote, Mail } from "lucide-react";
import whattheysay from "../../assets/whattheysay.png";
import { useState, useRef, useEffect } from "react";
import "../../app.css";

export default function ReviewsAndNewsletter() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); 
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (sliderRef.current && isMobile) {
      sliderRef.current.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
  }, [currentSlide, isMobile]);

  const reviews = [
    {
      id: 1,
      name: "Meliash Subedi",
      location: "Pokhara",
      image:
        {whattheysay},
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque nam suscipit amet nec eget fermentum, elementum purus aliquet. Porttitor elementum a felis, tempus erat orci.",
      rating: 5,
    },
    {
      id: 2,
      name: "Ram Subedi",
      location: "kathmandu",
      image:
       {whattheysay},
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque nam suscipit amet nec eget fermentum, elementum purus aliquet. Porttitor elementum a felis, tempus erat orci.",
      rating: 5,
    },
    {
      id: 3,
      name: "Sujita Sharma",
      location: "Lalitpur",
      image:
        {whattheysay},
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque nam suscipit amet nec eget fermentum, elementum purus aliquet. Porttitor elementum a felis, tempus erat orci.",
      rating: 5,
    },
  ];

  return (
    <section className="bg-white">
      {/* --- REVIEWS SECTION --- */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 text-center">
        <p className="text-[#EA3C3C] font-semibold uppercase tracking-wider">
          Our Review
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A202C] mt-2">
          What They Say ?
        </h2>
        <p className="text-[#737373] mt-2 max-w-2xl mx-auto">
          Here are some comments from our customers, be one of them.
        </p>

        {/* Desktop View - Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 mt-12">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white rounded-xl shadow-md p-6 text-left hover:shadow-xl transition">
              {/* Review Card Content */}
              <div className="flex justify-between items-start mb-4">
                <Quote className="w-6 h-6 text-[#EA3C3C]" />
                <div className="flex text-[#EA3C3C]">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>

              <p className="text-[#737373 text-sm mb-6">{review.text}</p>

              <div className="flex items-center gap-3">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-[#1A202C]">{review.name}</h3>
                  <p className="text-[#737373] text-sm">{review.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View - Slider */}
        {isMobile && (
          <div className="md:hidden slider-container mt-12 overflow-hidden">
            <div 
              className="slider-wrapper flex transition-transform duration-500 ease-in-out" 
              ref={sliderRef}
            >
              {reviews.map((review) => (
                <div key={review.id} className="w-full flex-shrink-0 px-4">
                  {/* Same Review Card Content as Desktop */}
                  <div className="bg-white rounded-xl shadow-md p-6 text-left hover:shadow-xl transition">
                    {/* Review Card Content */}
                    <div className="flex justify-between items-start mb-4">
                      <Quote className="w-6 h-6 text-[#EA3C3C]" />
                      <div className="flex text-[#EA3C3C]">
                        {Array.from({ length: review.rating }).map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                    </div>

                    <p className="text-[#737373 text-sm mb-6">{review.text}</p>

                    <div className="flex items-center gap-3">
                      <img
                        src={review.image}
                        alt={review.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="font-semibold text-[#1A202C]">
                          {review.name}
                        </h3>
                        <p className="text-[#737373] text-sm">{review.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Dots - Only on Mobile */}
            <div className="slider-dots mt-8">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${currentSlide === index ? 'active' : ''}`}
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        )}

        <button className="mt-10 bg-[#EA3C3C] text-white font-semibold px-6 py-2 rounded-lg hover:bg-[#EA3C3C]-700 transition">
          See All
        </button>
      </div>

      {/* --- NEWSLETTER SECTION --- */}
      <div className="bg-[#FFE9E9] py-12 px-6 md:px-12 text-center">
        <h3 className="text-2xl md:text-3xl font-extrabold text-[#1A202C] mb-2">
          Subscribe Our Newsletter
        </h3>
        <p className="text-[#737373 max-w-xl text-sm mx-auto mb-6">
          We can help you provide the latest news whenever and wherever you are
          via email
        </p>

        <form className="max-w-xl mx-auto flex flex-col md:flex-row items-center gap-4">
          <div className="flex items-center bg-white w-full rounded-lg shadow-sm px-4 py-1">
            <Mail className="text-[#737373] w-5 h-5" />
            <input
              type="email"
              placeholder="example.@gmail.com"
              className="flex-1 px-3 py-2 outline-none text-gray-700"
            />
          </div>
          <button
            type="submit"
            className="bg-[#EA3C3C] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#EA3C3C]-700 transition w-full md:w-auto"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
