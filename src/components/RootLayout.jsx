"use client";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { motion, MotionConfig, useReducedMotion } from "framer-motion";
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
import Merch from "./Merch";

const Header = ({ panelId, invert = false, icon: Icon, expanded, onToggle, toggleRef }) => {
  return (
    <Container>
      <div className="flex items-center justify-between">
        {!expanded && (
          <Link href={"/"} aria-label="Home">
          <Logo className="h-8 mb-16" fillOnHover />
        </Link>
        )}
        {expanded && <div className="flex-1" />}
        <div className="flex items-center gap-x-8">
          <Button 
            href={"/contact"} 
            className="px-6 py-3 text-base"
          >
            Contact us
          </Button>
          <button
            ref={toggleRef}
            type="button"
            onClick={onToggle}
            aria-expanded={expanded.toString()}
            aria-controls={panelId}
            className={clsx(
              "group -m-2.5 rounded-full p-4 transition",
              invert ? "hover:bg-white/10" : "hover:bg-neutral-950/10"
            )}
            aria-label="Toggle navigation"
          >
            <Icon
              className={clsx(
                "h-8 w-8",
                invert ? "fill-white group-hover:fill-neutral-200" : "fill-neutral-950 group-hover:fill-neutral-700"
              )}
            />
          </button>
        </div>
      </div>
    </Container>
  );
};

const NavigationItem = ({ href, children, align = "center" }) => {
  return (
    <Link
      href={href}
      className="group relative bg-neutral-950 border-b border-neutral-800 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0 block"
    >
      <div className="relative overflow-hidden px-8 py-10 sm:px-12 sm:py-14 md:px-16 md:py-16 lg:px-20 lg:py-20 flex items-center justify-center min-h-[120px] sm:min-h-[180px]">
        <div className={`relative z-10 text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight w-full ${
          align === 'left' ? 'text-left' : align === 'right' ? 'text-right' : 'text-center'
        }`}>
          {children}
        </div>
        
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-neutral-800 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100" />
        
        {/* Animated gradient on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-700 via-neutral-800 to-neutral-900 opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-60" />
        
        {/* Shine effect on hover */}
        <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
    </Link>
  );
};

const Navigation = () => {
  return (
    <nav className="font-display text-white bg-neutral-950">
      {/* Mobile: Single column layout - all center aligned for better mobile UX */}
      <div className="sm:hidden">
        <NavigationItem href="/team" align="center">Team</NavigationItem>
        <NavigationItem href="/about" align="center">About Us</NavigationItem>
        <NavigationItem href="/jobs" align="center">Jobs</NavigationItem>
        <NavigationItem href="/events" align="center">Events</NavigationItem>
        <NavigationItem href="/work" align="center">Work</NavigationItem>
        <NavigationItem href="/merch" align="center">Merch</NavigationItem>
        <NavigationItem href="/Faq" align="center">FAQ</NavigationItem>
      </div>

      {/* Tablet & Desktop: 3-column grid with varied alignment */}
      <div className="hidden sm:grid sm:grid-cols-3">
        <NavigationItem href="/team" align="center">Team</NavigationItem>
        <NavigationItem href="/about" align="center">About Us</NavigationItem>
        <NavigationItem href="/jobs" align="center">Jobs</NavigationItem>
        <NavigationItem href="/events" align="center">Events</NavigationItem>
        <NavigationItem href="/work" align="center">Work</NavigationItem>
        <NavigationItem href="/merch" align="center">Merch</NavigationItem>
        <NavigationItem href="/Faq" align="center">FAQ</NavigationItem>
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
      <header>
        <div
          className="absolute left-0 right-0 top-2 z-40"
          aria-hidden={expanded ? "true" : undefined}
          inert={expanded ? "" : undefined}
        >
          <Header
            panelId={panelId}
            icon={HiMenuAlt4}
            toggleRef={openRef}
            expanded={expanded}
            onToggle={() => {
              setExpanded((expanded) => !expanded);
              window.setTimeout(() =>
                closeRef.current?.focus({ preventScroll: true })
              );
            }}
          />
        </div>

        <motion.div
          layout
          id={panelId}
          style={{ height: expanded ? "auto" : "0" }}
          className="relative z-50 overflow-hidden bg-neutral-950"
          aria-hidden={expanded ? undefined : "true"}
          inert={expanded ? undefined : ""}
        >
          <motion.div layout className="bg-neutral-800">
            <div ref={navRef} className="bg-neutral-950 pb-16 pt-14">
              <Header
                invert
                panelId={panelId}
                icon={IoMdClose}
                toggleRef={closeRef}
                expanded={expanded}
                onToggle={() => {
                  setExpanded((expanded) => !expanded);
                  window.setTimeout(() =>
                    openRef.current?.focus({ preventScroll: true })
                  );
                }}
              />
            </div>
            <Navigation />
            <div className="relative bg-neutral-950 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-neutral-800">
              <Container>
                <div className="grid grid-cols-1 gap-y-12 pb-20 pt-12 sm:grid-cols-2 sm:gap-y-16 sm:pb-24 sm:pt-20">
                  <div>
                    <h2 className="font-display text-2xl font-semibold text-white mb-2">
                      Our Address
                    </h2>
                    <Offices
                      invert
                      className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2"
                    />
                  </div>
                  <div className="sm:border-l sm:border-transparent sm:pl-16">
                    <h2 className="font-display text-xl font-semibold text-white mb-2">
                      Follow us
                    </h2>
                    <SocialMedia className="mt-8" invert />
                  </div>
                </div>
              </Container>
            </div>
          </motion.div>
        </motion.div>
      </header>

      <motion.div
        layout
        style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
        className="relative flex flex-auto overflow-hidden bg-gradient-to-br from-white via-gray-50 to-gray-100 pt-14"
      >
        <motion.div
          layout
          className="relative isolate flex w-full flex-col pt-9"
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
      <RootLayoutInner key={pathName}>{children}</RootLayoutInner>
    </>
  );
};

export default RootLayout;