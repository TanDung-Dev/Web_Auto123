import React from 'react';

const ProjectCard = ({ project }) => {
    return (
        <div className="group relative overflow-hidden rounded-lg shadow-md bg-white">
            <div className="h-64 overflow-hidden">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-500"
                />
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded inline-block mb-2">
                        {project.category}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="mb-4">{project.description}</p>
                    <a
                        href={`/projects/${project.id}`}
                        className="inline-block px-4 py-2 bg-white text-red-600 font-semibold rounded hover:bg-red-600 hover:text-white transition-colors"
                    >
                        Xem chi tiết
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
