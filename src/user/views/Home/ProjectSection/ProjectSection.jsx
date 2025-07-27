import React from 'react';
import ProjectHeader from './ProjectHeader';
import ProjectGrid from './ProjectGrid';
import { projects } from '../data/projects';

const ProjectSection = () => {
    return (
        <section className="py-16">
            <ProjectHeader
                title="Các dự án của chúng tôi"
                subtitle="Một số dự án tiêu biểu mà chúng tôi đã thực hiện"
            />
            <ProjectGrid projects={projects} />
        </section>
    );
};

export default ProjectSection;
