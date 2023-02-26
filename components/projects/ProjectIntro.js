import { useRouter } from "next/router";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AnimatedButton from "../UI/AnimatedButton";
import Image from "next/image";
import classes from "./ProjectIntro.module.css";

function ProjectIntroSection(props) {
  const router = useRouter();
  function showProjectPage() {
    router.push("/" + props.slug);
  }
  return (
    <Container fluid>
      <Row className={classes.intro_row}>
        <Col xs={12} lg={6} className={classes.intro_text}>
          <h2>{props.title}</h2>
          <p>{props.summary}</p>
          <AnimatedButton link="/">Visit Site</AnimatedButton>
          <AnimatedButton link="/">Further Info</AnimatedButton>
        </Col>
        <Col xs={12} lg={6}>
          {/* <Image src={props.image} height={200} width={300} /> */}
        </Col>
      </Row>
    </Container>
  );
}

export default ProjectIntroSection;
