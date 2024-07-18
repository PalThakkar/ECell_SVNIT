"use client";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { motion, MotionConfig, useReducedMotion } from "framer-motion";
import Container from "./Container";
import Link from "next/link";
import Logo from "./Logo";
import Button from "./Button";
import Offices from "./Offices";
import SocialMedia from "./SocialMedia";
import Footer from "./Footer";

const Header = ({ invert = false }) => {
  return (
    <Container>
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link href={"/"} aria-label="Home">
          <Logo invert={invert}>E-Cell SVNIT</Logo>
        </Link>
        <div className="flex items-center gap-x-8">
          <Button href={"/contact"} invert={invert}>
            Contact us
          </Button>
        </div>
      </div>
    </Container>
  );
};

const NavigationRow = ({ children }) => {
  return (
    <div className="even:mt-px sm:bg-neutral-950">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2">{children}</div>
      </Container>
    </div>
  );
};

const NavigationItem = ({ href, children }) => {
  return (
    <Link
      href={href}
      className="group relative isolate -mx-6 bg-neutral-950 px-6 py-10 even:mt-px sm:mx-0 sm:px-0 sm:py-16 sm:odd:pr-16 sm:even:mt-0 sm:even:border-l sm:even:border-neutral-800 sm:even:pl-16"
    >
      {children}
      <span className="absolute inset-y-0 -z-10 w-screen bg-neutral-900 opacity-0 transition group-odd:right-0 group-even:left-0 group-hover:opacity-100" />
    </Link>
  );
};

const Navigation = () => {
  return (
    <nav className="mt-px font-display text-5xl font-medium tracking-tight text-white">
      <NavigationRow>
        <NavigationItem href="/">Home</NavigationItem>
        <NavigationItem href="/about">About Us</NavigationItem>
      </NavigationRow>
      <NavigationRow>
        <NavigationItem href="/team">Team</NavigationItem>
        <NavigationItem href="/blog">Blog</NavigationItem>
      </NavigationRow>
    </nav>
  );
};

const RootLayoutInner = ({ children }) => {
  const shouldReduceMotion = useReducedMotion();
  return (
    <MotionConfig transition={shouldReduceMotion ? { duration: 0 } : undefined}>
      <header>
        <div className="absolute left-0 right-0 top-2 z-40 pt-14">
          {/* Header */}
          <Header />
        </div>
      </header>
      <motion.div
        layout
        className="relative z-50 overflow-hidden bg-neutral-950 pt-2"
      >
        <motion.div layout className="bg-neutral-800">
          <div className="bg-neutral-950 pb-16 pt-14">
            {/* Navigation */}
            <Navigation />
            <div className="relative bg-neutral-950 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-neutral-800">
              <Container>
                <div className="grid grid-cols-1 gap-y-10 pb-16 pt-10 sm:grid-cols-2 sm:pt-16">
                  <div>
                    <h2 className="font-display text-base font-semibold text-white">
                      Our Address
                    </h2>
                    <Offices
                      invert
                      className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2"
                    />
                  </div>
                  <div className="sm:border-l sm:border-transparent sm:pl-16">
                    <h2 className="font-display text-base font-semibold text-white">
                      Follow us
                    </h2>
                    <SocialMedia className="mt-6" invert />
                  </div>
                </div>
              </Container>
            </div>
          </div>
        </motion.div>
      </motion.div>
      <motion.div
        layout
        style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
        className="relative flex flex-auto overflow-hidden bg-white pt-14"
      >
        <motion.div
          layout
          className="relative isolate flex w-full flex-col pt-9"
        >
          <main className="w-full flex-auto">{children}</main>
          {/* Footer */}
          <Footer />
        </motion.div>
      </motion.div>
    </MotionConfig>
  );
};

const RootLayout = ({ children }) => {
  const pathName = usePathname();
  return <RootLayoutInner key={pathName}>{children}</RootLayoutInner>;
};

export default RootLayout;
