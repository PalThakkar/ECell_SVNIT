"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Calendar,
  Clock,
  MapPin,
} from "lucide-react";

export default function HorizontalEventCard({ event }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imgError, setImgError] = useState(false);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === event.images.length - 1 ? 0 : prevIndex + 1
    );
    setImgError(false);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? event.images.length - 1 : prevIndex - 1
    );
    setImgError(false);
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
    setImgError(false);
  };

  const statusClasses = {
    upcoming: "bg-yellow-100 text-yellow-800 border-yellow-200",
    live: "bg-green-100 text-green-800 border-green-200 animate-pulse",
    past: "bg-gray-100 text-gray-800 border-gray-200",
  };

  const statusText = {
    upcoming: "Coming Soon",
    live: "Live Now",
    past: "Past Event",
  };

  const statusBadge = statusText[event.status] || statusText.past;
  const statusClass = statusClasses[event.status] || statusClasses.past;

  return (
    <article className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col lg:flex-row border-2 border-gray-100 hover:border-[#fbbd58]/50 transition-all duration-300 hover:shadow-2xl min-h-[500px] lg:h-[500px]">
      {/* Image Carousel - Left Side */}
      <div className="relative w-full lg:w-1/2 h-64 lg:h-full bg-gray-100 flex-shrink-0 overflow-hidden">
        <div className="absolute inset-0">
          {/** Resolve image source: accept plain URL strings or imported image objects (next/image static imports) */}
          {(() => {
            const raw = event.images?.[currentImageIndex];

            const resolveSrc = (img) => {
              if (!img) return "";
              if (typeof img === "string") {
                const s = img.trim();
                if (
                  s.startsWith("http") ||
                  s.startsWith("//") ||
                  s.startsWith("/")
                )
                  return s;
                return "/" + s;
              }
              if (typeof img === "object") {
                if (img.src) return img;
                if (img.default && typeof img.default === "string")
                  return img.default;
                if (img.url) return img.url;
              }
              return String(img);
            };

            const resolved = resolveSrc(raw);

            if (!resolved || imgError) {
              return (
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <span className="text-sm text-gray-500">
                    Image unavailable
                  </span>
                </div>
              );
            }

            const imageProp =
              typeof resolved === "object" ? resolved : String(resolved);

            return (
              <Image
                src={imageProp}
                alt={`${event.title} - ${currentImageIndex + 1}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 60vw, 45vw"
                className="object-cover w-full h-full transition-opacity duration-300"
                onError={() => setImgError(true)}
              />
            );
          })()}
        </div>

        {/* Navigation Arrows */}
        {event.images.length > 1 && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all z-10"
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all z-10"
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>
          </>
        )}

        {/* Image Indicators */}
        {event.images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {event.images.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  goToImage(index);
                }}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  currentImageIndex === index
                    ? "bg-white w-6 scale-110"
                    : "bg-white/50 hover:bg-white/75"
                }`}
                aria-label={`View image ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Event Content - Right Side */}
      <div className="w-full lg:w-1/2 p-6 md:p-8 flex flex-col">
        {/* Year and Status Badges */}
        <div className="flex items-center gap-2 mb-4">
          <span className="px-3 py-1 rounded-full bg-black/80 text-white text-xs font-semibold">
            {event.year}
          </span>
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold border ${statusClass}`}
          >
            {statusBadge}
          </span>
        </div>

        <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">
          {event.title}
        </h3>
        <p className="text-lg text-[#e6a12b] font-semibold mb-4">
          {event.tagline}
        </p>

        <p className="text-gray-700 mb-6 leading-relaxed">
          {event.description}
        </p>

        <div className="mt-auto">
          <div className="space-y-3 mb-6">
            <div className="flex items-center text-gray-700">
              <Calendar className="w-5 h-5 mr-2 text-[#fbbd58] flex-shrink-0" />
              <span className="font-medium">{event.date}</span>
            </div>
            {event.time && (
              <div className="flex items-center text-gray-700">
                <Clock className="w-5 h-5 mr-2 text-[#fbbd58] flex-shrink-0" />
                <span className="font-medium">{event.time}</span>
              </div>
            )}
            {event.location && (
              <div className="flex items-start text-gray-700">
                <MapPin className="w-5 h-5 mr-2 mt-0.5 text-[#fbbd58] flex-shrink-0" />
                <span className="font-medium">{event.location}</span>
              </div>
            )}
          </div>

          <div className="pt-4 border-t border-gray-100">
            <Link
              href={`/events/${event.slug}`}
              className="inline-flex items-center px-6 py-3 border-2 border-transparent text-base font-semibold rounded-lg text-white bg-[#fbbd58] hover:bg-[#e6a12b] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#fbbd58] transition-all duration-200 transform hover:-translate-y-0.5 shadow-md hover:shadow-lg"
            >
              Explore More
              <svg
                className="ml-2 -mr-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
