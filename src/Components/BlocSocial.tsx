import React from "react";
import { DATA } from "../resumeData";

const BlocSocial: React.FC = () => {
  return (
    <div className="social-icon">
      {DATA.main.social.map((el) => (
        <a key={el.nom} href={el.url} target="_blank">
          <i className={el.className} />
        </a>
      ))}
    </div>
  );
};

export default BlocSocial;
