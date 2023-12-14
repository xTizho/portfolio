import "./index.css";
import Project from "../Project";

function ProjectsList() {
  return (
    <main className="projects">
      <div className="container">
        <h2 className="heading-secondary">Projects</h2>
        <Project />
        <Project />
        <Project />
      </div>
    </main>
  );
}

export default ProjectsList;
