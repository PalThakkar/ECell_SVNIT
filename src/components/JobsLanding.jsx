"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Briefcase, ArrowUpRight } from "lucide-react";
import HomeShell from "@/components/home/HomeShell";
import { JobCard } from "@/components/JobCard";

export default function JobsLanding({ jobs = [] }) {
  return (
    <HomeShell>
      <section
        className="relative pt-28 sm:pt-36 pb-10 sm:pb-14 overflow-hidden"
        style={{ backgroundColor: "rgba(254,254,254,0.50)" }}
      >
        <div
          className="absolute top-16 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] rounded-full pointer-events-none -z-10"
          style={{
            background:
              "radial-gradient(circle, rgba(251,189,88,0.12) 0%, transparent 70%)",
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="max-w-3xl"
          >
            <div
              className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-[15px] font-extrabold mb-3 sm:mb-4"
              style={{
                background: "#FEF3C7",
                border: "1px solid #F5AB35",
                color: "#111111",
              }}
            >
              <Briefcase
                className="w-4 h-4 sm:w-5 sm:h-5"
                style={{ color: "#D97706" }}
              />
              <span>Internships · Roles · Opportunities</span>
            </div>

            <h1
              className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.12] mb-3 sm:mb-4"
              style={{
                color: "#111111",
                fontFamily: "var(--font-jakarta), system-ui, sans-serif",
              }}
            >
              Open{" "}
              <span
                className="inline-block px-2 py-0.5 rounded-lg"
                style={{ background: "#FBBD58", color: "#111111" }}
              >
                Opportunities
              </span>
            </h1>

            <p
              className="text-base sm:text-xl leading-relaxed font-medium"
              style={{ color: "#7A756C" }}
            >
              Explore roles and internships curated for E-Cell SVNIT students —
              build real experience with startups and partners.
            </p>
          </motion.div>
        </div>
      </section>

      <section
        className="relative pb-20 sm:pb-28 overflow-hidden"
        style={{ backgroundColor: "rgba(250,249,246,0.50)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {jobs.length === 0 ? (
            <div
              className="text-center py-16 rounded-2xl sm:rounded-3xl"
              style={{
                background: "#FEFEFE",
                border: "1px solid #E8E4DC",
                boxShadow: "0 8px 28px rgba(17,15,10,0.07)",
              }}
            >
              <h3 className="text-xl font-black" style={{ color: "#111111" }}>
                No active jobs right now
              </h3>
              <p className="mt-2 font-medium" style={{ color: "#7A756C" }}>
                Check back soon — new roles are posted regularly.
              </p>
              <Link
                href="/contact"
                className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-black text-sm"
                style={{
                  background: "#FBBD58",
                  color: "#111111",
                  border: "1px solid #F5AB35",
                }}
              >
                Get in touch
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2">
              {jobs.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                >
                  <JobCard job={job} />
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </HomeShell>
  );
}
