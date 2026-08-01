import React from "react";
import Container from "./Container";
import FadeIn from "./FadeIn";
import FooterNavigation from "./FooterNavigation";
import Logo from "./Logo";
import SocialMedia from "./SocialMedia";
import Link from "next/link";

const ArrowIcon = (props) => {
  return (
    <svg viewBox="0 0 16 6" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 3 10 .5v2H0v1h10v2L16 3Z"
      />
    </svg>
  );
};

// const RocketIcon = () => (
//   <svg className="w-16 h-16 text-yellow-500 animate-bounce" fill="currentColor" viewBox="0 0 20 20">
//     <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"/>
//   </svg>
// );

// const LightbulbIcon = () => (
//   <svg className="w-12 h-12 text-yellow-400 opacity-80" fill="currentColor" viewBox="0 0 20 20">
//     <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z"/>
//   </svg>
// );

const SparkleIcon = ({ className }) => (
  <svg className={`${className} animate-pulse`} fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
  </svg>
);

const NewsletterForm = () => {
  return (
    <form className="max-w-sm">
      <h2 className="font-display text-sm font-semibold tracking-wider text-neutral-950">
        Sign up for our newsletter
      </h2>
      <p className="mt-4 text-sm text-neutral-700">
        Subscribe to get the latest design news, articles, resources and
        inspiration.
      </p>
      <div className="relative mt-6">
        <input
          type="email"
          placeholder="Email address"
          autoComplete="email"
          aria-label="Email address"
          className="block w-full rounded-2xl border border-neutral-300 bg-transparent py-4 pl-6 pr-20 text-base/6 text-neutral-950 ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5"
        />
        <div className="absolute inset-y-1 right-1 flex justify-end">
          <button
            type="submit"
            aria-label="Submit"
            className="flex aspect-square h-full items-center justify-center rounded-xl bg-neutral-950 text-white transition hover:bg-neutral-800"
          >
            <ArrowIcon className="w-4" />
          </button>
        </div>
      </div>
    </form>
  );
};

const Footer = () => {
  const initiatives = [
    { name: "E-Summit", href: "/events" },
    { name: "Workshops", href: "/events" },
    { name: "Lego Startup", href: "/lego" },
    { name: "Collaborations", href: "/work" },
  ];

  return (
    <Container as="footer" className="mt-24 w-full sm:mt-32 lg:mt-40">
      <FadeIn>
        {/* Decorative elements */}
        {/* <div className="absolute right-10 top-0 opacity-20 hidden lg:block">
          <RocketIcon />
        </div> */}
        {/* <div className="absolute left-10 top-20 opacity-20 hidden lg:block">
          <LightbulbIcon />
        </div> */}

        {/* Main Footer Content */}
        <div className="relative">
          {/* Top Section with gradient border */}
          <div 
            className="mb-12 h-1 w-full rounded-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400" 
          />
          
          <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-4 lg:gap-x-12">
            {/* Logo */}
            <div className="lg:col-span-1">
              <Link href={"/"} aria-label="Home" className="block">
                <Logo className="h-10 w-auto" fillOnHover />
              </Link>
              <div className="mt-6 flex gap-2">
                <SparkleIcon className="h-5 w-5 text-yellow-500" />
                <SparkleIcon className="h-4 w-4 text-yellow-400" />
                <SparkleIcon className="h-3 w-3 text-yellow-300" />
              </div>
              <SocialMedia className="mt-6" />
            </div>

            {/* Our Initiatives */}
            <div className="lg:col-span-1">
              <h3 className="mb-6 text-lg font-bold text-neutral-950">
                Our Initiatives
              </h3>
              <ul className="space-y-4">
                {initiatives.map((initiative) => (
                  <li key={initiative.name}>
                    <Link
                      href={initiative.href}
                      className="group inline-block text-sm font-medium text-neutral-700 transition-colors hover:translate-x-1 hover:text-yellow-600"
                    >
                      {initiative.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Navigation */}
            <div className="lg:col-span-1">
              <FooterNavigation />
            </div>

            {/* Newsletter */}
            <div className="lg:col-span-1">
              <NewsletterForm />
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-16 border-t border-neutral-200 pt-8">
            <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
              {/* Managed by Technical Team */}
              <div className="text-lg font-bold text-neutral-950">
                Managed by{" "}
                <Link href="/dev-team" className="inline-block">
                  <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent transition-all hover:from-yellow-600 hover:to-yellow-700 cursor-pointer">
                    Technical Team {new Date().getFullYear()}
                  </span>
                </Link>
              </div>

              {/* Copyright */}
              <div className="text-sm font-bold text-neutral-700">
                © {new Date().getFullYear()} Copyright:{" "}
                <span className="text-neutral-950">E-Cell SVNIT</span>
              </div>
            </div>
          </div>

          {/* Decorative bottom elements */}
          <div className="mt-8 flex justify-center gap-3 opacity-50">
            <div className="h-2 w-2 animate-ping rounded-full bg-yellow-400"></div>
            <div className="h-2 w-2 animate-ping rounded-full bg-yellow-500" style={{ animationDelay: '0.2s' }}></div>
            <div className="h-2 w-2 animate-ping rounded-full bg-yellow-600" style={{ animationDelay: '0.4s' }}></div>
          </div>
        </div>
      </FadeIn>
    </Container>
  );
};

export default Footer;