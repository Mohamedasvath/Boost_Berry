import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import logo from '../../assets/logoo.png';

const IntroAnimation = ({ onComplete }) => {
  const introRef = useRef(null);
  const logoRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          if (onComplete) onComplete();
        },
      });

      // Initial states
      gsap.set(logoRef.current, { scale: 0.5, opacity: 0, y: 20 });
      gsap.set(textRef.current, { scale: 0.8, opacity: 0, y: 15 });

      // Animation sequence
      tl.to(introRef.current, { opacity: 1, duration: 0.1 })
        // Logo zooms in smoothly
        .to(logoRef.current, {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'back.out(1.7)',
        })
        // BoostBerry text pops up right below the logo
        .to(
          textRef.current,
          {
            scale: 1,
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: 'back.out(1.5)',
          },
          '-=0.4'
        )
        // Pause for a brief moment to let user see it
        .to({}, { duration: 0.6 })
        // Smooth slide up / fade out curtain reveal
        .to(introRef.current, {
          yPercent: -100,
          opacity: 0,
          duration: 0.9,
          ease: 'power4.inOut',
        });
    }, introRef);

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div
      ref={introRef}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#141414] select-none"
    >
      <div className="flex flex-col items-center text-center">
        {/* Logo Image Animation */}
        <div ref={logoRef} className="w-24 h-24 sm:w-32 sm:h-32 mb-4 flex items-center justify-center">
          <img
            src={logo}
            alt="BoostBerry Logo"
            className="w-full h-full object-contain filter drop-shadow-[0_10px_20px_rgba(200,255,61,0.2)]"
          />
        </div>

        {/* Pop-up Brand Text */}
        <div ref={textRef} className="flex items-center gap-2">
          <span className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
            Boost<span className="text-[#3d63e2]"> Berry</span>
          </span>
          <span className="w-2.5 h-2.5 rounded-full bg-[#3b51aa] animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default IntroAnimation;