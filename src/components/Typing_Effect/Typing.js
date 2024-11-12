import React, { useEffect, useRef } from 'react';
import './Typing.css';

function TypingEffect() {
    const typedTextRef = useRef(null);
    const cursorRef = useRef(null);

    const textArray = ["WELCOME TO CYBERBURGS!"];
    const typingDelay = 150;
    const erasingDelay = 75;
    const newTextDelay = 1500; // Delay between phrases
    let textArrayIndex = 0;
    let charIndex = 0;

    const type = () => {
        const typedTextSpan = typedTextRef.current;
        const cursorSpan = cursorRef.current;

        // Start fade-in effect before typing
        typedTextSpan.classList.remove("fade-out");
        typedTextSpan.classList.add("fade-in");

        // Apply cyber-effect class to every line
        typedTextSpan.classList.add("cyber-effect");

        if (charIndex < textArray[textArrayIndex].length) {
            if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
            typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingDelay);
        } else {
            cursorSpan.classList.remove("typing");

            setTimeout(() => {
                // Start fade-out effect after typing is complete
                typedTextSpan.classList.remove("fade-in");
                typedTextSpan.classList.add("fade-out");
                setTimeout(erase, 500); // Delay for fade-out
            }, newTextDelay);
        }
    };

    const erase = () => {
        const typedTextSpan = typedTextRef.current;
        const cursorSpan = cursorRef.current;

        if (charIndex > 0) {
            if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
            typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, erasingDelay);
        } else {
            cursorSpan.classList.remove("typing");
            textArrayIndex++;
            if (textArrayIndex >= textArray.length) textArrayIndex = 0;
            setTimeout(type, typingDelay + 1000);
        }
    };

    useEffect(() => {
        setTimeout(type, newTextDelay + 250);
    }, []);

    return (
        <div className="typing-container">
            <div className="typing-effect">
                <p>
                    <span ref={typedTextRef} className="typed-text glitch-effect"></span>
                    <span ref={cursorRef} className="cursor">&nbsp;</span>
                </p>
            </div>
        </div>
    );
}

export default TypingEffect;