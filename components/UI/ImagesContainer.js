import Image from "next/image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import classes from "./imagescontainer.module.css";

function ImagesContainer({ images }) {
  return (
    <Container fluid>
      <Row>
        {images.map((img) => (
          <Col xs={12} md={6} xl={4} className={classes.image_column}>
            <Image src={img.src} alt={img.alt} height={300} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ImagesContainer;
