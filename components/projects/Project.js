import { useRouter } from "next/router";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import classes from "./Project.module.css";

function Project(props) {
  const router = useRouter();
  function showProjectPage() {
    router.push("/" + props.id);
  }
  return (
    <Container fluid>
      <Row>
        <Col>
          <h2>{props.title}</h2>
          <p>{props.description}</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Project;
