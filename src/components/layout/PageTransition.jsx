import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useLocation } from 'react-router-dom';

const PageTransition = ({ children }) => {
    const pageRef = useRef(null);
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);

        const ctx = gsap.context(() => {
            // Opacity 0 to 1, Y-axis 30 to 0 (Fade & Slide Up)
            gsap.fromTo(
                pageRef.current,
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
            );
        }, pageRef);

        return () => ctx.revert();
    }, [location.pathname]);

    return (
        // Itha NOTE pannunga: key={location.pathname} add panniyachu!
        <div key={location.pathname} ref={pageRef} className="w-full overflow-hidden">
            {children}
        </div>
    );
};

export default PageTransition;