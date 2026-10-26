import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';

const Contact = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardRef = useRef(null);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Video Shooting & Production',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappUrl = `https://wa.me/919187638784?text=${encodeURIComponent(
      `Hello Boostberry Digital,%0A%0AMy Name: ${formData.name}%0APhone: ${formData.phone}%0AService: ${formData.service}%0AMessage: ${formData.message}`
    )}`;
    window.open(whatsappUrl, '_blank');
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        headerRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 }
      )
      .fromTo(
        cardRef.current,
        { y: 40, opacity: 0, scale: 0.98 },
        { y: 0, opacity: 1, scale: 1, duration: 0.9 },
        '-=0.4'
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative w-full bg-white py-16 sm:py-24 px-4 sm:px-8 md:px-16 lg:px-24 font-sans antialiased selection:bg-[#c8ff3d] selection:text-black overflow-hidden"
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

      <div className="relative z-10 w-full max-w-[1300px] mx-auto">
        
        {/* ==================== SECTION HEADER ==================== */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#181818] text-white text-xs font-medium mb-4 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#c8ff3d]" />
            <span>BoostBerry Digital • Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-[70px] font-bold tracking-[-0.03em] text-[#141414] leading-[1.1]">
            Let’s build something <br className="hidden sm:block" />
            <span className="relative inline-block">
              extraordinary together
              {/* Neon Lime Brush Underline */}
              <svg
                className="absolute -bottom-2 left-0 w-full h-3 sm:h-4 pointer-events-none"
                viewBox="0 0 240 18"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M4 11.5C62 6.5 168 6.5 236 11.5"
                  stroke="#c8ff3d"
                  strokeWidth="8"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>
          <p className="mt-4 sm:mt-6 text-xs sm:text-sm md:text-base text-[#555555] font-medium leading-relaxed">
            Ready to scale your brand with high-retention videos, powerful Meta ads, or lightning-fast web apps? Reach out to us today.
          </p>
        </div>

        {/* ==================== CONTACT CARD CONTAINER (Fully Responsive Grid) ==================== */}
        <div
          ref={cardRef}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 bg-[#f9fafb] rounded-[28px] sm:rounded-[36px] border border-neutral-200/80 p-6 sm:p-10 md:p-14 shadow-[0_10px_40px_rgba(0,0,0,0.03)]"
        >
          {/* Left Side: Contact Info Details */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6 sm:space-y-8">
            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-[#141414] mb-3">
                Contact Information
              </h3>
              <p className="text-xs sm:text-sm text-[#555555] font-medium leading-relaxed mb-6 sm:mb-8">
                Fill out the form or connect directly through our official phone, WhatsApp, or Instagram channels.
              </p>

              <div className="space-y-4 sm:space-y-6">
                <a
                  href="tel:+919187638784"
                  className="flex items-center gap-3.5 sm:gap-4 p-3.5 sm:p-4 rounded-2xl bg-white border border-neutral-200/80 hover:border-[#141414] transition-all group shadow-sm"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#c8ff3d] flex items-center justify-center text-neutral-950 flex-shrink-0 group-hover:scale-105 transition-transform">
                    <Phone size={18} />
                  </div>
                  <div>
                    <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-neutral-400 block">Phone / WhatsApp</span>
                    <span className="text-xs sm:text-sm font-bold text-[#141414]">+91 9187638784</span>
                  </div>
                </a>

                <a
                  href="mailto:boostberrydigital28@gmail.com"
                  className="flex items-center gap-3.5 sm:gap-4 p-3.5 sm:p-4 rounded-2xl bg-white border border-neutral-200/80 hover:border-[#141414] transition-all group shadow-sm"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#141414] text-white flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                    <Mail size={18} />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-neutral-400 block">Email Address</span>
                    <span className="text-xs sm:text-sm font-bold text-[#141414] truncate block">boostberrydigital28@gmail.com</span>
                  </div>
                </a>

                <a
                  href="https://instagram.com/_boostberry_digital"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 sm:gap-4 p-3.5 sm:p-4 rounded-2xl bg-white border border-neutral-200/80 hover:border-[#141414] transition-all group shadow-sm"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                    <svg className="w-4.5 h-4.5 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                    </svg>
                  </div>
                  <div>
                    <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-neutral-400 block">Instagram Handle</span>
                    <span className="text-xs sm:text-sm font-bold text-[#141414]">@_boostberry_digital</span>
                  </div>
                </a>
              </div>
            </div>

            <div className="pt-4 sm:pt-6 border-t border-neutral-200/80 flex items-center gap-2 text-xs font-bold text-neutral-500">
              <MapPin size={15} className="text-[#141414] flex-shrink-0" />
              <span>Tamil Nadu, India • Operating Worldwide</span>
            </div>
          </div>

          {/* Right Side: Working Form with Responsive Inputs */}
          <form onSubmit={handleSubmit} className="lg:col-span-7 bg-white rounded-2xl sm:rounded-3xl border border-neutral-200/80 p-6 sm:p-8 md:p-10 shadow-sm flex flex-col justify-between">
            <div className="space-y-5 sm:space-y-6">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-[#141414]">
                Send us a message
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-neutral-600 mb-1.5 sm:mb-2">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 sm:py-3.5 rounded-xl sm:rounded-2xl bg-[#f9fafb] border border-neutral-200 focus:border-[#141414] focus:outline-none text-xs sm:text-sm font-medium text-neutral-900 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-neutral-600 mb-1.5 sm:mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    className="w-full px-4 py-3 sm:py-3.5 rounded-xl sm:rounded-2xl bg-[#f9fafb] border border-neutral-200 focus:border-[#141414] focus:outline-none text-xs sm:text-sm font-medium text-neutral-900 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-neutral-600 mb-1.5 sm:mb-2">Select Service</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 sm:py-3.5 rounded-xl sm:rounded-2xl bg-[#f9fafb] border border-neutral-200 focus:border-[#141414] focus:outline-none text-xs sm:text-sm font-medium text-neutral-900 transition-colors"
                >
                  <option value="Video Shooting & Production">Video Shooting & Production</option>
                  <option value="Viral Video Editing">Viral Video Editing</option>
                  <option value="Meta & IG Advertising">Meta & IG Advertising</option>
                  <option value="Web Development (MERN / React)">Web Development (MERN / React)</option>
                  <option value="WhatsApp CRM Automations">WhatsApp CRM Automations</option>
                  <option value="GMB Profile Rank #1">GMB Profile Rank #1</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-neutral-600 mb-1.5 sm:mb-2">Project Details</label>
                <textarea
                  rows="4"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter your project details..."
                  className="w-full px-4 py-3 sm:py-3.5 rounded-xl sm:rounded-2xl bg-[#f9fafb] border border-neutral-200 focus:border-[#141414] focus:outline-none text-xs sm:text-sm font-medium text-neutral-900 transition-colors resize-none"
                ></textarea>
              </div>
            </div>

            <div className="mt-6 sm:mt-8">
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 sm:py-4 rounded-full bg-[#c8ff3d] hover:bg-[#bce622] text-[#141414] font-bold text-xs sm:text-sm tracking-tight transition-all shadow-sm active:scale-95 cursor-pointer"
              >
                <MessageSquare size={17} />
                <span>Submit via WhatsApp</span>
                <Send size={15} />
              </button>
            </div>
          </form>

        </div>

      </div>
    </section>
  );
};

export default Contact;