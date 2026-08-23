"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/admin", label: "Overview" },
  { href: "/admin/jobs", label: "Jobs" },
  { href: "/admin/submissions", label: "Submissions" },
  { href: "/admin/team", label: "Team" },
  { href: "/admin/blog", label: "Blog" },
  { href: "/admin/events", label: "Events" },
  { href: "/admin/leaderboard", label: "Leaderboard" },
];

export default function AdminNav() {
  const pathname = usePathname();

  return (
    <nav className="mx-auto flex max-w-7xl flex-wrap gap-2 px-6 pb-2 pt-6">
      {links.map((link) => {
        const active =
          link.href === "/admin"
            ? pathname === "/admin"
            : pathname.startsWith(link.href);

        return (
          <Link
            key={link.href}
            href={link.href}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              active
                ? "bg-yellow-400 text-zinc-950"
                : "border border-zinc-800 bg-zinc-900 text-zinc-300 hover:border-zinc-700 hover:text-white"
            }`}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
