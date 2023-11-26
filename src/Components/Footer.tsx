import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-scroll";
import { ID } from "../constantes";
import BlocSocial from "./BlocSocial";
import Typography from "./Typography";

export const Footer = () => {
  const getYear = () => {
    const date = new Date();
    return date.getFullYear();
  };

  return (
    <footer>
      <Link className="navLink goTop" activeClass="active" to={ID.header} spy={true} duration={500}>
        <i className="alignIcon fas fa-sort-up"></i>
      </Link>

      <Container>
        <Row className="align-items-center">
          <Col className="text-center p-3 mt-4">
            <BlocSocial />
            <Typography color="text-white" disabledMargin>
              ©Copyright {getYear()}
            </Typography>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
