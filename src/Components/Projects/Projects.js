import "./Projects.css";
import Bush from "../../Assets/bush.png";
import Name from "../../Assets/name.png";
import Story from "../../Assets/storygen.png";

// Create array of projects with image and description
//! Include github site link in array, insert into <a> tag
// Create Project component
// Map projects to create multiple Project components
// Add card animation from tiktok
// Different sections for project types i.e. vanilla, React

const Projects = () => {
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
          <div className="p-section-projects"></div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
