import React from 'react';

const ProjectHeader = ({ title, subtitle }) => {
    return (
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">{title}</h2>
            <p className="text-gray-600">{subtitle}</p>
            <div className="w-20 h-1 bg-red-600 mx-auto mt-4"></div>
        </div>
    );
};

export default ProjectHeader;
