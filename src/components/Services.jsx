"use client";

import React from "react";

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = React.useState(null);

  const visionPoints = [
    {
      icon: "🚀",
      title: "Lead the Way",
      description: "Position SVNIT as India's premier hub for entrepreneurial excellence and innovation.",
      expandedDescription: "We're committed to establishing SVNIT as a nationally recognized center for entrepreneurial excellence. Through cutting-edge incubation programs, industry mentorship, and access to venture capital, we provide students with the resources needed to transform innovative ideas into successful ventures. Our goal is to create a reputation that attracts top talent, investors, and opportunities to our campus.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: "🌱",
      title: "Grow a Startup Ecosystem",
      description: "Cultivate a thriving, self-sustaining startup culture that empowers student ventures.",
      expandedDescription: "Building a startup ecosystem means creating an environment where ideas flourish naturally. We facilitate peer-to-peer learning, provide seed funding opportunities, and connect students with alumni entrepreneurs. Our ecosystem includes co-working spaces, regular pitch sessions, and a network of mentors who've walked the entrepreneurial path. We believe in learning by doing, with failure as a stepping stone to success.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: "🌍",
      title: "Forge Global Partnerships",
      description: "Build strategic alliances with industry giants, investors, and leading universities worldwide.",
      expandedDescription: "Innovation knows no boundaries. We actively cultivate relationships with Fortune 500 companies, venture capital firms, and prestigious universities across the globe. These partnerships open doors to international internships, collaborative research projects, cross-border funding opportunities, and exposure to global best practices. Our students gain invaluable perspectives from diverse markets and cultures, preparing them for the global stage.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: "💡",
      title: "Solve Real Problems",
      description: "Champion startups that address critical challenges and create meaningful societal impact.",
      expandedDescription: "True entrepreneurship goes beyond profit—it's about creating value that transforms lives. We encourage ventures that tackle pressing issues in healthcare, education, sustainability, and social equity. Through impact-focused workshops, connections with NGOs and government initiatives, and specialized mentorship, we guide students to build businesses that generate both financial returns and positive social change.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: "👥",
      title: "Empower Future Leaders",
      description: "Transform students into visionary entrepreneurs and changemakers through mentorship and resources.",
      expandedDescription: "Leadership development is at the heart of our mission. We offer comprehensive skill-building workshops covering everything from public speaking and negotiation to financial modeling and growth hacking. Our mentorship program pairs students with successful entrepreneurs and industry leaders. Through hands-on projects, leadership roles in E-Cell initiatives, and exposure to real-world challenges, we nurture the confidence and capabilities needed to lead in tomorrow's business landscape.",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <div className="py-16 bg-gradient-to-b from-gray-50 to-white">
      {/* Vision Section */}
      <div className="px-6 mx-auto mt-24 sm:mt-32 lg:mt-40 max-w-7xl">
        <p className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500">
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
            <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500">
              E-Cell
            </span>{" "}
            at SVNIT envisions a vibrant campus where entrepreneurship thrives as 
            the driving force of innovation and impact.
          </p>
          <p className="max-w-4xl text-lg leading-relaxed text-gray-600">
            We're building more than just a club—we're creating a <span className="font-semibold text-orange-600">movement</span> that 
            transforms ambitious ideas into reality, nurtures creativity, and develops 
            the next generation of industry leaders and change-makers.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="px-6 mx-auto mt-16 max-w-7xl">
        <div className="mb-12 text-center">
          <h3 className="mb-4 text-3xl font-bold text-gray-800">
            Our Impact in <span className="text-orange-500">Numbers</span>
          </h3>
          <p className="max-w-2xl mx-auto text-gray-600">
            From ideation to execution, we've been the catalyst for countless entrepreneurial journeys at SVNIT
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6 mb-20 md:grid-cols-4">
          {[
            { number: "500+", label: "Students Engaged" },
            { number: "50+", label: "Events Hosted" },
            { number: "20+", label: "Startups Mentored" },
            { number: "100+", label: "Industry Connections" }
          ].map((stat, index) => (
            <div
              key={index}
              className="p-6 text-center transition-shadow duration-300 bg-white border-t-4 border-orange-400 shadow-lg rounded-xl hover:shadow-xl"
            >
              <div className="mb-2 text-3xl font-bold text-transparent md:text-4xl bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500">
                {stat.number}
              </div>
              <div className="text-sm font-medium text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="px-6 mx-auto mt-16 max-w-7xl">
        <div className="lg:flex lg:items-start lg:gap-12">
          {/* Left side image */}
          <div className="flex justify-center lg:w-1/2">
            <div className="w-full max-w-2xl">
              <div className="relative overflow-hidden border-4 border-orange-400 shadow-2xl group rounded-2xl">
                <div className="absolute inset-0 transition-opacity duration-300 bg-gradient-to-tr from-orange-400 to-yellow-400 opacity-20 group-hover:opacity-30"></div>
                <img
                  src="https://www.svnit.ac.in/web/Student_Chapter/EES/images/colloqury_1.jpg"
                  alt="E-Cell Team Collaboration"
                  className="w-full h-auto rounded-2xl"
                />
              </div>
              {/* Decorative elements */}
              <div className="flex gap-4 mt-6">
                <div className="flex-1 h-2 rounded-full bg-gradient-to-r from-orange-400 to-yellow-400"></div>
                <div className="flex-1 h-2 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400"></div>
              </div>
              
              {/* Additional info card */}
              <div className="p-6 mt-8 bg-white border-l-4 border-yellow-400 shadow-lg rounded-xl">
                <h4 className="flex items-center gap-2 mb-3 text-lg font-bold text-gray-800">
                  <span className="text-2xl">🎯</span>
                  Why Join E-Cell?
                </h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-orange-500">▸</span>
                    <span>Network with industry leaders and successful entrepreneurs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-orange-500">▸</span>
                    <span>Access to funding opportunities and incubation support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-orange-500">▸</span>
                    <span>Hands-on experience through real startup projects</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-orange-500">▸</span>
                    <span>Participate in national-level competitions and events</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right side list */}
          <div className="mt-16 lg:mt-0 lg:w-1/2">
            <h3 className="mb-8 text-3xl font-bold text-gray-800">
              Our Strategic <span className="text-orange-500">Pillars</span>
            </h3>
            <ul className="space-y-6">
              {visionPoints.map((point, index) => (
                <li
                  key={index}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="relative p-6 overflow-hidden transition-all duration-300 bg-white border-l-4 border-orange-500 shadow-md cursor-pointer group rounded-2xl hover:shadow-2xl hover:border-l-8 hover:-translate-y-1"
                >
                  {/* Background gradient on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${point.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-start gap-4">
                      <div className="text-4xl transition-transform duration-300 group-hover:scale-110">
                        {point.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="mb-2 text-xl font-bold text-gray-800 transition-colors duration-300 group-hover:text-orange-600">
                          {point.title}
                        </h4>
                        <p className="leading-relaxed text-gray-600">
                          {point.description}
                        </p>
                        
                        {/* Expanded content on hover */}
                        <div className={`mt-4 overflow-hidden transition-all duration-500 ${hoveredIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                          <div className="pt-4 border-t border-orange-200">
                            <p className="text-sm leading-relaxed text-gray-700">
                              {point.expandedDescription}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Animated corner accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 transition-opacity duration-300 rounded-bl-full opacity-0 bg-gradient-to-br from-orange-400 to-transparent group-hover:opacity-20"></div>
                </li>
              ))}
            </ul>

            {/* Call to Action */}
            <div className="p-8 mt-12 text-white shadow-xl bg-gradient-to-r from-orange-500 to-yellow-500 rounded-2xl">
              <h4 className="mb-3 text-2xl font-bold">Ready to Start Your Journey?</h4>
              <p className="mb-6 text-orange-50">
                Join E-Cell SVNIT and transform your entrepreneurial dreams into reality.
              </p>
              <a
  href="https://www.bing.com/ck/a?!&&p=30ded17a573485ebe0ee1c73c7365e716d14403afc209f9f8bc734eb44c5d131JmltdHM9MTc2MTc4MjQwMA&ptn=3&ver=2&hsh=4&fclid=3d9e4798-4855-689c-32c1-518749ce6907&psq=e+cell+svnit+instagram&u=a1aHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9lY2VsbC5zdm5pdC8"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block px-8 py-3 font-semibold text-orange-600 no-underline transition-colors duration-300 bg-white rounded-full shadow-lg hover:bg-gray-100 hover:shadow-xl"
>
  Get Involved by Exploring →
</a>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;