import React from "react";
import backimage from "../../assets/backimage.png";

export default function ShareVehicleSection() {
  const [isSmall, setIsSmall] = React.useState(false);

  React.useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const update = (e) => setIsSmall(e.matches);
    setIsSmall(mq.matches);
    if (mq.addEventListener) mq.addEventListener("change", update);
    else mq.addListener(update);
    return () => {
      if (mq.removeEventListener) mq.removeEventListener("change", update);
      else mq.removeListener(update);
    };
  }, []);

  const bgStyle = {
    backgroundImage: `url(${backimage})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: isSmall ? "center right" : "center center",
    backgroundSize: isSmall ? "contain" : "cover",
  };

  return (
    <section className="relative min-h-[400px] md:h-screen bg-white overflow-hidden my-10">

      <div
        className="absolute inset-0 md:left-1/2 bg-no-repeat bg-center h-full w-full md:w-1/2 right-0"
        style={bgStyle}
      >
        <div className="absolute inset-0"></div>
      </div>

      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 md:px-16 w-full">
          <div className="relative z-10 bg-white border-2 border-[#EA3C3C] rounded-xl p-8 max-w-md shadow-sm md:mr-auto">
            <span className="absolute top-3 right-3 w-3 h-3 bg-[#EA3C3C] rounded-full"></span>

            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">
              Do You Want To Share Your Vehicle?
            </h2>

            <p className="text-gray-500 mb-6 leading-relaxed">
              Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Jorem
              ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
              libero et velit.
            </p>

            <button className="bg-[#EA3C3C] text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-[#EA3C3C] transition">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
