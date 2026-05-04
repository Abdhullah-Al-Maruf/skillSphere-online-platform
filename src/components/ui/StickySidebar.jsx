// components/StickySidebar.jsx
import { useState, useEffect, useRef } from 'react';

export default function StickySidebar({ children, offset = 80 }) {
  const [isSticky, setIsSticky] = useState(false);
  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sidebarRef.current) return;
      
      const sidebarTop = sidebarRef.current.getBoundingClientRect().top;
      
      // Stick when sidebar reaches offset from top
      if (sidebarTop <= offset) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Run once on mount to check initial position
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [offset]);

  return (
    <div 
      ref={sidebarRef}
      className={`transition-all duration-300 ${
        isSticky 
          ? 'fixed top-4 right-4 lg:right-[calc(50%-40rem)] w-80 z-10' 
          : 'relative'
      }`}
    >
      {children}
    </div>
  );
}