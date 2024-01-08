import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { ID } from "../constantes";
import { DATA } from "../resumeData";
import Typography from "./Typography";

const Description: React.FC = () => {
  return (
    <section className="description" id={ID.description}>
      <Container>
        <Row>
          <Col lg={3} xs={12} className="imgDescription">
            <Image
              style={{ width: 210 }}
              src={DATA.main.image}
              alt="Photo de profil"
              roundedCircle
            />
          </Col>
          <Col lg={9} xs={12}>
            <Typography h2 color="text-white">
              A propos de moi
            </Typography>
            <Typography style={{ whiteSpace: "pre-line" }}>{DATA.main.bio}</Typography>

            <Typography h2 color="text-white">
              Coordonées
            </Typography>
            <Typography disabledMargin>{DATA.main.adresse.ville}</Typography>
            <Typography disabledMargin>{DATA.main.tel}</Typography>
            <Typography disabledMargin>{DATA.main.email}</Typography>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Description;
