import React, { useState } from 'react';
import './skills.css';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('tech');
  
  const skills = {
    tech: [
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "React.js", level: 88 },
      { name: "Node.js", level: 80 },
      { name: "MongoDB", level: 75 },
      { name: "Git", level: 85 },
      { name: "Responsive Design", level: 90 }
    ],
    design: [
      { name: "Figma", level: 85 },
      { name: "Adobe XD", level: 80 },
      { name: "Photoshop", level: 75 },
      { name: "Illustrator", level: 70 },
      { name: "UI/UX Design", level: 85 },
      { name: "Wireframing", level: 90 }
    ],
    soft: [
      { name: "Communication", level: 90 },
      { name: "Teamwork", level: 95 },
      { name: "Problem Solving", level: 85 },
      { name: "Time Management", level: 80 },
      { name: "Adaptability", level: 90 },
      { name: "Critical Thinking", level: 85 }
    ]
  };

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">My Skills</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            Here are my skills and expertise in different areas
          </p>
        </div>
        
        <div className="skills-tabs">
          <button 
            className={`tab-btn ${activeTab === 'tech' ? 'active' : ''}`}
            onClick={() => setActiveTab('tech')}
          >
            Technical Skills
          </button>
          <button 
            className={`tab-btn ${activeTab === 'design' ? 'active' : ''}`}
            onClick={() => setActiveTab('design')}
          >
            Design Skills
          </button>
          <button 
            className={`tab-btn ${activeTab === 'soft' ? 'active' : ''}`}
            onClick={() => setActiveTab('soft')}
          >
            Soft Skills
          </button>
        </div>
        
        <div className="skills-content">
          <div className={`tab-content ${activeTab === 'tech' ? 'active' : ''}`}>
            <div className="skills-grid">
              {skills.tech.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-info">
                    <h3 className="skill-name">{skill.name}</h3>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.level}%` }}
                      data-level={skill.level}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className={`tab-content ${activeTab === 'design' ? 'active' : ''}`}>
            <div className="skills-grid">
              {skills.design.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-info">
                    <h3 className="skill-name">{skill.name}</h3>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.level}%` }}
                      data-level={skill.level}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className={`tab-content ${activeTab === 'soft' ? 'active' : ''}`}>
            <div className="skills-grid">
              {skills.soft.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-info">
                    <h3 className="skill-name">{skill.name}</h3>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.level}%` }}
                      data-level={skill.level}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;