"use client";

import Navbar from "@/components/home/Navbar";
import InteractiveParticleNetwork from "@/components/home/InteractiveParticleNetwork";

/**
 * Shared page chrome matching the Home page:
 * warm off-white base, campus photo wash, slate dot grid, glass Navbar, particles.
 */
export default function HomeShell({ children }) {
  return (
    <div
      className="w-full min-h-screen relative"
      style={{
        backgroundColor: "#FEFEFE",
        color: "#111111",
        fontFamily: "var(--font-inter), system-ui, sans-serif",
      }}
    >
      <div className="fixed inset-0 pointer-events-none -z-20">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.06]"
          style={{ backgroundImage: "url('/e-cell-fam.jpg')" }}
        />
        <div
          className="absolute inset-0 opacity-[0.45]"
          style={{
            backgroundImage:
              "radial-gradient(#94A3B8 1.25px, transparent 1.25px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(254,254,254,0.3) 0%, rgba(250,249,246,0.85) 100%)",
          }}
        />
      </div>

      <Navbar />

      <InteractiveParticleNetwork className="w-full">
        <main className="w-full">{children}</main>
      </InteractiveParticleNetwork>
    </div>
  );
}
