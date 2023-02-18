import { MongoClient } from "mongodb";
import Head from "next/head";
import ProjectDetail from "@/components/projects/ProjectDetail";

function Project(props) {
  return (
    <>
      <Head>
        <title>Taylor-Made WD - {props.title}</title>
      </Head>
      <ProjectDetail title={props.title} description={props.description} />
    </>
  );
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://HelenT:pfVcRZN0bFJMptOP@cluster0.6tfofs8.mongodb.net/?retryWrites=true&w=majority"
  );
  const db = client.db("taylor-made");
  const projectCollection = db.collection("projects");
  const projects = await projectCollection.find({}, { projectId: 1 }).toArray();
  client.close();
  return {
    fallback: true,
    paths: projects.map((project) => ({
      params: { projectId: project.projectId },
    })),
  };
}

export async function getStaticProps(context) {
  const currentProjectId = context.params.projectId;
  const client = await MongoClient.connect(
    "mongodb+srv://HelenT:pfVcRZN0bFJMptOP@cluster0.6tfofs8.mongodb.net/?retryWrites=true&w=majority"
  );
  const db = client.db("taylor-made");
  const projectCollection = db.collection("projects");
  const selectedProject = await projectCollection.findOne({
    projectId: currentProjectId,
  });
  return {
    props: {
      title: selectedProject.title,
      description: selectedProject.description,
    },
  };
}

export default Project;
