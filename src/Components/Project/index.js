import "./index.css";

function Project({ name, tools, date, description, image, reverse }) {
  return (
    <section className={"project " + (reverse ? "img-right" : "img-left")}>
      <img
        className="project-img"
        src={process.env.PUBLIC_URL + "/images/project-images/" + image}
        alt="Placeholder"
      />
      <div className="project-content">
        <h3 className="project-title primary-green">{name}</h3>
        <div className="project-subtitle light-gray">
          <span className="project-tools">{tools}</span>
          <span className="project-date">{date}</span>
        </div>
        <p className="project-desc dark-gray">{description}</p>
      </div>
    </section>
  );
}

export default Project;
