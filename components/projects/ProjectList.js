import ProjectIntro from "./ProjectIntro";

function ProjectList({ projects }) {
  return (
    <ul>
      {projects.map((project) => (
        <ProjectIntro
          key={project.id}
          image={project.image}
          title={project.title}
          description={project.summary}
          url={project.siteUrl}
          imageSide={project.imageSide}
          slug={project.slug}
        />
      ))}
    </ul>
  );
}

export default ProjectList;
