import Project from "./Project";

function ProjectList({ projects }) {
  return (
    <ul>
      {projects.map((project) => (
        <Project
          key={project.id}
          image={project.image}
          title={project.title}
          description={project.description}
          url={project.url}
        />
      ))}
    </ul>
  );
}

export default ProjectList;
