import "./index.css";

function Project() {
  return (
    <section className="project">
      <img
        className="project-img"
        src={process.env.PUBLIC_URL + "/images/hero-background.jpg"}
        alt="Placeholder"
      />
      <div className="project-content">
        <h3 className="project-title primary-green">Project Name</h3>
        <div className="project-subtitle light-gray">
          <span className="project-tools">Tools</span>
          <span className="project-date">Date</span>
        </div>
        <p className="project-desc dark-gray">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
      </div>
    </section>
  );
}

export default Project;
