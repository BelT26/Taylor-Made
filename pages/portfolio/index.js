// import { MongoClient } from "mongodb";
import Head from "next/head";
import ProjectList from "../../components/projects/ProjectList";
import Container from "react-bootstrap/Container";
import { getAllProjects } from "@/lib/projects-util";
import ProjectCarousel from "@/components/projects/ProjectCarousel";
import classes from "./projects.module.css";

function Portfolio(props) {
  return (
    <>
      <Head>
        <title>Taylor-Made WD - Portfolio</title>
      </Head>
      {/* <Container>
        <ProjectCarousel />
      </Container> */}
      <Container className="text-center py-5">
        <h1 className={classes.heading}>Projects</h1>
      </Container>
      <Container>
        <ProjectList projects={props.projects} />
      </Container>
    </>
  );
}

export function getStaticProps() {
  const allProjects = getAllProjects();
  return {
    props: {
      projects: allProjects,
    },
  };
}

export default Portfolio;
