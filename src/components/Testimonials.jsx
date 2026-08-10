import React from "react";

export default function Testimonials() {
  const stats = [
    { number: "2000+", label: "Students Engaged" },
    { number: "5+", label: "Events Hosted" },
    { number: "5+", label: "Collaborations" },
    { number: "10+", label: "Industry Connections" },
  ];

  return (
    <section className="bg-zinc-800 text-white py-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Upper Vision Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Heading & Vision Paragraphs */}
          <div className="lg:col-span-8 space-y-6 text-left">
            <h3 className="text-3xl md:text-4xl font-extrabold text-yellow-400 tracking-tight">
              Our Vision
            </h3>
            
            <h1 className="text-3xl md:text-5xl font-black text-white leading-tight">
              Fostering entrepreneurship, innovation, creativity, collaboration, and student leadership
            </h1>
            
            <div className="space-y-4 text-zinc-300 text-base md:text-lg leading-relaxed pt-2">
              <p>
                <span className="font-bold text-yellow-400">E-Cell</span> at SVNIT envisions a vibrant campus where entrepreneurship thrives as the driving force of innovation and impact.
              </p>

              <p>
                We are building more than just a club—we are creating a{" "}
                <span className="font-semibold text-yellow-400">movement</span> that transforms ambitious ideas into reality, nurtures creativity, and develops the next generation of industry leaders and change-makers.
              </p>
            </div>
          </div>

          {/* Right Column: Card */}
          <div className="lg:col-span-4 bg-zinc-700/80 border border-zinc-600 rounded-2xl p-6 md:p-8 space-y-4 shadow-lg">
            <p className="text-zinc-300 text-sm md:text-base leading-relaxed">
              Empowering young entrepreneurs. We provide resources, mentorship, and networking opportunities to help students scale their ventures. Our programs foster critical thinking, problem-solving, and a global perspective. Through workshops, competitions, and corporate partnerships, we bridge the gap between academic theory and practical business skills.
            </p>
            <p className="text-zinc-300 text-sm md:text-base leading-relaxed border-t border-zinc-600/50 pt-4">
              From pre-seed funding to series A preparation, E-Cell SVNIT supports your entire entrepreneurial lifecycle, providing the foundation for sustainable success.
            </p>
          </div>

        </div>

        {/* Lower Section: Our Impact in Numbers */}
        <div className="text-center border-t border-zinc-700/80 pt-16 space-y-3">
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
            Our Impact in <span className="text-yellow-400">Numbers</span>
          </h2>
          <p className="text-zinc-400 text-sm md:text-base max-w-2xl mx-auto">
            From ideation to execution, we have been the catalyst for entrepreneurial journeys at SVNIT
          </p>

          {/* Styled Stat Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-10">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="group relative bg-zinc-700/60 hover:bg-zinc-700/90 border border-yellow-400/40 hover:border-yellow-400 rounded-2xl p-8 flex flex-col items-center justify-center space-y-2 shadow-xl hover:shadow-yellow-400/10 transition-all duration-300 transform hover:-translate-y-1"
              >
                {/* Big Accent Number */}
                <span className="text-4xl md:text-5xl font-black text-yellow-400 tracking-tight group-hover:scale-105 transition-transform duration-300">
                  {stat.number}
                </span>

                {/* Clean Muted Label Text */}
                <span className="text-zinc-200 text-base md:text-lg font-medium text-center leading-snug">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}