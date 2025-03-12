import React, { useEffect, useRef } from 'react';
import './hero.css';

const Hero = () => {
  const titleRef = useRef(null);
  
  useEffect(() => {
    const title = titleRef.current;
    const text = title.textContent;
    title.textContent = '';
    
    for (let i = 0; i < text.length; i++) {
      const span = document.createElement('span');
      span.textContent = text[i];
      span.style.animationDelay = `${i * 0.05}s`;
      title.appendChild(span);
    }
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="gradient-overlay"></div>
        <div className="particle-container">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="particle"></div>
          ))}
        </div>
      </div>
      
      <div className="hero-content">
        <div className="intro-text">
          <h3>Hello, I'm</h3>
          <h1 ref={titleRef} className="animate-title">Pasans..Ransika</h1>
          <h2>Frontend Developer,Backend Developer & Designer</h2>
        </div>
        
        <p className="hero-description">
          I create exceptional digital experiences with clean code
          and stunning designs.
        </p>
        
        <div className="hero-cta">
          <a href="#projects" className="primary-btn">View My Work</a>
          <a href="#contact" className="secondary-btn">Get In Touch</a>
        </div>
        
        <div className="scroll-indicator">
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <div className="arrow">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;