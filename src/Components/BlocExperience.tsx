import React from "react";
import Typography from "./Typography";

interface IBlocExperienceProps {
  ecole: string;
  annee: string;
  titre: string;
  description: string;
}

const BlocExperience: React.FC<IBlocExperienceProps> = ({ ecole, annee, titre, description }) => {
  return (
    <div className="blocExperience">
      <Typography h3 color="text-black" disabledMargin>
        {ecole}
      </Typography>
      <Typography disabledMargin italic>
        {annee}
      </Typography>
      <Typography disabledMargin italic>
        {titre}
      </Typography>
      <Typography disabledMargin className="descriptionExperience" color="text-black">
        {description}
      </Typography>
    </div>
  );
};

export default BlocExperience;
