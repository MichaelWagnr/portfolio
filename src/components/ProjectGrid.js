import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectGrid = (props) => {

    return (
        props.projects.map((project, index) => {
            return <ProjectCard
                projectInfo={project}
                key={index}
            />
        })
    )
}

export default ProjectGrid;