import { Col, Container, Row } from "react-bootstrap";
import { ID } from "../constantes";
import { DATA } from "../resumeData";
import BlocCompetence from "./BlocCompetence";
import Typography from "./Typography";

export const Competences = () => {
  return (
    <section className="competence" id={ID.competences}>
      <Container>
        <Row>
          <Col>
            <Typography h2 color="text-white">
              Mes compétences
            </Typography>
            <Typography>Voici la liste de mes compétences.</Typography>
            <Row>
              {DATA.resume.competence.map((el) => (
                <Col key={el.nom} lg={3} md={6} xs={12}>
                  <BlocCompetence img={el.img} title={el.nom} />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-left"
        src="./assets/img/color-sharp.png"
        alt="background stack technique"
      />
    </section>
  );
};
