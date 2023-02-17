import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Link from "next/link";
import classes from "./Header.module.css";

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
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">Taylor-Made</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as="span">
              <CustomLink href="/">Home</CustomLink>
            </Nav.Link>
            <Nav.Link as="span">
              <CustomLink href="/about">About</CustomLink>
            </Nav.Link>
            <NavDropdown title="Portfolio" id="basic-nav-dropdown">
              <NavDropdown.Item as="span">
                <CustomLink href="/portfolio">All Projects</CustomLink>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as="span">
                <CustomLink href="/portfolio/1">Project 1</CustomLink>
              </NavDropdown.Item>
              <NavDropdown.Item as="span">
                <CustomLink href="/portfolio/2">Project 2</CustomLink>
              </NavDropdown.Item>
              <NavDropdown.Item as="span">
                <CustomLink href="/portfolio/3">Project 3</CustomLink>
              </NavDropdown.Item>
            </NavDropdown>
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
