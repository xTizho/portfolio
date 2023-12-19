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
          <Project
            name={"OncoSupport"}
            tools={"HTML, CSS, Tailwind"}
            date={"October 2023"}
            description={
              "OncoSupport provides cancer patients with an easy-to-understand overview of their treatment process. This web application includes an appointment calendar, AI-recommended activities, and a messaging system for communication with the patient's doctor. My team completed this project for the DubHacks 2023 hackathon."
            }
            image="oncosupport.jpg"
            reverse={false}
          />
          <Project
            name={"Endangered Animals Tracker"}
            tools={"HTML, CSS"}
            date={"December 2022 - March 2023"}
            description={
              "Endangered Animals Tracker aims to raise awareness of the endangerment of animal species. This web application displays a list of endangered animals with statistics about each animal and includes searching and sorting features. My team completed this project for the WTSA 2023 software development competition."
            }
            image="endangered-animals-tracker.jpg"
            reverse={true}
          />
          <Project
            name={"Piano Lesson Calendar"}
            tools={"Java, Swing (Java), SQLite"}
            date={"December 2021 - March 2022"}
            description={
              "Piano Lesson Calendar is an application programmed for my piano teacher to streamline her organization system. This GUI application allows her to track student information and schedule lessons, which are displayed in a calendar and can be easily manipulated."
            }
            image="piano-lesson-calendar.jpg"
            reverse={false}
          />
        </div>
      </div>
    </main>
  );
}

export default ProjectsList;
