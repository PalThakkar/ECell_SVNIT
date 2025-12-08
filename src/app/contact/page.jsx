'use client';

import React, { useState } from "react";
import { motion } from "framer-motion";
import PageIntro from "@/components/PageIntro";
import Container from "@/components/Container";
import ContactDetails from "@/components/ContactDetails";
import { Mail, Send, UserPlus, Instagram, Calendar, Sparkles, MessageSquare, User, Phone } from "lucide-react";

export default function ContactPage() {
  const [projectForm, setProjectForm] = useState({
    name: "",
    email: "",
    projectTitle: "",
    description: "",
  });

  const [queryForm, setQueryForm] = useState({
    name: "",
    email: "",
    phone: "",
    query: "",
  });

  const [projectSubmitted, setProjectSubmitted] = useState(false);
  const [querySubmitted, setQuerySubmitted] = useState(false);

  const handleProjectSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Project Form:", projectForm);
    setProjectSubmitted(true);
    setTimeout(() => setProjectSubmitted(false), 3000);
  };

  const handleQuerySubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Query Form:", queryForm);
    setQuerySubmitted(true);
    setTimeout(() => setQuerySubmitted(false), 3000);
  };

  return (
    <>
      <PageIntro title="Connect With Us" centered>
        <p className="text-base md:text-lg max-w-3xl mx-auto text-neutral-600 dark:text-neutral-300">
          Whether you have a project idea, a query, or want to join our team — we are here to help! 🚀
        </p>
      </PageIntro>

      <Container className="mt-16 sm:mt-20">
        {/* Tell Us About Your Project Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="relative bg-gradient-to-br from-yellow-50 via-white to-orange-50 dark:from-neutral-900 dark:to-neutral-800 rounded-3xl p-8 md:p-12 border-2 border-yellow-200 dark:border-yellow-600 shadow-xl overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-300/20 rounded-full blur-3xl -z-0"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-300/20 rounded-full blur-3xl -z-0"></div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-yellow-400 rounded-xl">
                  <Sparkles className="w-7 h-7 text-white" strokeWidth={2.5} />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white">
                  Tell Us About Your <span className="text-yellow-600">Project</span>
                </h2>
              </div>
              
              <p className="text-neutral-700 dark:text-neutral-300 mb-8 text-lg max-w-3xl">
                Have an innovative startup idea or project? Share it with us! We are excited to learn about your vision and explore how E-Cell can support your entrepreneurial journey.
              </p>

              <form onSubmit={handleProjectSubmit} className="grid md:grid-cols-2 gap-6">
                <div className="group">
                  <label className="block text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-2">
                    Your Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400 group-focus-within:text-yellow-600 transition-colors" />
                    <input
                      type="text"
                      required
                      value={projectForm.name}
                      onChange={(e) => setProjectForm({ ...projectForm, name: e.target.value })}
                      className="w-full pl-12 pr-4 py-3.5 bg-white dark:bg-neutral-800 border-2 border-neutral-300 dark:border-neutral-600 rounded-xl focus:border-yellow-500 focus:ring-4 focus:ring-yellow-500/20 outline-none transition-all duration-300 text-neutral-900 dark:text-white placeholder-neutral-400"
                      placeholder="John Doe"
                    />
                  </div>
                </div>

                <div className="group">
                  <label className="block text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400 group-focus-within:text-yellow-600 transition-colors" />
                    <input
                      type="email"
                      required
                      value={projectForm.email}
                      onChange={(e) => setProjectForm({ ...projectForm, email: e.target.value })}
                      className="w-full pl-12 pr-4 py-3.5 bg-white dark:bg-neutral-800 border-2 border-neutral-300 dark:border-neutral-600 rounded-xl focus:border-yellow-500 focus:ring-4 focus:ring-yellow-500/20 outline-none transition-all duration-300 text-neutral-900 dark:text-white placeholder-neutral-400"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="md:col-span-2 group">
                  <label className="block text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-2">
                    Project Title
                  </label>
                  <input
                    type="text"
                    required
                    value={projectForm.projectTitle}
                    onChange={(e) => setProjectForm({ ...projectForm, projectTitle: e.target.value })}
                    className="w-full px-4 py-3.5 bg-white dark:bg-neutral-800 border-2 border-neutral-300 dark:border-neutral-600 rounded-xl focus:border-yellow-500 focus:ring-4 focus:ring-yellow-500/20 outline-none transition-all duration-300 text-neutral-900 dark:text-white placeholder-neutral-400"
                    placeholder="E.g., AI-Powered EdTech Platform"
                  />
                </div>

                <div className="md:col-span-2 group">
                  <label className="block text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-2">
                    Project Description
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={projectForm.description}
                    onChange={(e) => setProjectForm({ ...projectForm, description: e.target.value })}
                    className="w-full px-4 py-3.5 bg-white dark:bg-neutral-800 border-2 border-neutral-300 dark:border-neutral-600 rounded-xl focus:border-yellow-500 focus:ring-4 focus:ring-yellow-500/20 outline-none transition-all duration-300 text-neutral-900 dark:text-white placeholder-neutral-400 resize-none"
                    placeholder="Tell us about your project idea, goals, and how you envision making an impact..."
                  />
                </div>

                <div className="md:col-span-2">
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group"
                  >
                    {projectSubmitted ? (
                      <>✓ Submitted!</>
                    ) : (
                      <>
                        Submit Project
                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </motion.button>
                </div>
              </form>
            </div>
          </div>
        </motion.section>

        {/* Reach Out Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* Query Form */}
            <div className="bg-white dark:bg-neutral-900 rounded-3xl p-8 border-2 border-neutral-200 dark:border-neutral-700 shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-neutral-900 dark:bg-white rounded-xl">
                  <MessageSquare className="w-7 h-7 text-white dark:text-neutral-900" strokeWidth={2.5} />
                </div>
                <h2 className="text-3xl font-bold text-neutral-900 dark:text-white">
                  Have a <span className="text-neutral-900 dark:text-white">Query?</span>
                </h2>
              </div>

              <p className="text-neutral-700 dark:text-neutral-300 mb-6">
                Got questions about our events, initiatives, or anything else? Drop us a message!
              </p>

              <form onSubmit={handleQuerySubmit} className="space-y-5">
                <div className="group">
                  <label className="block text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-2">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400 group-focus-within:text-neutral-900 dark:group-focus-within:text-yellow-500 transition-colors" />
                    <input
                      type="text"
                      required
                      value={queryForm.name}
                      onChange={(e) => setQueryForm({ ...queryForm, name: e.target.value })}
                      className="w-full pl-12 pr-4 py-3.5 bg-neutral-50 dark:bg-neutral-800 border-2 border-neutral-300 dark:border-neutral-600 rounded-xl focus:border-neutral-900 dark:focus:border-yellow-500 focus:ring-4 focus:ring-neutral-900/10 dark:focus:ring-yellow-500/20 outline-none transition-all duration-300 text-neutral-900 dark:text-white"
                      placeholder="Your name"
                    />
                  </div>
                </div>

                <div className="group">
                  <label className="block text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-2">
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400 group-focus-within:text-neutral-900 dark:group-focus-within:text-yellow-500 transition-colors" />
                    <input
                      type="email"
                      required
                      value={queryForm.email}
                      onChange={(e) => setQueryForm({ ...queryForm, email: e.target.value })}
                      className="w-full pl-12 pr-4 py-3.5 bg-neutral-50 dark:bg-neutral-800 border-2 border-neutral-300 dark:border-neutral-600 rounded-xl focus:border-neutral-900 dark:focus:border-yellow-500 focus:ring-4 focus:ring-neutral-900/10 dark:focus:ring-yellow-500/20 outline-none transition-all duration-300 text-neutral-900 dark:text-white"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="group">
                  <label className="block text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-2">
                    Phone (Optional)
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400 group-focus-within:text-neutral-900 dark:group-focus-within:text-yellow-500 transition-colors" />
                    <input
                      type="tel"
                      value={queryForm.phone}
                      onChange={(e) => setQueryForm({ ...queryForm, phone: e.target.value })}
                      className="w-full pl-12 pr-4 py-3.5 bg-neutral-50 dark:bg-neutral-800 border-2 border-neutral-300 dark:border-neutral-600 rounded-xl focus:border-neutral-900 dark:focus:border-yellow-500 focus:ring-4 focus:ring-neutral-900/10 dark:focus:ring-yellow-500/20 outline-none transition-all duration-300 text-neutral-900 dark:text-white"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div className="group">
                  <label className="block text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-2">
                    Your Query
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={queryForm.query}
                    onChange={(e) => setQueryForm({ ...queryForm, query: e.target.value })}
                    className="w-full px-4 py-3.5 bg-neutral-50 dark:bg-neutral-800 border-2 border-neutral-300 dark:border-neutral-600 rounded-xl focus:border-neutral-900 dark:focus:border-yellow-500 focus:ring-4 focus:ring-neutral-900/10 dark:focus:ring-yellow-500/20 outline-none transition-all duration-300 text-neutral-900 dark:text-white resize-none"
                    placeholder="What would you like to know?"
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-6 py-4 bg-neutral-900 dark:bg-white hover:bg-neutral-800 dark:hover:bg-yellow-400 text-white dark:text-neutral-900 font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                >
                  {querySubmitted ? "✓ Sent!" : "Send Message"}
                  {!querySubmitted && <Send className="w-5 h-5" />}
                </motion.button>
              </form>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <ContactDetails />
            </div>
          </div>
        </motion.section>

        {/* Join Us Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <div className="relative bg-white dark:bg-neutral-900 rounded-3xl p-10 md:p-16 border-2 border-yellow-400 dark:border-yellow-500 shadow-2xl overflow-hidden">
            {/* Subtle background patterns */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-neutral-900 dark:bg-yellow-400 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 text-center max-w-4xl mx-auto">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", duration: 0.8, delay: 0.6 }}
                className="inline-flex items-center justify-center w-20 h-20 bg-yellow-400 rounded-2xl mb-6 shadow-xl"
              >
                <UserPlus className="w-10 h-10 text-neutral-900" strokeWidth={2.5} />
              </motion.div>

              <h2 className="text-4xl md:text-5xl font-black text-neutral-900 dark:text-white mb-6">
                Join the <span className="text-yellow-600 dark:text-yellow-400">E-Cell Family!</span>
              </h2>

              <p className="text-xl md:text-2xl text-neutral-700 dark:text-neutral-300 mb-8 leading-relaxed">
                Every year in <span className="font-bold text-yellow-600 dark:text-yellow-400">June-July</span>, we recruit passionate 2nd-year students to join our incredible team. 
                Be part of something bigger — help shape the entrepreneurial ecosystem at SVNIT!
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <motion.a
                  href="https://www.instagram.com/ecellsvnit"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group px-8 py-4 bg-neutral-900 dark:bg-yellow-400 hover:bg-neutral-800 dark:hover:bg-yellow-500 text-white dark:text-neutral-900 font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-3"
                >
                  <Instagram className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                  Follow Us on Instagram
                </motion.a>

                <div className="flex items-center gap-2 px-6 py-3 bg-neutral-100 dark:bg-neutral-800 rounded-full border-2 border-neutral-300 dark:border-neutral-600">
                  <Calendar className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
                  <span className="font-semibold text-neutral-900 dark:text-white">Stay Tuned!</span>
                </div>
              </div>

              <div className="mt-10 p-6 bg-yellow-50 dark:bg-neutral-800 rounded-2xl border-2 border-yellow-200 dark:border-yellow-600">
                <p className="text-sm md:text-base text-neutral-700 dark:text-neutral-300">
                  <span className="font-bold text-yellow-600 dark:text-yellow-400">Pro Tip:</span> Follow our Instagram for updates on recruitment drives, 
                  workshops, events, and behind-the-scenes content from E-Cell SVNIT!
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Decorative blur elements */}
        <div className="fixed top-20 right-10 w-72 h-72 bg-yellow-300/20 dark:bg-yellow-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="fixed bottom-20 left-10 w-96 h-96 bg-purple-300/20 dark:bg-purple-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      </Container>
    </>
  );
}
