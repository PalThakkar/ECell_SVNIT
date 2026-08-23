"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Mic2, ArrowRight, BookOpen } from "lucide-react";
import HomeShell from "@/components/home/HomeShell";

export default function BlogLanding({ posts = [] }) {
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
              <Mic2
                className="w-4 h-4 sm:w-5 sm:h-5"
                style={{ color: "#D97706" }}
              />
              <span>Podcast · Insights · Founder Stories</span>
            </div>

            <h1
              className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.12] mb-3 sm:mb-4"
              style={{
                color: "#111111",
                fontFamily: "var(--font-jakarta), system-ui, sans-serif",
              }}
            >
              Podcast &{" "}
              <span
                className="inline-block px-2 py-0.5 rounded-lg"
                style={{ background: "#FBBD58", color: "#111111" }}
              >
                Blogs
              </span>
            </h1>

            <p
              className="text-base sm:text-xl leading-relaxed font-medium"
              style={{ color: "#7A756C" }}
            >
              Ideas, frameworks, and stories from the E-Cell community — built
              for student founders who want to ship.
            </p>
          </motion.div>
        </div>
      </section>

      <section
        className="relative pb-20 sm:pb-28 overflow-hidden"
        style={{ backgroundColor: "rgba(250,249,246,0.50)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {posts.length === 0 ? (
            <div
              className="text-center py-16 rounded-2xl sm:rounded-3xl"
              style={{
                background: "#FEFEFE",
                border: "1px solid #E8E4DC",
                boxShadow: "0 8px 28px rgba(17,15,10,0.07)",
              }}
            >
              <BookOpen
                className="w-8 h-8 mx-auto mb-3"
                style={{ color: "#D97706" }}
              />
              <h3 className="text-xl font-black" style={{ color: "#111111" }}>
                No posts yet
              </h3>
              <p className="mt-2 font-medium" style={{ color: "#7A756C" }}>
                New articles and episodes are on the way.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2">
              {posts.map((post, index) => (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  className="group flex flex-col sm:flex-row overflow-hidden rounded-2xl sm:rounded-3xl transition-all duration-300"
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
                    e.currentTarget.style.boxShadow =
                      "0 8px 28px rgba(17,15,10,0.07)";
                  }}
                >
                  {post.image && (
                    <div
                      className="relative w-full sm:w-44 md:w-52 h-44 sm:h-auto sm:min-h-[200px] shrink-0 overflow-hidden"
                      style={{ background: "#E8E4DC" }}
                    >
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 640px) 100vw, 208px"
                      />
                    </div>
                  )}

                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <h2
                      className="text-lg sm:text-xl font-black tracking-tight mb-2"
                      style={{ color: "#111111" }}
                    >
                      {post.title}
                    </h2>
                    <p
                      className="text-sm sm:text-base leading-relaxed font-medium flex-1 mb-5"
                      style={{ color: "#3D3A35" }}
                    >
                      {post.excerpt}
                    </p>
                    <Link
                      href={`/blog&podcast/${post.slug}`}
                      className="inline-flex items-center gap-1.5 self-start text-sm font-extrabold transition-all group-hover:gap-2.5"
                      style={{ color: "#D97706" }}
                    >
                      Read more
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>
    </HomeShell>
  );
}
