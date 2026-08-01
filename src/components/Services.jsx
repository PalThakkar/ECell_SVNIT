"use client";
import AnimatedCounter from "./AnimatedCounter";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Rocket, Sprout, Globe, Lightbulb, Users, ChevronDown } from "lucide-react";

const Services = () => {
  const [expandedIndex, setExpandedIndex] = React.useState(null);

  const visionPoints = [
    {
      icon: Rocket,
      title: "Lead the Way",
      description: "Position SVNIT as a premier hub for entrepreneurial excellence and innovation.",
      expandedDescription: "We're aspiring to establish SVNIT as a recognized center for entrepreneurial excellence. Through cutting-edge workshops, hands-on experience through events, and collaborative projects, we provide students with the platform needed to transform innovative ideas into successful ventures. Our goal is to create a reputation that attracts top talent, investors, and opportunities to our campus.",
      color: "from-yellow-400 to-yellow-500"
    },
    {
      icon: Sprout,
      title: "Grow a Startup Ecosystem",
      description: "Cultivate a thriving, self-sustaining startup culture that empowers student ventures.",
      expandedDescription: "Building a startup ecosystem means creating an environment where ideas flourish naturally. We facilitate peer-to-peer learning, provide seed funding opportunities, and connect students with alumni entrepreneurs. Our ecosystem includes co-working spaces in collaboration with ASHINE-SVNIT, and a network of mentors who've walked the entrepreneurial path. We believe in learning by doing, with failure as a stepping stone to success.",
      color: "from-yellow-400 to-yellow-500"
    },
    {
      icon: Globe,
      title: "Forge Partnerships",
      description: "Build meaningful collaborations with organizations and academic groups.",
      expandedDescription: "We focus on forming practical partnerships with startups, student communities, and industry professionals. These collaborations help us bring guest talks, great workshops, mentorship opportunities, and project guidance to students. By connecting with the right people around us, we create learning and networking opportunities that genuinely support our members' growth.",
      color: "from-yellow-400 to-yellow-500"
    },
    {
      icon: Lightbulb,
      title: "Solve Real Problems",
      description: "Champion startups that address critical challenges and create meaningful societal impact.",
      expandedDescription: "True entrepreneurship goes beyond profit—it's about creating value that transforms lives. We encourage ventures that tackle pressing issues in healthcare, education, sustainability, and social equity. Through impact-focused workshops and specialized mentorship, we guide students to build businesses that generate both financial returns and positive social change.",
      color: "from-yellow-400 to-yellow-500"
    },
    {
      icon: Users,
      title: "Empower Future Leaders",
      description: "Transform students into visionary entrepreneurs and changemakers through mentorship and resources.",
      expandedDescription: "Leadership development is at the heart of our mission. We offer skill-building events and opportunities covering everything from public speaking and negotiation to financial modeling and growth hacking. Our mentorship program pairs students with successful entrepreneurs and industry leaders. Through hands-on projects, leadership roles in E-Cell initiatives, and exposure to real-world challenges, we nurture the confidence and capabilities needed to lead in tomorrow's business landscape.",
      color: "from-yellow-400 to-yellow-500"
    }
  ];

  const toggleExpanded = (index) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="py-16">
      {/* Vision Section */}
      <div className="px-6 mx-auto mt-24 sm:mt-32 lg:mt-40 max-w-7xl">
        <p className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-500">
          Our Vision
        </p>
        <h2 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
          <div className="mt-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-gray-600">
              Fostering entrepreneurship, innovation, creativity, collaboration, and student leadership
            </span>
          </div>
        </h2>

        <div className="mt-8 space-y-6">
          <p className="max-w-4xl text-xl leading-relaxed text-gray-700">
            <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-500">
              E-Cell
            </span>{" "}
            at SVNIT envisions a vibrant campus where entrepreneurship thrives as
            the driving force of innovation and impact.
          </p>
          <p className="max-w-4xl text-lg leading-relaxed text-gray-600">
            We are building more than just a club; we are creating a{" "}
            <span className="font-semibold text-yellow-600">movement</span> that
            transforms ambitious ideas into reality, nurtures creativity, and develops
            the next generation of industry leaders and change-makers.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="px-6 mx-auto mt-16 max-w-7xl">
        <div className="mb-12 text-center">
          <h3 className="mb-4 text-3xl font-bold text-gray-800">
            Our Impact in <span className="text-[#fbbd58]">Numbers</span>
          </h3>
          <p className="max-w-2xl mx-auto text-gray-600">
            From ideation to execution, we have been the catalyst for entrepreneurial journeys at SVNIT
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6 mb-20 md:grid-cols-4">
          {[
            { number: "2000+", label: "Students Engaged" },
            { number: "5+", label: "Events Hosted" },
            { number: "5+", label: "Collaborations" },
            { number: "10+", label: "Industry Connections" }
          ].map((stat, index) => (
            <div
              key={index}
              className="p-6 text-center transition-all duration-300 bg-white border-t-4 border-yellow-400 shadow-lg rounded-xl hover:shadow-xl hover:-translate-y-1"
            >
              <div className="mb-2 text-3xl font-bold text-transparent md:text-4xl bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-500">
                <AnimatedCounter value={stat.number} duration={3000} />
              </div>
              <div className="text-sm font-medium text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="px-6 mx-auto mt-16 max-w-7xl">
        <div className="lg:flex lg:items-start lg:gap-12">
          {/* Left side image & card */}
          <div className="flex justify-center lg:w-1/2">
            <div className="w-full max-w-2xl">
              <div className="relative overflow-hidden border-4 border-yellow-400 shadow-2xl group rounded-2xl">
                <Image
                  src="/e-cell-fam.jpg"
                  alt="E-Cell Team Collaboration"
                  width={800}
                  height={600}
                  className="w-full h-auto rounded-xl object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex gap-4 mt-6">
                <div className="flex-1 h-2 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500"></div>
                <div className="flex-1 h-2 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-400"></div>
              </div>

              <div className="p-6 mt-8 bg-white border-l-4 border-yellow-400 shadow-lg rounded-xl">
                <h4 className="flex items-center gap-2 mb-3 text-lg font-bold text-gray-800">
                  <span className="text-2xl">🎯</span>
                  Why Join E-Cell?
                </h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-yellow-500">▸</span>
                    <span>Foster and strengthen the startup culture within SVNIT</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-yellow-500">▸</span>
                    <span>Work on flagship events like E-Summit and gain value from high-impact combined efforts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-yellow-500">▸</span>
                    <span>Get hands-on experience through real startup projects and collaborations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-yellow-500">▸</span>
                    <span>Participate in national-level competitions and networking events</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-yellow-500">▸</span>
                    <span>Connect with like-minded innovators, exchange ideas, and grow your network</span>
                  </li>
                </ul>
              </div>

              <div className="p-8 mt-8 text-white shadow-xl bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-2xl">
                <h4 className="mb-3 text-2xl font-bold text-gray-900">Ready to Start Your Journey?</h4>
                <p className="mb-6 text-gray-800">
                  Join E-Cell SVNIT and transform your entrepreneurial dreams into reality.
                </p>

                <Link
                  href="/contact"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-3 font-semibold text-gray-900 no-underline transition-all duration-300 bg-white rounded-full shadow-lg hover:bg-gray-100 hover:shadow-xl active:scale-95"
                >
                  Get Involved by Exploring →
                </Link>
              </div>
            </div>
          </div>

          {/* Right side list */}
          <div className="mt-16 lg:mt-0 lg:w-1/2">
            <h3 className="mb-8 text-3xl font-bold text-gray-800">
              Our Strategic <span className="text-[#fbbd58]">Pillars</span>
            </h3>
            <ul className="space-y-6">
              {visionPoints.map((point, index) => {
                const isExpanded = expandedIndex === index;
                return (
                  <li
                    key={index}
                    onClick={() => toggleExpanded(index)}
                    role="button"
                    tabIndex={0}
                    aria-expanded={isExpanded}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        toggleExpanded(index);
                      }
                    }}
                    className="relative p-6 overflow-hidden transition-all duration-300 bg-white border-l-4 border-yellow-400 shadow-md cursor-pointer group rounded-2xl hover:shadow-2xl hover:border-l-8 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${point.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>

                    <div className="relative z-10">
                      <div className="flex items-start gap-4">
                        <div className="p-3 transition-all duration-300 bg-yellow-100 rounded-xl group-hover:bg-yellow-200 group-hover:scale-110">
                          <point.icon className="w-8 h-8 text-yellow-600" strokeWidth={2} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between gap-2">
                            <h4 className="mb-2 text-xl font-bold text-gray-800 transition-colors duration-300 group-hover:text-yellow-600">
                              {point.title}
                            </h4>
                            <ChevronDown
                              className={`w-5 h-5 text-yellow-500 shrink-0 transition-transform duration-300 ${
                                isExpanded ? "rotate-180" : ""
                              }`}
                            />
                          </div>
                          <p className="leading-relaxed text-gray-600">
                            {point.description}
                          </p>

                          <div
                            className={`overflow-hidden transition-all duration-500 ${
                              isExpanded ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
                            }`}
                          >
                            <div className="pt-4 border-t border-yellow-200">
                              <p className="text-sm leading-relaxed text-gray-700">
                                {point.expandedDescription}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="absolute top-0 right-0 w-20 h-20 transition-opacity duration-300 rounded-bl-full opacity-0 bg-gradient-to-br from-yellow-400 to-transparent group-hover:opacity-20"></div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;