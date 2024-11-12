import React from 'react';
import './Logo.css';

function Logo() {
    return (
        <div className="logo">
            <img src={`${process.env.PUBLIC_URL}/Logo.png`} alt="Cyber Burgs Logo" className="animated-logo" />
        </div>
    );
}

export default Logo;