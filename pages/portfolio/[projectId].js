// import { MongoClient } from "mongodb";
import { getProjectData, getAllProjectPaths } from "@/lib/projects-util";
import Head from "next/head";
import ProjectDetail from "@/components/projects/ProjectDetail";

function Project(props) {
  return (
    <>
      <Head>
        <title>Taylor-Made WD - {props.project.title}</title>
      </Head>
      <ProjectDetail project={props.project} />
    </>
  );
}

export function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;
  const projectData = getProjectData(slug);

  return {
    props: {
      project: projectData,
    },
    revalidate: 700,
  };
}

export function getStaticPaths() {
  const projectPaths = getAllProjectPaths();
  const slugs = projectPaths.map((filename) => filename.replace(/\.md$/, ""));

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
}

// export async function getStaticPaths() {
//   const client = await MongoClient.connect(
//     "mongodb+srv://HelenT:pfVcRZN0bFJMptOP@cluster0.6tfofs8.mongodb.net/?retryWrites=true&w=majority"
//   );
//   const db = client.db("taylor-made");
//   const projectCollection = db.collection("projects");
//   const projects = await projectCollection.find({}, { projectId: 1 }).toArray();
//   client.close();
//   return {
//     fallback: true,
//     paths: projects.map((project) => ({
//       params: { projectId: project.projectId },
//     })),
//   };
// }

// export async function getStaticProps(context) {
//   const currentProjectId = context.params.projectId;
//   const client = await MongoClient.connect(
//     "mongodb+srv://HelenT:pfVcRZN0bFJMptOP@cluster0.6tfofs8.mongodb.net/?retryWrites=true&w=majority"
//   );
//   const db = client.db("taylor-made");
//   const projectCollection = db.collection("projects");
//   const selectedProject = await projectCollection.findOne({
//     projectId: currentProjectId,
//   });
//   return {
//     props: {
//       title: selectedProject.title,
//       description: selectedProject.description,
//     },
//   };
// }

export default Project;
