import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Link from "next/link";
import classes from "./header.module.css";

function CustomLink({ href, children }) {
  return (
    <Link
      className={classes.custom_link}
      href={href}
      style={{ textDecoration: "none", color: "rgb(34, 34, 36)" }}
    >
      {children}
    </Link>
  );
}

function Header() {
  return (
    <Navbar className={classes.navbar} expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">
          <img
            src="/images/brian-nb.png"
            height={70}
            className={classes.brian}
            alt="company logo of a cute spider holding a sewing needle attached to a thread from a web"
          />
          <span className={classes.taylor}>Taylor-Made</span>
          <span className={classes.web}> WEB DESIGN</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as="span">
              <CustomLink href="/">Home</CustomLink>
            </Nav.Link>
            <Nav.Link as="span">
              <CustomLink href="/portfolio">Portfolio</CustomLink>
            </Nav.Link>
            <Nav.Link as="span">
              <CustomLink href="/contact">Contact</CustomLink>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
