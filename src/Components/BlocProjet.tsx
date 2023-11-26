import React from "react";
import { Card } from "react-bootstrap";
import ModalProjet from "./ModalProjet";

interface IBlocProjetProps {
  title: string;
  description: string;
  imgUrl: string;
  competence: string[];
  courteDescription: string;
  urlSite: string;
}

const BlocProjet: React.FC<IBlocProjetProps> = ({
  title,
  description,
  imgUrl,
  competence,
  courteDescription,
  urlSite,
}) => {
  const [openModal, setOpenModal] = React.useState(false);

  const displayModal = React.useCallback(() => {
    setOpenModal((prev) => !prev);
  }, []);

  return (
    <>
      <Card
        onClick={() => {
          displayModal();
        }}
        role="button"
        className="bg-dark text-white"
        style={{ height: 450, margin: 15 }}
      >
        <Card.Img src={imgUrl} style={{ height: 325 }} />
        <Card.Body className="d-flex flex-column justify-content-end">
          <Card.Title>{title}</Card.Title>
          <Card.Text>{courteDescription}</Card.Text>
        </Card.Body>
      </Card>
      <ModalProjet
        openModal={openModal}
        displayModal={displayModal}
        competence={competence}
        imgUrl={imgUrl}
        description={description}
        titre={title}
        urlSite={urlSite}
      />
    </>
  );
};

export default BlocProjet;
