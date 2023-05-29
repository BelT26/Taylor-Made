import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Image from "next/image";
import classes from "./hero-image-carousel.module.css";

function HeroImageCarousel({ images }) {
  return (
    <Container fluid className={classes.image_container}>
      <Carousel fade className={classes.carousel_slide}>
        {images.map((image) => (
          <Carousel.Item key={image.id}>
            <Image
              className={classes.hero_img}
              src={image.imgSrc}
              alt={image.alt}
              height={700}
              width={800}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
}

export default HeroImageCarousel;
