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
          <Link href={"/"} aria-label="Home" className="flex items-center mt-2 -ml-2 sm:-ml-4">
            <Logo className="h-24 sm:h-32 w-auto" fillOnHover />
          </Link>
        )}
        {expanded && <div className="flex-1" />}
        <div className="flex items-center gap-x-8">
          <Button href={"/contact"} className="px-6 py-3 text-base">
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
              "hover:bg-neutral-900/10"
            )}
            aria-label="Toggle navigation"
          >
            <Icon
              className={clsx(
                "h-8 w-8",
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
  const isHomePage = pathname === "/";

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
      {!isHomePage && (
        <header>
          <div
            className="fixed left-0 right-0 top-0 z-40 bg-transparent py-4 sm:py-6 px-4 sm:px-8"
            aria-hidden={expanded ? "true" : undefined}
            inert={expanded ? true : undefined}
          >
            <Header
              panelId={panelId}
              icon={HiMenuAlt4}
              toggleRef={openRef}
              expanded={expanded}
              onToggle={() => {
                setExpanded((expanded) => !expanded);
                window.setTimeout(() =>
                  closeRef.current?.focus({ preventScroll: true }),
                );
              }}
            />
          </div>

          <motion.div
            layout
            id={panelId}
            style={{ height: expanded ? "auto" : "0" }}
            className="relative z-50 overflow-hidden bg-white/30 backdrop-blur-2xl saturate-150"
            aria-hidden={expanded ? undefined : "true"}
            inert={expanded ? undefined : true}
          >
            <motion.div layout className="bg-[#E8E4DC]">
              <div className="bg-[#FEFEFE] pb-16 pt-14 border-b border-[#E8E4DC]">
                <Header
                  panelId={panelId}
                  icon={IoMdClose}
                  toggleRef={closeRef}
                  expanded={expanded}
                  onToggle={() => {
                    setExpanded((expanded) => !expanded);
                    window.setTimeout(() =>
                      openRef.current?.focus({ preventScroll: true }),
                    );
                  }}
                />
              </div>
              <Navigation />
              <div className="relative bg-[#FAF9F6] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-[#E8E4DC]">
                <Container>
                  <div className="grid grid-cols-1 gap-y-12 pb-20 pt-12 sm:grid-cols-2 sm:gap-y-16 sm:pb-24 sm:pt-20">
                    <div>
                      <h2 className="font-display text-2xl font-semibold text-neutral-900 mb-2">
                        Our Address
                      </h2>
                      <Offices
                        className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2"
                      />
                    </div>
                    <div className="sm:border-l sm:border-[#E8E4DC] sm:pl-16">
                      <h2 className="font-display text-xl font-semibold text-neutral-900 mb-2">
                        Follow us
                      </h2>
                      <SocialMedia className="mt-8" />
                    </div>
                  </div>
                </Container>
              </div>
            </motion.div>
          </motion.div>
        </header>
      )}

      <motion.div
        layout
        style={{
          borderTopLeftRadius: isHomePage ? 0 : 40,
          borderTopRightRadius: isHomePage ? 0 : 40,
        }}
        className={clsx(
          "relative flex flex-auto overflow-hidden bg-linear-to-br from-white via-gray-50 to-gray-100",
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
      <RootLayoutInner key={pathName}>{children}</RootLayoutInner>
    </>
  );
};

export default RootLayout;
