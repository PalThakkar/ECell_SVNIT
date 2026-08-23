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
  ArrowRight,
} from "lucide-react";

export default function HorizontalEventCard({ event }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imgError, setImgError] = useState(false);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === event.images.length - 1 ? 0 : prevIndex + 1,
    );
    setImgError(false);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? event.images.length - 1 : prevIndex - 1,
    );
    setImgError(false);
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
    setImgError(false);
  };

  const statusStyles = {
    upcoming: {
      background: "#FEF3C7",
      border: "1px solid #F5AB35",
      color: "#D97706",
      label: "Coming Soon",
    },
    live: {
      background: "#FBBD58",
      border: "1px solid #F5AB35",
      color: "#111111",
      label: "Live Now",
    },
    past: {
      background: "#FAF9F6",
      border: "1px solid #E8E4DC",
      color: "#7A756C",
      label: "Past Event",
    },
  };

  const status = statusStyles[event.status] || statusStyles.past;

  const resolveSrc = (img) => {
    if (!img) return "";
    if (typeof img === "string") {
      const s = img.trim();
      if (s.startsWith("http") || s.startsWith("//") || s.startsWith("/"))
        return s;
      return "/" + s;
    }
    if (typeof img === "object") {
      if (img.src) return img;
      if (img.default && typeof img.default === "string") return img.default;
      if (img.url) return img.url;
    }
    return String(img);
  };

  const raw = event.images?.[currentImageIndex];
  const resolved = resolveSrc(raw);
  const imageProp = typeof resolved === "object" ? resolved : String(resolved);

  return (
    <article
      className="rounded-2xl sm:rounded-3xl overflow-hidden flex flex-col lg:flex-row transition-all duration-300 min-h-[420px] lg:min-h-[460px]"
      style={{
        background: "#FEFEFE",
        border: "1px solid #E8E4DC",
        boxShadow: "0 8px 28px rgba(17,15,10,0.07)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "#FBBD58";
        e.currentTarget.style.boxShadow =
          "0 20px 48px rgba(251,189,88,0.18), 0 8px 16px rgba(17,15,10,0.08)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "#E8E4DC";
        e.currentTarget.style.boxShadow = "0 8px 28px rgba(17,15,10,0.07)";
      }}
    >
      <div
        className="relative w-full lg:w-1/2 h-56 sm:h-72 lg:h-auto lg:min-h-[460px] flex-shrink-0 overflow-hidden"
        style={{ background: "#E8E4DC" }}
      >
        <div className="absolute inset-0">
          {!resolved || imgError ? (
            <div
              className="w-full h-full flex items-center justify-center font-medium text-sm"
              style={{ color: "#7A756C" }}
            >
              Image unavailable
            </div>
          ) : (
            <Image
              src={imageProp}
              alt={`${event.title} - ${currentImageIndex + 1}`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 60vw, 45vw"
              className="object-cover w-full h-full transition-transform duration-700 hover:scale-105"
              onError={() => setImgError(true)}
            />
          )}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(to top, rgba(17,15,10,0.45) 0%, transparent 55%)",
            }}
          />
        </div>

        {event.images.length > 1 && (
          <>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full transition-all z-10"
              style={{
                background: "rgba(17,15,10,0.55)",
                color: "#FEFEFE",
              }}
              aria-label="Previous image"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full transition-all z-10"
              style={{
                background: "rgba(17,15,10,0.55)",
                color: "#FEFEFE",
              }}
              aria-label="Next image"
            >
              <ChevronRight size={20} />
            </button>
          </>
        )}

        {event.images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
            {event.images.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  goToImage(index);
                }}
                className={`h-2.5 rounded-full transition-all ${
                  currentImageIndex === index ? "w-6" : "w-2.5"
                }`}
                style={{
                  background:
                    currentImageIndex === index
                      ? "#FBBD58"
                      : "rgba(254,254,254,0.55)",
                }}
                aria-label={`View image ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      <div className="w-full lg:w-1/2 p-6 sm:p-8 lg:p-10 flex flex-col">
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span
            className="px-3 py-1 rounded-full text-xs font-extrabold"
            style={{
              background: "#111111",
              color: "#FEFEFE",
            }}
          >
            {event.year}
          </span>
          <span
            className="px-3 py-1 rounded-full text-xs font-extrabold"
            style={{
              background: status.background,
              border: status.border,
              color: status.color,
            }}
          >
            {status.label}
          </span>
        </div>

        <h3
          className="text-2xl sm:text-3xl font-black mb-2 tracking-tight"
          style={{ color: "#111111" }}
        >
          {event.title}
        </h3>
        <p
          className="text-base sm:text-lg font-extrabold mb-4"
          style={{ color: "#D97706" }}
        >
          {event.tagline}
        </p>

        <p
          className="text-sm sm:text-base leading-relaxed font-medium mb-6"
          style={{ color: "#3D3A35" }}
        >
          {event.description}
        </p>

        <div className="mt-auto">
          <div className="space-y-2.5 mb-6">
            <div
              className="flex items-center gap-2 text-sm sm:text-[15px] font-semibold"
              style={{ color: "#3D3A35" }}
            >
              <Calendar
                className="w-4 h-4 shrink-0"
                style={{ color: "#D97706" }}
              />
              <span>{event.date}</span>
            </div>
            {event.time && (
              <div
                className="flex items-center gap-2 text-sm sm:text-[15px] font-semibold"
                style={{ color: "#3D3A35" }}
              >
                <Clock
                  className="w-4 h-4 shrink-0"
                  style={{ color: "#D97706" }}
                />
                <span>{event.time}</span>
              </div>
            )}
            {event.location && (
              <div
                className="flex items-start gap-2 text-sm sm:text-[15px] font-semibold"
                style={{ color: "#3D3A35" }}
              >
                <MapPin
                  className="w-4 h-4 shrink-0 mt-0.5"
                  style={{ color: "#D97706" }}
                />
                <span>{event.location}</span>
              </div>
            )}
          </div>

          <div
            className="pt-5"
            style={{ borderTop: "1px solid #E8E4DC" }}
          >
            <Link
              href={`/events/${event.slug}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl sm:rounded-2xl font-black text-sm sm:text-base transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              style={{
                background: "#FBBD58",
                color: "#111111",
                border: "1px solid #F5AB35",
                boxShadow: "0 6px 18px rgba(251,189,88,0.28)",
              }}
            >
              Know More
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
