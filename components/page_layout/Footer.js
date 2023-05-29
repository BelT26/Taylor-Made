import classes from "./footer.module.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ContactLink from "../UI/ContactLink";
import { FaFacebook } from "react-icons/fa";

function Footer() {
  return (
    <footer className={classes.footer_container}>
      <Row className="footer_row">
        <Col xs={12} lg={4} className="footer_item">
          <ContactLink
            email="helen@taylor-madewebdesign."
            subject="Website Enquiry"
            color="darkslategrey"
            hover_color="cornflowerblue"
          >
            helen@taylor-madewebdesign.com
          </ContactLink>
        </Col>
        <Col xs={12} lg={4} className="footer_item">
          <div className="social_icons">
            <FaFacebook />
          </div>
        </Col>
        <Col xs={12} lg={4} className="footer_right footer_item">
          <a href="https://www.privacypolicygenerator.info/live.php?token=ZVyTTGGAuApCkdr9iZnZh8m1rZaR4pHW">
            <h6>Privacy Policy</h6>
          </a>
        </Col>
      </Row>
    </footer>
  );
}

export default Footer;
