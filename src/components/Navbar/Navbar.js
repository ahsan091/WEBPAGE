import React, { useState, useRef } from 'react';
import './Navbar.css';

function Navbar() {
    const [slidingBgStyle, setSlidingBgStyle] = useState({});
    const navbarRef = useRef(null);

    const handleMouseEnter = (e) => {
        const linkRect = e.target.getBoundingClientRect();
        const navbarRect = navbarRef.current.getBoundingClientRect();

        // Calculate the left position and width of the sliding background
        setSlidingBgStyle({
            left: `${linkRect.left - navbarRect.left + linkRect.width / 2}px`,
            width: `${linkRect.width}px`,
            opacity: 1,
        });

        // Add the magnify class to the custom cursor
        document.querySelector('.custom-cursor').classList.add('magnify');
    };

    const handleMouseLeave = () => {
        // Hide the sliding background when the mouse leaves
        setSlidingBgStyle({
            opacity: 0,
        });

        // Remove the magnify class from the custom cursor
        document.querySelector('.custom-cursor').classList.remove('magnify');
    };

    return (
        <div className="navbar" ref={navbarRef}>
            <div className="sliding-bg" style={slidingBgStyle}></div>
            <a className="item" href="#home" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <div className="linktext">Home</div>
            </a>
            <a className="item" href="#about" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <div className="linktext">About</div>
            </a>
            <a className="item" href="#services" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <div className="linktext">Services</div>
            </a>
            <a className="item" href="#projects" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <div className="linktext">Projects</div>
            </a>
            <a className="item" href="#blogs" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <div className="linktext">Blogs</div>
            </a>
            <a className="item" href="#contact" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <div className="linktext">Contact</div>
            </a>
        </div>
    );
}

export default Navbar;