'use client';

import { useRef, useEffect } from 'react';

interface AutoScrollProps {
  children: React.ReactNode;
  className?: string;
  speed?: number; // pixels per second
}

export function AutoScroll({ children, className = '', speed = 30 }: AutoScrollProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    const content = contentRef.current;
    
    if (!scrollContainer || !content) return;

    let scrollPosition = 0;
    let direction = 1;
    let isPaused = false;

    const updateMaxScroll = () => {
      return content.scrollWidth / 2 - scrollContainer.clientWidth;
    };

    let maxScroll = updateMaxScroll();

    const animate = () => {
      if (isPaused) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }

      maxScroll = updateMaxScroll();
      
      if (maxScroll <= 0) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }

      if (scrollPosition >= maxScroll) {
        direction = -1;
      } else if (scrollPosition <= 0) {
        direction = 1;
      }

      scrollPosition += (speed / 60) * direction; // 60fps
      scrollContainer.scrollLeft = scrollPosition;

      animationRef.current = requestAnimationFrame(animate);
    };

    // Pause on hover
    const handleMouseEnter = () => {
      isPaused = true;
    };

    const handleMouseLeave = () => {
      isPaused = false;
    };

    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);

    // Handle window resize
    const handleResize = () => {
      maxScroll = updateMaxScroll();
    };
    window.addEventListener('resize', handleResize);

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
    };
  }, [speed]);

  return (
    <div
      ref={scrollRef}
      className={`overflow-x-auto scrollbar-hide scroll-smooth ${className}`}
      style={{
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
      }}
    >
      <div ref={contentRef} className="flex gap-6">
        {children}
        {/* Duplicate content for seamless loop */}
        {children}
      </div>
    </div>
  );
}

