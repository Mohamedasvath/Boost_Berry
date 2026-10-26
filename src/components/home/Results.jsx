import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Trophy, TrendingUp, Users, Eye, ArrowUpRight, Award, CheckCircle2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Results = () => {
  const pageRef = useRef(null);
  const headerRef = useRef(null);
  const metricsRef = useRef(null);
  const caseStudiesRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const ctx = gsap.context(() => {
      // Header Animation
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
      );

      // Metrics Cards Stagger Animation
      if (metricsRef.current) {
        gsap.fromTo(
          metricsRef.current.children,
          { opacity: 0, y: 40, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: 'back.out(1.4)',
            scrollTrigger: {
              trigger: metricsRef.current,
              start: 'top 85%',
            },
          }
        );
      }

      // Case Studies Animation
      if (caseStudiesRef.current) {
        gsap.fromTo(
          caseStudiesRef.current.children,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            stagger: 0.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: caseStudiesRef.current,
              start: 'top 80%',
            },
          }
        );
      }
    }, pageRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    { icon: <TrendingUp className="w-6 h-6 text-[#141414]" />, value: '4.8x+', label: 'Average Client ROAS', desc: 'Driven through laser-targeted Meta & Instagram ad funnels.' },
    { icon: <Eye className="w-6 h-6 text-[#141414]" />, value: '10M+', label: 'Organic Reel Views', desc: 'Generated using high-retention hooks and viral editing pacing.' },
    { icon: <Users className="w-6 h-6 text-[#141414]" />, value: '50+', label: 'Brands Scaled', desc: 'Across Tamil Nadu and worldwide spanning e-commerce, gyms, & SaaS.' },
    { icon: <Award className="w-6 h-6 text-[#141414]" />, value: '100%', label: 'Custom Web Apps', desc: 'Built with React, Vite, and MERN stack for instant load speeds.' }
  ];

  const caseStudies = [
    {
      client: 'Tiger Fitness Gym',
      category: 'Video Production & Meta Ads',
      result: '320% Increase in Gym Memberships',
      desc: 'Combined high-energy cinematic gym commercial shoots with hyper-local Meta ad targeting in Vedasandur.',
      tag: 'Fitness Growth'
    },
    {
      client: 'MilkMan ERP Dashboard',
      category: 'Full-Stack Web Application',
      result: 'Automated 100% Daily Dairy Operations',
      desc: 'Engineered a lightning-fast enterprise MERN dashboard for real-time milk collection tracking and billing analytics.',
      tag: 'MERN Stack'
    },
    {
      client: 'Sana Travels & Cabs',
      category: 'Web App & GMB #1 Rank',
      result: '4.5x Direct WhatsApp Cab Bookings',
      desc: 'Optimized Google Business Profile to rank #1 locally and launched a custom luxury cab booking web platform.',
      tag: 'Local SEO & Web'
    }
  ];

  return (
    <div ref={pageRef} className="w-full min-h-screen bg-white pt-32 pb-24 px-6 sm:px-16 md:px-24 font-sans antialiased selection:bg-[#c8ff3d] selection:text-black">
      
      {/* ==================== HEADER SECTION ==================== */}
      <div ref={headerRef} className="max-w-4xl mx-auto text-center mb-16 sm:mb-20">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#181818] text-white text-xs font-medium mb-6 shadow-sm">
          <Trophy size={14} className="text-[#3d47ff]" />
          <span>BoostBerry Digital • Proven Impact</span>
        </div>
        
        <h1 className="text-4xl sm:text-6xl lg:text-[76px] font-bold tracking-[-0.035em] text-[#141414] leading-[1.08]">
          Results that speak <br />
          <span className="relative inline-block px-3 py-1 rounded-2xl bg-[#3631c4] text-neutral-950 mt-2">
            louder than words
          </span>
        </h1>

        <p className="mt-6 text-sm sm:text-base md:text-lg text-[#555555] font-medium leading-relaxed max-w-2xl mx-auto">
          We don't just chase vanity metrics. Every video, ad campaign, and web application we engineer is strictly tied to bottom-line revenue growth.
        </p>
      </div>

      {/* ==================== METRICS GRID ==================== */}
      {/* <div className="max-w-[1300px] mx-auto mb-24">
        <div ref={metricsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="group rounded-[32px] bg-[#f9fafb] hover:bg-[#141414] text-[#141414] hover:text-white border border-neutral-200/80 p-8 flex flex-col justify-between transition-all duration-300 shadow-sm hover:-translate-y-1.5"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-[#c8ff3d] flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <h3 className="text-4xl sm:text-5xl font-bold tracking-tight mb-2 text-[#141414] group-hover:text-white">
                  {stat.value}
                </h3>
                <h4 className="text-sm font-bold uppercase tracking-wider mb-2 opacity-90">{stat.label}</h4>
                <p className="text-xs sm:text-sm font-medium opacity-70 leading-relaxed">{stat.desc}</p>
              </div>
              <div className="mt-8 pt-6 border-t border-current/10 flex items-center justify-between text-xs font-mono font-bold opacity-60">
                <span>METRIC 0{index + 1}</span>
                <div className="w-7 h-7 rounded-full bg-current/10 flex items-center justify-center group-hover:bg-[#c8ff3d] group-hover:text-neutral-950 transition-colors">
                  <ArrowUpRight size={14} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div> */}

      {/* ==================== CASE STUDIES / SUCCESS STORIES ==================== */}
      {/* <div className="max-w-[1300px] mx-auto">
        <div className="mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-neutral-400 block mb-2">Success Stories</span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#141414]">Featured Client Milestones</h2>
        </div>

        <div ref={caseStudiesRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div 
              key={index}
              className="rounded-[32px] bg-white border border-neutral-200/80 p-8 flex flex-col justify-between shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="px-3.5 py-1 rounded-full bg-[#f9fafb] border border-neutral-200 text-xs font-bold text-neutral-800">
                    {study.tag}
                  </span>
                  <CheckCircle2 className="w-5 h-5 text-[#c8ff3d] fill-black" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-400 block mb-1">{study.client}</span>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#141414] mb-4">{study.result}</h3>
                <p className="text-xs sm:text-sm text-[#555555] font-medium leading-relaxed">{study.desc}</p>
              </div>
              
              <div className="mt-10 pt-6 border-t border-neutral-100 flex items-center justify-between">
                <span className="text-xs font-bold text-neutral-900">{study.category}</span>
                <a 
                  href="https://wa.me/919187638784" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-[#141414] text-[#c8ff3d] flex items-center justify-center hover:scale-110 transition-transform"
                >
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div> */}

    </div>
  );
};

export default Results;