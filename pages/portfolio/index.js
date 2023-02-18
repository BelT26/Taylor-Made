import { MongoClient } from "mongodb";
import Head from "next/head";
import ProjectList from "../../components/projects/ProjectList";
import Container from "react-bootstrap/Container";

function Portfolio(props) {
  return (
    <>
      <Head>
        <title>Taylor-Made WD - Portfolio</title>
      </Head>
      <Container fluid>
        <h1>Portfolio</h1>
        <ProjectList projects={props.projects} />
      </Container>
    </>
  );
}

export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://HelenT:pfVcRZN0bFJMptOP@cluster0.6tfofs8.mongodb.net/?retryWrites=true&w=majority"
  );
  const db = client.db("taylor-made");
  const projectCollection = db.collection("projects");
  const allProjects = await projectCollection.find().toArray();
  client.close();
  return {
    props: {
      projects: allProjects.map((project) => ({
        title: project.title,
        description: project.description,
      })),
    },
  };
}

export default Portfolio;
