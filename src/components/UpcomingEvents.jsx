"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import { eventsData } from "./EventsLanding";

const statusClasses = {
  upcoming: "bg-yellow-100 text-yellow-800 border-yellow-200",
  live: "bg-green-100 text-green-800 border-green-200 animate-pulse",
};

const statusText = {
  upcoming: "Coming Soon",
  live: "Live Now",
};

const UpcomingEvents = ({ className }) => {
  // Show only upcoming/live events, max 3
  const featured = eventsData
    .filter((e) => e.status === "upcoming" || e.status === "live")
    .slice(0, 3);

  if (featured.length === 0) return null;

  return (
    <div className={className}>
      <div className="px-6 mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <div className="relative inline-block">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 tracking-tight relative z-10">
              Upcoming <span className="text-[#fbbd58]">Events</span>
            </h2>
          </div>
          <p className="mt-4 text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Don't miss out — here's what's happening next at E-Cell SVNIT.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((event) => (
            <Link
              key={event.id}
              href={`/events/${event.slug}`}
              className="group bg-white rounded-2xl shadow-lg border-2 border-gray-100 hover:border-[#fbbd58]/50 hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
            >
              <div className="relative w-full h-44 bg-gray-100 overflow-hidden">
                <Image
                  src={event.images?.[0] || "/ecell11.jpeg"}
                  alt={event.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span
                  className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold border ${statusClasses[event.status]}`}
                >
                  {statusText[event.status]}
                </span>
              </div>

              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-[#e6a12b] transition-colors">
                  {event.title}
                </h3>
                <p className="text-sm text-[#e6a12b] font-semibold mb-3">
                  {event.tagline}
                </p>

                <div className="mt-auto space-y-2 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#fbbd58] shrink-0" />
                    <span>{event.date}</span>
                  </div>
                  {event.location && (
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-[#fbbd58] shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{event.location}</span>
                    </div>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/events"
            className="inline-flex items-center gap-2 rounded-full bg-neutral-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800"
          >
            View All Events
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;