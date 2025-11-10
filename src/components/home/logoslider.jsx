import React from "react";
import jaguar from "../../assets/jagwar.png";
import Toyota from "../../assets/Toyota.jpg";
import volvo from "../../assets/volvo.png";
import nissan from "../../assets/nissan.png";

const brands = [jaguar, Toyota, volvo, nissan, jaguar, Toyota];

const LogoSlider = () => {
  const visibleCount = 5;
  const slides = [...brands, ...brands]; 

  const containerRef = React.useRef(null);
  const trackRef = React.useRef(null);
  const intervalRef = React.useRef(null);
  const resetTimeoutRef = React.useRef(null);

  const [index, setIndex] = React.useState(0);
  const [isTransition, setIsTransition] = React.useState(true);
  const [itemWidth, setItemWidth] = React.useState(0);

  React.useEffect(() => {
    function updateWidth() {
      if (containerRef.current) {
        const w = containerRef.current.clientWidth;
        setItemWidth(w / visibleCount);
      }
    }
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, [visibleCount]);

  React.useEffect(() => {
    intervalRef.current = window.setInterval(() => {
      setIsTransition(true);
      setIndex((i) => i + 1);
    }, 2500);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);


  React.useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    function onTransitionEnd() {
      if (index >= brands.length) {
        setIsTransition(false);
        setIndex(0);
        if (resetTimeoutRef.current) clearTimeout(resetTimeoutRef.current);
        resetTimeoutRef.current = window.setTimeout(() => {
          setIsTransition(true);
        }, 50);
      }
    }

    el.addEventListener("transitionend", onTransitionEnd);
    return () => {
      el.removeEventListener("transitionend", onTransitionEnd);
      if (resetTimeoutRef.current) clearTimeout(resetTimeoutRef.current);
    };
  }, [index]);

  const translateX = -(index * itemWidth);

  return (
    <div className="w-full bg-white py-8 overflow-hidden">
      <div ref={containerRef} className="relative max-w-7xl mx-auto overflow-hidden">
        <div
          ref={trackRef}
          className="flex items-center"
          style={{
            transform: `translateX(${translateX}px)`,
            transition: isTransition ? "transform 700ms linear" : "none",
            width: `${slides.length * (itemWidth || (100 / visibleCount))}px`,
            willChange: "transform",
          }}
        >
          {slides.map((logoSrc, i) => (
            <div
              key={i}
              className="flex-none flex justify-center items-center"
              style={{
                width: itemWidth ? `${itemWidth}px` : `${100 / visibleCount}%`,
              }}
            >
              <img
                src={logoSrc}
                alt={`brand-${i}`}
                className="h-20 w-auto grayscale opacity-70 hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoSlider;
