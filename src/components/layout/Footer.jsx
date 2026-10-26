import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowUpRight } from 'lucide-react';

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        footerRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out' }
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="relative w-full bg-white pt-20 pb-12 px-6 sm:px-16 md:px-24 font-sans antialiased selection:bg-[#c8ff3d] selection:text-black overflow-hidden border-t border-neutral-200/80"
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

      <div className="relative z-10 w-full max-w-[1400px] mx-auto">
        
        {/* ==================== TOP CTA CALLOUT ==================== */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end pb-16 border-b border-neutral-200/80 gap-8">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#181818] text-white text-xs font-medium mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#3b3bbe]" />
              <span>BoostBerry Digital Agency</span>
            </div>
            <h2 className="text-4xl sm:text-6xl lg:text-[72px] font-bold tracking-[-0.03em] text-[#141414] leading-[1.05]">
              Let's scale your <br />
              <span className="relative inline-block">
                brand to the next level
                {/* Neon Lime Brush Underline */}
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3.5 sm:h-4 pointer-events-none"
                  viewBox="0 0 240 18"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M4 11.5C62 6.5 168 6.5 236 11.5"
                    stroke="#3E3CC9"
                    strokeWidth="8"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h2>
          </div>

          <a
            href="https://wa.me/919187638784"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#141414] hover:bg-neutral-800 text-white font-bold text-sm tracking-tight transition-all shadow-md active:scale-95 flex-shrink-0"
          >
            <span>Start a Project</span>
            <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* ==================== MIDDLE NAVIGATION & LINKS GRID ==================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 py-16 border-b border-neutral-200/80">
          <div className="lg:col-span-2 space-y-4">
            <span className="text-xl font-bold tracking-tight text-[#141414] block">
              BoostBerry Digital
            </span>
            <p className="text-xs sm:text-sm text-[#555555] font-medium leading-relaxed max-w-sm">
              Cinematic video production, high-performance Meta ads, lightning-fast web applications, and automated WhatsApp CRM funnels engineered for maximum revenue impact.
            </p>
            <div className="pt-2 text-xs font-bold text-neutral-800">
              <span>📍 Tamil Nadu, India</span>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-5">Quick Links</h4>
            <ul className="space-y-3 text-sm font-semibold text-[#141414]">
              <li><a href="#about" className="hover:text-[#666] transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-[#666] transition-colors">Services</a></li>
              <li><a href="#work" className="hover:text-[#666] transition-colors">Featured Works</a></li>
              <li><a href="#why-choose-us" className="hover:text-[#666] transition-colors">Why Choose Us</a></li>
              <li><a href="#contact" className="hover:text-[#666] transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-5">Services</h4>
            <ul className="space-y-3 text-sm font-semibold text-[#141414]">
              <li><a href="#services" className="hover:text-[#666] transition-colors">Video Production</a></li>
              <li><a href="#services" className="hover:text-[#666] transition-colors">Viral Reel Editing</a></li>
              <li><a href="#services" className="hover:text-[#666] transition-colors">Meta & IG Ads</a></li>
              <li><a href="#services" className="hover:text-[#666] transition-colors">Web Development</a></li>
              <li><a href="#services" className="hover:text-[#666] transition-colors">WhatsApp CRM</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-5">Connect</h4>
            <ul className="space-y-3 text-sm font-semibold text-[#393596]">
              <li><a href="https://wa.me/919187638784" target="_blank" rel="noopener noreferrer" className="hover:text-[#666] transition-colors">WhatsApp (+91 9187638784)</a></li>
              <li><a href="mailto:boostberrydigital28@gmail.com" className="hover:text-[#666] transition-colors">boostberrydigital28@gmail.com</a></li>
              <li><a href="https://instagram.com/_boostberry_digital" target="_blank" rel="noopener noreferrer" className="hover:text-[#666] transition-colors">_boostberry_digital</a></li>
            </ul>
          </div>
        </div>

        {/* ==================== BOTTOM COPYRIGHT ==================== */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold text-neutral-500">
          <p>© {new Date().getFullYear()} BoostBerry Digital. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Make Your <span className="text-[#2d44c1] bg-neutral-900 px-2 py-0.5 rounded text-[11px]">Content</span> for maximum impact
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;