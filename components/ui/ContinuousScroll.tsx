'use client';

import { useRef, useEffect } from 'react';

interface ContinuousScrollProps {
  children: React.ReactNode;
  className?: string;
  speed?: number; // pixels per second
}

export function ContinuousScroll({ children, className = '', speed = 50 }: ContinuousScrollProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | undefined>(undefined);
  const scrollPositionRef = useRef(0);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    const content = contentRef.current;
    
    if (!scrollContainer || !content) return;

    let isPaused = false;
    let lastTime = performance.now();

    const animate = (currentTime: number) => {
      if (isPaused) {
        lastTime = currentTime;
        animationRef.current = requestAnimationFrame(animate);
        return;
      }

      const deltaTime = (currentTime - lastTime) / 1000; // Convert to seconds
      lastTime = currentTime;

      const scrollAmount = speed * deltaTime;
      scrollPositionRef.current += scrollAmount;

      const contentWidth = content.scrollWidth / 2; // Since we duplicate content
      
      if (scrollPositionRef.current >= contentWidth) {
        scrollPositionRef.current = scrollPositionRef.current - contentWidth;
      }

      scrollContainer.scrollLeft = scrollPositionRef.current;
      animationRef.current = requestAnimationFrame(animate);
    };

    const handleMouseEnter = () => {
      isPaused = true;
    };

    const handleMouseLeave = () => {
      lastTime = performance.now();
      isPaused = false;
    };

    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [speed]);

  return (
    <div
      ref={scrollRef}
      className={`overflow-x-hidden scrollbar-hide ${className}`}
      style={{
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
      }}
    >
      <div ref={contentRef} className="flex gap-6" style={{ width: 'max-content' }}>
        {children}
        {/* Duplicate for seamless loop */}
        {children}
      </div>
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}

