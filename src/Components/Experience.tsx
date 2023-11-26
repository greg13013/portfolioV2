import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ID } from "../constantes";
import { DATA } from "../resumeData";
import BlocExperience from "./BlocExperience";
import Typography from "./Typography";

const Experience: React.FC = () => {
  return (
    <section className="experience" id={ID.experience}>
      <Container>
        <Row>
          <Col lg={3} xs={12}>
            <Typography h3 color="text-black">
              Expériences professionnelles
            </Typography>
          </Col>
          <Col lg={9} xs={12}>
            {DATA.resume.experienceProfessionelle.map((el) => (
              <BlocExperience
                key={el.date}
                ecole={el.nom}
                annee={el.date}
                description={el.description}
                titre={el.titre}
              />
            ))}
          </Col>
        </Row>

        <Row>
          <Col xs={12}>
            <div className="separation"></div>
          </Col>
        </Row>

        <Row>
          <Col lg={3} xs={12}>
            <Typography h3 color="text-black">
              Formations
            </Typography>
          </Col>
          <Col lg={9} xs={12}>
            {DATA.resume.formation.map((el) => (
              <BlocExperience
                key={el.diplome}
                annee={el.diplome}
                description={el.description}
                ecole={el.ecole}
                titre={el.titre}
              />
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Experience;
