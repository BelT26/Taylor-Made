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
          <Col
            xs={12}
            md={6}
            lg={4}
            xl={3}
            className={classes.image_column}
            key={img.alt}
          >
            <Image src={img.src} alt={img.alt} height={225} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ImagesContainer;
