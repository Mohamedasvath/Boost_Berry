import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Video, Film, Code2, ArrowUpRight, MessageSquare, TrendingUp, Sparkles, Zap, Star } from 'lucide-react';

const Hero = () => {
  const pageRef = useRef(null);
  const sectionRef = useRef(null);
  const badgeRef = useRef(null);
  const wordsRef = useRef([]);
  const underlineRef = useRef(null);
  const descRef = useRef(null);
  const btnGroupRef = useRef(null);
  const bottomStripRef = useRef(null);
  const floatingLeftRef = useRef(null);
  const floatingRightRef = useRef(null);

  const addToWordsRef = (el) => {
    if (el && !wordsRef.current.includes(el)) {
      wordsRef.current.push(el);
    }
  };

  useEffect(() => {
    wordsRef.current = [];
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // 1. Main Section Fade
      tl.fromTo(
        sectionRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.6 }
      )
      // 2. Top Pill Badge Elastic Drop
      .fromTo(
        badgeRef.current,
        { y: -25, opacity: 0, scale: 0.85 },
        { y: 0, opacity: 1, scale: 1, duration: 0.7, ease: 'back.out(2)' },
        '-=0.3'
      )
      // 3. 3D Word-by-Word Skew & Reveal
      .fromTo(
        wordsRef.current,
        { yPercent: 130, opacity: 0, rotateZ: 6, rotateX: -40 },
        {
          yPercent: 0,
          opacity: 1,
          rotateZ: 0,
          rotateX: 0,
          stagger: 0.06,
          duration: 0.9,
          ease: 'power4.out',
        },
        '-=0.4'
      )
      // 4. Neon Brush Underline Draw
      .fromTo(
        underlineRef.current,
        { scaleX: 0, transformOrigin: 'left center' },
        { scaleX: 1, duration: 0.8, ease: 'expo.out' },
        '-=0.5'
      )
      // 5. Subtitle Blur-to-Clear Fade Up
      .fromTo(
        descRef.current,
        { y: 20, opacity: 0, filter: 'blur(8px)' },
        { y: 0, opacity: 1, filter: 'blur(0px)', duration: 0.8 },
        '-=0.5'
      )
      // 6. CTA Buttons Pop
      .fromTo(
        btnGroupRef.current.children,
        { scale: 0.85, opacity: 0, y: 20 },
        { scale: 1, opacity: 1, y: 0, stagger: 0.12, duration: 0.6, ease: 'back.out(1.7)' },
        '-=0.5'
      )
      // 7. Floating Left & Right Cards Pop-in
      .fromTo(
        [floatingLeftRef.current, floatingRightRef.current],
        { scale: 0.7, opacity: 0, y: 30 },
        { scale: 1, opacity: 1, y: 0, stagger: 0.15, duration: 0.8, ease: 'back.out(1.5)' },
        '-=0.6'
      )
      // 8. Bottom Services Strip Stagger
      .fromTo(
        bottomStripRef.current.children,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.06, duration: 0.6 },
        '-=0.4'
      );

      // Continuous Floating Animation for Side Cards
      gsap.to(floatingLeftRef.current, {
        y: -12,
        rotation: -4,
        duration: 2.8,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });

      gsap.to(floatingRightRef.current, {
        y: 12,
        rotation: 4,
        duration: 3.2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });

    }, pageRef);

    return () => ctx.revert();
  }, []);

  // Interactive Mouse Parallax Handler
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const xPos = (clientX / window.innerWidth - 0.5) * 25;
    const yPos = (clientY / window.innerHeight - 0.5) * 25;

    gsap.to(floatingLeftRef.current, { x: xPos, duration: 0.8, ease: 'power2.out' });
    gsap.to(floatingRightRef.current, { x: -xPos, duration: 0.8, ease: 'power2.out' });
  };

  return (
    <div 
      ref={pageRef} 
      onMouseMove={handleMouseMove}
      className="w-full flex flex-col justify-between bg-white overflow-hidden m-0 p-0 selection:bg-[#c8ff3d] selection:text-black"
    >
      
      {/* ==================== MAIN HERO CONTAINER ==================== */}
      <main 
        ref={sectionRef}
        className="relative w-full min-h-[88vh] bg-white px-6 sm:px-16 md:px-24 pt-28 pb-16 sm:pt-36 sm:pb-24 flex flex-col items-center justify-center text-center overflow-hidden"
      >
        {/* ==================== BLURRED STUDIO BACKGROUND & GRID ==================== */}
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
          <div 
            className="absolute inset-0 w-full h-full bg-cover bg-center opacity-85 scale-105"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1683721003111-070bcc053d8b?q=80&w=1400&auto=format&fit=crop')`
            }}
          />
          {/* Frosted Glass Overlay */}
          <div className="absolute inset-0 w-full h-full bg-white/85 backdrop-blur-[6px]" />
          
          {/* Subtle Modern Agency Dot Matrix Pattern */}
          <div 
            className="absolute inset-0 w-full h-full opacity-[0.35]"
            style={{
              backgroundImage: 'radial-gradient(#141414 1px, transparent 1px)',
              backgroundSize: '28px 28px'
            }}
          />

          {/* Neon Ambient Glow Behind Headline */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[550px] h-[250px] bg-[#c8ff3d]/30 rounded-full blur-[90px]" />
        </div>

        {/* ==================== FLOATING DECORATIVE AGENCY CARDS (DESKTOP) ==================== */}
        {/* Left Floating Card: ROAS & Growth */}
        <div 
          ref={floatingLeftRef}
          className="hidden xl:flex items-center gap-3.5 absolute left-10 2xl:left-20 top-1/3 z-20 bg-white/90 backdrop-blur-md border border-neutral-200/90 p-4 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.06)] -rotate-6 select-none"
        >
          <div className="w-11 h-11 rounded-xl bg-[#c8ff3d] flex items-center justify-center text-[#141414] shadow-sm">
            <TrendingUp className="w-5 h-5 stroke-[2.5]" />
          </div>
          <div className="text-left pr-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 block">Lets Grow</span>
            <span className="text-sm font-extrabold text-[#141414]">Your bussiness</span>
          </div>
        </div>

        {/* Right Floating Card: Viral Production & Tech */}
        <div 
          ref={floatingRightRef}
          className="hidden xl:flex items-center gap-3.5 absolute right-10 2xl:right-20 bottom-1/4 z-20 bg-[#141414] text-white p-4 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.15)] rotate-6 select-none"
        >
          <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center text-[#c8ff3d]">
            <Zap className="w-5 h-5 fill-current" />
          </div>
          <div className="text-left pr-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 block">Digital</span>
            <span className="text-sm font-bold text-white">Growth</span>
          </div>
        </div>

        {/* ==================== FOREGROUND HERO CONTENT ==================== */}
        <div className="relative z-10 flex flex-col items-center w-full max-w-6xl mx-auto">
          
          {/* Top Black Pill Badge with Pulsing Neon Dot */}
          <div
            ref={badgeRef}
            className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-[#141414] text-white text-xs sm:text-[13px] font-medium mb-7 shadow-md border border-neutral-800"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c8ff3d] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#c8ff3d]"></span>
            </span>
            <span>Available for new projects</span>
            <Star className="w-3.5 h-3.5 text-[#c8ff3d] ml-0.5" />
          </div>

          {/* Full-Width Scalable Word-by-Word Headline */}
          <h1 
            className="w-full text-4xl sm:text-6xl md:text-7xl lg:text-[80px] xl:text-[88px] font-bold tracking-[-0.035em] text-[#141414] leading-[1.08]"
            style={{ perspective: '800px' }}
          >
            <span className="block">
              {['Make', 'Your', 'Brand'].map((word, i) => (
                <span key={i} className="inline-block overflow-hidden pb-2 mr-[0.25em]">
                  <span ref={addToWordsRef} className="inline-block will-change-transform">
                    {word}
                  </span>
                </span>
              ))}
            </span>
            
            <span className="block mt-1 sm:mt-2">
              {['Impossible', 'To'].map((word, i) => (
                <span key={i} className="inline-block overflow-hidden pb-2 mr-[0.25em]">
                  <span ref={addToWordsRef} className="inline-block will-change-transform">
                    {word}
                  </span>
                </span>
              ))}
              
              {/* Highlighted Word with Dual Neon Underline */}
              <span className="relative inline-block">
                <span className="inline-block overflow-hidden pb-2 text-[#141414]">
                  <span ref={addToWordsRef} className="inline-block will-change-transform">
                    Ignore.
                  </span>
                </span>
                <svg
                  ref={underlineRef}
                  className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-3.5 sm:h-5 pointer-events-none"
                  viewBox="0 0 240 18"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M4 11.5C62 6.5 168 6.5 236 11.5"
                    stroke="#c8ff3d"
                    strokeWidth="9"
                    strokeLinecap="round"
                  />
                  <path
                    d="M12 14C80 10.5 165 10.5 228 13.5"
                    stroke="#141414"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </span>
          </h1>

          {/* Subtitle */}
          <p
            ref={descRef}
            className="mt-7 sm:mt-9 max-w-2xl text-xs sm:text-sm md:text-base lg:text-[17px] text-[#333333] font-medium leading-relaxed px-2"
          >
            Our creative video shoots, viral editing, Meta ads, web development & WhatsApp automations give your brand a special edge. <span className="text-[#141414] font-bold underline decoration-[#c8ff3d] decoration-2 underline-offset-4">Your vision, our innovation!</span>
          </p>

          {/* 2 CTA Buttons */}
          <div ref={btnGroupRef} className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4">
            
            {/* Button 1: Let's Talk (Neon Lime Green) */}
            <a
              href="tel:+919187638784"
              className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#c8ff3d] hover:bg-[#bce622] text-[#141414] font-bold text-xs sm:text-sm tracking-tight transition-all duration-300 shadow-[0_8px_25px_rgba(200,255,61,0.4)] hover:shadow-[0_12px_30px_rgba(200,255,61,0.6)] hover:-translate-y-0.5 active:scale-95"
            >
              <span>Let's Talk</span>
              <span className="w-6 h-6 rounded-full bg-[#141414] text-[#c8ff3d] flex items-center justify-center transition-transform group-hover:rotate-45">
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </a>

            {/* Button 2: WhatsApp Chat */}
            <a
              href="https://wa.me/919187638784"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#141414] hover:bg-neutral-800 text-white font-bold text-xs sm:text-sm tracking-tight transition-all duration-300 shadow-md hover:-translate-y-0.5 active:scale-95"
            >
              <MessageSquare className="w-4 h-4 text-[#c8ff3d] transition-transform group-hover:scale-110" />
              <span>WhatsApp Us</span>
            </a>

          </div>

        </div>
      </main>

      {/* ==================== BOTTOM FULL-WIDTH SERVICES STRIP ==================== */}
      <footer className="w-full bg-[#141414] px-6 sm:px-12 py-5 sm:py-6 border-t border-neutral-800">
        <div
          ref={bottomStripRef}
          className="w-full max-w-[1600px] mx-auto flex flex-wrap items-center justify-center sm:justify-between gap-x-8 gap-y-4 select-none"
        >
          {/* Video Shooting */}
          <div className="flex items-center gap-2.5 text-xs sm:text-sm font-bold tracking-tight text-white hover:text-[#c8ff3d] transition-colors cursor-pointer">
            <Video className="w-4 h-4 text-[#c8ff3d]" />
            <span>Video Shooting</span>
          </div>

          {/* Video Editing */}
          <div className="flex items-center gap-2.5 text-xs sm:text-sm font-bold tracking-tight text-white hover:text-[#c8ff3d] transition-colors cursor-pointer">
            <Film className="w-4 h-4 text-blue-400" />
            <span>Video Editing</span>
          </div>

          {/* Real Meta Ads Logo */}
          <div className="flex items-center gap-2.5 text-xs sm:text-sm font-bold tracking-tight text-white hover:text-[#c8ff3d] transition-colors cursor-pointer">
            <svg className="w-4 h-4" viewBox="0 0 36 24" fill="none">
              <path
                d="M27.2 3C23.9 3 21.3 5.2 19.3 8.3C17.6 5.4 15.1 3 11.5 3C6.5 3 3 7.2 3 12.5C3 17.8 6.8 21 11.1 21C14.6 21 17.3 18.6 19.6 14.8C21.3 18 23.7 21 27.5 21C32.1 21 35.5 17.2 35.5 12.2C35.5 6.8 31.8 3 27.2 3Z"
                fill="#0064E0"
              />
            </svg>
            <span>Meta Ads</span>
          </div>

          {/* Web Development */}
          <div className="flex items-center gap-2.5 text-xs sm:text-sm font-bold tracking-tight text-white hover:text-[#c8ff3d] transition-colors cursor-pointer">
            <Code2 className="w-4 h-4 text-indigo-400" />
            <span>Web Development</span>
          </div>

          {/* Real WhatsApp Logo */}
          <a
            href="https://wa.me/919187638784"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 text-xs sm:text-sm font-bold tracking-tight text-white hover:text-[#c8ff3d] transition-colors"
          >
            <svg className="w-4 h-4 text-[#25D366] fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.842-.981z" />
            </svg>
            <span>WhatsApp CRM</span>
          </a>

          {/* Real Google G Logo */}
          <div className="flex items-center gap-2.5 text-xs sm:text-sm font-bold tracking-tight text-white hover:text-[#c8ff3d] transition-colors cursor-pointer">
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z" />
              <path fill="#34A853" d="M12 24c3.3 0 6.08-1.09 8.1-2.96l-3.88-3.05c-1.08.72-2.45 1.16-4.22 1.16-3.24 0-5.98-2.18-6.96-5.12H1.05v3.14C3.06 21.16 7.21 24 12 24z" />
              <path fill="#FBBC05" d="M5.04 14.03c-.25-.72-.38-1.49-.38-2.28s.13-1.56.38-2.28V6.33H1.05C.38 7.66 0 9.16 0 11.75s.38 4.09 1.05 5.42l3.99-3.14z" />
              <path fill="#EA4335" d="M12 4.75c1.79 0 3.41.62 4.68 1.82l3.51-3.51C18.07 1.19 15.3 0 12 0 7.21 0 3.06 2.84 1.05 6.83l3.99 3.14c.98-2.94 3.72-5.22 6.96-5.22z" />
            </svg>
            <span>GMB Optimize</span>
          </div>

          {/* Real Instagram Logo & Handle */}
          <a
            href="https://instagram.com/_boostberry_digital"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 text-xs sm:text-sm font-bold tracking-tight text-white hover:text-[#c8ff3d] transition-colors"
          >
            <span className="w-5 h-5 rounded-md bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center text-white">
              <svg className="w-3.5 h-3.5 fill-none stroke-current" strokeWidth="2.2" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </span>
            <span>Instagram</span>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Hero;