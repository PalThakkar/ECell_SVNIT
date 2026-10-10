"use client";

import { useMemo, useState } from "react";
import { Code2, Search } from "lucide-react";
import { motion } from "framer-motion";
import Container from "@/components/Container";
import InteractiveParticleNetwork from "@/components/home/InteractiveParticleNetwork";
import Navbar from "@/components/home/Navbar";
import TeamMember from "@/components/TeamMember";

const yearLabel = (year) => `${year}-${String(year + 1).slice(-2)}`;

export default function DevTeamClient({ members }) {
  const years = useMemo(
    () =>
      [...new Set(members.map((member) => member.year))].sort((a, b) => b - a),
    [members],
  );
  const [selectedYear, setSelectedYear] = useState(years[0] ?? null);
  const [query, setQuery] = useState("");

  const visibleMembers = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return members.filter((member) => {
      const matchesYear = member.year === selectedYear;
      const matchesQuery =
        !normalizedQuery ||
        member.name.toLowerCase().includes(normalizedQuery) ||
        member.position.toLowerCase().includes(normalizedQuery);

      return matchesYear && matchesQuery;
    });
  }, [members, query, selectedYear]);

  return (
    <>
      <Navbar />
      <InteractiveParticleNetwork className="light-mode-wrapper min-h-screen bg-white text-neutral-900">
        <Container className="mt-24 sm:mt-32 lg:mt-40 text-center">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-[#F5AB35] bg-[#FEF3C7] px-4 py-1.5 text-xs font-black text-[#111111] sm:text-sm">
              <Code2 size={16} aria-hidden="true" />
              <span>{members.length} developers in the database</span>
            </div>
            <h1 className="mx-auto mt-5 max-w-4xl font-display text-5xl font-black tracking-tight text-[#111111] sm:text-6xl md:text-7xl">
              The people behind the build.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-600">
              Meet the developers and designers who create the digital
              experience for E-Cell SVNIT.
            </p>
          </motion.div>
        </Container>

        <div className="mt-10 flex flex-col items-center gap-5 px-4 sm:mt-12">
          {years.length > 0 && (
            <div
              role="tablist"
              aria-label="Select development team year"
              className="inline-flex flex-wrap justify-center gap-1.5 rounded-full border border-[#E8E4DC] bg-white/90 p-1.5 shadow-[0_8px_28px_rgba(17,15,10,0.08)]"
            >
              {years.map((year) => {
                const active = selectedYear === year;
                return (
                  <button
                    key={year}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => setSelectedYear(year)}
                    className={`rounded-full px-5 py-2.5 text-sm font-black transition-colors sm:px-7 sm:text-base ${
                      active
                        ? "bg-[#FBBD58] text-[#111111] shadow-[0_4px_14px_rgba(251,189,88,0.35)]"
                        : "text-[#7A756C] hover:bg-[#FAF9F6]"
                    }`}
                  >
                    {yearLabel(year)}
                  </button>
                );
              })}
            </div>
          )}

          <label className="flex w-full max-w-md items-center gap-2.5 rounded-full border border-[#E8E4DC] bg-[#FAF9F6] px-5 py-3 text-sm text-[#7A756C] focus-within:border-[#F5AB35]">
            <Search size={16} aria-hidden="true" />
            <span className="sr-only">Search development team</span>
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Find someone by name or role"
              className="w-full bg-transparent text-[#111111] outline-none"
            />
          </label>
        </div>

        <Container className="mt-12 pb-20 sm:mt-16">
          <section aria-labelledby="development-team-heading">
            <div className="text-center">
              <p className="text-xs font-black tracking-[0.16em] text-[#9A9488]">
                TECHNICAL TEAM
              </p>
              <h2
                id="development-team-heading"
                className="mt-3 font-display text-3xl font-black tracking-tight text-[#111111] sm:text-4xl"
              >
                Development team
              </h2>
            </div>

            {visibleMembers.length > 0 ? (
              <div className="mx-auto mt-8 grid max-w-340 justify-center gap-x-8 gap-y-8 sm:grid-cols-[repeat(auto-fit,17rem)]">
                {visibleMembers.map((member) => (
                  <TeamMember
                    key={member.id}
                    photo={member.photo}
                    name={member.name}
                    position={member.position}
                    linkedin={member.linkedin}
                    instagram={member.instagram}
                  />
                ))}
              </div>
            ) : (
              <p className="py-20 text-center text-sm font-bold tracking-widest text-[#7A756C]">
                {members.length === 0
                  ? "NO DEVELOPMENT TEAM MEMBERS FOUND"
                  : "NO MEMBERS MATCHED YOUR SEARCH"}
              </p>
            )}
          </section>
        </Container>
      </InteractiveParticleNetwork>
    </>
  );
}
