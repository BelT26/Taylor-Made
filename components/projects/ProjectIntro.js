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
  let rowClass;
  rowClass =
    props.imageSide === "right"
      ? classes.intro_row_right
      : classes.intro_row_left;
  return (
    <Container fluid>
      <Row className={rowClass}>
        <Col xs={12} lg={6} className={classes.intro_text}>
          <h2 className={classes.project_title}>{props.title}</h2>
          <p>{props.description}</p>
          <AnimatedButton link={props.url}>Visit Site</AnimatedButton>
          {/* <AnimatedButton link={"/portolio/" + props.slug}>
            Further Info
          </AnimatedButton> */}
        </Col>
        <Col xs={12} lg={6}>
          {<Image src={props.image} height={300} width={500} />}
        </Col>
      </Row>
    </Container>
  );
}

export default ProjectIntroSection;
