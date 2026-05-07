"use client";

import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";

export default function Loader() {
  const [show, setShow] = useState(true); // Always start as true for Home page
  const containerRef = useRef(null);
  const counterRef = useRef(null);
  const textRef = useRef(null);
  const progressRef = useRef(null);
  const bgTextRef = useRef(null);

  useEffect(() => {
    if (!show || !containerRef.current) return;
    
    // Disable scrolling during loading
    document.body.style.overflow = "hidden";

    const tl = gsap.timeline({
      onComplete: () => {
        document.body.style.overflow = "auto";
        setShow(false);
      },
    });

    // Cinematic background text pan
    gsap.fromTo(
      bgTextRef.current,
      { xPercent: 10 },
      { xPercent: -20, duration: 4, ease: "none" }
    );

    const counter = { val: 0 };
    tl.to(counter, {
      val: 100,
      duration: 2.5,
      ease: "power4.inOut",
      onUpdate: () => {
        if (counterRef.current) {
          counterRef.current.textContent = Math.round(counter.val) + "%";
        }
      },
    })
      .fromTo(
        textRef.current,
        { y: 30, opacity: 0, scale: 0.9 },
        { y: 0, opacity: 1, scale: 1, duration: 1, ease: "power3.out" },
        "-=2"
      )
      .to(progressRef.current, { width: "100%", duration: 2.5, ease: "power4.inOut" }, "-=2.5")
      // Exit animations
      .to([counterRef.current, textRef.current, progressRef.current], {
        y: -50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.in",
      })
      .to(bgTextRef.current, { opacity: 0, duration: 0.5 }, "-=0.6")
      .to(containerRef.current, {
        yPercent: -100,
        duration: 1.2,
        ease: "power4.inOut",
      });

    return () => {
      document.body.style.overflow = "auto";
      tl.kill();
    };
  }, [show]);

  if (!show) return null;

  return (
    <div ref={containerRef} className="loader-overlay fixed inset-0 z-[99999] bg-[#ffece3] flex flex-col items-center justify-center overflow-hidden">
      {/* Huge Background Text */}
      <div ref={bgTextRef} className="loader-bg-text absolute opacity-[0.03] whitespace-nowrap text-[20vw] font-black text-amber-900 pointer-events-none select-none">
        SKILLSPHERE
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col items-center">
        <div ref={counterRef} className="loader-counter text-7xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-br from-amber-600 via-amber-800 to-amber-900 drop-shadow-[0_0_20px_rgba(120,53,15,0.2)] mb-2">
          0%
        </div>

        <div className="overflow-hidden h-12 mb-8 flex items-center justify-center">
          <span ref={textRef} className="loader-text-span text-lg md:text-2xl font-bold tracking-[0.3em] uppercase text-amber-800/80">
            Empowering Your Future
          </span>
        </div>

        <div className="w-64 md:w-96 h-[2px] bg-amber-900/10 rounded-full overflow-hidden relative">
          <div ref={progressRef} className="loader-progress absolute top-0 left-0 h-full w-0 bg-gradient-to-r from-amber-500 via-amber-700 to-amber-900 shadow-[0_0_15px_rgba(120,53,15,0.4)]"></div>
        </div>
      </div>
    </div>
  );
}
