import { MongoClient } from "mongodb";
import Head from "next/head";
import ProjectDetail from "@/components/projects/ProjectDetail";

function Project(props) {
  return (
    <>
      <Head>
        <title>Taylor-Made WD - {props.title}</title>
        <meta
          name="description"
          content="Professional Freelance Web Developer, London. I specialize in creating stunning, fully responsive website designs that place emphasis on modern user experience"
        />
        <meta name="author" content="Helen Taylor" />
        <meta
          name="keywords"
          content="freelance web designer, freelance software developer, professional web developer, london, affordable website, website design, experienced web developer, responsive design, user experience, javasript, reactjs, nextjs, html, css, python, django, personalised quiz, educational games, interactive "
        />
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
