import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { CATEGORIE_PROJET, ID } from "../constantes";
import { DATA } from "../resumeData";
import BlocProjet from "./BlocProjet";
import Typography from "./Typography";

export const Projets = () => {
  const [selectedCategorie, setSelectedCategorie] = React.useState<string>("");

  const projetsFiltered = React.useMemo(() => {
    if (selectedCategorie === "") return DATA.portfolio.projets;

    return DATA.portfolio.projets.filter((el) => el.categorie.includes(selectedCategorie));
  }, [selectedCategorie]);

  return (
    <section className="project" id={ID.projet}>
      <Container fluid>
        <Row>
          <Col>
            <Typography h2 color="text-white">
              Mes projets
            </Typography>
            <Typography disabledMargin>Voici la liste de mes projets</Typography>
            <Row>
              <Col>
                {Object.values(CATEGORIE_PROJET).map((value) => (
                  <Button
                    key={value}
                    onClick={() => {
                      setSelectedCategorie(value);
                    }}
                    className={`m-2 text-capitalize ${
                      selectedCategorie === value ? "btn-primary" : "btn-secondary"
                    }`}
                  >
                    {value}
                  </Button>
                ))}
                {selectedCategorie !== "" && (
                  <Button
                    className="m-2 text-capitalize btn-danger"
                    onClick={() => {
                      setSelectedCategorie("");
                    }}
                  >
                    Annuler
                  </Button>
                )}
              </Col>
            </Row>
            <Row>
              {projetsFiltered.map((el) => (
                <Col key={el.titre} lg={4} md={6} xs={12}>
                  <BlocProjet
                    key={el.titre}
                    description={el.description}
                    imgUrl={el.image}
                    title={el.titre}
                    competence={el.competence}
                    courteDescription={el.courteDescription}
                    urlSite={el.url}
                  />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
