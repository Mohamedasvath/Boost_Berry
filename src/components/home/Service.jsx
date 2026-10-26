import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { 
  ArrowUpRight, 
  ChevronDown, 
  Video, 
  Film, 
  Target, 
  Code2, 
  MessageSquareCode, 
  MapPin 
} from 'lucide-react';

const Services = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const gridRef = useRef(null);
  const extraGridRef = useRef(null);

  const [showAll, setShowAll] = useState(false);

  const servicesList = [
    {
      title: 'Video Shooting & Production',
      desc: 'High-definition on-location shoots and cinematic framing designed to stop the scroll.',
      icon: <Video className="w-6 h-6" />,
      tag: 'Production',
      theme: '' // Dark card
    },
    {
      title: 'Viral Video Editing',
      desc: 'Dynamic hooks, retention pacing, and professional captions built for maximum reach.',
      icon: <Film className="w-6 h-6" />,
      tag: 'Post-Production',
      theme: '' // Highlight Neon Lime card
    },
    {
      title: 'Meta & IG Advertising',
      desc: 'Laser-targeted ad funnels engineered to consistently drive high-ROAS results.',
      icon: <Target className="w-6 h-6" />,
      tag: 'Paid Growth',
      theme: '' // Dark card
    },
    {
      title: 'Web Development',
      desc: 'Lightning-fast React & MERN websites optimized for instant conversion.',
      icon: <Code2 className="w-6 h-6" />,
      tag: 'Tech & Code',
      theme: '' // Updated to Neon Lime color card as requested
    },
    {
      title: 'WhatsApp CRM Automations',
      desc: '24/7 automated chat flows that turn inquiries into sales on autopilot.',
      icon: <MessageSquareCode className="w-6 h-6" />,
      tag: 'Automation',
      theme: '' // Updated to Black card as requested
    },
    {
      title: 'GMB Profile Rank #1',
      desc: 'Dominate local Google Maps search results to get direct customer phone calls.',
      icon: <MapPin className="w-6 h-6" />,
      tag: 'Local SEO',
      theme: '' // Updated to Neon Lime color card as requested
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        headerRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 }
      )
      .fromTo(
        gridRef.current.children,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1, duration: 0.8 },
        '-=0.4'
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleToggleShowMore = () => {
    if (!showAll) {
      setShowAll(true);
      setTimeout(() => {
        if (extraGridRef.current) {
          gsap.fromTo(
            extraGridRef.current.children,
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, stagger: 0.12, duration: 0.6, ease: 'power3.out' }
          );
        }
      }, 50);
    } else {
      setShowAll(false);
    }
  };

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative w-full mt-3 bg-white py-20 sm:py-28 px-6 sm:px-16 md:px-24 font-sans antialiased selection:bg-[#c8ff3d] selection:text-black overflow-hidden"
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

      <div className="relative z-10 w-full max-w-[1400px] mx-auto flex flex-col items-center">
        
        {/* ==================== SECTION HEADER ==================== */}
        <div ref={headerRef} className="w-full text-left mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#181818] text-white text-xs font-medium mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#403ebe]" />
            <span>BoostBerry Digital • What We Do</span>
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-[76px] font-bold tracking-[-0.03em] text-[#141414] leading-[1.05]">
            Our Mission Is To Make Your <br />
            <span className="relative inline-block px-3 py-1 rounded-2xl bg-[#2a42a1] text-neutral-950 mt-2">
              Business Better
            </span>{' '}
            Through Technology
          </h2>
          
          <div className="w-36 h-1.5 bg-[#141414] rounded-full mt-8" />
        </div>

        {/* ==================== 3-COLUMN GRID (First 3 Cards) ==================== */}
        <div ref={gridRef} className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.slice(0, 3).map((service, index) => {
            let cardBg = 'bg-[#141414] text-white border-neutral-800';
            let iconBg = 'bg-white/10 text-[#c8ff3d]';
            let descColor = 'text-neutral-400';
            let tagColor = 'bg-white/10 text-white';

            if (service.theme === 'lime') {
              cardBg = 'bg-[#c8ff3d] text-neutral-950 border-[#b5eb2a] shadow-xl';
              iconBg = 'bg-neutral-950 text-[#c8ff3d]';
              descColor = 'text-neutral-800';
              tagColor = 'bg-neutral-950 text-white';
            } else if (service.theme === 'light') {
              cardBg = 'bg-[#f9fafb] text-[#141414] border-neutral-200/80 hover:border-[#141414]';
              iconBg = 'bg-neutral-200/70 text-[#141414]';
              descColor = 'text-[#555555]';
              tagColor = 'bg-neutral-200 text-neutral-800';
            }

            return (
              <div
                key={index}
                className={`group rounded-[32px] border p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 shadow-[0_4px_30px_rgba(0,0,0,0.02)] hover:-translate-y-1.5 ${cardBg}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 ${iconBg}`}>
                      {service.icon}
                    </div>
                    <span className={`px-3.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider ${tagColor}`}>
                      {service.tag}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold tracking-tight mb-3">
                    {service.title}
                  </h3>

                  <p className={`text-xs sm:text-sm font-medium leading-relaxed ${descColor}`}>
                    {service.desc}
                  </p>
                </div>

                <div className="mt-10 pt-6 border-t border-current/10 flex items-center justify-between">
                  <a
                    href="https://wa.me/919187638784"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 group-hover:underline"
                  >
                    <span>Inquire service</span>
                    <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* ==================== REMAINING 3 CARDS (Desktop visible, Mobile toggled) ==================== */}
        <div 
          ref={extraGridRef} 
          className={`w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 ${showAll ? 'grid' : 'hidden md:grid'}`}
        >
          {servicesList.slice(3).map((service, index) => {
            let cardBg = 'bg-[#141414] text-white border-neutral-800';
            let iconBg = 'bg-white/10 text-[#c8ff3d]';
            let descColor = 'text-neutral-400';
            let tagColor = 'bg-white/10 text-white';

            if (service.theme === 'lime') {
              cardBg = 'bg-[#c8ff3d] text-neutral-950 border-[#b5eb2a] shadow-xl';
              iconBg = 'bg-neutral-950 text-[#c8ff3d]';
              descColor = 'text-neutral-800';
              tagColor = 'bg-neutral-950 text-white';
            } else if (service.theme === 'light') {
              cardBg = 'bg-[#f9fafb] text-[#141414] border-neutral-200/80 hover:border-[#141414]';
              iconBg = 'bg-neutral-200/70 text-[#141414]';
              descColor = 'text-[#555555]';
              tagColor = 'bg-neutral-200 text-neutral-800';
            }

            return (
              <div
                key={index + 3}
                className={`group rounded-[32px] border p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 shadow-[0_4px_30px_rgba(0,0,0,0.02)] hover:-translate-y-1.5 ${cardBg}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 ${iconBg}`}>
                      {service.icon}
                    </div>
                    <span className={`px-3.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider ${tagColor}`}>
                      {service.tag}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold tracking-tight mb-3">
                    {service.title}
                  </h3>

                  <p className={`text-xs sm:text-sm font-medium leading-relaxed ${descColor}`}>
                    {service.desc}
                  </p>
                </div>

                <div className="mt-10 pt-6 border-t border-current/10 flex items-center justify-between">
                  <a
                    href="https://wa.me/919187638784"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 group-hover:underline"
                  >
                    <span>Inquire service</span>
                    <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* ==================== MOBILE SHOW MORE / SHOW LESS BUTTON ==================== */}
        <div className="mt-12 md:hidden flex justify-center w-full">
          <button
            onClick={handleToggleShowMore}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#141414] hover:bg-neutral-800 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-sm active:scale-95"
          >
            <span>{showAll ? 'Show Less' : 'View All Services'}</span>
            <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`} />
          </button>
        </div>

      </div>
    </section>
  );
};

export default Services;