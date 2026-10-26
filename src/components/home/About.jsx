import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowUpRight, Video, Target, Code2, MessageSquare } from 'lucide-react';
import logo from '../../assets/logoo.PNG'

const About = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const imgRef = useRef(null);
  const badgeRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        badgeRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 }
      )
      .fromTo(
        titleRef.current.children,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.15, duration: 0.9 },
        '-=0.3'
      )
      .fromTo(
        textRef.current,
        { y: 25, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        '-=0.5'
      )
      .fromTo(
        imgRef.current,
        { scale: 0.92, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.9, ease: 'power2.out' },
        '-=0.6'
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative w-full bg-white mt-4 py-16 sm:py-24 px-6 sm:px-16 md:px-24 font-sans antialiased selection:bg-[#c8ff3d] selection:text-black overflow-hidden"
    >
      {/* ==================== BLURRED BACKGROUND IMAGE LAYER (Matching Hero Style) ==================== */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center filter blur-[24px] opacity-20 scale-105"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&q=80')`
          }}
        />
        <div className="absolute inset-0 w-full h-full bg-white/90 backdrop-blur-[10px]" />
      </div>

      {/* ==================== MAIN LAYOUT CONTAINER ==================== */}
      <div className="relative z-10 w-full max-w-[1500px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* ==================== LEFT COLUMN: BOLD SPLIT TYPOGRAPHY & TEXT BLOCK ==================== */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          
          {/* Top Brand Tag */}
          <div
            ref={badgeRef}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#181818] text-white text-xs font-medium mb-6 shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-[#c8ff3d]" />
            <span>About Us</span>
          </div>

          {/* Bold Artistic Split Typography (Similar to Reference Layout) */}
          <div ref={titleRef} className="space-y-0 sm:space-y-1 mb-8">
            <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-[110px] font-bold tracking-[-0.04em] text-[#141414] leading-[0.9]">
              ABOUT
            </h2>
            <div className="flex items-center gap-4">
              <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-[110px] font-bold tracking-[-0.04em] text-[#141414] leading-[0.9]">
                US
              </h2>
              {/* Neon Lime Decorative Accent Pill */}
              <div className="hidden sm:inline-block px-4 py-1 rounded-full bg-[#c8ff3d] text-neutral-950 font-bold text-xs uppercase tracking-wider">
               Our Team
              </div>
            </div>
          </div>

          {/* Description Block */}
          <div ref={textRef} className="space-y-4 max-w-xl">
            <p className="text-sm sm:text-base md:text-[17px] text-[#333333] font-medium leading-relaxed">
            Boostberry Digital is a creative digital marketing agency dedicated to helping businesses build a strong online presence and grow their brand. We offer personal branding, professional video shooting, video editing, social media marketing, Meta Ads management, Google Business Profile optimization, WhatsApp automation, and website development. Our goal is to combine creative content with strategic digital solutions that help businesses connect with their target audience, strengthen their brand identity, and create more opportunities for growth. We work with small businesses, startups, local brands, and entrepreneurs to turn their ideas into a stronger digital presence.
            </p>
            <p className="text-xs sm:text-sm text-[#555555] font-medium leading-relaxed">
              With years of expertise, we thrive on turning bold ideas into visually engaging platforms that convert casual visitors into loyal brand advocates. Your vision, our master execution.
            </p>

            {/* Quick Contact Info Match */}
            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs font-bold text-neutral-800">
              <span className="flex items-center gap-1.5">
                📍 Tamil Nadu, India
              </span>
              <a href="tel:+919187638784" className="hover:text-black transition-colors">
                📞 +91 9187638784
              </a>
              <a href="https://instagram.com/_boostberry_digital" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">
                @_boostberry_digital
              </a>
            </div>
          </div>

        </div>

        {/* ==================== RIGHT COLUMN: STYLISH CUTOUT IMAGE (Like Reference Layout) ==================== */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
          <div
            ref={imgRef}
            className="relative w-full max-w-md sm:max-w-lg lg:max-w-none h-[420px] sm:h-[520px] rounded-[32px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-neutral-200/80 group bg-neutral-100"
          >
            <img
              src={logo}
              alt="BoostBerry Professional Workspace"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            
            {/* Floating Neon Badge on Image */}
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-neutral-200/80 shadow-lg flex items-center justify-between">
              <div>
               
              </div>
              <div className="w-8 h-8 rounded-full bg-[#c8ff3d] flex items-center justify-center text-neutral-950">
                <ArrowUpRight size={16} />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;