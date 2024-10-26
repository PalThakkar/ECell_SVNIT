"use client";

import React from "react";
import { BackgroundLines } from "@/components/ui/background-lines";
import { EventCard } from "@/components/eventcard";

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-neutral-50 dark:bg-neutral-950">
      <BackgroundLines className="px-4 py-16 sm:py-24 lg:py-32 bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <header className="mb-16 sm:mb-24">
          <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-100 to-neutral-400 text-2xl md:text-4xl lg:text-7xl font-sans relative z-20 font-bold tracking-tight">
            Events &  Workshops
          </h2>
          </header>

          <section className="flex justify-center items-center">
            <div className="w-full max-w-md">
              <EventCard />
            </div>
          </section>
        </div>
      </BackgroundLines>
    </main>
  );
}