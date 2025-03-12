import React, { useState } from 'react';
import './ProjectCard.css';


const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="project-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="project-image-container">
        <div className="project-image" style={{ backgroundImage: `url(${project.image})` }}></div>
        <div className={`project-overlay ${isHovered ? 'hovered' : ''}`}>
          <div className="project-links">
            <a href={project.demoLink} className="project-link" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-eye"></i> Demo
            </a>
            <a href={project.codeLink} className="project-link" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-code"></i> Code
            </a>
          </div>
        </div>
      </div>
      
      <div className="project-info">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        
        <div className="tech-stack">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;