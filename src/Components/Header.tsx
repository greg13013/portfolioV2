import { Col, Container, Row } from "react-bootstrap";
import Typewriter from "typewriter-effect";
import useGetHeightContainer from "../Hooks/useGetHeightContainer";
import headerImg from "../assets/img/header-img.svg";
import { ID } from "../constantes";
import { DATA } from "../resumeData";
import BlocSocial from "./BlocSocial";

export const Header = () => {
  const [height] = useGetHeightContainer("header");

  return (
    <section className="banner" id={ID.header} style={{ minHeight: height }}>
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Bienvenue sur mon Portfolio</span>
            <h1>
              {DATA.main.nom} - {DATA.main.statut}
              <Typewriter
                options={{
                  strings: ["React", "Angular", "Next", "Symfony", "ExpressJs"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <BlocSocial />
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img className="imgBanniere" src={headerImg} alt="Header espace" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
