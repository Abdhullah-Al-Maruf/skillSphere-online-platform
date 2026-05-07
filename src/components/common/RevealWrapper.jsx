"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function RevealWrapper({ children, className = "", delay = 0 }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const element = sectionRef.current;
    if (!element) return;

    // Use a more sophisticated reveal
    gsap.fromTo(
      element,
      { 
        y: 60, 
        opacity: 0,
        scale: 0.95,
        rotateX: -10
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        rotateX: 0,
        duration: 1.2,
        delay: delay,
        ease: "power4.out",
        scrollTrigger: {
          trigger: element,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      }
    );
  }, [delay]);

  return (
    <div 
      ref={sectionRef} 
      className={className}
      style={{ perspective: "1000px" }} // Added for 3D rotation effect
    >
      {children}
    </div>
  );
}
