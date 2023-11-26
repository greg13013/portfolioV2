import React from "react";
import { Card } from "react-bootstrap";

interface IBlocCompetenceProps {
  img: string;
  title: string;
}

const BlocCompetence: React.FC<IBlocCompetenceProps> = ({ img, title }) => {
  return (
    <Card style={{ width: 250, height: 200, margin: 15, alignItems: "center" }}>
      <Card.Img variant="top" style={{ width: 100, height: 100 }} src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default BlocCompetence;
