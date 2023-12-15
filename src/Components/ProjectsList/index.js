import "./index.css";
import Project from "../Project";

function ProjectsList() {
  return (
    <main className="projects light-background">
      <div className="container">
        <h2 className="projects-heading heading-secondary" id="projects">
          Projects
        </h2>
        <div className="project-list">
          <Project reverse={false} />
          <Project reverse={true} />
          <Project reverse={false} />
        </div>
      </div>
    </main>
  );
}

export default ProjectsList;
