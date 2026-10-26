import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';

// Assets folder-il irukkum logoo.png-ai import seigirom
import logo from '../../assets/logoo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/85 backdrop-blur-md py-3.5 border-b border-neutral-200/80 shadow-sm' : 'bg-transparent py-5'}`}>
      <div className="max-w-[1400px] mx-auto px-6 sm:px-16 md:px-24 flex items-center justify-between">
        
        {/* Brand Logo with Proper Increased Size */}
        <Link to="/" className="flex items-center gap-3 group py-1">
          <div className="h-12 sm:h-16 flex items-center">
            <img 
              src={logo} 
              alt="BoostBerry Digital Logo" 
              className="h-full w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
            />
          </div>
          <span className="text-lg font-bold tracking-tight text-[#141414]">
            Boost<span className="text-lg font-bold tracking-tight text-blue-600">Berry</span>
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-wider text-neutral-700">
          <Link to="/" className="hover:text-black transition-colors">Home</Link>
          <Link to="/about" className="hover:text-black transition-colors">About</Link>
          <Link to="/works" className="hover:text-black transition-colors">Our Works</Link>
          <Link to="/results" className="hover:text-black transition-colors">Results</Link>
          <Link to="/contact" className="hover:text-black transition-colors">Contact</Link>
        </nav>

        {/* Right CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://wa.me/919187638784"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#141414] hover:bg-neutral-800 text-white font-bold text-xs tracking-tight transition-all shadow-sm active:scale-95"
          >
            <span>Let's Talk</span>
            <ArrowUpRight size={16} className="text-[#c8ff3d]" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden w-10 h-10 rounded-xl bg-neutral-100 flex items-center justify-center text-[#141414]"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-neutral-200 p-6 shadow-xl md:hidden flex flex-col space-y-4">
          <Link to="/" onClick={() => setIsOpen(false)} className="text-sm font-bold text-[#141414]">Home</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="text-sm font-bold text-[#141414]">About</Link>
          <Link to="/works" onClick={() => setIsOpen(false)} className="text-sm font-bold text-[#141414]">Works</Link>
          <Link to="/results" onClick={() => setIsOpen(false)} className="text-sm font-bold text-[#141414]">Results</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="text-sm font-bold text-[#141414]">Contact</Link>
          <a
            href="https://wa.me/919187638784"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 rounded-full bg-[#c8ff3d] text-[#141414] font-bold text-xs uppercase tracking-wider text-center mt-2 block"
          >
            Start a Project
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;