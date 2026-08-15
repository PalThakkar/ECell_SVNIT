"use client";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { motion, MotionConfig, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Loader from "./Loader";
import Container from "./Container";
import Link from "next/link";
import Logo from "./Logo";
import { HiMenuAlt4 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import Button from "./Button";
import clsx from "clsx";
import Offices from "./Offices";
import SocialMedia from "./SocialMedia";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import FloatingSocialBar from "./FloatingSocialBar";
import AutoScroll from "./AutoScroll";
import Navbar from "@/components/home/Navbar";

const navigationItems = [
  { href: "/team", label: "Team" },
  { href: "/about", label: "About Us" },
  { href: "/events", label: "Events" },
  { href: "/jobs", label: "Jobs" },
  { href: "/merch", label: "Merch" },
  { href: "/blog&podcast", label: "Podcast & Blogs" },
];

const Header = ({
  panelId,
  invert = false,
  icon: Icon,
  expanded,
  onToggle,
  toggleRef,
}) => {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 mx-auto max-w-[1400px]">
      <div className="flex items-center justify-between">
        {!expanded && (
          <Link href={"/"} aria-label="Home" className="flex items-center mt-1 -ml-1 sm:-ml-4">
            <Logo className="h-10 sm:h-20 md:h-24 w-auto" fillOnHover />
          </Link>
        )}
        {expanded && <div className="flex-1" />}
        <div className="flex items-center gap-x-3 sm:gap-x-8">
          <Button href={"/contact"} className="hidden sm:inline-flex px-5 py-2.5 text-sm sm:text-base whitespace-nowrap">
            Contact us
          </Button>
          <button
            ref={toggleRef}
            type="button"
            onClick={onToggle}
            aria-expanded={expanded.toString()}
            aria-controls={panelId}
            className={clsx(
              "group -m-2 rounded-full p-3 sm:p-4 transition",
              "hover:bg-neutral-900/10"
            )}
            aria-label="Toggle navigation"
          >
            <Icon
              className={clsx(
                "h-6 w-6 sm:h-8 sm:w-8",
                "fill-neutral-900 group-hover:fill-neutral-700"
              )}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

const NavigationItem = ({ href, children, align = "center" }) => {
  return (
    <Link
      href={href}
      className="group relative bg-[#FAF9F6] border-b border-[#E8E4DC] last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0 block"
    >
      <div className="relative flex min-h-30 items-center justify-center overflow-hidden px-8 py-10 sm:min-h-45 sm:px-12 sm:py-14 md:px-16 md:py-16 lg:px-20 lg:py-20">
        <div
          className={`relative z-10 text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight w-full ${
            align === "left"
              ? "text-left"
              : align === "right"
                ? "text-right"
                : "text-center"
          }`}
        >
          {children}
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-[#FBBD58] opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100" />

        {/* Animated gradient on hover */}
        <div className="absolute inset-0 bg-linear-to-br from-[#FBBD58] via-[#F5AB35] to-[#D97706] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-60" />

        {/* Shine effect on hover */}
        <div className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />
      </div>
    </Link>
  );
};

const Navigation = () => {
  return (
    <nav className="font-display text-neutral-900 bg-[#FAF9F6]">
      <div className="sm:hidden">
        {navigationItems.map((item) => (
          <NavigationItem key={item.href} href={item.href} align="center">
            {item.label}
          </NavigationItem>
        ))}
      </div>

      <div className="hidden sm:grid sm:grid-cols-3">
        {navigationItems.map((item) => (
          <NavigationItem key={item.href} href={item.href} align="center">
            {item.label}
          </NavigationItem>
        ))}
      </div>
    </nav>
  );
};

const RootLayoutInner = ({ children }) => {
  const panelId = useId();
  const [expanded, setExpanded] = useState(false);
  const openRef = useRef();
  const closeRef = useRef();
  const navRef = useRef();
  const shouldReduceMotion = useReducedMotion();
  const pathname = usePathname();
  const isHomePage = pathname === "/" || pathname === "/contact";

  useEffect(() => {
    function onClick(event) {
      if (event.target.closest("a")?.href === window.location.href) {
        setExpanded(false);
      }
    }
    window.addEventListener("click", onClick);

    return () => {
      window.removeEventListener("click", onClick);
    };
  }, []);

  return (
    <MotionConfig transition={shouldReduceMotion ? { duration: 0 } : undefined}>
      <Navbar />

      <motion.div
        layout
        style={{
          borderTopLeftRadius: isHomePage ? 0 : 40,
          borderTopRightRadius: isHomePage ? 0 : 40,
        }}
        className={clsx(
          "relative flex flex-auto overflow-hidden bg-transparent",
          !isHomePage && "pt-14",
        )}
      >
        <motion.div
          layout
          className={clsx(
            "relative isolate flex w-full flex-col",
            !isHomePage && "pt-9",
          )}
        >
          <main className="w-full flex-auto">{children}</main>
          <Footer />
        </motion.div>
      </motion.div>
    </MotionConfig>
  );
};

const RootLayout = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const pathName = usePathname();

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000); // Matches your Loader duration

    return () => clearTimeout(timeout);
  }, [pathName]);

  return (
    <>
      {loading && <Loader />}

      {/* Global Ambient Blurred Campus/E-Cell Background Image */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <Image
          src="/e-cell-fam.jpg"
          alt="E-Cell SVNIT Campus Background"
          fill
          priority
          className="object-cover object-center scale-105 filter blur-2xl opacity-40 saturate-[1.3]"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 50% 30%, rgba(254,254,254,0.35) 0%, rgba(250,249,246,0.60) 100%)",
          }}
        />
      </div>

      <RootLayoutInner key={pathName}>{children}</RootLayoutInner>
      <AutoScroll />
      <ScrollToTop />
    </>
  );
};

export default RootLayout;
