import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowUpRight, ExternalLink } from 'lucide-react';

const OurWorks = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const projectsRef = useRef([]);

  const placeholderProjects = [
    {
      id: '01',
      category: 'Full Stack Web App & ERP',
      title: 'Enterprise Management Dashboard',
      desc: 'A high-performance MERN stack web application built with real-time tracking, clean admin dashboard analytics, and lightning-fast speed.',
      img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
      tags: ['React.js', 'Node.js', 'Tailwind', 'MongoDB']
    },
    {
      id: '02',
      category: 'Performance Meta Ads & CRM',
      title: 'E-Commerce Growth Funnel & Lead Gen',
      desc: 'Engineered high-converting Meta advertising campaigns paired with automated 24/7 WhatsApp CRM workflows to consistently scale client revenue.',
      img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
      tags: ['Meta Ads', 'WhatsApp CRM', 'ROAS Optimization']
    },
    {
      id: '03',
      category: 'Cinematic Production & Editing',
      title: 'Viral Brand Commercials & Reels',
      desc: 'On-location cinematic video shoots and rapid-pacing hook editing designed specifically to dominate Instagram Reels and capture high viewer engagement.',
      img: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1200&q=80',
      tags: ['Video Shooting', 'Viral Editing', 'Color Grading']
    }
  ];

  const addToProjectsRef = (el) => {
    if (el && !projectsRef.current.includes(el)) {
      projectsRef.current.push(el);
    }
  };

  useEffect(() => {
    projectsRef.current = [];
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
        projectsRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.2, duration: 0.9 },
        '-=0.4'
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="work"
      ref={sectionRef}
      className="relative w-full mt-2 bg-white py-20 sm:py-28 px-6 sm:px-16 md:px-24 font-sans antialiased selection:bg-[#c8ff3d] selection:text-black overflow-hidden"
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

      <div className="relative z-10 w-full max-w-[1400px] mx-auto">
        
        {/* ==================== SECTION HEADER ==================== */}
        <div ref={headerRef} className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#181818] text-white text-xs font-medium mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#463bbb]" />
              <span> • Featured Works</span>
            </div>
            <h2 className="text-4xl sm:text-6xl lg:text-[72px] font-bold tracking-[-0.03em] text-[#141414] leading-[1.05]">
              Our  <br />
              <span className="relative inline-block">
                Projects
                {/* Neon Lime Brush Underline */}
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3.5 sm:h-4 pointer-events-none"
                  viewBox="0 0 240 18"
                  fill="none"
                  preserveAspectRatio="none"
                >
                </svg>
              </span>
            </h2>
          </div>

          <p className="max-w-md text-xs sm:text-sm md:text-base text-[#555555] font-medium leading-relaxed">
            Explore our conceptual showcase of high-end web applications, aggressive advertising funnels, and creative studio productions.
          </p>
        </div>

        {/* ==================== ALTERNATING LEFT & RIGHT ROWS ==================== */}
        <div className="space-y-16 sm:space-y-24">
          {placeholderProjects.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={project.id}
                ref={addToProjectsRef}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                  isEven ? '' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Image Column */}
                <div className={`lg:col-span-7 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="relative w-full h-[320px] sm:h-[420px] rounded-[32px] overflow-hidden border border-neutral-200/80 shadow-[0_10px_40px_rgba(0,0,0,0.04)] group bg-neutral-100">
                    <img
                      src={project.img}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                    
                    {/* Floating Tag */}
                    <div className="absolute top-6 left-6 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-neutral-200 text-xs font-bold text-[#141414] shadow-sm">
                      Placeholder Project {project.id}
                    </div>
                  </div>
                </div>

                {/* Content Column */}
                <div className={`lg:col-span-5 flex flex-col items-start text-left ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <span className="text-xs font-mono font-bold text-neutral-400 uppercase tracking-wider mb-2">
                    {project.category}
                  </span>

                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#141414] mb-4 leading-tight">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm md:text-base text-[#555555] font-medium leading-relaxed mb-6">
                    {project.desc}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 rounded-full bg-[#f9fafb] border border-neutral-200 text-[11px] font-semibold text-neutral-700">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Link */}
                  <a
                    href="https://wa.me/919187638784"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#141414] hover:bg-neutral-800 text-white font-semibold text-xs tracking-tight transition-all duration-200 shadow-sm active:scale-95"
                  >
                    <span>Inquire similar project</span>
                    <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default OurWorks;