import ProjectGrid from './ProjectGrid';

const Projects = (props) => {
    return (
        <>
            <h3>Selected Works</h3>
            <section className="project-container">
                <ProjectGrid projects={props.projects} />
            </section>
        </>
    )
}

export default Projects;