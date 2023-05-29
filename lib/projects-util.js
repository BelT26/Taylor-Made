import fs from "fs";
import path from "path";
import matter from "gray-matter";

const projectsDirectory = path.join(process.cwd(), "my_projects");

export function getAllProjectPaths() {
  return fs.readdirSync(projectsDirectory);
}

export function getProjectData(fileName) {
  const projectSlug = fileName.replace(/\.md$/, "");
  const filePath = path.join(projectsDirectory, `${projectSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const projectData = {
    slug: projectSlug,
    ...data,
    content,
  };

  return projectData;
}

export function getAllProjects() {
  const projectFiles = getAllProjectPaths();
  const allProjects = projectFiles.map((file) => getProjectData(file));
  const sortedProjects = allProjects.sort((project1, project2) =>
    project1.priority > project2.priority ? 1 : -1
  );
  return sortedProjects;
}
