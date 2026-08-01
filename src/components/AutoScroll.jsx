"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { ChevronsDown, Pause } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const AutoScroll = () => {
  const autoScrollRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const [visible] = useState(true);

  const stopAutoScroll = useCallback(() => {
    if (autoScrollRef.current) {
      cancelAnimationFrame(autoScrollRef.current);
      autoScrollRef.current = null;
    }
    setIsScrolling(false);
  }, []);

  const startAutoScroll = useCallback(() => {
    stopAutoScroll();
    setIsScrolling(true);
    const scrollSpeed = 1.5;
    const step = () => {
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      if (window.scrollY < maxScroll) {
        window.scrollBy(0, scrollSpeed);
        autoScrollRef.current = requestAnimationFrame(step);
      } else {
        setIsScrolling(false);
      }
    };
    autoScrollRef.current = requestAnimationFrame(step);
  }, [stopAutoScroll]);

  // Stop on user scroll / touch / key / stopAutoScroll event
  useEffect(() => {
    const events = ["wheel", "touchstart", "keydown", "stopAutoScroll"];
    const handleStop = () => stopAutoScroll();
    events.forEach((e) =>
      window.addEventListener(e, handleStop, { passive: true })
    );
    return () => {
      stopAutoScroll();
      events.forEach((e) => window.removeEventListener(e, handleStop));
    };
  }, [stopAutoScroll]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          type="button"
          onClick={() => (isScrolling ? stopAutoScroll() : startAutoScroll())}
          className={`fixed bottom-[5.5rem] right-6 sm:bottom-[6.5rem] sm:right-8 z-50 hidden md:flex items-center justify-center p-3.5 sm:p-4 rounded-full transition-all duration-300 cursor-pointer focus:outline-none group ${
            isScrolling
              ? "bg-[#1A1813] text-[#FBBD58] border-2 border-[#FBBD58] shadow-[0_0_20px_rgba(251,189,88,0.30)]"
              : "bg-[#1A1813] text-[#FBBD58] border border-[#2D2A24] shadow-[0_8px_24px_rgba(17,15,10,0.25)] hover:border-[#FBBD58] hover:shadow-[0_8px_24px_rgba(251,189,88,0.20)] hover:scale-110 active:scale-95"
          }`}
          aria-label={isScrolling ? "Stop auto scroll" : "Start auto scroll"}
          title={isScrolling ? "Stop auto scroll" : "Auto scroll down"}
        >
          {/* Spinning ring when active */}
          {isScrolling && (
            <motion.span
              className="absolute inset-0 rounded-full border-2 border-transparent border-t-[#FBBD58] border-r-[#FBBD58]/30"
              animate={{ rotate: 360 }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            />
          )}

          {isScrolling ? (
            <Pause className="w-5 h-5 sm:w-6 sm:h-6 relative z-10" />
          ) : (
            <motion.span
              animate={{ y: [0, 3, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="flex items-center justify-center"
            >
              <ChevronsDown className="w-5 h-5 sm:w-6 sm:h-6 group-hover:-translate-y-0 transition-transform" />
            </motion.span>
          )}
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default AutoScroll;

