// components/Carousel.jsx
import React, { useState, useEffect } from "react";

const slides = [
  {
    id: 1,
    image: "/images/Yugaanter.jpg",
    title: "Hello, I am Yugaanter Ramdas",
    description: "🚀 Entrepreneur | IT Leader | Youth Mentor | Nation-Builder",
  },
  {
    id: 2,
    image: "/images/Yugaanter2.jpg",
    title: "🌟 My Mission",
    description: "👉Explore my work, mission, and how I help students and young professionals."
  }
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="max-w-8xl mx-auto">
      <div className="relative overflow-hidden rounded-sm shadow-lg">
        <img
          src={slides[currentIndex].image}
          alt={slides[currentIndex].title}
          className="w-full h-auto object-cover"/>

        <div className="bg-black/50 text-white text-center absolute bottom-0 left-0 right-0 py-2 px-1">
          <h2 className="text-xl font-bold">{slides[currentIndex].title}</h2>
          <p className="md:text-md sm:text-sm">{slides[currentIndex].description}</p>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
