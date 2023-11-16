import "./Portfolio.css"
import React from 'react';
import projectsInfo from '../../projects/projectsInfo.js';
import Project from '../Project/Project';


// 
function Portfolio() {
    return (
        <div className="portfolio">
            <div className="hero-content">
                <h1>Portfolio</h1>
            </div>
            <div className="project-container">
                {projectsInfo.map((project) => (
                    // Retreives the project information from the projectsInfo.js file
                    // and passes it to the Project component
                    // The Project component then renders the information
                    <Project
                        key={project.id}
                        name={project.name}
                        image={project.image}
                        description={project.description}
                        deployLink={project.deployLink}
                        github={project.github}
                    />
                ))}
            </div>
        </div>
    );
}

export default Portfolio;