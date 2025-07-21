import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectGrid = ({ projects }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
            ))}
        </div>
    );
};

export default ProjectGrid;
