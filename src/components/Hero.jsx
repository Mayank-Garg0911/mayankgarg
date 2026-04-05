import { useState, useEffect } from "react";
import "../styles/Hero.css";

export default function Hero() {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Full Stack Data Scientist & Developer";
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    if (textIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + fullText[textIndex]);
        setTextIndex(textIndex + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [textIndex]);

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        
        {/* LEFT CONTENT */}
        <div className="hero-content">
          <h1 className="hero-title">Mayank Garg</h1>

          <h2 className="hero-subtitle">
            {displayText}
            <span className={`cursor ${textIndex === fullText.length ? "done" : ""}`}>
              |
            </span>
          </h2>

          <p className="hero-description">
            Crafting elegant solutions with Python, Data Science & Web Technologies
          </p>

          {/* Button + Social (clean layout with spacing) */}
          <div className="flex flex-col items-center gap-8 mt-6">

            {/* Button */}
            <button className="btn btn-secondary">
              Get In Touch
            </button>
            <br />
            <br />

            {/* Social Icons */}
            <div  className="hero-social flex flex-col gap-5 text-xl" >

              <a
                href="https://linkedin.com/in/mayankgarg"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
                className="hover:translate-x-1 transition duration-300"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>

              <a
                href="https://github.com/mayankgarg"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
                className="hover:translate-x-1 transition duration-300"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>

              <a
                href="mailto:mayankgarg091119@gmail.com"
                title="Email"
                className="hover:translate-x-1 transition duration-300"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                  <path d="m22 7-10 5L2 7"></path>
                </svg>
              </a>

            </div>
          </div>
        </div>

        {/* RIGHT ANIMATION */}
        <div className="hero-animation">
          <div className="floating-card card1">Python</div>
          <div className="floating-card card2">ML/AI</div>
          <div className="floating-card card3">React</div>
          <div className="floating-card card4">Data</div>
          <div className="blob"></div>
        </div>

      </div>
    </section>
  );
}