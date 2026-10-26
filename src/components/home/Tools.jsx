import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const ToolsMarquee = () => {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  // Tools & Tech Stack with Real Brand Icons/Logos SVGs
  const toolsList = [
    {
      name: 'React.js',
      icon: (
        <svg className="w-6 h-6 text-[#61DAFB]" viewBox="0 0 115.3 100" fill="currentColor">
          <path d="M57.6 22.8c-15.8 0-28.6 2.2-37.1 6.2-8.1 3.8-12.4 8.7-12.4 14.1 0 5.4 4.3 10.3 12.4 14.1 8.5 4 21.3 6.2 37.1 6.2s28.6-2.2 37.1-6.2c8.1-3.8 12.4-8.7 12.4-14.1 0-5.4-4.3-10.3-12.4-14.1-8.5-4-21.3-6.2-37.1-6.2zM57.6 3.7c20.3 0 36.8 3.5 46.4 9.6 9.9 6.2 11.3 13.9 11.3 18.9 0 5-1.4 12.7-11.3 18.9-9.6 6.1-26.1 9.6-46.4 9.6S20.8 57.2 11.2 51C1.3 44.8 0 37.1 0 32.1c0-5 1.4-12.7 11.3-18.9C20.9 7.2 37.4 3.7 57.6 3.7z"/>
          <circle cx="57.6" cy="32.1" r="8.2" fill="currentColor"/>
        </svg>
      )
    },
    {
      name: 'Node.js',
      icon: (
        <svg className="w-6 h-6 text-[#339933]" viewBox="0 0 256 296" fill="currentColor">
          <path d="M128 0l110.85 64v128L128 256 17.15 192V64L128 0zM38.86 76.5v103l89.14 51.5 89.14-51.5v-103L128 25 38.86 76.5z"/>
          <path d="M110.4 179.2c1.9 4.3 4.9 7.7 9 10.2 4.1 2.5 9 3.8 14.7 3.8 5.6 0 10.4-1.2 14.4-3.5 4-2.3 7-5.5 9-9.6 2-4.1 3-8.9 3-14.4V115h-15.5v50.9c0 3.8-.8 6.8-2.4 9s-3.9 3.3-6.9 3.3c-3 0-5.3-1.1-6.9-3.3-1.6-2.2-2.4-5.2-2.4-9V115H108v50c0 5.4 0.8 10.2 2.4 14.2z"/>
        </svg>
      )
    },
    {
      name: 'Tailwind CSS',
      icon: (
        <svg className="w-6 h-6 text-[#06B6D4]" viewBox="0 0 54 33" fill="currentColor">
          <path d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.05.51 3.52 1.99 5.14 3.63C31.5 13.05 35.4 17 43.5 17c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.05-.51-3.52-1.99-5.14-3.63C40.5 3.95 36.6 0 27 0zM13.5 16C6.3 16 1.8 19.6 0 26.8c2.7-3.6 5.85-4.95 9.45-4.05 2.05.51 3.52 1.99 5.14 3.63C27 29.05 30.9 33 39 33c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.05-.51-3.52-1.99-5.14-3.63C27 19.95 23.1 16 13.5 16z"/>
        </svg>
      )
    },
    {
      name: 'MongoDB',
      icon: (
        <svg className="w-6 h-6 text-[#47A248]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C11.9 0 11.8.1 11.7.2 8.7 3.6 5.6 7.6 5.6 11.7c0 4.1 2.3 7.8 6.4 9.6.1.1.3.1.4 0 4.1-1.8 6.4-5.5 6.4-9.6 0-4.1-3.1-8.1-6.1-11.5-.1-.1-.2-.2-.3-.2zm0 19.3c-3.1-1.6-5.1-4.8-5.1-8.1 0-3.6 2.7-7.2 5.1-10.2 2.4 3 5.1 6.6 5.1 10.2 0 3.3-2 6.5-5.1 8.1z"/>
        </svg>
      )
    },
    {
      name: 'GSAP Animation',
      icon: (
        <svg className="w-6 h-6 text-[#88CE02]" viewBox="0 0 120 120" fill="currentColor">
          <path d="M60 0C26.9 0 0 26.9 0 60s26.9 60 60 60 60-26.9 60-60S93.1 0 60 0zm24.7 87.2c-1.8 1.8-4.7 1.8-6.5 0l-12-12c-1.8-1.8-1.8-4.7 0-6.5s4.7-1.8 6.5 0l4.2 4.2V41.7c0-2.5 2-4.5 4.5-4.5s4.5 2 4.5 4.5v31.2l4.2-4.2c1.8-1.8 4.7-1.8 6.5 0s1.8 4.7 0 6.5l-11.9 12z"/>
        </svg>
      )
    },
    {
      name: 'Git & GitHub',
      icon: (
        <svg className="w-6 h-6 text-[#F05032]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
        </svg>
      )
    },
    {
      name: 'Vite JS',
      icon: (
        <svg className="w-6 h-6 text-[#646CFF]" viewBox="0 0 256 257" fill="currentColor">
          <path d="M128 0C132.8 0 137.2 2.4 139.6 6.5L250.7 197.8C254.5 204.6 249.6 213 241.9 213H14.1C6.4 213 1.5 204.6 5.3 197.8L116.4 6.5C118.8 2.4 123.2 0 128 0Z" fill="url(#vite-gradient)"/>
          <path d="M131.6 23.4L29.2 201.2H226.9L131.6 23.4Z" fill="url(#vite-gradient-inner)"/>
        </svg>
      )
    },
    {
      name: 'Meta Ads Manager',
      icon: (
        <svg className="w-6 h-6 text-[#0064E0]" viewBox="0 0 36 24" fill="currentColor">
          <path d="M27.2 3C23.9 3 21.3 5.2 19.3 8.3C17.6 5.4 15.1 3 11.5 3C6.5 3 3 7.2 3 12.5C3 17.8 6.8 21 11.1 21C14.6 21 17.3 18.6 19.6 14.8C21.3 18 23.7 21 27.5 21C32.1 21 35.5 17.2 35.5 12.2C35.5 6.8 31.8 3 27.2 3Z"/>
        </svg>
      )
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Infinite Marquee Train Animation using GSAP
      const track = trackRef.current;
      const totalWidth = track.scrollWidth / 2;

      gsap.to(track, {
        x: `-=${totalWidth}`,
        duration: 25,
        ease: 'linear',
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth)
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full mt-3 bg-white py-14 sm:py-20 font-sans antialiased overflow-hidden border-y border-neutral-100 select-none"
    >
      {/* ==================== BLURRED BACKGROUND IMAGE LAYER (Matching Hero Style) ==================== */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center filter blur-[24px] opacity-15 scale-105"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&q=80')`
          }}
        />
        <div className="absolute inset-0 w-full h-full bg-white/95 backdrop-blur-[10px]" />
      </div>

      <div className="relative z-10 w-full max-w-[1500px] mx-auto px-6 mb-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#181818] text-white text-[11px] font-medium mb-3 shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-[#c8ff3d]" />
          <span>Powered by Cutting-Edge Stack & Tools</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#141414]">
          The Tech & Marketing Arsenal Behind Our High-Performance Builds
        </h3>
      </div>

      {/* ==================== TRAIN MARQUEE TRACK ==================== */}
      <div className="relative z-10 w-full overflow-hidden flex items-center py-4">
        {/* Left & Right Gradient Fades for Smooth Look */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none" />

        <div
          ref={trackRef}
          className="flex items-center gap-6 sm:gap-8 whitespace-nowrap will-change-transform"
        >
          {/* Double map to ensure seamless infinite looping (Train effect) */}
          {[...toolsList, ...toolsList, ...toolsList].map((tool, index) => (
            <div
              key={index}
              className="inline-flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-[#f9fafb] hover:bg-white border border-neutral-200/80 hover:border-[#141414] shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-300 flex-shrink-0 group cursor-default"
            >
              <div className="w-8 h-8 rounded-xl bg-white border border-neutral-200 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                {tool.icon}
              </div>
              <span className="text-xs sm:text-sm font-bold tracking-tight text-[#141414]">
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsMarquee;