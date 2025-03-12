import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import './projects.css';
import PetClinic from './petclinic.png';
import RecipeBlog from './recipeblog.png';
const Projects = () => {
  // Sample project data
  const allProjects = [
    {
      id: 1,
      title: "Pet Care Management System & Pet Store",
      description: "A comprehensive platform built with React and Supabase for managing pet care schedules, tracking medical records, and purchasing pet supplies online, featuring real-time analytics and reporting capabilities.",
      image: PetClinic, // Replace with your image path
      category: "web",
      technologies: ["React.js||",  "Node.js||",  "Supabase.."],
      demoLink: "https://finalpdrpet.vercel.app/",
      codeLink: "https://github.com/chamuditha01/Finalp.git"
    },
    {
      id: 2,
      title: "Recipe Blog",
      description: "Food recipe blog with search functionality and recipe details",
      image: RecipeBlog, // Replace with your image path
      category: "web",
      technologies: ["React||", "Tailwind||", "Supabase"],
      demoLink: "#",
      codeLink: "https://github.com/Pasans19/Food-recipe-blog.git"
    },
    {
      id: 3,
      title: "Portfolio Template",
      description: "Responsive portfolio website template with dark mode",
      image: "/assets/project3.jpg", // Replace with your image path
      category: "web",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      demoLink: "#",
      codeLink: "#"
    },
    {
      id: 4,
      title: "Task Manager",
      description: "A productivity app with drag-and-drop task management",
      image: "/assets/project4.jpg", // Replace with your image path
      category: "app",
      technologies: ["React", "Redux", "Firebase"],
      demoLink: "#",
      codeLink: "#"
    },
    {
      id: 5,
      title: "Recipe Finder",
      description: "Search and save recipes from around the world",
      image: "/assets/project5.jpg", // Replace with your image path
      category: "app",
      technologies: ["React Native", "API", "Expo"],
      demoLink: "#",
      codeLink: "#"
    },
    {
      id: 6,
      title: "Personal Blog",
      description: "A markdown-based blog with comment system",
      image: "/assets/project6.jpg", // Replace with your image path
      category: "web",
      technologies: ["Next.js", "Tailwind CSS", "Prisma"],
      demoLink: "#",
      codeLink: "#"
    }
  ];

  const [filter, setFilter] = useState('all');
  const [projects, setProjects] = useState(allProjects);

  const filterProjects = (category) => {
    setFilter(category);
    if (category === 'all') {
      setProjects(allProjects);
    } else {
      setProjects(allProjects.filter(project => project.category === category));
    }
  };

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">My Projects</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            Here are some of my recent works. Each project presents unique challenges that helped me grow as a developer.
          </p>
        </div>

        <div className="filter-tabs">
          <button 
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => filterProjects('all')}
          >
            All
          </button>
          <button 
            className={`filter-btn ${filter === 'web' ? 'active' : ''}`}
            onClick={() => filterProjects('web')}
          >
            Web
          </button>
          <button 
            className={`filter-btn ${filter === 'app' ? 'active' : ''}`}
            onClick={() => filterProjects('app')}
          >
            App
          </button>
        </div>

        <div className="projects-grid">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;