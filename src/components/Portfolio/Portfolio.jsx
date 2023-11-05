import "./Portfolio.css"
import projects from '../../projects/projectsInfo.js';
import Project from '../Project/Project';



function portfolio() {
    return (
        <div className="portfolio">
            <div className="hero-content">
                <h1>Portfolio</h1>
            </div>
            <div className="project-container">
                {projects.map((project) => (
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

export default portfolio;