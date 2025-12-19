"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const GroupPhotoCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  // Local group photos placed in the `public/` folder (use leading slash)
  const groupPhotos = [
    "/group_photo1.jpg",
    "/group_photo2.jpg",
    "/group_photo3.jpg",
    "/group_photo4.jpg",
  ];

  // Normalize image value for next/image: accept strings or imported objects
  const getCurrentImage = (index) => {
    const raw = groupPhotos[index % groupPhotos.length];
    if (!raw) return null;
    if (typeof raw === "string") {
      const s = raw.trim();
      if (s === "") return null;
      // if already absolute (starts with / or http) return as-is
      if (s.startsWith("/") || s.startsWith("http")) return s;
      return "/" + s;
    }
    if (typeof raw === "object") return raw; // StaticImageData or similar
    return String(raw);
  };

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % groupPhotos.length);
  }, [groupPhotos.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? groupPhotos.length - 1 : prevIndex - 1
    );
  }, [groupPhotos.length]);

  useEffect(() => {
    setIsMounted(true);

    // Auto-advance slides every 5 seconds
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, [nextSlide]);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="relative w-full h-full rounded-2xl overflow-hidden">
      {/* Main Image */}
      <div className="relative w-full h-full">
        <Image
          src={getCurrentImage(currentIndex)}
          alt={`Group photo ${currentIndex + 1}`}
          fill
          className="object-cover transition-opacity duration-500"
          priority
        />
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          prevSlide();
        }}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all z-10"
        aria-label="Previous image"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          nextSlide();
        }}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all z-10"
        aria-label="Next image"
      >
        <ChevronRight size={24} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {groupPhotos.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              currentIndex === index
                ? "bg-white w-6 scale-110"
                : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`View image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default GroupPhotoCarousel;
