import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import './footer.css';

const Footer = () => {
  const [currentYear] = useState(new Date().getFullYear());
  const [isVisible, setIsVisible] = useState(false);

  // Social media links
  const socialLinks = [
    { name: 'GitHub', icon: <FaGithub />, url: 'https://github.com/yourusername' },
    { name: 'LinkedIn', icon: <FaLinkedin />, url: 'https://linkedin.com/in/yourusername' },
    { name: 'Twitter', icon: <FaTwitter />, url: 'https://twitter.com/yourusername' },
    { name: 'Instagram', icon: <FaInstagram />, url: 'https://instagram.com/yourusername' },
  ];

  // Fade-in animation on scroll
  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      if (position > documentHeight - windowHeight - 200) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <footer className={`footer-container ${isVisible ? 'visible' : ''}`}>
      <div className="footer-wave">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V69.81C50.71,77.25,122.59,67.25,186.18,60.64S266.93,61.55,321.39,56.44Z"></path>
        </svg>
      </div>

      <div className="footer-content">
        <div className="footer-brand">
          <div className="logo-wrapper">
            <span className="logo-text">YourName</span>
            <span className="logo-dot"></span>
          </div>
          <p className="tagline">Creating digital experiences that inspire</p>
        </div>

        <div className="footer-links">
          <div className="footer-nav">
            <h4>Navigation</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-social">
            <h4>Connect</h4>
            <ul className="social-icons">
              {socialLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label={link.name}
                    className="social-icon"
                  >
                    {link.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} YourName. All rights reserved.</p>
        <div className="footer-legal">
          <a href="/privacy">Privacy Policy</a>
          <span className="divider">|</span>
          <a href="/terms">Terms of Service</a>
        </div>
      </div>
      
      <div className="scroll-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <span className="arrow-up"></span>
      </div>
    </footer>
  );
};

export default Footer;