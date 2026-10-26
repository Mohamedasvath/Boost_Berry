import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Hero from '../components/home/Hero';
import About from '../components/home/About';
import Services from '../components/home/Service';
import ToolsMarquee from '../components/home/Tools';
import OurWorks from '../components/home/Works';
import WhyChooseUs from '../components/home/WhyChooseUS';
import Contact from '../components/home/Contact';
import Footer from '../components/layout/Footer';
import Results from '../components/home/Results';


// Register the ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
    // Reference for the main container
    const containerRef = useRef(null);

    useEffect(() => {
        // Scroll to top when the component mounts
        window.scrollTo(0, 0);

        const ctx = gsap.context(() => {
            // Target all elements that have the 'animate-section' class
            const sections = gsap.utils.toArray('.animate-section');

            // Loop through each section and apply the scroll animation
            sections.forEach((section) => {
                gsap.fromTo(
                    section,
                    { 
                        opacity: 0, 
                        y: 80 // Start 80px below the original position
                    },
                    {
                        opacity: 1,
                        y: 0, // Animate to the original position
                        duration: 1,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: section,
                            // Animation starts when the top of the section reaches 85% of the viewport height
                            start: 'top 85%', 
                            // Play on scroll down, reverse on scroll up
                            toggleActions: 'play none none reverse', 
                        },
                    }
                );
            });
        }, containerRef);

        // Cleanup GSAP context on unmount to prevent memory leaks
        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="w-full overflow-hidden bg-white">
            {/* Wrap each component in a div with the 'animate-section' class */}
            {/* We avoid adding the initial 'opacity-0' class here so the first section (Hero) doesn't flash if JS is slow */}
            
            <div className="animate-section">
                <Hero />
            </div>
            
            <div className="animate-section">
                <WhyChooseUs />
            </div>
            
            <div className="animate-section">
                <ToolsMarquee />
            </div>
             <div className="animate-section">
                <Results />
            </div>
            
            <div className="animate-section">
                <About />
            </div>
            
            <div className="animate-section">
                <Services />
            </div>
            
            <div className="animate-section">
                <OurWorks />
            </div>
            
            <div className="animate-section">
                <Contact />
            </div>
            
            <div className="animate-section">
                <Footer />
            </div>
        </div>
    );
};

export default Home;