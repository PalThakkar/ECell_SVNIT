"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import InteractiveParticleNetwork from "@/components/home/InteractiveParticleNetwork";
import Container from "@/components/Container";
import ContactDetails from "@/components/ContactDetails";
import Faq from "@/components/Faq";
import {
  Rocket,
  Mail,
  Send,
  UserPlus,
  Instagram,
  Calendar,
  Sparkles,
  MessageSquare,
  User,
  Phone,
  Check,
} from "lucide-react";

// Scroll animations
const fadeInUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.09, delayChildren: 0.05 },
  },
};

const revealViewport = { once: true, amount: 0.25 };

// Page header animations
const headingContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};
const headingWord = {
  hidden: { opacity: 0, y: 24, rotateX: -40 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const PageHeader = () => {
  const words = ["Connect", "With", "Us"];
  return (
    <div className="relative text-center px-4 pt-32 pb-4 sm:pt-40 sm:pb-6">
      {/* Background glow effects */}
      <motion.div
        aria-hidden
        animate={{ x: [0, 24, 0], y: [0, -16, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-10 left-1/2 -translate-x-1/2 w-72 h-72 bg-yellow-300/25 rounded-full blur-3xl -z-10 pointer-events-none"
      />
      <motion.div
        aria-hidden
        animate={{ x: [0, -20, 0], y: [0, 14, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-10 left-1/3 w-56 h-56 bg-orange-300/20 rounded-full blur-3xl -z-10 pointer-events-none"
      />

      {/* Main Heading */}
      <motion.h1
        initial="hidden"
        animate="visible"
        variants={headingContainer}
        style={{ perspective: 600 }}
        className="text-4xl md:text-6xl font-black text-neutral-900 mb-4 tracking-tight flex flex-wrap items-center justify-center gap-x-3"
      >
        {words.map((word, i) => (
          <motion.span
            key={word}
            variants={headingWord}
            className={i === words.length - 1 ? "text-yellow-600" : undefined}
          >
            {word}
          </motion.span>
        ))}
      </motion.h1>

      {/* Subheading text */}
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="text-base md:text-lg max-w-3xl mx-auto text-neutral-700 flex items-center justify-center gap-2"
      >
        Whether you have a project idea, a query, or want to join our team —
        we are here to help!
        <motion.span
          initial={{ rotate: -20, scale: 0 }}
          animate={{
            rotate: 0,
            scale: 1,
            y: [0, -5, 0],
          }}
          transition={{
            rotate: { type: "spring", stiffness: 300, damping: 14, delay: 0.75 },
            scale: { type: "spring", stiffness: 300, damping: 14, delay: 0.75 },
            y: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1.2 },
          }}
        >
          <Rocket size={22} className="text-yellow-500" />
        </motion.span>
      </motion.p>
    </div>
  );
};

// Tab transition settings
const tabPanelVariants = {
  enter: (direction) => ({
    opacity: 0,
    x: direction >= 0 ? 36 : -36,
    scale: 0.98,
  }),
  center: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
  },
  exit: (direction) => ({
    opacity: 0,
    x: direction >= 0 ? -36 : 36,
    scale: 0.98,
    transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function ContactPage() {
  // Form states
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

  // Tab active states
  const [activeTab, setActiveTab] = useState("project");
  const [direction, setDirection] = useState(0);

  const tabOrder = ["project", "query"];
  
  const handleTabChange = (tab) => {
    if (tab === activeTab) return;
    setDirection(tabOrder.indexOf(tab) > tabOrder.indexOf(activeTab) ? 1 : -1);
    setActiveTab(tab);
  };

  const handleProjectSubmit = (e) => {
    e.preventDefault();
    setProjectSubmitted(true);
    setTimeout(() => setProjectSubmitted(false), 3000);
  };

  const handleQuerySubmit = (e) => {
    e.preventDefault();
    setQuerySubmitted(true);
    setTimeout(() => setQuerySubmitted(false), 3000);
  };

  // Shared input classes
  const inputBaseClasses =
    "w-full pl-12 pr-4 py-3.5 bg-white border-2 border-neutral-300 rounded-xl focus:border-yellow-500 focus:ring-4 focus:ring-yellow-500/20 hover:border-yellow-300 outline-none transition-all duration-300 text-neutral-900 placeholder-neutral-400";

  const iconBaseClasses =
    "absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400 transition-all duration-300 group-focus-within:text-yellow-600 group-focus-within:scale-110 group-hover:text-yellow-500";

  const labelBaseClasses =
    "block text-sm font-semibold text-neutral-700 mb-2 transition-colors duration-300 group-focus-within:text-yellow-600 origin-left";

  const renderProjectSection = () => (
    <motion.section
      key="project-section"
      custom={direction}
      variants={tabPanelVariants}
      initial="enter"
      animate="center"
      exit="exit"
      className="mb-12"
    >
      <div className="relative bg-gradient-to-br from-yellow-100 via-yellow-50 to-orange-100 rounded-3xl p-8 md:p-12 border-2 border-yellow-300 shadow-xl overflow-hidden">
        
        {/* Subtle background patterns */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          variants={scaleIn}
          className="absolute top-0 right-0 w-64 h-64 bg-yellow-300/20 rounded-full blur-3xl z-0"
        />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          variants={scaleIn}
          transition={{ delay: 0.15 }}
          className="absolute bottom-0 left-0 w-80 h-80 bg-orange-300/20 rounded-full blur-3xl z-0"
        />

        <div className="relative z-10">
          
          {/* Project Form Heading */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={revealViewport}
            variants={fadeInUp}
            className="flex items-center gap-3 mb-6"
          >
            <div className="p-3 bg-yellow-400 rounded-xl">
              <Sparkles className="w-7 h-7 text-white" strokeWidth={2.5} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
              Tell Us About Your{" "}
              <span className="text-yellow-600">Project</span>
            </h2>
          </motion.div>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={revealViewport}
            variants={fadeInUp}
            className="text-neutral-700 mb-8 text-lg max-w-3xl"
          >
            Have an innovative startup idea or project? Share it with us! We are
            excited to learn about your vision and explore how E-Cell can
            support your entrepreneurial journey.
          </motion.p>

          {/* Project Inputs */}
          <motion.form
            onSubmit={handleProjectSubmit}
            initial="hidden"
            whileInView="visible"
            viewport={revealViewport}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-6"
          >
            
            {/* Input: Name */}
            <motion.div className="group" variants={fadeInUp} whileHover={{ y: -2 }}>
              <label className={labelBaseClasses}>Your Name</label>
              <div className="relative">
                <User className={iconBaseClasses} />
                <motion.input
                  type="text"
                  required
                  value={projectForm.name}
                  onChange={(e) =>
                    setProjectForm({ ...projectForm, name: e.target.value })
                  }
                  whileFocus={{ scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className={inputBaseClasses}
                  placeholder="Your full name"
                />
              </div>
            </motion.div>

            {/* Input: Email */}
            <motion.div className="group" variants={fadeInUp} whileHover={{ y: -2 }}>
              <label className={labelBaseClasses}>Email Address</label>
              <div className="relative">
                <Mail className={iconBaseClasses} />
                <motion.input
                  type="email"
                  required
                  value={projectForm.email}
                  onChange={(e) =>
                    setProjectForm({ ...projectForm, email: e.target.value })
                  }
                  whileFocus={{ scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className={inputBaseClasses}
                  placeholder="your.email@provider.com"
                />
              </div>
            </motion.div>

            {/* Input: Project Title */}
            <motion.div className="md:col-span-2 group" variants={fadeInUp} whileHover={{ y: -2 }}>
              <label className={labelBaseClasses}>Project Title</label>
              <motion.input
                type="text"
                required
                value={projectForm.projectTitle}
                onChange={(e) =>
                  setProjectForm({
                    ...projectForm,
                    projectTitle: e.target.value,
                  })
                }
                whileFocus={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="w-full px-4 py-3.5 bg-white border-2 border-neutral-300 rounded-xl focus:border-yellow-500 focus:ring-4 focus:ring-yellow-500/20 hover:border-yellow-300 outline-none transition-all duration-300 text-neutral-900 placeholder-neutral-400"
                placeholder="E.g., AI-Powered EdTech Platform"
              />
            </motion.div>

            {/* Input: Project Description */}
            <motion.div className="md:col-span-2 group" variants={fadeInUp} whileHover={{ y: -2 }}>
              <label className={labelBaseClasses}>Project Description</label>
              <motion.textarea
                required
                rows={5}
                value={projectForm.description}
                onChange={(e) =>
                  setProjectForm({
                    ...projectForm,
                    description: e.target.value,
                  })
                }
                whileFocus={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="w-full px-4 py-3.5 bg-white border-2 border-neutral-300 rounded-xl focus:border-yellow-500 focus:ring-4 focus:ring-yellow-500/20 hover:border-yellow-300 outline-none transition-all duration-300 text-neutral-900 placeholder-neutral-400 resize-none"
                placeholder="Tell us about your project idea, goals, and how you envision making an impact..."
              />
            </motion.div>

            {/* Submit Button */}
            <motion.div className="md:col-span-2" variants={fadeInUp}>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, boxShadow: "0 10px 25px -5px rgba(234,179,8,0.45)" }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-white font-bold rounded-xl shadow-lg transition-colors duration-300 flex items-center justify-center gap-2 group cursor-pointer"
              >
                <AnimatePresence mode="wait" initial={false}>
                  {projectSubmitted ? (
                    <motion.span
                      key="submitted"
                      initial={{ scale: 0, rotate: -180, opacity: 0 }}
                      animate={{ scale: 1, rotate: 0, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      transition={{ type: "spring", stiffness: 400, damping: 15 }}
                      className="flex items-center gap-2"
                    >
                      <Check className="w-5 h-5" /> Submitted!
                    </motion.span>
                  ) : (
                    <motion.span
                      key="idle"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2"
                    >
                      Submit Project
                      <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300" />
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>
            </motion.div>

          </motion.form>
        </div>
      </div>
    </motion.section>
  );

  const renderQuerySection = () => (
    <motion.section
      key="query-section"
      custom={direction}
      variants={tabPanelVariants}
      initial="enter"
      animate="center"
      exit="exit"
      className="mb-12"
    >
      <div className="relative bg-gradient-to-br from-yellow-100 via-yellow-50 to-orange-100 rounded-3xl p-8 md:p-12 border-2 border-yellow-300 shadow-xl overflow-hidden">
        
        {/* Subtle background patterns */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          variants={scaleIn}
          className="absolute top-0 right-0 w-64 h-64 bg-yellow-300/20 rounded-full blur-3xl z-0 pointer-events-none"
        />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          variants={scaleIn}
          transition={{ delay: 0.15 }}
          className="absolute bottom-0 left-0 w-80 h-80 bg-orange-300/20 rounded-full blur-3xl z-0 pointer-events-none"
        />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* Left Side: Query Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={revealViewport}
            variants={fadeInLeft}
            className="w-full sticky top-4"
          >
            <h2 className="text-3xl font-bold text-neutral-900 mb-3">
              Drop us a <span className="text-yellow-600">Query</span>
            </h2>
            <p className="text-neutral-600 mb-8 text-base">
              Have a question? Fill out the form below and we'll get back to you.
            </p>

            <motion.form
              className="space-y-6"
              onSubmit={handleQuerySubmit}
              initial="hidden"
              whileInView="visible"
              viewport={revealViewport}
              variants={staggerContainer}
            >
              
              {/* Query Inputs Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                
                {/* Input: Name */}
                <motion.div className="group space-y-2" variants={fadeInUp} whileHover={{ y: -2 }}>
                  <label htmlFor="query-name" className={labelBaseClasses}>Full Name</label>
                  <div className="relative">
                    <User className={iconBaseClasses} />
                    <motion.input
                      id="query-name"
                      type="text"
                      required
                      value={queryForm.name}
                      onChange={(e) => setQueryForm({ ...queryForm, name: e.target.value })}
                      placeholder="Enter your full name"
                      whileFocus={{ scale: 1.01 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="w-full pl-12 pr-4 py-3.5 bg-white border-2 border-neutral-300 rounded-2xl focus:border-yellow-500 focus:ring-4 focus:ring-yellow-500/20 hover:border-yellow-300 transition-all outline-none"
                    />
                  </div>
                </motion.div>

                {/* Input: Email */}
                <motion.div className="group space-y-2" variants={fadeInUp} whileHover={{ y: -2 }}>
                  <label htmlFor="query-email" className={labelBaseClasses}>Email Address</label>
                  <div className="relative">
                    <Mail className={iconBaseClasses} />
                    <motion.input
                      id="query-email"
                      type="email"
                      required
                      value={queryForm.email}
                      onChange={(e) => setQueryForm({ ...queryForm, email: e.target.value })}
                      placeholder="Enter your email"
                      whileFocus={{ scale: 1.01 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="w-full pl-12 pr-4 py-3.5 bg-white border-2 border-neutral-300 rounded-2xl focus:border-yellow-500 focus:ring-4 focus:ring-yellow-500/20 hover:border-yellow-300 transition-all outline-none"
                    />
                  </div>
                </motion.div>
              </div>

              {/* Input: Message */}
              <motion.div className="group space-y-2" variants={fadeInUp} whileHover={{ y: -2 }}>
                <label htmlFor="query-message" className={labelBaseClasses}>Your Message</label>
                <div className="relative">
                  <MessageSquare className={`${iconBaseClasses} top-7`} />
                  <motion.textarea
                    id="query-message"
                    rows={5}
                    required
                    value={queryForm.query}
                    onChange={(e) => setQueryForm({ ...queryForm, query: e.target.value })}
                    placeholder="How can we help you?"
                    whileFocus={{ scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="w-full pl-12 pr-4 py-3.5 bg-white border-2 border-neutral-300 rounded-2xl focus:border-yellow-500 focus:ring-4 focus:ring-yellow-500/20 hover:border-yellow-300 transition-all outline-none resize-none"
                  />
                </div>
              </motion.div>

              {/* Submit Button */}
              <motion.div variants={fadeInUp}>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02, boxShadow: "0 10px 25px -5px rgba(234,179,8,0.45)" }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-white font-bold rounded-2xl shadow-lg transition-colors duration-300 flex items-center justify-center gap-2 cursor-pointer group"
                >
                  <AnimatePresence mode="wait" initial={false}>
                    {querySubmitted ? (
                      <motion.span
                        key="submitted"
                        initial={{ scale: 0, rotate: -180, opacity: 0 }}
                        animate={{ scale: 1, rotate: 0, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        transition={{ type: "spring", stiffness: 400, damping: 15 }}
                        className="flex items-center gap-2"
                      >
                        <Check className="w-5 h-5" /> Submitted!
                      </motion.span>
                    ) : (
                      <motion.span
                        key="idle"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center gap-2"
                      >
                        Send Message
                        <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300" />
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.button>
              </motion.div>
            </motion.form>
          </motion.div>

          {/* Right Side: FAQ Widget */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={revealViewport}
            variants={fadeInRight}
            className="w-full max-h-[600px] overflow-y-auto rounded-3xl relative shadow-md border-2 border-yellow-100 bg-white/50 backdrop-blur-sm custom-scrollbar"
          >
            <div className="scale-[0.85] origin-top">
              <Faq />
            </div>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );

  return (
    <div
      className="w-full min-h-screen relative"
      style={{
        backgroundColor: "#FEFEFE",
        color: "#111111",
      }}
    >
      {/* Background patterns */}
      <div className="fixed inset-0 pointer-events-none -z-20">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.06]"
          style={{ backgroundImage: "url('/e-cell-fam.jpg')" }}
        />
        <div
          className="absolute inset-0 opacity-[0.45]"
          style={{
            backgroundImage: "radial-gradient(#94A3B8 1.25px, transparent 1.25px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, rgba(254,254,254,0.3) 0%, rgba(250,249,246,0.85) 100%)",
          }}
        />
      </div>

      {/* Main Wrapper */}
      <InteractiveParticleNetwork className="w-full">
        <div className="w-full">
          
          {/* Top Header Section */}
          <PageHeader />

          <Container className="mt-8 max-w-5xl mx-auto pb-10">
            
            {/* Tab Navigations */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-end justify-center gap-1.5 sm:gap-2 px-2 sm:px-10 relative z-20 -mb-[2px]"
            >
              
              {/* Tab 1: Project */}
              <button
                type="button"
                onClick={() => handleTabChange("project")}
                className={`relative px-3.5 py-2.5 sm:px-7 sm:py-3.5 font-bold text-xs sm:text-lg rounded-t-2xl transition-colors duration-300 border-2 border-b-0 cursor-pointer whitespace-nowrap ${activeTab === "project"
                  ? "text-neutral-900 border-yellow-300"
                  : "text-neutral-500 border-transparent hover:bg-yellow-100/50"
                  }`}
              >
                {activeTab === "project" && (
                  <motion.span
                    layoutId="activeTabBg"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    className="absolute inset-0 bg-yellow-100 rounded-t-2xl"
                  />
                )}
                <span className="relative flex items-center gap-1.5 sm:gap-2.5">
                  <Sparkles className={`w-4 h-4 sm:w-5 sm:h-5 shrink-0 ${activeTab === "project" ? "text-yellow-600" : "text-neutral-400"}`} />
                  Have an Idea?
                </span>
              </button>

              {/* Tab 2: Query */}
              <button
                type="button"
                onClick={() => handleTabChange("query")}
                className={`relative px-3.5 py-2.5 sm:px-7 sm:py-3.5 font-bold text-xs sm:text-lg rounded-t-2xl transition-colors duration-300 border-2 border-b-0 cursor-pointer whitespace-nowrap ${activeTab === "query"
                  ? "text-neutral-900 border-yellow-300"
                  : "text-neutral-500 border-transparent hover:bg-yellow-100/50"
                  }`}
              >
                {activeTab === "query" && (
                  <motion.span
                    layoutId="activeTabBg"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    className="absolute inset-0 bg-yellow-100 rounded-t-2xl"
                  />
                )}
                <span className="relative flex items-center gap-1.5 sm:gap-2.5">
                  <MessageSquare className={`w-4 h-4 sm:w-5 sm:h-5 shrink-0 ${activeTab === "query" ? "text-neutral-900" : "text-neutral-400"}`} />
                  Have a Query?
                </span>
              </button>
            </motion.div>

            {/* Rendered Tab View */}
            <div className="relative z-10 overflow-hidden">
              <AnimatePresence mode="wait" custom={direction}>
                {activeTab === "project" ? renderProjectSection() : renderQuerySection()}
              </AnimatePresence>
            </div>

            {/* Join Us Section */}
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={revealViewport}
              variants={staggerContainer}
              className="mt-16"
            >
              <div className="relative bg-white rounded-3xl p-10 md:p-16 border-2 border-yellow-400 shadow-2xl overflow-hidden">
                
                {/* Join Us Content */}
                <div className="relative z-10 text-center max-w-4xl mx-auto">
                  
                  <motion.div
                    variants={scaleIn}
                    className="inline-flex items-center justify-center w-20 h-20 bg-yellow-400 rounded-2xl mb-6 shadow-xl"
                  >
                    <UserPlus className="w-10 h-10 text-neutral-900" strokeWidth={2.5} />
                  </motion.div>

                  <motion.h2
                    variants={fadeInUp}
                    className="text-4xl md:text-5xl font-black text-neutral-900 mb-6"
                  >
                    Join the <span className="text-yellow-600">E-Cell Family!</span>
                  </motion.h2>

                  <motion.p
                    variants={fadeInUp}
                    className="text-xl md:text-2xl text-neutral-700 mb-8 leading-relaxed"
                  >
                    Every year in <span className="font-bold text-yellow-600">June-July</span>, we
                    recruit passionate 2nd-year students to join our incredible
                    team. Be part of something bigger — help shape the
                    entrepreneurial ecosystem at SVNIT!
                  </motion.p>

                  {/* Social Buttons */}
                  <motion.div
                    variants={fadeInUp}
                    className="flex flex-col sm:flex-row items-center justify-center gap-6"
                  >
                    <motion.a
                      href="https://www.instagram.com/ecellsvnit"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="group px-8 py-4 bg-yellow-400 hover:bg-yellow-500 text-neutral-900 font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-3 cursor-pointer"
                    >
                      <Instagram className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                      Follow Us on Instagram
                    </motion.a>

                    <div className="flex items-center gap-2 px-6 py-3 bg-neutral-100 rounded-full border-2 border-neutral-300">
                      <Calendar className="w-5 h-5 text-yellow-600" />
                      <span className="font-semibold text-neutral-900">Stay Tuned!</span>
                    </div>
                  </motion.div>

                  {/* Pro Tip Box */}
                  <motion.div
                    variants={fadeInUp}
                    className="mt-10 p-6 bg-yellow-50 rounded-2xl border-2 border-yellow-200"
                  >
                    <p className="text-sm md:text-base text-neutral-700">
                      <span className="font-bold text-yellow-600">Pro Tip:</span>{" "}
                      Follow our Instagram for updates on recruitment drives,
                      workshops, events, and behind-the-scenes content from E-Cell
                      SVNIT!
                    </p>
                  </motion.div>

                </div>
              </div>
            </motion.section>
          </Container>
        </div>
      </InteractiveParticleNetwork>
    </div>
  );
}