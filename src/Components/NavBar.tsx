import { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { BrowserRouter as Router } from "react-router-dom";
import { Link } from "react-scroll";
import { ID } from "../constantes";

export const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Router>
      <Navbar expand="md" className={`${scrolled ? "scrolled" : ""} p-3`}>
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link
                style={{ cursor: "pointer" }}
                className="navbar-link nav-link"
                activeClass="active"
                to={ID.header}
                spy={true}
                duration={400}
                offset={-45}
              >
                Accueil
              </Link>
              <Link
                style={{ cursor: "pointer" }}
                className="navbar-link nav-link"
                activeClass="active"
                to={ID.description}
                spy={true}
                duration={400}
                offset={-45}
              >
                Description
              </Link>
              <Link
                style={{ cursor: "pointer" }}
                className="navbar-link nav-link"
                activeClass="active"
                to={ID.experience}
                spy={true}
                duration={400}
                offset={-45}
              >
                Expériences
              </Link>
              <Link
                style={{ cursor: "pointer" }}
                className="navbar-link nav-link"
                activeClass="active"
                to={ID.competences}
                spy={true}
                duration={400}
                offset={-45}
              >
                Compétences
              </Link>
              <Link
                style={{ cursor: "pointer" }}
                className="navbar-link nav-link"
                activeClass="active"
                to={ID.projet}
                spy={true}
                duration={400}
                offset={-45}
              >
                Projets
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
};
