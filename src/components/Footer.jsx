import React from "react";
import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-zinc-800 text-white border-t border-yellow-500/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Logo Section */}
          <div className="lg:col-span-1">
            <Link href="/" aria-label="Home">
              <Logo className="h-10 w-auto" />
            </Link>
          </div>

          {/* Column 1: Our Initiatives */}
          <div>
            <h3 className="text-white font-bold text-base mb-4">Our Initiatives</h3>
            <ul className="space-y-2.5 text-sm text-zinc-300">
              <li><Link href="/e-summit" className="hover:text-yellow-400 transition">E-Summit</Link></li>
              <li><Link href="/workshops" className="hover:text-yellow-400 transition">Workshops</Link></li>
              <li><Link href="/lego-startup" className="hover:text-yellow-400 transition">Lego Startup</Link></li>
              <li><Link href="/collaborations" className="hover:text-yellow-400 transition">Collaborations</Link></li>
            </ul>
          </div>

          {/* Column 2: E Cell SVNIT */}
          <div>
            <h3 className="text-white font-bold text-base mb-4">E Cell SVNIT</h3>
            <ul className="space-y-2.5 text-sm text-zinc-300">
              <li><Link href="/about" className="hover:text-yellow-400 transition">About</Link></li>
              <li><Link href="/team" className="hover:text-yellow-400 transition">Team</Link></li>
              <li><Link href="/events" className="hover:text-yellow-400 transition">Events</Link></li>
              <li><Link href="/contact" className="hover:text-yellow-400 transition">Contact us</Link></li>
              <li><Link href="/job" className="hover:text-yellow-400 transition">Job</Link></li>
              <li><Link href="/faq" className="hover:text-yellow-400 transition">FAQ</Link></li>
            </ul>
          </div>

          {/* Column 3: Connect */}
          <div>
            <h3 className="text-white font-bold text-base mb-4">Connect</h3>
            <ul className="space-y-2.5 text-sm text-zinc-300">
              <li><a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-yellow-400 transition">Instagram</a></li>
              <li><a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-yellow-400 transition">Facebook</a></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-yellow-400 transition">Linkedin</a></li>
            </ul>
          </div>

          {/* Column 4: Newsletter Signup */}
          <div className="lg:col-span-1">
            <h3 className="text-white font-bold text-base mb-4">Sign up for our newsletter</h3>
            <p className="text-zinc-300 text-sm mb-4 leading-relaxed">
              Subscribe to get the latest design news, articles, resources and inspiration.
            </p>
            
            <form onSubmit={(e) => e.preventDefault()} className="flex items-center gap-2">
              <input
                type="email"
                placeholder="Email address"
                className="w-full px-4 py-2.5 rounded-xl bg-zinc-700 border border-zinc-600 text-white placeholder-zinc-400 text-sm focus:outline-none focus:border-yellow-400 transition"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="px-4 py-2.5 bg-zinc-700 hover:bg-yellow-400 hover:text-black border border-zinc-600 text-white rounded-xl transition flex items-center justify-center"
              >
                &rarr;
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Sub-footer Bar */}
        <div className="mt-12 pt-8 border-t border-zinc-700 flex flex-col sm:flex-row items-center justify-between text-sm text-zinc-300 gap-4">
          <p>
            Managed by <span className="text-yellow-400 font-semibold">Technical Team 2026</span>
          </p>
          <p>
            &copy; {new Date().getFullYear()} Copyright: <span className="text-white font-medium">E-Cell SVNIT</span>
          </p>
        </div>
      </div>
    </footer>
  );
}