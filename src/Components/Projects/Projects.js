import "./Projects.css";
import Bush from "../../Assets/bush.png";
import Name from "../../Assets/name.png";
import Story from "../../Assets/storygen.png";

const vanillaProjects = [
  {
    img: Bush,
    title: "Click-a-Bush",
    description:
      "One of the first projects I ever made after learning Javascript.",
    link: "#",
  },
  {
    img: Name,
    title: "Name Picker",
    description:
      "The first thing I made to use in my classroom. More appropriate than using other tools becuase I could create the list based on which students were present that day.",
    link: "#",
  },
  {
    img: Story,
    title: "Story Generator",
    description:
      "A fun end of the year project I had my students do. First time experimenting with implementing audio.",
    link: "#",
  },
];

const reactProjects = [
  {
    img: Name,
    title: "Name Picker",
    description:
      "The first thing I made to use in my classroom. More appropriate than using other tools becuase I could create the list based on which students were present that day.",
    link: "#",
  },
  {
    img: Story,
    title: "Story Generator",
    description:
      "A fun end of the year project I had my students do. First time experimenting with implementing audio.",
    link: "#",
  },
  {
    img: Bush,
    title: "Click-a-Bush",
    description:
      "One of the first projects I ever made after learning Javascript.",
    link: "#",
  },
];

const Projects = () => {
  return (
    <div className="p-wrapper">
      <div className="p-top">
        <span>Projects</span>
      </div>
      <div className="p-bottom">
        <div className="p-section">
          <div className="p-section-title">
            <span>Vanilla Javascript</span>
          </div>
          <div className="p-section-projects">
            {vanillaProjects.map((project, index) => {
              return (
                <a href={project.link}>
                  <div
                    className="project"
                    key={index}
                    style={{
                      backgroundImage: `url(${project.img})`,
                      backgroundSize: "100% 100%",
                    }}
                  >
                    <div className="proj-content">
                      <span className="proj-title">{project.title}</span>
                      <span className="proj-description">
                        {project.description}
                      </span>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
        <div className="p-section">
          <div className="p-section-title">
            <span>React</span>
          </div>
          <div className="p-section-projects">
            {reactProjects.map((project, index) => {
              return (
                <a href={project.link}>
                  <div
                    className="project"
                    key={index}
                    style={{
                      backgroundImage: `url(${project.img})`,
                      backgroundSize: "100% 100%",
                    }}
                  >
                    <div className="proj-content">
                      <span className="proj-title">{project.title}</span>
                      <span className="proj-description">
                        {project.description}
                      </span>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
