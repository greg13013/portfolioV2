import React from "react";
import { Carousel, Image } from "react-bootstrap";

interface ICarrousselProps {
  imgUrl: string[];
}

const Carroussel: React.FC<ICarrousselProps> = ({ imgUrl }) => {
  return (
    <Carousel>
      {imgUrl.map((el) => (
        <Carousel.Item key={el}>
          <Image src={el} />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Carroussel;
