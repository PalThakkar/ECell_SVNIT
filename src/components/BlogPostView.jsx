"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import HomeShell from "@/components/home/HomeShell";

export default function BlogPostView({ post }) {
  const contentParagraphs = post.content.split("\n\n").map((para, i) => (
    <p
      key={i}
      className="mb-4 text-base sm:text-lg leading-relaxed font-medium"
      style={{ color: "#3D3A35" }}
    >
      {para}
    </p>
  ));

  return (
    <HomeShell>
      <section
        className="relative pt-28 sm:pt-36 pb-20 sm:pb-28 overflow-hidden"
        style={{ backgroundColor: "rgba(250,249,246,0.50)" }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog&podcast"
            className="inline-flex items-center gap-2 text-sm font-extrabold mb-8 transition-colors"
            style={{ color: "#D97706" }}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Podcast & Blogs
          </Link>

          <article
            className="rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12"
            style={{
              background: "#FEFEFE",
              border: "1px solid #E8E4DC",
              boxShadow: "0 8px 28px rgba(17,15,10,0.07)",
            }}
          >
            <h1
              className="text-3xl md:text-5xl font-black tracking-tight mb-8 leading-tight"
              style={{
                color: "#111111",
                fontFamily: "var(--font-jakarta), system-ui, sans-serif",
              }}
            >
              {post.title}
            </h1>
            <div>{contentParagraphs}</div>
          </article>
        </div>
      </section>
    </HomeShell>
  );
}
