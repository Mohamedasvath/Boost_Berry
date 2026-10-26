import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ShieldCheck, Zap, TrendingUp, Users, ArrowUpRight } from 'lucide-react';

const WhyChooseUs = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef([]);

  const reasons = [
    {
      icon: <TrendingUp className="w-6 h-6 text-[#141414]" />,
      title: 'Data-Driven ROAS Growth',
      desc: 'We do not rely on guesswork. Every Meta ad campaign and growth funnel is strictly engineered to maximize your return on ad spend.'
    },
    {
      icon: <Zap className="w-6 h-6 text-[#141414]" />,
      title: 'Lightning-Fast Tech Stack',
      desc: 'From React & MERN web apps to automated WhatsApp CRM funnels, our solutions load instantly and convert visitors into active leads.'
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#141414]" />,
      title: 'Cinematic Studio Quality',
      desc: 'Our professional video shoots and viral hook editing give your brand an unmatchable visual edge that stops the scroll instantly.'
    },
    {
      icon: <Users className="w-6 h-6 text-[#141414]" />,
      title: 'Dedicated Local Partner',
      desc: 'Based in Tamil Nadu, we understand local market psychology while delivering global agency-level design standards.'
    }
  ];

  const addToCardsRef = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  useEffect(() => {
    cardsRef.current = [];
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        headerRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 }
      )
      .fromTo(
        cardsRef.current,
        { y: 35, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1, duration: 0.8 },
        '-=0.4'
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="why-choose-us"
      ref={sectionRef}
      className="relative w-full bg-white py-20 sm:py-28 px-6 sm:px-16 md:px-24 font-sans antialiased selection:bg-[#c8ff3d] selection:text-black overflow-hidden"
    >
      {/* ==================== BLURRED BACKGROUND IMAGE LAYER ==================== */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center filter blur-[24px] opacity-20 scale-105"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&q=80')`
          }}
        />
        <div className="absolute inset-0 w-full h-full bg-white/90 backdrop-blur-[10px]" />
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto flex flex-col items-center text-center">
        
        {/* ==================== SECTION HEADER (Like Reference Image Style) ==================== */}
        <div ref={headerRef} className="w-full max-w-4xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#181818] text-white text-xs font-medium mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#2c42a5]" />
            <span>• Why Choose Us</span>
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-[76px] font-bold tracking-[-0.03em] text-[#141414] leading-[1.1]">
            <span className="relative inline-block px-3 py-1 rounded-2xl bg-[#305a99] text-neutral-950 mr-2">
              Branding
            </span>{' '}
            is what separates you from everyone else.
          </h2>

          <p className="mt-6 text-sm sm:text-base md:text-lg text-[#555555] font-medium leading-relaxed max-w-2xl mx-auto">
            We build identity frameworks that make your brand instantly recognizable, highly trusted, and harder to replace in your competitive market.
            We don't just chase vanity metrics. Every video, ad campaign, and web application we engineer is strictly tied to bottom-line revenue growth.
          </p>
        </div>

        {/* ==================== 4 PILLARS GRID ==================== */}
        {/* <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {reasons.map((item, index) => (
            <div
              key={index}
              ref={addToCardsRef}
              className="group rounded-[32px] bg-[#f9fafb] hover:bg-[#141414] text-[#141414] hover:text-white border border-neutral-200/80 hover:border-neutral-900 p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 shadow-[0_4px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.1)] text-left hover:-translate-y-1.5"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-[#c8ff3d] flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>

                <h3 className="text-xl sm:text-2xl font-bold tracking-tight mb-3">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm font-medium leading-relaxed opacity-80">
                  {item.desc}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-current/10 flex items-center justify-between">
                <span className="text-xs font-mono font-bold opacity-60">0{index + 1} / WHY US</span>
                <div className="w-8 h-8 rounded-full bg-current/10 flex items-center justify-center group-hover:bg-[#c8ff3d] group-hover:text-neutral-950 transition-colors">
                  <ArrowUpRight size={16} />
                </div>
              </div>
            </div>
          ))}
        </div> */}

        {/* ==================== STAND OUT NOW CTA BUTTON (Matching Reference Style) ==================== */}
        <div className="mt-1">
          <a
            href="https://wa.me/919187638784"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 px-5 py-4 rounded-full bg-[#3937bd] hover:bg-neutral-800 text-white font-bold text-xs sm:text-[14px] tracking-tight transition-all shadow-md active:scale-95"
          >
            <span>Stand out now!</span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#c8ff3d] animate-pulse" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;