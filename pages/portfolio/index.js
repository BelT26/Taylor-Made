import { MongoClient } from "mongodb";
import Head from "next/head";
import ProjectList from "../../components/projects/ProjectList";
import Container from "react-bootstrap/Container";

function Portfolio(props) {
  return (
    <>
      <Head>
        <title>Taylor-Made WD - Portfolio</title>
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
