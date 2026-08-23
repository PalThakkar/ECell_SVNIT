"use client";

import React, { useEffect, useRef, useState } from "react";

// Parses strings like "2000+", "5+", "₹10k+", "1,000+"
function parseStat(value) {
  if (typeof value === "number") {
    return { prefix: "", number: value, suffix: "" };
  }
  
  // Clean commas if present in the string (e.g., "1,000+")
  const cleanValue = value.toString().replace(/,/g, "");
  const match = cleanValue.match(/^([^\d]*)(\d+)(.*)$/);

  if (!match) return { prefix: "", number: 0, suffix: value };
  const [, prefix, number, suffix] = match;
  return { prefix, number: parseInt(number, 10), suffix };
}

const AnimatedCounter = ({ value, duration = 1500, formatLocale = true }) => {
  const { prefix, number, suffix } = parseStat(value);
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    // Reset animation state if value/number changes
    hasAnimated.current = false;
    setCount(0);
  }, [value]);

  useEffect(() => {
    const el = ref.current;
    if (!el || number === 0) {
      setCount(number);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            const startTime = performance.now();

            const step = (now) => {
              const progress = Math.min((now - startTime) / duration, 1);
              // Cubic ease-out deceleration
              const eased = 1 - Math.pow(1 - progress, 3);
              
              setCount(Math.round(eased * number));

              if (progress < 1) {
                requestAnimationFrame(step);
              }
            };

            requestAnimationFrame(step);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [number, duration]);

  const formattedCount = formatLocale ? count.toLocaleString() : count;

  return (
    <span ref={ref} aria-label={`${prefix}${number}${suffix}`}>
      {prefix}
      {formattedCount}
      {suffix}
    </span>
  );
};

export default AnimatedCounter;