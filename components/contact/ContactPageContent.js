import ContactForm from "./ContactForm";
import classes from "./ContactPage.module.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Web from "../../public/images/web5.jpg";
import Image from "next/image";

function ContactPageContent() {
  return (
    <Row
      className={`${classes.contact_page_container} d-flex flex-row justify-content-around p-5 mx-5`}
    >
      <Col xs={12} lg={4} className={`${classes.content_left} mt-5`}>
        <Image
          src={Web}
          className={classes.contact_background}
          alt="spider web with water droplets"
        />
      </Col>
      <Col
        xs={12}
        lg={6}
        className={`${classes.content_right} d-flex flex-column mt-5`}
      >
        <h1 className="text-center mb-5 d-block">Contact Us</h1>
        <ContactForm />
      </Col>
    </Row>
  );
}

export default ContactPageContent;
