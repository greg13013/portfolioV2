import React from "react";
import { Button, Image, Modal } from "react-bootstrap";
import { getIcone } from "../utils";
import Typography from "./Typography";

interface IModalProjetProps {
  openModal: boolean;
  displayModal: () => void;

  imgUrl: string;
  titre: string;
  urlSite: string;
  description: string;
  competence: string[];
}

const ModalProjet: React.FC<IModalProjetProps> = ({
  openModal,
  displayModal,
  imgUrl,
  titre,
  urlSite,
  description,
  competence,
}) => {
  return (
    <Modal
      show={openModal}
      onHide={displayModal}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      scrollable
      style={{ top: "30px" }}
    >
      <Modal.Header closeButton>
        <Modal.Title className="text-black" id="contained-modal-title-vcenter">
          {titre}
          {competence.map((el) => (
            <Image
              style={{ width: 30, height: 30, marginLeft: 12, marginRight: 12 }}
              key={el}
              src={getIcone(el)}
            />
          ))}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Image src={imgUrl} />
        <Typography italic>{competence.join(" / ")}</Typography>
        <Typography className="formatageText" color="text-black">
          {description}
        </Typography>
      </Modal.Body>
      <Modal.Footer>
        <Button
          onClick={() => {
            window.open(urlSite, "_blank");
          }}
        >
          Lien vers le site
        </Button>
        <Button>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalProjet;
