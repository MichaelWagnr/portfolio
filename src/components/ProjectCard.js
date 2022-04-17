import React from 'react';

const ProjectCard = (props) => {

    const { name, desc, github, url } = props.projectInfo;

    return (
        <div className="card">
            <h4>{name}</h4>

            <p>{desc}</p>

            <div className="links">
                <a href={github} target="_blank" rel="noreferrer" class="github-link"><p>Github</p></a>

                <a href={url} target="_blank" rel="noreferrer" class="demo-link"><p>Demo</p></a>
            </div>

        </div>
    )
}

export default ProjectCard;