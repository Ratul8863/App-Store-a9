import React, { useState, useEffect, useRef } from "react";
import { useLoaderData } from "react-router-dom";
import AppCard from './AppCard';

const Apps = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const sliderRef = useRef(null); // Reference for the slider

  const slides = [
    "https://i.ibb.co.com/xrt3mRf/thumbnail.png",
    "https://i.ibb.co.com/60DMrfhq/Flux-Dev-Create-a-3-D-cartoonstyle-banner-for-a-minimalist-note-2.jpg",
      "https://i.ibb.co.com/DDkhnf96/Flux-Dev-Create-a-3-D-cartoon-banner-of-two-animated-student-ch-3.jpg"
      
  ];

  // Auto slide every 3 seconds (except when hovered)
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }
    }, 3000);

    return () => clearInterval(interval); // Cleanup
  }, [isHovered, slides.length]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const data = useLoaderData();
  const trending = [...data].sort((a, b) => b.rating - a.rating).slice(0, 4);
  const categories = ["Education", "Productivity", "Gaming"];
  const recentlyLaunched = data.filter(app => app.downloads < 1500000);

  return (
    <div className="px-4 py-8 space-y-12">
      {/* Slider */}
      <div
        ref={sliderRef}
        className="relative w-full h-64 overflow-hidden rounded-xl mb-10"
        onMouseEnter={() => setIsHovered(true)}  // When mouse enters, pause the slider
        onMouseLeave={() => setIsHovered(false)} // When mouse leaves, resume the slider
      >
        <div
          className="flex transition-transform duration-700 h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Slide ${i + 1}`}
              className="w-full h-full object-cover flex-shrink-0"
            />
          ))}
        </div>
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-3 transform -translate-y-1/2 bg-white bg-opacity-80 p-2 rounded-full hover:bg-opacity-100 shadow"
        >
          ⬅
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-white bg-opacity-80 p-2 rounded-full hover:bg-opacity-100 shadow"
        >
          ➡
        </button>
      </div>

      {/* Trending */}
      <div>
        <h2 className="text-2xl font-bold mb-4">🔥 Trending Apps</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {trending.map(app => <AppCard key={app.id} app={app} />)}
        </div>
      </div>

      {/* Categories */}
      {categories.map(cat => (
        <div key={cat}>
          <h2 className="text-2xl font-bold mb-4">{cat}</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {data.filter(a => a.category === cat).map(app => <AppCard key={app.id} app={app} />)}
          </div>
        </div>
      ))}

      {/* Extra: Recently Launched */}
      <div>
        <h2 className="text-2xl font-bold mb-4">🆕 Recently Launched</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {recentlyLaunched.map(app => <AppCard key={app.id} app={app} />)}
        </div>
      </div>
    </div>
  );
};


export default Apps;
