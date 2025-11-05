"use client";
import React, { useState } from "react";
import ComingSoonMerch from "../app/merch/ComingSoonMerch";
import MerchTShirt from "../app/merch/MerchTShirt";

const Merch = () => {
  const [tab, setTab] = useState("coming");
  const tabs = [
    { key: "coming", label: "Coming Soon" },
    { key: "shop", label: "Shop T-Shirt" },
  ];
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-white">
      <header className="sticky top-0 z-20 bg-white/70 backdrop-blur border-b border-yellow-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl md:text-3xl font-black text-gray-900">
            E‑Cell{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent">
              Merch
            </span>
          </h1>
          <nav className="flex items-center gap-2">
            {tabs.map((t) => (
              <button
                key={t.key}
                onClick={() => setTab(t.key)}
                className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all border ${
                  tab === t.key
                    ? "bg-gradient-to-r from-yellow-400 to-yellow-300 text-gray-900 border-yellow-300 shadow"
                    : "bg-yellow-50 text-yellow-700 border-yellow-200 hover:bg-yellow-100"
                }`}
                aria-current={tab === t.key ? "page" : undefined}
              >
                {t.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <section className="max-w-7xl mx-auto">
        {tab === "coming" ? (
          <div className="animate-[fade-in_0.4s_ease-out]">
            <ComingSoonMerch />
          </div>
        ) : (
          <div className="animate-[fade-in_0.4s_ease-out]">
            <MerchTShirt />
          </div>
        )}
      </section>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </main>
  );
};
export default Merch;
