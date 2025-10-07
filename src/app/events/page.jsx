"use client";

import React from "react";
import { BackgroundLines } from "@/components/ui/background-lines";
import { EventCard } from "@/components/eventcard";
import CorporateCatastrophePage from "@/app/events/corporate_catastrophe/page";
import ESummitPage from "@/app/events/esummit/page";

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-neutral-50 dark:bg-neutral-950">
      <CorporateCatastrophePage />
      <ESummitPage />
    </main>
  );
}
