import React from 'react';
import './about.css';
import pasansImage from './pasans.png'; // Adjust the path based on the image's location
import pasansResume from './Resume_Pasans.pdf'; // Adjust the path based on the resume's location

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            A passionate frontend developer,Backend Developer and designer creating modern web experiences
          </p>
        </div>
        
        <div className="about-content">
          <div className="about-image-container">
            <div className="about-image">
              {/* Replace with your image */}
              <img src={pasansImage} alt="Profile" />

            </div>
            <div className="experience-badge">
              <span className="number">1+</span>
              <span className="text">Years Experience</span>
            </div>
          </div>
          
          <div className="about-text">
            <h3>Hello! I'm <span className="highlight">Pasans Ransika</span></h3>
            <p>
              I'm a passionate Frontend Developer with a strong background in creating 
              visually appealing and user-friendly websites. My journey in web development 
              started 1 years ago, and I've been hooked ever since.
            </p>
            <p>
              I specialize in React.js and Node.js, creating responsive web applications 
              that provide exceptional user experiences. My approach combines technical 
              expertise with creative problem-solving.
            </p>
            
            <div className="personal-info">
              <div className="info-item">
                <span className="info-title">Name:</span>
                <span className="info-value">Pasans Ransika</span>
              </div>
              <div className="info-item">
                <span className="info-title">Email:</span>
                <span className="info-value">pasansransika@gmail.com</span>
              </div>
              <div className="info-item">
                <span className="info-title">Location:</span>
                <span className="info-value">Panangala West Galle Srilanka</span>
              </div>
              <div className="info-item">
                <span className="info-title">Availability:</span>
                <span className="info-value">Available for freelance</span>
              </div>
            </div>
            
            <div className="about-buttons">
              <a href="#contact" className="primary-btn">Hire Me</a>
              <a href={pasansResume} className="secondary-btn" download>Download CV</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;